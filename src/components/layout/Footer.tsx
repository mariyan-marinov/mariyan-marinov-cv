import Link from 'next/link'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--border-color)] py-10 px-4 sm:px-6 lg:px-8"
      aria-label="Site footer"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-[var(--text-muted)]">
          <span className="font-semibold text-[var(--text-secondary)]">Mariyan Marinov</span>
          <span className="hidden sm:inline">·</span>
          <span>© {year} All rights reserved</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-azure-500 transition-colors focus-ring rounded text-sm font-medium"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-ring rounded text-sm font-medium"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-ring rounded text-sm font-medium"
            aria-label="Send email"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-[var(--text-muted)]">
          Built with{' '}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-azure-500 transition-colors"
          >
            Next.js
          </a>{' '}
          · Deployed on{' '}
          <a
            href="https://pages.github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-azure-500 transition-colors"
          >
            GitHub Pages
          </a>
        </p>
      </div>
    </footer>
  )
}
