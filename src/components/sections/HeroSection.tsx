'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { profile } from '@/data/profile'
import { assetPath } from '@/lib/utils'

const chipVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.6 + i * 0.07, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  }),
}

const orbVariants = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.12, 0.22, 0.12],
    transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
  },
}

export function HeroSection() {
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid"
      aria-label="Hero — introduction"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--gradient-hero)' }}
        aria-hidden="true"
      />

      {/* Animated orbs */}
      {!shouldReduce && (
        <>
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(0,120,212,0.18) 0%, transparent 70%)' }}
            variants={orbVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(80,230,255,0.12) 0%, transparent 70%)' }}
            variants={orbVariants}
            animate="animate"
            transition={{ delay: 3 }}
          />
        </>
      )}

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-[var(--text-secondary)] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
          {profile.availability}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
        >
          <span className="gradient-text">{profile.name}</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-secondary)] mb-4 tracking-wide"
        >
          {profile.title.split(' | ').join(' · ')}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-base md:text-lg text-[var(--text-muted)] mb-10 leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="/#experience"
            className="btn-primary"
            aria-label="View professional experience"
          >
            View Experience
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href={assetPath(profile.cvFile)}
            download
            className="btn-ghost"
            aria-label="Download CV as DOCX"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
          <Link
            href="/contact"
            className="btn-secondary"
            aria-label="Contact me"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Tech chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="list" aria-label="Key technologies and skills">
          {profile.heroChips.map((chip, i) => (
            <motion.span
              key={chip}
              role="listitem"
              custom={i}
              variants={chipVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border text-[var(--text-secondary)] hover:border-azure-500/50 hover:text-azure-400 transition-colors cursor-default"
              style={{
                background: 'var(--bg-surface-hover)',
                borderColor: 'rgba(255,255,255,0.12)',
              }}
            >
              {chip}
            </motion.span>
          ))}
        </div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex items-center justify-center gap-4"
          aria-label="Social and contact links"
        >
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-azure-400 transition-colors focus-ring rounded-lg px-2 py-1"
            aria-label="LinkedIn profile (opens in new tab)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            LinkedIn
          </a>
          <span className="text-[var(--border-color)]" aria-hidden="true">·</span>
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-ring rounded-lg px-2 py-1"
            aria-label="GitHub profile (opens in new tab)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            GitHub
          </a>
          <span className="text-[var(--border-color)]" aria-hidden="true">·</span>
          <a
            href={`mailto:${profile.contact.email}`}
            className="flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors focus-ring rounded-lg px-2 py-1"
            aria-label="Send email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        aria-hidden="true"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-azure-500 to-transparent"
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.7, 0.2, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
