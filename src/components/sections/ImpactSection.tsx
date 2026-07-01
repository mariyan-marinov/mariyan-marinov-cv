'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

interface KPI {
  value: string
  label: string
  numeric: boolean
}

const kpis: KPI[] = [
  { value: '14+', label: 'Years Experience', numeric: true },
  { value: '4+',  label: 'Enterprise Projects', numeric: true },
  { value: 'Global', label: 'Client Base', numeric: false },
  { value: 'Azure & AWS', label: 'Cloud Platforms', numeric: false },
  { value: 'Tech Lead', label: 'Leadership', numeric: false },
  { value: 'AI-Assisted', label: 'Engineering', numeric: false },
]

function KPICard({ kpi, index }: { kpi: KPI; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.5,
        delay: shouldReduce ? 0 : index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={shouldReduce ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-2 cursor-default"
      style={{ boxShadow: 'var(--shadow-glass)' }}
    >
      <span
        className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg, #0078d4 0%, #50e6ff 100%)' }}
      >
        {kpi.value}
      </span>
      <span className="text-xs font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
        {kpi.label}
      </span>
    </motion.div>
  )
}

export function ImpactSection() {
  return (
    <section
      id="impact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="container-wide">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi, i) => (
            <KPICard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
