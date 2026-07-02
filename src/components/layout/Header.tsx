'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { profile } from '@/data/profile'
import { cn, assetPath } from '@/lib/utils'

const navLinks = [
  { href: '/#about',       label: 'About',      sectionId: 'about' },
  { href: '/#expertise',   label: 'Expertise',  sectionId: 'expertise' },
  { href: '/#projects',    label: 'Projects',   sectionId: 'projects' },
  { href: '/#experience',  label: 'Experience', sectionId: 'experience' },
  { href: '/contact',      label: 'Contact',    sectionId: 'contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-position based active section — reliable in both directions
  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection(null)
      return
    }

    const sectionIds = navLinks.map((l) => l.sectionId).filter(Boolean) as string[]

    const update = () => {
      const scrollBottom = window.scrollY + window.innerHeight
      const docHeight = document.documentElement.scrollHeight

      // Near bottom of page → always activate last section
      if (scrollBottom >= docHeight - 80) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      const threshold = window.scrollY + window.innerHeight * 0.45
      let current: string | null = null
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top + window.scrollY <= threshold) {
          current = id
        }
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [pathname])

  const isActive = (link: typeof navLinks[0]) => {
    if (pathname === '/contact') return link.href === '/contact'
    return activeSection === link.sectionId
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-[var(--border-color)] shadow-glass'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-ring rounded-lg px-1"
            aria-label="Mariyan Marinov — Home"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #0078d4, #50e6ff)' }}
              aria-hidden="true"
            >
              MM
            </div>
            <span className="hidden sm:block font-semibold text-base text-[var(--text-primary)] group-hover:text-azure-500 transition-colors">
              Mariyan Marinov
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 focus-ring',
                    isActive(link)
                      ? 'text-[var(--text-primary)] bg-[rgba(0,120,212,0.12)] ring-1 ring-[rgba(0,120,212,0.28)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)]'
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={assetPath(profile.cvFile)}
              download
              className="hidden sm:flex btn-primary text-xs px-4 py-2"
              aria-label="Download CV as DOCX"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download CV
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden w-9 h-9 rounded-lg glass flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus-ring"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <motion.div animate={mobileOpen ? 'open' : 'closed'} className="flex flex-col gap-1.5 w-4">
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  variants={{ open: { rotate: 45, y: 7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full"
                  variants={{ open: { opacity: 0, scaleX: 0 }, closed: { opacity: 1, scaleX: 1 } }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="block h-0.5 bg-current rounded-full origin-center"
                  variants={{ open: { rotate: -45, y: -7 }, closed: { rotate: 0, y: 0 } }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden border-t border-[var(--border-color)] glass overflow-hidden"
          >
            <nav className="px-4 py-3 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150 focus-ring',
                    isActive(link)
                      ? 'text-azure-500 bg-[rgba(0,120,212,0.1)]'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={assetPath(profile.cvFile)}
                download
                className="btn-primary mt-2 justify-center text-xs"
                onClick={() => setMobileOpen(false)}
              >
                Download CV
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
