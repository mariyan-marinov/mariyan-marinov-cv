'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Layers, Cloud, Code2, Zap, Users, Plug, LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface Domain {
  icon: LucideIcon
  title: string
  description: string
  skills: string[]
}

const domains: Domain[] = [
  {
    icon: Layers,
    title: 'Architecture & Backend',
    description: 'Designing scalable, distributed systems for enterprise workloads — from microservices decomposition and event-driven architectures to full end-to-end .NET delivery.',
    skills: [
      'C# / .NET Core', 'ASP.NET Core', 'WebApi / REST',
      'Microservices', 'Event-Driven Systems', 'MQTT v5',
      'RabbitMQ / MassTransit', 'Entity Framework', 'Dapper',
      'SOLID', 'Domain-Driven Design',
    ],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    description: 'Azure & AWS cloud-native solutions, containerised workloads, serverless functions, infrastructure as code, and automated CI/CD pipelines.',
    skills: [
      'Microsoft Azure', 'AWS (S3, Lambda, ECS, ECR)',
      'Azure Functions / App Service', 'AWS CDK / DMS',
      'MS Graph', 'Auth0', 'Docker', 'GitHub Actions',
      'CI/CD Pipelines', 'Infrastructure as Code',
    ],
  },
  {
    icon: Code2,
    title: 'Frontend & Data',
    description: 'Full-stack delivery across Angular, React and Aurelia frontends paired with relational and geospatial data stores — including real-time time-series and geo-analytics workloads.',
    skills: [
      'Angular', 'React', 'TypeScript', 'Aurelia',
      'KnockoutJS', 'Bootstrap', 'SQL Server / T-SQL',
      'PostgreSQL / PostGIS', 'TimescaleDB', 'GeoJSON / ArcGIS',
      'Cassandra Keyspaces',
    ],
  },
  {
    icon: Zap,
    title: 'AI Engineering',
    description: 'Integrating AI tooling and agentic workflows into software delivery pipelines — accelerating development velocity, code quality, and engineering throughput.',
    skills: [
      'GitHub Copilot Agents', 'AI-Assisted Delivery',
      'Agentic Workflows', 'Prompt Engineering',
       'Developer Productivity',
    ],
  },
  {
    icon: Users,
    title: 'Technical Leadership',
    description: 'Leading cross-functional engineering teams, defining technical roadmaps, mentoring engineers, and driving code quality culture — from squad lead to principal engineer.',
    skills: [
      'Architecture Reviews', 'Solution Design',
      'Team Mentoring', 'Code Reviews',
      'Engineering Standards', 'Modernization Strategy',
      'Stakeholder Communication',
    ],
  },
  {
    icon: Plug,
    title: 'API & Integration',
    description: 'RESTful APIs, event-driven integrations, and third-party platform connections at scale — built for performance, security, and developer experience.',
    skills: [
      'REST APIs', 'API Gateway', 'OAuth2 / Auth0',
      'RabbitMQ', 'MassTransit', 'MS Graph',
      'AWS API Gateway', 'Web Services', 'MQTT',
    ],
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

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {domain.description}
      </p>

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
          <SectionHeading
            eyebrow="Skills & Expertise"
            title="What I Work With"
            subtitle="From architecture and cloud platforms to AI engineering and technical leadership — the full stack of what I bring to a project."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
