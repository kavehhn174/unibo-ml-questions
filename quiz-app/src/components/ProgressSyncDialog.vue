<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Message from 'primevue/message'
import QRCode from 'qrcode'
import jsQR from 'jsqr'
import { Html5Qrcode } from 'html5-qrcode'
import { useQuizState } from '../composables/useQuizState.js'
import { encodeProgress, decodeProgress, progressStats } from '../composables/progressCodec.js'

const props = defineProps({
  visible: { type: Boolean, default: false }
})

const emit = defineEmits(['update:visible'])

const { state, applyProgress } = useQuizState()

const activeTab = ref('export')
const exportCode = ref('')
const importCode = ref('')
const qrDataUrl = ref('')
const status = ref(null)
const busy = ref(false)
const cameraActive = ref(false)
const cameraError = ref('')

const scannerRef = ref(null)
const fileInputRef = ref(null)
let html5Qr = null

const dialogVisible = computed({
  get: () => props.visible,
  set: (v) => emit('update:visible', v)
})

const exportLength = computed(() => exportCode.value.length)

async function refreshExport() {
  busy.value = true
  status.value = null
  try {
    exportCode.value = await encodeProgress(state)
    qrDataUrl.value = await QRCode.toDataURL(exportCode.value, {
      errorCorrectionLevel: 'M',
      margin: 2,
      width: 280,
      color: { dark: '#0f172a', light: '#ffffff' }
    })
  } catch (e) {
    status.value = { severity: 'error', text: e.message || 'Failed to encode progress' }
  } finally {
    busy.value = false
  }
}

async function copyExport() {
  try {
    await navigator.clipboard.writeText(exportCode.value)
    status.value = { severity: 'success', text: 'Progress code copied to clipboard' }
  } catch {
    status.value = {
      severity: 'warn',
      text: 'Clipboard blocked — select the code and copy manually'
    }
  }
}

async function downloadQr() {
  if (!qrDataUrl.value) return
  const a = document.createElement('a')
  a.href = qrDataUrl.value
  a.download = 'mldm-progress-qr.png'
  a.click()
}

async function onImport() {
  busy.value = true
  status.value = null
  try {
    const decoded = await decodeProgress(importCode.value)
    const stats = progressStats(decoded)
    const ok = window.confirm(
      `Load this progress?\n\n` +
        `Answered: ${stats.answered}\n` +
        `Marked: ${stats.marked}\n` +
        `Rated: ${stats.rated}\n` +
        `Theme: ${stats.theme}\n\n` +
        `This replaces your current answers, marks, and ratings on this device.`
    )
    if (!ok) return
    applyProgress(decoded)
    status.value = {
      severity: 'success',
      text: `Loaded ${stats.answered} answered and ${stats.marked} marked questions`
    }
    importCode.value = ''
  } catch (e) {
    status.value = { severity: 'error', text: e.message || 'Invalid progress code' }
  } finally {
    busy.value = false
  }
}

async function stopCamera() {
  cameraError.value = ''
  if (!html5Qr) {
    cameraActive.value = false
    return
  }
  try {
    if (html5Qr.isScanning) await html5Qr.stop()
  } catch {
    // ignore stop races
  }
  try {
    await html5Qr.clear()
  } catch {
    // ignore
  }
  html5Qr = null
  cameraActive.value = false
}

async function startCamera() {
  cameraError.value = ''
  status.value = null
  await stopCamera()
  await nextTick()
  if (!scannerRef.value) return

  const elementId = 'progress-qr-reader'
  try {
    html5Qr = new Html5Qrcode(elementId)
    cameraActive.value = true
    await html5Qr.start(
      { facingMode: 'environment' },
      { fps: 8, qrbox: { width: 220, height: 220 } },
      async (decodedText) => {
        importCode.value = decodedText
        await stopCamera()
        status.value = {
          severity: 'success',
          text: 'QR code scanned — review and tap Load progress'
        }
        activeTab.value = 'import'
      },
      () => {}
    )
  } catch (e) {
    cameraActive.value = false
    html5Qr = null
    cameraError.value =
      e?.message ||
      'Could not open the camera. Allow camera permission, or upload a QR image instead.'
  }
}

function openFilePicker() {
  fileInputRef.value?.click()
}

function onPickImage(event) {
  const file = event.target.files?.[0]
  event.target.value = ''
  if (!file) return
  decodeImageFile(file)
}

async function decodeImageFile(file) {
  busy.value = true
  status.value = null
  cameraError.value = ''
  try {
    // Prefer html5-qrcode file scan (handles common QR variants well)
    const tempId = 'qr-file-scanner-temp'
    let el = document.getElementById(tempId)
    if (!el) {
      el = document.createElement('div')
      el.id = tempId
      el.style.display = 'none'
      document.body.appendChild(el)
    }
    const reader = new Html5Qrcode(tempId)
    try {
      const text = await reader.scanFile(file, true)
      importCode.value = text
      status.value = {
        severity: 'success',
        text: 'QR image decoded — review and tap Load progress'
      }
      activeTab.value = 'import'
      return
    } catch {
      // fall through to jsQR
    } finally {
      try {
        await reader.clear()
      } catch {
        // ignore
      }
    }

    const bitmap = await createImageBitmap(file)
    const canvas = document.createElement('canvas')
    canvas.width = bitmap.width
    canvas.height = bitmap.height
    const ctx = canvas.getContext('2d')
    ctx.drawImage(bitmap, 0, 0)
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const result = jsQR(imageData.data, imageData.width, imageData.height)
    if (!result?.data) throw new Error('No QR code found in that image')
    importCode.value = result.data
    status.value = {
      severity: 'success',
      text: 'QR image decoded — review and tap Load progress'
    }
    activeTab.value = 'import'
  } catch (e) {
    status.value = { severity: 'error', text: e.message || 'Could not read QR from image' }
  } finally {
    busy.value = false
  }
}

