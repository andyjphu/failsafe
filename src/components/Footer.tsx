import { VscGithubAlt } from 'react-icons/vsc'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-muted">
          PhT Labs &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-sm text-text-muted hover:text-text transition-colors no-underline inline-flex items-center gap-1.5"
          >
            <VscGithubAlt size={16} />
            GitHub
          </a>
          <a
            href="#"
            className="text-sm text-text-muted hover:text-text transition-colors no-underline"
          >
            Docs
          </a>
        </div>
      </div>
    </footer>
  )
}
