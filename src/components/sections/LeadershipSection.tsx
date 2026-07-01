'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Search, PenTool, Users, Shield, RefreshCw, Zap, LucideIcon } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface LeadershipCard {
  icon: LucideIcon
  title: string
  description: string
}

const cards: LeadershipCard[] = [
  {
    icon: Search,
    title: 'Architecture Reviews',
    description:
      'Evaluating system designs and technical proposals to ensure scalability, maintainability, and strategic alignment.',
  },
  {
    icon: PenTool,
    title: 'Solution Design',
    description:
      'Defining technical blueprints that translate business requirements into robust, cloud-native architectures.',
  },
  {
    icon: Users,
    title: 'Team Mentoring',
    description:
      'Growing engineering talent through structured mentorship, code review culture, and knowledge sharing.',
  },
  {
    icon: Shield,
    title: 'Code Quality Governance',
    description:
      'Establishing and enforcing engineering standards, automated quality gates, and best practices.',
  },
  {
    icon: RefreshCw,
    title: 'Modernization Strategies',
    description:
      'Guiding legacy system modernization — from monoliths to microservices, and on-premise to cloud.',
  },
  {
    icon: Zap,
    title: 'AI-Assisted Engineering',
    description:
      'Driving adoption of AI-augmented development workflows to accelerate team velocity and code quality.',
  },
]

function LeadershipCard({ card, index }: { card: LeadershipCard; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()
  const Icon = card.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.5,
        delay: shouldReduce ? 0 : index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={
        shouldReduce
          ? {}
          : { borderColor: 'rgba(0,120,212,0.4)', transition: { duration: 0.2 } }
      }
      className="glass rounded-2xl p-6 flex flex-col gap-4 cursor-default transition-colors duration-200"
      style={{ boxShadow: 'var(--shadow-glass)' }}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{
          background: 'linear-gradient(135deg, rgba(0,120,212,0.25) 0%, rgba(80,230,255,0.15) 100%)',
          border: '1px solid rgba(0,120,212,0.3)',
        }}
      >
        <Icon size={18} style={{ color: 'var(--accent-cyan)' }} />
      </div>

      {/* Title */}
      <h3 className="text-base font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
        {card.title}
      </h3>

      {/* Description */}
      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
        {card.description}
      </p>
    </motion.div>
  )
}

export function LeadershipSection() {
  return (
    <section
      id="leadership"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-narrow">
        <AnimatedSection direction="up">
          <SectionHeading eyebrow="Leadership" title="Technical Leadership" />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((card, i) => (
            <LeadershipCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