watch(
  () => props.visible,
  async (open) => {
    if (open) {
      activeTab.value = 'export'
      status.value = null
      await refreshExport()
    } else {
      await stopCamera()
      importCode.value = ''
      status.value = null
    }
  }
)

watch(activeTab, async (tab) => {
  if (tab !== 'import') await stopCamera()
})

onBeforeUnmount(() => {
  stopCamera()
})
</script>

<template>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Sync progress"
    :style="{ width: 'min(560px, 96vw)' }"
    :dismissableMask="true"
    @hide="stopCamera"
  >
    <p class="sync-lead">
      Encode your answers, marks, and ratings into a short code you can copy between devices,
      or transfer via QR code.
    </p>

    <Message v-if="status" :severity="status.severity" :closable="false" class="sync-status">
      {{ status.text }}
    </Message>

    <Tabs v-model:value="activeTab">
      <TabList>
        <Tab value="export"><i class="pi pi-upload"></i> Export</Tab>
        <Tab value="import"><i class="pi pi-download"></i> Import</Tab>
      </TabList>

      <TabPanels>
        <TabPanel value="export">
          <div class="sync-section">
            <label class="sync-label">Progress code</label>
            <Textarea
              :model-value="exportCode"
              rows="4"
              class="sync-code"
              readonly
              auto-resize
            />
            <div class="sync-meta">{{ exportLength }} characters</div>
            <div class="sync-actions">
              <Button
                label="Copy code"
                icon="pi pi-copy"
                :loading="busy"
                @click="copyExport"
              />
              <Button
                label="Refresh"
                icon="pi pi-refresh"
                severity="secondary"
                text
                :loading="busy"
                @click="refreshExport"
              />
            </div>

            <div v-if="qrDataUrl" class="qr-block">
              <img :src="qrDataUrl" alt="Progress QR code" class="qr-image" />
              <p class="qr-hint">Scan this with another device’s camera in the Import tab.</p>
              <Button
                label="Download QR image"
                icon="pi pi-image"
                severity="secondary"
                size="small"
                outlined
                @click="downloadQr"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel value="import">
          <div class="sync-section">
            <label class="sync-label">Paste progress code</label>
            <Textarea
              v-model="importCode"
              rows="4"
              class="sync-code"
              placeholder="MLDM1...."
              auto-resize
            />
            <div class="sync-actions">
              <Button
                label="Load progress"
                icon="pi pi-check"
                :disabled="!importCode.trim()"
                :loading="busy"
                @click="onImport"
              />
            </div>

            <div class="sync-divider"><span>or use a QR code</span></div>

            <div class="sync-actions">
              <Button
                v-if="!cameraActive"
                label="Scan with camera"
                icon="pi pi-camera"
                severity="secondary"
                @click="startCamera"
              />
              <Button
                v-else
                label="Stop camera"
                icon="pi pi-times"
                severity="danger"
                outlined
                @click="stopCamera"
              />
              <input
                ref="fileInputRef"
                type="file"
                accept="image/*"
                hidden
                @change="onPickImage"
              />
              <Button
                label="Upload QR image"
                icon="pi pi-upload"
                severity="secondary"
                outlined
                @click="openFilePicker"
              />
            </div>

            <Message v-if="cameraError" severity="warn" :closable="false" class="sync-status">
              {{ cameraError }}
            </Message>

            <div
              v-show="cameraActive"
              id="progress-qr-reader"
              ref="scannerRef"
              class="qr-reader"
            ></div>
          </div>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </Dialog>
</template>

<style scoped>
.sync-lead {
  margin: 0 0 1rem;
  color: var(--app-text-muted);
  font-size: 0.9rem;
  line-height: 1.45;
}

.sync-status {
  margin-bottom: 0.9rem;
}

.sync-section {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  padding-top: 0.75rem;
}

.sync-label {
  font-size: 0.82rem;
  font-weight: 600;
}

.sync-code {
  width: 100%;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  word-break: break-all;
}

.sync-meta {
  font-size: 0.75rem;
  color: var(--app-text-muted);
}

.sync-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.sync-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--app-text-muted);
  font-size: 0.78rem;
  margin: 0.35rem 0;
}

.sync-divider::before,
.sync-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--app-shell-border);
}

.qr-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--app-shell-border);
  border-radius: 12px;
  background: var(--app-bg);
}

.qr-image {
  width: 220px;
  height: 220px;
  border-radius: 8px;
  background: white;
}

.qr-hint {
  margin: 0;
  font-size: 0.78rem;
  color: var(--app-text-muted);
  text-align: center;
}

.qr-reader {
  width: 100%;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--app-shell-border);
  background: #0f172a;
  min-height: 240px;
}

</style>
