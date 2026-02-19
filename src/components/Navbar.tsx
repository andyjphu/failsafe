import { NAV_LINKS } from '../lib/constants'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-text font-bold text-lg tracking-tight no-underline">
          PhT Labs
        </a>

        <div className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#install"
            className="text-sm font-medium px-4 py-2 border border-text text-text hover:bg-text hover:text-white transition-colors no-underline"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}
