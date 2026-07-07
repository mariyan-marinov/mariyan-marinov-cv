import type { Metadata } from 'next'
import Link from 'next/link'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { profile } from '@/data/profile'
import { assetPath } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Mariyan Marinov — Senior Software Engineer and Technical Lead with 14+ years building enterprise software, cloud platforms, and AI-assisted engineering solutions.',
}

const education = [
  {
    institution: 'University of Ruse',
    degree: 'Master of Computer Science',
    field: 'Software Development & Distributed Systems',
    period: '2011',
    location: 'Ruse, Bulgaria',
    description: 'Software development, Distributed Systems, Distributed DBs, Design Patterns.',
  },
  {
    institution: 'Fachhochschule für Technik und Wirtschaft Berlin',
    degree: 'Exchange Program',
    field: 'Diploma Thesis Writing',
    period: '2010',
    location: 'Berlin, Germany',
    description: 'Diploma thesis writing as part of an academic exchange between University of Ruse and FHTW Berlin.',
  },
  {
    institution: 'University of Ruse',
    degree: 'Bachelor of Computer Science',
    field: 'Computer Science',
    period: '2010',
    location: 'Ruse, Bulgaria',
    description: undefined,
  },
  {
    institution: "High School of Mathematics 'Baba Tonka'",
    degree: 'High School Diploma',
    field: 'IT, English Language & Mathematics',
    period: '2006',
    location: 'Ruse, Bulgaria',
    description: 'Specialisation in IT and English language, Mathematics.',
  },
]

const languages = [
  { name: 'Bulgarian', level: 'Native' },
  { name: 'English', level: 'Professional working proficiency' },
  { name: 'German', level: 'Entry level' },
]

const quickFacts = [
  { icon: '📍', text: 'Ruse, Bulgaria — remote globally' },
  { icon: '🎓', text: 'MSc Computer Science, University of Ruse' },
  { icon: '💼', text: '14+ years in enterprise software' },
  { icon: '☁️', text: 'Azure & AWS — both in production' },
  { icon: '🤖', text: 'GitHub Copilot Agents — early adopter' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* Page hero */}
      <div className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">

              {/* Avatar — replace profile.photo with a real path once you have one, e.g. '/photo.jpg' */}
              {profile.photo ? (
                <img
                  src={assetPath(profile.photo)}
                  alt={profile.name}
                  className="w-28 sm:w-32 aspect-[2/3] rounded-2xl object-cover object-top flex-shrink-0"
                  style={{ boxShadow: '0 0 0 2px rgba(0,120,212,0.35), 0 8px 32px rgba(0,0,0,0.3)' }}
                />
              ) : (
                <div
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl flex items-center justify-center text-white font-extrabold flex-shrink-0 select-none"
                  style={{
                    fontSize: '2.75rem',
                    background: 'linear-gradient(135deg, #0078d4 0%, #50e6ff 100%)',
                    boxShadow: '0 0 0 2px rgba(0,120,212,0.35), 0 8px 40px rgba(0,120,212,0.25)',
                  }}
                  aria-label="Mariyan Marinov"
                >
                  MM
                </div>
              )}

              {/* Name + title + chips */}
              <div className="text-center sm:text-left">
                <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                    Open to work
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                  <span className="gradient-text">{profile.name}</span>
                </h1>
                <p className="text-lg font-medium text-[var(--text-secondary)] mb-4">
                  {profile.title.split(' | ').join(' · ')}
                </p>

                <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-sm text-[var(--text-muted)]">
                  <span>📍 Ruse, Bulgaria</span>
                  <span>🌐 Available remotely</span>
                  <span>💬 EN · BG</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-20">

          {/* Bio + sidebar */}
          <AnimatedSection>
            <SectionHeading eyebrow="About" title="Full Story" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">

              {/* Main bio */}
              <div className="lg:col-span-2 space-y-5 text-[var(--text-secondary)] leading-relaxed">
                {profile.summary.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
                <p>
                  Outside of work I enjoy running, hiking, and following how emerging AI tools are reshaping
                  the craft of software engineering — both in day-to-day coding and in longer-horizon
                  architecture thinking. I&apos;m particularly curious about the feedback loops between human
                  and AI-assisted code review, and where the tooling still falls short.
                </p>
              </div>

              {/* Sidebar */}
              <div className="space-y-4">
                <GlassCard>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                    Quick Facts
                  </h2>
                  <ul className="space-y-2.5">
                    {quickFacts.map((f) => (
                      <li key={f.text} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                        <span className="text-base leading-snug flex-shrink-0" aria-hidden="true">{f.icon}</span>
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <GlassCard>
                  <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4">
                    Languages
                  </h2>
                  <ul className="space-y-2.5">
                    {languages.map((l) => (
                      <li key={l.name} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)] font-medium">{l.name}</span>
                        <span className="text-[var(--text-muted)]">{l.level}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>

                <a
                  href={assetPath(profile.cvFile)}
                  download
                  className="btn-primary w-full justify-center"
                  aria-label="Download CV as DOCX"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Education */}
          <AnimatedSection>
            <SectionHeading eyebrow="Education" title="Academic Background" />
            <div className="space-y-4 mt-8">
              {education.map((edu, i) => (
                <AnimatedSection key={`${edu.institution}-${edu.period}`} delay={i * 0.08}>
                  <GlassCard className="flex flex-col sm:flex-row gap-5 items-start">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                      aria-hidden="true"
                    >
                      🎓
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
                        <div>
                          <h3 className="font-bold text-[var(--text-primary)]">{edu.institution}</h3>
                          <p className="text-sm font-medium" style={{ color: 'var(--accent-blue)' }}>{edu.degree}</p>
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
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>

          {/* Bottom CTAs */}
          <AnimatedSection>
            <div
              className="flex flex-wrap gap-4 justify-center pt-8 border-t"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <Link href="/#projects" className="btn-primary">
                View Projects
              </Link>
              <Link href="/#experience" className="btn-ghost">
                Work Experience
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  )
}
