'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

const currentlyUsing = [
  '.NET 8+',
  'Angular',
  'React',
  'Azure',
  'AWS',
  'PostgreSQL',
  'GitHub Copilot',
  'GitHub Actions',
]

const exploring = [
  'Agentic AI',
  'MCP (Model Context Protocol)',
  'Semantic Kernel',
  'AI SDLC',
  'Platform Engineering',
]

function TechItem({
  name,
  index,
  dotColor,
}: {
  name: string
  index: number
  dotColor: 'green' | 'amber'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-30px 0px' })
  const shouldReduce = useReducedMotion()

  const green = dotColor === 'green'
  const pulse = green ? 'rgba(74,222,128,0.6)' : 'rgba(251,191,36,0.6)'
  const solidColor = green ? '#4ade80' : '#fbbf24'

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.4,
        delay: shouldReduce ? 0 : index * 0.07,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="flex items-center gap-3 py-2.5 border-b last:border-b-0"
      style={{ borderColor: 'var(--border-color)' }}
    >
      {/* Pulsing indicator dot */}
      <span className="relative flex-shrink-0 w-2.5 h-2.5">
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{ background: pulse }}
          animate={shouldReduce ? {} : { scale: [1, 1.8, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
        />
        <span
          className="relative block w-2.5 h-2.5 rounded-full"
          style={{ background: solidColor }}
        />
      </span>

      <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
        {name}
      </span>
    </motion.li>
  )
}

export function TechRadarSection() {
  return (
    <section id="tech-radar" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection direction="up">
          <SectionHeading eyebrow="Technology" title="Technology Radar" centered />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Currently Using */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="glass rounded-2xl p-6 md:p-8 h-full" style={{ boxShadow: 'var(--shadow-glass)' }}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: '#4ade80', boxShadow: '0 0 8px rgba(74,222,128,0.5)' }}
                />
                <h3
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: 'var(--accent-blue)' }}
                >
                  Currently Using
                </h3>
              </div>
              <ul>
                {currentlyUsing.map((tech, i) => (
                  <TechItem key={tech} name={tech} index={i} dotColor="green" />
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Exploring */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="glass rounded-2xl p-6 md:p-8 h-full" style={{ boxShadow: 'var(--shadow-glass)' }}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: '#fbbf24', boxShadow: '0 0 8px rgba(251,191,36,0.5)' }}
                />
                <h3
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: '#c084fc' }}
                >
                  Exploring
                </h3>
              </div>
              <ul>
                {exploring.map((tech, i) => (
                  <TechItem key={tech} name={tech} index={i} dotColor="amber" />
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
