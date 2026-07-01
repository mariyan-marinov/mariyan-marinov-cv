'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

export function SummarySection() {
  return (
    <section
      id="about"
      className="section-padding"
      aria-labelledby="summary-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text side */}
          <AnimatedSection direction="left">
            <SectionHeading
              eyebrow="About"
              title="Professional Summary"
              id="summary-heading"
            />
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              {profile.summary.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Location / availability */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {profile.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-azure-500 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                Open to opportunities
              </div>
            </div>
          </AnimatedSection>

          {/* Stats side */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {profile.stats.map((stat, i) => (
                <GlassCard
                  key={stat.label}
                  hover
                  className="flex flex-col items-center justify-center text-center py-8"
                >
                  <span
                    className="text-4xl md:text-5xl font-extrabold gradient-text mb-2"
                    aria-label={`${stat.value} ${stat.label}`}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-[var(--text-secondary)]">
                    {stat.label}
                  </span>
                </GlassCard>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
