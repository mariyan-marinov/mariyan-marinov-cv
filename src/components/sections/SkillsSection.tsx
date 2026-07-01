'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Badge } from '@/components/ui/Badge'
import { skillCategories } from '@/data/skills'
import { cn } from '@/lib/utils'

export function SkillsSection() {
  const [active, setActive] = useState(skillCategories[0].id)

  const activeCategory = skillCategories.find((c) => c.id === active)!

  return (
    <section
      id="skills"
      className="section-padding"
      aria-labelledby="skills-heading"
    >
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="Technical Skills"
            title="Technology Stack"
            subtitle="Structured across four domains — backend, frontend, cloud, and data."
            id="skills-heading"
          />
        </AnimatedSection>

        {/* Tab nav */}
        <AnimatedSection delay={0.1}>
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                aria-controls={`panel-${cat.id}`}
                id={`tab-${cat.id}`}
                onClick={() => setActive(cat.id)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 focus-ring',
                  active === cat.id
                    ? 'text-white shadow-azure'
                    : 'glass text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-hover)]'
                )}
                style={
                  active === cat.id
                    ? { background: 'linear-gradient(135deg, #0078d4, #50e6ff)' }
                    : undefined
                }
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <GlassCard className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                  aria-hidden="true"
                >
                  {activeCategory.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--text-primary)]">{activeCategory.label}</h3>
                  <p className="text-xs text-[var(--text-muted)]">
                    {activeCategory.skills.length} technologies
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {activeCategory.skills.map((skill) => (
                  <Badge key={skill} variant="default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        {/* All categories at a glance (desktop only) */}
        <div className="hidden lg:grid grid-cols-4 gap-4 mt-6">
          {skillCategories.map((cat, i) => (
            <AnimatedSection key={cat.id} delay={i * 0.05}>
              <button
                onClick={() => setActive(cat.id)}
                className={cn(
                  'w-full glass rounded-xl p-4 text-left transition-all duration-200 focus-ring',
                  active === cat.id && 'border-azure-500/50'
                )}
                style={active === cat.id ? { borderColor: 'rgba(0,120,212,0.4)' } : undefined}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-base" aria-hidden="true">{cat.icon}</span>
                  <span className="text-xs font-semibold text-[var(--text-secondary)]">{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {cat.skills.slice(0, 4).map((s) => (
                    <span key={s} className="text-xs text-[var(--text-muted)]">{s}</span>
                  ))}
                  {cat.skills.length > 4 && (
                    <span className="text-xs text-azure-500">+{cat.skills.length - 4} more</span>
                  )}
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
