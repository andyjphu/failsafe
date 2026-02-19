import { useState } from 'react'
import { HiOutlineClipboard, HiOutlineCheck } from 'react-icons/hi2'
import { INSTALL_COMMAND, USAGE_CODE } from '../lib/constants'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-3 p-1.5 text-text-muted hover:text-text transition-colors bg-transparent border-none cursor-pointer"
      aria-label="Copy to clipboard"
    >
      {copied ? <HiOutlineCheck size={16} /> : <HiOutlineClipboard size={16} />}
    </button>
  )
}

function highlightPython(code: string) {
  const keywords = ['from', 'import', 'await', 'async', 'def', 'class', 'return', 'if', 'else', 'True', 'False', 'None']
  const lines = code.split('\n')

  return lines.map((line, i) => {
    const parts: React.ReactNode[] = []
    let remaining = line

    // Comments
    const commentIdx = remaining.indexOf('#')
    let comment = ''
    if (commentIdx !== -1) {
      // Check it's not inside a string
      const beforeComment = remaining.slice(0, commentIdx)
      const singleQuotes = (beforeComment.match(/'/g) || []).length
      const doubleQuotes = (beforeComment.match(/"/g) || []).length
      if (singleQuotes % 2 === 0 && doubleQuotes % 2 === 0) {
        comment = remaining.slice(commentIdx)
        remaining = remaining.slice(0, commentIdx)
      }
    }

    // Process remaining text
    // Split by strings first
    const stringRegex = /("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')/g
    const segments = remaining.split(stringRegex)

    segments.forEach((segment, j) => {
      if (segment.match(/^("""[\s\S]*?"""|'''[\s\S]*?'''|"[^"]*"|'[^']*')$/)) {
        // String literal
        parts.push(
          <span key={`${i}-${j}`} className="text-emerald-600">{segment}</span>
        )
      } else {
        // Check for keywords
        const wordRegex = /\b(\w+)\b/g
        let match
        let lastIndex = 0
        const subParts: React.ReactNode[] = []

        while ((match = wordRegex.exec(segment)) !== null) {
          if (match.index > lastIndex) {
            subParts.push(segment.slice(lastIndex, match.index))
          }
          if (keywords.includes(match[1])) {
            subParts.push(
              <span key={`${i}-${j}-${match.index}`} className="text-accent">{match[1]}</span>
            )
          } else {
            subParts.push(match[1])
          }
          lastIndex = match.index + match[0].length
        }
        if (lastIndex < segment.length) {
          subParts.push(segment.slice(lastIndex))
        }
        parts.push(...subParts)
      }
    })

    if (comment) {
      parts.push(
        <span key={`${i}-comment`} className="text-text-muted italic">{comment}</span>
      )
    }

    return (
      <div key={i} className="leading-relaxed">
        {parts.length > 0 ? parts : '\u00A0'}
      </div>
    )
  })
}

export default function InstallSection() {
  return (
    <section id="install" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-text">
          Get started in seconds
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
              Install
            </p>
            <div className="relative bg-code-bg border border-code-border p-6 font-mono text-sm overflow-x-auto">
              <CopyButton text={INSTALL_COMMAND} />
              <span className="text-text-muted select-none">$ </span>
              <span className="text-text">{INSTALL_COMMAND}</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
              Usage
            </p>
            <div className="relative bg-code-bg border border-code-border p-6 font-mono text-sm overflow-x-auto">
              <CopyButton text={USAGE_CODE} />
              {highlightPython(USAGE_CODE)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
