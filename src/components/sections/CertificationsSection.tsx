'use client'

import { AnimatedSection, AnimatedList, itemVariants } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'
import { motion } from 'framer-motion'

const issuerColors: Record<string, string> = {
  Microsoft: 'rgba(0,120,212,0.15)',
  'Amazon Web Services': 'rgba(255,153,0,0.12)',
  'CNCF / Linux Foundation': 'rgba(50,186,255,0.12)',
}

const issuerBorders: Record<string, string> = {
  Microsoft: 'rgba(0,120,212,0.3)',
  'Amazon Web Services': 'rgba(255,153,0,0.3)',
  'CNCF / Linux Foundation': 'rgba(50,186,255,0.3)',
}

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-labelledby="certifications-heading"
    >
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Certifications"
            title="Professional Certifications"
            id="certifications-heading"
          />
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <motion.div key={cert.id} variants={itemVariants}>
              <GlassCard hover glow className="h-full flex flex-col gap-3">
                {/* Badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{
                    background: issuerColors[cert.issuer] ?? 'rgba(0,120,212,0.1)',
                    border: `1px solid ${issuerBorders[cert.issuer] ?? 'rgba(0,120,212,0.2)'}`,
                    color: '#0078d4',
                  }}
                  aria-hidden="true"
                >
                  {cert.badge}
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-azure-500 font-medium">{cert.issuer}</p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">{cert.year}</span>
                  <svg
                    className="w-4 h-4 text-azure-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
