'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { languages } from '@/data/languages'
import { motion } from 'framer-motion'

export function LanguagesSection() {
  return (
    <section
      id="languages"
      className="section-padding"
      aria-labelledby="languages-heading"
    >
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Languages"
            title="Languages"
            id="languages-heading"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <AnimatedSection key={lang.name} delay={i * 0.1}>
              <GlassCard>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">{lang.name}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{lang.level}</p>
                  </div>
                  <span className="text-sm font-bold gradient-text">{lang.proficiency}%</span>
                </div>
                {/* Proficiency bar */}
                <div
                  className="w-full h-1.5 rounded-full overflow-hidden"
                  style={{ background: 'var(--bg-surface-hover)' }}
                  role="progressbar"
                  aria-valuenow={lang.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.name} proficiency: ${lang.level}`}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(90deg, #0078d4, #50e6ff)' }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                  />
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
