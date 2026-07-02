'use client'

import { AnimatedSection, AnimatedList, itemVariants } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education } from '@/data/education'
import { motion } from 'framer-motion'

export function EducationSection() {
  return (
    <section
      id="education"
      className="section-padding"
      aria-labelledby="education-heading"
    >
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Education"
            title="Academic Background"
            id="education-heading"
          />
        </AnimatedSection>

        <AnimatedList className="space-y-4">
          {education.map((edu) => (
            <motion.div key={edu.institution} variants={itemVariants}>
              <GlassCard hover className="flex flex-col sm:flex-row gap-5 items-start">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                  aria-hidden="true"
                >
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                    <div>
                      <h3 className="font-bold text-[var(--text-primary)]">{edu.institution}</h3>
                      <p className="text-sm text-azure-500 font-medium">{edu.degree}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{edu.field}</p>
                    </div>
                    <div className="flex sm:flex-col sm:items-end items-center gap-2 sm:gap-0 flex-shrink-0">
                      <span className="text-xs font-semibold text-[var(--text-secondary)] glass px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                      <p className="text-xs text-[var(--text-muted)] sm:mt-1">{edu.location}</p>
                    </div>
                  </div>
                  {edu.description && (
                    <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
