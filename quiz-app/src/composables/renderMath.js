import katex from 'katex'

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderLine(line) {
  const regex = /\$([^$]+)\$/g
  let result = ''
  let lastIndex = 0
  let match

  while ((match = regex.exec(line))) {
    result += escapeHtml(line.slice(lastIndex, match.index))
    try {
      result += katex.renderToString(match[1], {
        throwOnError: false,
        output: 'html'
      })
    } catch (e) {
      result += escapeHtml(match[0])
    }
    lastIndex = regex.lastIndex
  }
  result += escapeHtml(line.slice(lastIndex))
  return result
}

/**
 * Renders a plain-text string that may contain:
 *  - $...$ inline LaTeX math (rendered via KaTeX)
 *  - blank-line separated paragraphs
 *  - "- " prefixed lines within a paragraph, treated as a bullet list
 * into a small, safe HTML string.
 */
export function renderMathText(raw) {
  if (!raw) return ''

  const paragraphs = String(raw).split(/\n\s*\n/)

  return paragraphs
    .map((paragraph) => {
      const lines = paragraph.split('\n').filter((l) => l.length > 0)
      if (lines.length === 0) return ''

      const isList = lines.length > 1 && lines.every((l) => l.trim().startsWith('- '))

      if (isList) {
        const items = lines
          .map((l) => `<li>${renderLine(l.replace(/^\s*-\s*/, ''))}</li>`)
          .join('')
        return `<ul>${items}</ul>`
      }

      return `<p>${lines.map(renderLine).join('<br />')}</p>`
    })
    .join('')
}
