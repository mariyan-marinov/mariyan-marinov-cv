'use client'

import { AnimatedSection, AnimatedList, itemVariants } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'
import { motion } from 'framer-motion'
import { Award } from 'lucide-react'

const categoryConfig = {
  cloud: {
    label: 'Cloud',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      </svg>
    ),
  },
  methodology: {
    label: 'Methodology',
    icon: <Award size={16} aria-hidden="true" />,
  },
  skills: {
    label: 'Skills',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
} as const

const issuerColors: Record<string, string> = {
  'Amazon Web Services': 'rgba(255,153,0,0.12)',
  'Scrum Alliance': 'rgba(0,150,100,0.12)',
  HackerRank: 'rgba(0,185,111,0.12)',
}

const issuerBorders: Record<string, string> = {
  'Amazon Web Services': 'rgba(255,153,0,0.3)',
  'Scrum Alliance': 'rgba(0,150,100,0.3)',
  HackerRank: 'rgba(0,185,111,0.3)',
}

const issuerTextColors: Record<string, string> = {
  'Amazon Web Services': '#ff9900',
  'Scrum Alliance': '#009664',
  HackerRank: '#00b96f',
}

const categoryOrder: Array<'cloud' | 'methodology' | 'skills'> = ['cloud', 'methodology', 'skills']

export function CertificationsSection() {
  const grouped = categoryOrder
    .map((cat) => ({
      category: cat,
      config: categoryConfig[cat],
      items: certifications.filter((c) => c.category === cat),
    }))
    .filter((g) => g.items.length > 0)

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

        <div className="space-y-10">
          {grouped.map(({ category, config, items }) => (
            <div key={category}>
              {/* Category label */}
              <AnimatedSection>
                <div className="flex items-center gap-2 mb-4 text-[var(--text-secondary)]">
                  <span className="text-azure-500">{config.icon}</span>
                  <h3 className="text-sm font-semibold uppercase tracking-wider">{config.label}</h3>
                  <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
                </div>
              </AnimatedSection>

              <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((cert) => (
                  <motion.div key={cert.id} variants={itemVariants}>
                    <GlassCard hover glow className="h-full flex flex-col gap-3">
                      {/* Thumbnail or text badge */}
                      {cert.imageUrl ? (
                        cert.imageUrl.startsWith('/certs/') ? (
                          // Landscape certificate image (HackerRank)
                          <div className="w-full overflow-hidden rounded-lg" style={{ background: 'rgba(0,0,0,0.15)' }}>
                            <img
                              src={cert.imageUrl}
                              alt={`${cert.name} certificate`}
                              className="w-full h-auto object-contain"
                              style={{ maxHeight: '120px', objectFit: 'cover', objectPosition: 'top' }}
                            />
                          </div>
                        ) : (
                          // Square badge image (Credly, bcert)
                          <div className="flex justify-center pt-1">
                            <img
                              src={cert.imageUrl}
                              alt={`${cert.name} badge`}
                              width={80}
                              height={80}
                              className="object-contain drop-shadow-md"
                            />
                          </div>
                        )
                      ) : (
                        <div
                          className="h-10 px-3 min-w-[3rem] w-fit rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 whitespace-nowrap"
                          style={{
                            background: issuerColors[cert.issuer] ?? 'rgba(0,120,212,0.1)',
                            border: `1px solid ${issuerBorders[cert.issuer] ?? 'rgba(0,120,212,0.2)'}`,
                            color: issuerTextColors[cert.issuer] ?? '#0078d4',
                          }}
                          aria-hidden="true"
                        >
                          {cert.badge}
                        </div>
                      )}

                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] leading-snug mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-xs font-medium" style={{ color: issuerTextColors[cert.issuer] ?? '#0078d4' }}>
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        {cert.year && (
                          <span className="text-xs text-[var(--text-muted)]">{cert.year}</span>
                        )}
                        {cert.credentialUrl ? (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-azure-500 hover:text-azure-400 transition-colors focus-ring rounded"
                            aria-label={`View credential for ${cert.name}`}
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <circle cx="12" cy="12" r="10" />
                              <path d="m9 12 2 2 4-4" />
                            </svg>
                          </a>
                        ) : (
                          <svg
                            className="w-4 h-4 text-azure-500 ml-auto"
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
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </AnimatedList>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

