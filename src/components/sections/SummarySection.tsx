'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const focusAreas = [
  'Enterprise Architecture',
  'Distributed Systems',
  'Cloud Platforms',
  'AI-Augmented Development',
  'Technical Leadership',
  'Software Modernization',
]

export function SummarySection() {
  const badgesRef = useRef(null)
  const badgesInView = useInView(badgesRef, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="summary-heading"
    >
      <div className="container-wide">
        <AnimatedSection direction="up">
          <SectionHeading
            eyebrow="About"
            title="Professional Summary"
            id="summary-heading"
          />
          <div className="max-w-3xl mx-auto space-y-4 text-[var(--text-secondary)] leading-relaxed text-center">
            {profile.summary.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Location / availability */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
        
            <div className="flex items-center gap-2 text-sm text-azure-500 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {profile.availability}
            </div>
            <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
              <span aria-hidden="true">🎓</span>
              MSc Computer Science · University of Ruse · Bulgaria
            </div>
          </div>
        </AnimatedSection>

        {/* Focus area badges */}
        <motion.div
          ref={badgesRef}
          className="flex flex-wrap justify-center gap-3 mt-12 pt-10 border-t"
          style={{ borderColor: 'var(--border-color)' }}
        >
          {focusAreas.map((area, i) => (
            <motion.span
              key={area}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={badgesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{
                duration: shouldReduce ? 0.1 : 0.4,
                delay: shouldReduce ? 0 : 0.1 + i * 0.07,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="rounded-full px-4 py-2 text-sm font-medium cursor-default transition-all duration-200"
              style={{
                color: 'var(--text-secondary)',
                background: 'var(--bg-surface-hover)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              whileHover={
                shouldReduce
                  ? {}
                  : {
                      borderColor: 'rgba(0,120,212,0.5)',
                      color: 'var(--accent-blue)',
                      backgroundColor: 'rgba(0,120,212,0.08)',
                    }
              }
            >
              {area}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
