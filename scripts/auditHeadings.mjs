import fs from 'node:fs'
import path from 'node:path'

const appDir = path.resolve('app')
const output = []

const isPageFile = (filePath) => {
  const ext = path.extname(filePath)
  if (!['.tsx', '.mdx', '.md'].includes(ext)) return false
  const fileName = path.basename(filePath)
  return !fileName.startsWith('_') && fileName !== 'layout.tsx' && fileName !== 'template.tsx'
}

const collectFiles = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectFiles(fullPath)
    } else if (entry.isFile() && isPageFile(fullPath)) {
      analyzeFile(fullPath)
    }
  }
}

const normalizeWhitespace = (str) => str.replace(/\s+/g, ' ').trim()

const countWords = (content) => {
  const textOnly = content.replace(/<[^>]+>/g, ' ').replace(/\{[^}]*\}/g, ' ')
  const cleaned = normalizeWhitespace(textOnly)
  if (!cleaned) return 0
  return cleaned.split(' ').length
}

const countHeading = (content, level) => {
  const regex = new RegExp(`<h${level}(\\s|>)`, 'gi')
  return (content.match(regex) || []).length
}

const analyzeFile = (filePath) => {
  const relPath = path.relative(process.cwd(), filePath)
  const raw = fs.readFileSync(filePath, 'utf8')
  const words = countWords(raw)
  const h1s = countHeading(raw, 1)
  const h2s = countHeading(raw, 2)
  const h3s = countHeading(raw, 3)
  output.push({
    file: relPath,
    words,
    h1s,
    h2s,
    h3s,
  })
}

collectFiles(appDir)

output.sort((a, b) => a.file.localeCompare(b.file))

const summary = output.map((item) => ({
  ...item,
  flags: [
    item.h1s !== 1 ? 'H1!=1' : null,
    item.h2s < 3 ? 'H2<3' : null,
    item.h3s === 0 ? 'H3=0' : null,
    item.words < 1500 ? 'words<1500' : null,
  ].filter(Boolean),
}))

const reportPath = path.resolve('reports', `heading-audit-${Date.now()}.json`)
fs.mkdirSync(path.dirname(reportPath), { recursive: true })
fs.writeFileSync(reportPath, JSON.stringify(summary, null, 2))

console.log(`Audit complete. ${summary.length} files analyzed.`)
console.log(`Report saved to ${reportPath}`)
