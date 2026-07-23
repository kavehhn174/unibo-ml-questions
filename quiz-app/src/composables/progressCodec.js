/**
 * Compact progress codec for cross-device sync.
 *
 * Binary layout (before deflate):
 *   magic   u16  'MQ' (0x4D51)
 *   version u8   1
 *   flags   u8   bit0 = dark theme
 *   count   u8   number of sparse question records
 *   records:
 *     id     u8
 *     packed u16 LE
 *       bits 0-4  selection mask for options a..e
 *       bit  5    answered
 *       bit  6    revealed
 *       bit  7    marked
 *       bits 8-10 rating 0..5
 *
 * Wire format: "MLDM1." + base64url(deflate-raw(binary))
 */

const MAGIC = 0x4d51
const VERSION = 1
const PREFIX = 'MLDM1.'
const OPTION_BITS = { a: 0, b: 1, c: 2, d: 3, e: 4 }

function toBase64Url(bytes) {
  let binary = ''
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i])
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '')
}

function fromBase64Url(str) {
  const padded = str.replace(/-/g, '+').replace(/_/g, '/')
  const pad = padded.length % 4 === 0 ? '' : '='.repeat(4 - (padded.length % 4))
  const binary = atob(padded + pad)
  const out = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) out[i] = binary.charCodeAt(i)
  return out
}

async function deflateRaw(bytes) {
  if (typeof CompressionStream === 'undefined') return bytes
  const stream = new Blob([bytes]).stream().pipeThrough(new CompressionStream('deflate-raw'))
  return new Uint8Array(await new Response(stream).arrayBuffer())
}

async function inflateRaw(bytes) {
  if (typeof DecompressionStream === 'undefined') {
    // Uncompressed fallback / already-raw payload
    return bytes
  }
  try {
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('deflate-raw'))
    return new Uint8Array(await new Response(stream).arrayBuffer())
  } catch {
    // Older exports may be uncompressed
    return bytes
  }
}

function questionIds(state) {
  const ids = new Set([
    ...Object.keys(state.selections ?? {}),
    ...Object.keys(state.answered ?? {}),
    ...Object.keys(state.revealed ?? {}),
    ...Object.keys(state.marked ?? {}),
    ...Object.keys(state.ratings ?? {})
  ])
  return [...ids]
    .map((id) => Number(id))
    .filter((id) => Number.isInteger(id) && id >= 1 && id <= 255)
    .sort((a, b) => a - b)
}

function packQuestion(state, id) {
  const key = String(id)
  const selected = state.selections?.[key] ?? state.selections?.[id] ?? []
  let mask = 0
  for (const opt of selected) {
    const bit = OPTION_BITS[opt]
    if (bit !== undefined) mask |= 1 << bit
  }

  const answered = !!(state.answered?.[key] ?? state.answered?.[id])
  const revealed = !!(state.revealed?.[key] ?? state.revealed?.[id])
  const marked = !!(state.marked?.[key] ?? state.marked?.[id])
  const ratingRaw = state.ratings?.[key] ?? state.ratings?.[id] ?? 0
  const rating = Math.max(0, Math.min(5, Number(ratingRaw) || 0))

  if (!mask && !answered && !revealed && !marked && !rating) return null

  let packed = mask
  if (answered) packed |= 1 << 5
  if (revealed) packed |= 1 << 6
  if (marked) packed |= 1 << 7
  packed |= (rating & 0b111) << 8
  return packed
}

function buildBinary(state) {
  const ids = questionIds(state)
  const records = []
  for (const id of ids) {
    const packed = packQuestion(state, id)
    if (packed !== null) records.push({ id, packed })
  }

  const buf = new ArrayBuffer(5 + records.length * 3)
  const view = new DataView(buf)
  view.setUint16(0, MAGIC, false)
  view.setUint8(2, VERSION)
  view.setUint8(3, state.theme === 'dark' ? 1 : 0)
  view.setUint8(4, records.length)

  let offset = 5
  for (const rec of records) {
    view.setUint8(offset, rec.id)
    view.setUint16(offset + 1, rec.packed, true)
    offset += 3
  }
  return new Uint8Array(buf)
}

function parseBinary(bytes) {
  if (bytes.length < 5) throw new Error('Progress code is too short')
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const magic = view.getUint16(0, false)
  if (magic !== MAGIC) throw new Error('Not a valid MLDM progress code')
  const version = view.getUint8(2)
  if (version !== VERSION) throw new Error(`Unsupported progress code version: ${version}`)

  const flags = view.getUint8(3)
  const count = view.getUint8(4)
  const expected = 5 + count * 3
  if (bytes.length < expected) throw new Error('Progress code is truncated')

  const selections = {}
  const answered = {}
  const revealed = {}
  const marked = {}
  const ratings = {}

  let offset = 5
  for (let i = 0; i < count; i++) {
    const id = String(view.getUint8(offset))
    const packed = view.getUint16(offset + 1, true)
    offset += 3

    const mask = packed & 0b11111
    const selected = []
    for (const [opt, bit] of Object.entries(OPTION_BITS)) {
      if (mask & (1 << bit)) selected.push(opt)
    }
    if (selected.length) selections[id] = selected
    if (packed & (1 << 5)) answered[id] = true
    if (packed & (1 << 6)) revealed[id] = true
    if (packed & (1 << 7)) marked[id] = true
    const rating = (packed >> 8) & 0b111
    if (rating > 0 && rating <= 5) ratings[id] = rating
  }

  return {
    selections,
    answered,
    revealed,
    marked,
    ratings,
    theme: flags & 1 ? 'dark' : 'light'
  }
}

export async function encodeProgress(state) {
  const raw = buildBinary(state)
  const compressed = await deflateRaw(raw)
  // Prefer compressed only when it actually shrinks (tiny payloads often don't).
  const payload = compressed.length < raw.length ? compressed : raw
  return PREFIX + toBase64Url(payload)
}

export async function decodeProgress(code) {
  if (typeof code !== 'string') throw new Error('Progress code must be text')
  const cleaned = code.trim().replace(/\s+/g, '')
  if (!cleaned) throw new Error('Paste a progress code first')

  let body = cleaned
  if (body.startsWith(PREFIX)) body = body.slice(PREFIX.length)
  else if (/^MLDM\d+\./i.test(body)) {
    throw new Error('This progress code uses a newer format. Update the app and try again.')
  }

  const bytes = fromBase64Url(body)
  const raw = await inflateRaw(bytes)
  // If inflate returned garbage, try parsing as uncompressed
  try {
    return parseBinary(raw)
  } catch (firstErr) {
    if (raw !== bytes) {
      try {
        return parseBinary(bytes)
      } catch {
        throw firstErr
      }
    }
    throw firstErr
  }
}

export function progressStats(decoded) {
  return {
    answered: Object.values(decoded.answered ?? {}).filter(Boolean).length,
    marked: Object.values(decoded.marked ?? {}).filter(Boolean).length,
    rated: Object.keys(decoded.ratings ?? {}).length,
    theme: decoded.theme
  }
}
