'use client'

import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedList, itemVariants } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { experience } from '@/data/experience'
import { assetPath } from '@/lib/utils'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-labelledby="experience-heading"
    >
      <div className="container-narrow">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Career"
            title="Professional Experience"
            subtitle="14+ years across enterprise SaaS, fintech, logistics, and consulting — from junior developer to principal engineer and technical lead."
            id="experience-heading"
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative" role="list" aria-label="Work experience timeline">
          {/* Vertical line */}
          <div
            className="absolute left-5 top-2 bottom-2 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #0078d4 0%, rgba(0,120,212,0.1) 100%)' }}
            aria-hidden="true"
          />

          <AnimatedList className="space-y-8 sm:space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                variants={itemVariants}
                role="listitem"
                className="relative sm:pl-16"
              >
                {/* Timeline dot / logo */}
                <div
                  className="hidden sm:flex absolute left-0 top-6 w-10 h-10 rounded-full items-center justify-center flex-shrink-0 z-10 overflow-hidden"
                  style={{ background: i === 0 ? 'linear-gradient(135deg, #0078d4, #50e6ff)' : 'rgba(0,120,212,0.15)', border: '2px solid rgba(0,120,212,0.4)' }}
                  aria-hidden="true"
                >
                  {job.logo ? (
                    <img src={assetPath(job.logo)} alt="" className="w-6 h-6 object-contain" />
                  ) : (
                    <span className="text-xs font-bold text-white">{job.company.slice(0, 2).toUpperCase()}</span>
                  )}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:border-azure-500/30"
                  style={{ borderColor: i === 0 ? 'rgba(0,120,212,0.25)' : undefined }}>
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] leading-tight">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                        {job.url ? (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-azure-500 hover:text-azure-400 transition-colors inline-flex items-center gap-1"
                          >
                            {job.company}
                            <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                          </a>
                        ) : (
                          <span className="text-sm font-semibold text-azure-500">{job.company}</span>
                        )}
                        <span className="text-[var(--text-muted)] text-xs" aria-hidden="true">·</span>
                        <span className="text-sm text-[var(--text-muted)]">{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                      <span className="text-xs font-semibold text-[var(--text-secondary)] whitespace-nowrap glass px-3 py-1 rounded-full">
                        {job.period}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">{job.type}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2 mb-4" aria-label={`Key achievements at ${job.company}`}>
                    {job.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <svg
                          className="w-4 h-4 mt-0.5 flex-shrink-0 text-azure-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="9 11 12 14 22 4" />
                          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                        </svg>
                        {ach}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {job.technologies.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatedList>
        </div>
      </div>
    </section>
  )
}
