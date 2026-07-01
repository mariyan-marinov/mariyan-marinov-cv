'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Layers, Cloud, Code2, Zap, LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Domain {
  icon: LucideIcon
  title: string
  skills: string[]
}

const domains: Domain[] = [
  {
    icon: Layers,
    title: 'Architecture',
    skills: ['Microservices', 'Event-Driven Systems', 'Distributed Platforms', 'Domain Driven Design', 'Modernization'],
  },
  {
    icon: Cloud,
    title: 'Cloud',
    skills: ['Azure', 'AWS', 'Serverless', 'IaC', 'DevOps'],
  },
  {
    icon: Code2,
    title: 'Development',
    skills: ['.NET', 'ASP.NET Core', 'Angular', 'React', 'SQL Server', 'PostgreSQL'],
  },
  {
    icon: Zap,
    title: 'AI Engineering',
    skills: ['GitHub Copilot', 'AI-assisted Engineering', 'Agentic Workflows', 'Developer Productivity'],
  },
]

function DomainCard({ domain, index }: { domain: Domain; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' })
  const shouldReduce = useReducedMotion()
  const Icon = domain.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.5,
        delay: shouldReduce ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        shouldReduce
          ? {}
          : {
              scale: 1.02,
              transition: { duration: 0.2 },
            }
      }
      className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-5 group cursor-default transition-all duration-300"
      style={{
        boxShadow: 'var(--shadow-glass)',
      }}
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,120,212,0.25) 0%, rgba(80,230,255,0.15) 100%)',
          border: '1px solid rgba(0,120,212,0.3)',
        }}
      >
        <Icon
          size={22}
          style={{ color: 'var(--accent-cyan)' }}
        />
      </div>

      {/* Title */}
      <h3
        className="text-xl font-bold tracking-tight"
        style={{ color: 'var(--text-primary)' }}
      >
        {domain.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {domain.skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge text-xs"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Hover border glow via outline */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          boxShadow: '0 0 0 1px rgba(0,120,212,0.5), 0 0 20px rgba(0,120,212,0.12)',
        }}
      />
    </motion.div>
  )
}

export function ExpertiseSection() {
  return (
    <section id="expertise" className="section-padding">
      <div className="container-narrow">
        <AnimatedSection direction="up">
          <SectionHeading eyebrow="Expertise" title="Core Technical Domains" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, i) => (
            <div key={domain.title} className="relative">
              <DomainCard domain={domain} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
