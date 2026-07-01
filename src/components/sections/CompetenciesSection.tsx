'use client'

import { AnimatedSection, AnimatedList, itemVariants } from '@/components/ui/AnimatedSection'
import { GlassCard } from '@/components/ui/GlassCard'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { motion } from 'framer-motion'

const competencies = [
  {
    icon: '🏗️',
    title: 'Enterprise Architecture',
    description: 'Designing scalable, distributed systems for enterprise workloads — from microservices decomposition to integration patterns.',
  },
  {
    icon: '☁️',
    title: 'Cloud Engineering',
    description: 'Azure & AWS cloud-native solutions, AKS containerisation, serverless functions, and infrastructure as code.',
  },
  {
    icon: '👥',
    title: 'Technical Leadership',
    description: 'Leading cross-functional engineering teams, defining technical roadmaps, mentoring engineers, and driving engineering culture.',
  },
  {
    icon: '🤖',
    title: 'AI-Assisted Development',
    description: 'Integrating AI tooling and LLMs into software delivery pipelines to accelerate development velocity and code quality.',
  },
  {
    icon: '⚙️',
    title: 'Full-Stack .NET',
    description: 'End-to-end delivery with .NET 8 / C#, ASP.NET Core, Entity Framework, and React / TypeScript frontends.',
  },
  {
    icon: '🔄',
    title: 'DevOps & CI/CD',
    description: 'Azure DevOps, GitHub Actions, Docker, Kubernetes, and automated deployment pipelines for zero-downtime releases.',
  },
  {
    icon: '🗄️',
    title: 'Data Engineering',
    description: 'SQL Server, PostgreSQL, Redis, Cosmos DB, and event-driven architectures for high-throughput data processing.',
  },
  {
    icon: '🔌',
    title: 'API Design',
    description: 'RESTful APIs, GraphQL, gRPC, and API gateway patterns at scale — built for performance, security, and developer experience.',
  },
]

export function CompetenciesSection() {
  return (
    <section
      id="competencies"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-labelledby="competencies-heading"
    >
      <div className="container-wide">
        <AnimatedSection>
          <SectionHeading
            eyebrow="What I Do"
            title="Core Competencies"
            subtitle="A breadth of expertise spanning architecture, cloud, leadership, and emerging AI-driven engineering practices."
            id="competencies-heading"
          />
        </AnimatedSection>

        <AnimatedList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {competencies.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <GlassCard hover className="h-full flex flex-col gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(0,120,212,0.1)', border: '1px solid rgba(0,120,212,0.2)' }}
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-sm text-[var(--text-primary)]">{item.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatedList>
      </div>
    </section>
  )
}
