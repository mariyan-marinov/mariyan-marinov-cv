'use client'

import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

const focusAreas = [
  'Enterprise Architecture',
  'Distributed Systems',
  'Cloud Platforms',
  'AI-Augmented Development',
  'Technical Leadership',
  'Software Modernization',
]

export function AboutSection() {
  const badgesRef = useRef(null)
  const badgesInView = useInView(badgesRef, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <div className="flex flex-col items-center text-center gap-12">
          <SectionHeading
            eyebrow="Philosophy"
            title="Engineering Philosophy"
            centered
          />

          <AnimatedSection direction="up" delay={0.1} className="w-full max-w-3xl">
            <blockquote
              className="glass rounded-2xl p-8 md:p-10 relative"
              style={{ boxShadow: 'var(--shadow-glass)', borderLeft: '4px solid var(--accent-blue)' }}
            >
              <p
                className="text-lg md:text-xl leading-relaxed italic font-light"
                style={{ color: 'var(--text-primary)' }}
              >
                &ldquo;Great software is not about writing more code. It is about making the right
                architectural decisions, reducing complexity, and enabling engineering teams to
                deliver value faster.&rdquo;
              </p>
            </blockquote>
          </AnimatedSection>

          <motion.div
            ref={badgesRef}
            className="flex flex-wrap justify-center gap-3"
          >
            {focusAreas.map((area, i) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={badgesInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{
                  duration: shouldReduce ? 0.1 : 0.4,
                  delay: shouldReduce ? 0 : 0.2 + i * 0.07,
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
      </div>
    </section>
  )
}
