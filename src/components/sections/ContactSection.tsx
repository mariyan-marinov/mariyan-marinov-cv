'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'

const contactCards = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/mariyanmarinov',
    href: profile.contact.linkedin,
    external: true,
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/mariyan-marinov',
    href: profile.contact.github,
    external: true,
  },
]

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <AnimatedSection className="text-center mb-12">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great"
            subtitle={profile.availability}
            centered
            id="contact-heading"
          />
        </AnimatedSection>

        <AnimatedSection className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-2" role="list" aria-label="Available for">
            {[
              'Software Development',
              'Architecture Consulting',
              'Cloud Transformation',
              'Enterprise Modernization',
              'Technical Leadership',
              'AI Engineering Initiatives',
            ].map((item) => (
              <span
                key={item}
                role="listitem"
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold glass border border-[var(--border-color)] text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {contactCards.map((card, i) => (
            <AnimatedSection key={card.label} delay={i * 0.1}>
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noopener noreferrer' : undefined}
                className="block focus-ring rounded-2xl"
                aria-label={`${card.label}: ${card.value}`}
              >
                <GlassCard hover glow className="flex flex-col items-center text-center gap-3 py-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-azure-500"
                    style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-1">
                      {card.label}
                    </p>
                    <p className="text-sm font-medium text-[var(--text-primary)] break-all">
                      {card.value}
                    </p>
                  </div>
                </GlassCard>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center" delay={0.3}>
          <div className="glass rounded-2xl p-8 md:p-12 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
              Prefer a direct conversation?
            </h3>
            <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
              Send me an email at{' '}
              <a
                href={`mailto:${profile.contact.email}`}
                className="text-azure-500 font-semibold hover:underline focus-ring rounded"
              >
                {profile.contact.email}
              </a>{' '}
              and I&apos;ll respond within 24 hours.
            </p>
            <a
              href={`mailto:${profile.contact.email}?subject=Let's connect — senior engineering opportunity`}
              className="btn-primary inline-flex"
              aria-label={`Send email to ${profile.contact.email}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
