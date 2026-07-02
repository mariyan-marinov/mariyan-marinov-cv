import type { Metadata } from 'next'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'
import { assetPath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Mariyan Marinov — Senior .NET Full Stack Engineer and Technical Lead. Open to senior engineering roles, technical leadership, and consulting engagements.',
}

const contactItems = [
  {
    icon: '✉️',
    label: 'Email',
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    description: 'Best way to reach me. I respond within 24 hours.',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mariyanmarinov',
    href: profile.contact.linkedin,
    description: 'Professional profile, recommendations, and experience.',
    external: true,
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/mariyan-marinov',
    href: profile.contact.github,
    description: 'Open-source contributions and personal projects.',
    external: true,
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Ruse, Bulgaria',
    href: undefined,
    description: 'Available for remote work globally.',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection className="mb-16">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something Great!"
            subtitle={profile.availability}
          />
        </AnimatedSection>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {contactItems.map((item, i) => (
            <AnimatedSection key={item.label} delay={i * 0.08}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="block focus-ring rounded-2xl"
                >
                  <GlassCard hover glow className="h-full">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                        style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                        aria-hidden="true"
                      >
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-[var(--text-primary)] mb-1 break-all">
                          {item.value}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                      </div>
                    </div>
                  </GlassCard>
                </a>
              ) : (
                <GlassCard className="h-full">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                        {item.value}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">{item.description}</p>
                    </div>
                  </div>
                </GlassCard>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* Message prompt */}
        <AnimatedSection delay={0.35}>
          <GlassCard className="text-center py-10 px-6 md:px-12">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
              Ready to connect?
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg mx-auto">
              I&apos;m currently open to senior engineering roles, technical leadership positions, and
                strategic consulting engagements. Drop me an email and let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`mailto:${profile.contact.email}?subject=Let's connect`}
                className="btn-primary"
                aria-label={`Email ${profile.contact.email}`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Send Email
              </a>
              <a
                href={assetPath(profile.cvFile)}
                download
                className="btn-ghost"
                aria-label="Download CV as DOCX"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </div>
  )
}
