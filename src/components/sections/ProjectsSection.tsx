'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects, Project } from '@/data/projects'
import { assetPath } from '@/lib/utils'

const categoryStyles: Record<Project['category'], { label: string; bg: string; color: string }> = {
  enterprise:     { label: 'Enterprise',     bg: 'rgba(0,120,212,0.15)',   color: '#50e6ff' },
  infrastructure: { label: 'Infrastructure', bg: 'rgba(34,197,94,0.15)',   color: '#4ade80' },
  analytics:      { label: 'Analytics',      bg: 'rgba(168,85,247,0.15)',  color: '#c084fc' },
  platform:       { label: 'Platform',       bg: 'rgba(245,158,11,0.15)',  color: '#fbbf24' },
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px 0px' })
  const shouldReduce = useReducedMotion()
  const cat = categoryStyles[project.category]

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.55,
        delay: shouldReduce ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={shouldReduce ? {} : { scale: 1.01, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-6 md:p-8 flex flex-col gap-5 relative cursor-default group"
      style={{ boxShadow: 'var(--shadow-glass)' }}
    >
      {/* Category badge */}
      <span
        className="absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
        style={{ background: cat.bg, color: cat.color }}
      >
        {cat.label}
      </span>

      {/* Client eyebrow with optional logo + link */}
      <div className="flex items-center gap-2">
        {project.clientLogo && (
          <img
            src={assetPath(project.clientLogo)}
            alt=""
            className="w-5 h-5 object-contain flex-shrink-0"
            aria-hidden="true"
          />
        )}
        {project.clientUrl ? (
          <a
            href={project.clientUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-widest hover:underline inline-flex items-center gap-1"
            style={{ color: 'var(--accent-blue)' }}
          >
            {project.client}
            <svg className="w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ) : (
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: 'var(--accent-blue)' }}
          >
            {project.client}
          </span>
        )}
      </div>

      {/* Project name */}
      <h3
        className="text-xl font-bold tracking-tight pr-24 leading-snug"
        style={{ color: 'var(--text-primary)' }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      {/* Highlights */}
      <ul className="flex flex-col gap-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <span
              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--accent-blue)' }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Tech badges */}
      <div className="flex flex-wrap gap-2 pt-2 mt-auto border-t" style={{ borderColor: 'var(--border-color)' }}>
        {project.technologies.map((tech) => (
          <span key={tech} className="skill-badge text-xs">
            {tech}
          </span>
        ))}
      </div>

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          boxShadow: '0 0 0 1px rgba(0,120,212,0.45), 0 0 24px rgba(0,120,212,0.1)',
        }}
      />
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container-narrow">
        <AnimatedSection direction="up">
          <SectionHeading
            eyebrow="Work"
            title="Featured Projects"
            subtitle="Selected enterprise engagements across audit, infrastructure intelligence, cloud analytics, and venue management."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
