'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { assetPath } from '@/lib/utils'

interface KPI {
  value: string
  label: string
  sub: string
}

const kpis: KPI[] = [
  { value: '14+',         label: 'Years Experience',    sub: '2012 → present' },
  { value: '10+',         label: 'Enterprise Projects', sub: 'across 5 industries' },
  { value: '5',           label: 'Countries',           sub: 'US · UK · CA · BE · BG' },
  { value: 'Azure & AWS', label: 'Dual Cloud',          sub: 'production platforms' },
]

interface Client {
  name: string
  logo: string
  url: string
}

const clients: Client[] = [
  { name: 'KPMG',                  logo: '/logos/kpmg.png',     url: 'https://kpmg.com' },
  { name: 'Fugro',                 logo: '/logos/fugro.png',    url: 'https://fugro.com' },
  { name: 'Momentus Technologies', logo: '/logos/momentus.png', url: 'https://gomomentus.com' },
  { name: 'Microsoft',             logo: 'https://www.google.com/s2/favicons?domain=microsoft.com&sz=64', url: 'https://microsoft.com' },
  { name: 'Sirma Solutions',       logo: '/logos/sirma.png',    url: 'https://sirma.com' },
]

function KPICard({ kpi, index }: { kpi: KPI; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{
        duration: shouldReduce ? 0.1 : 0.5,
        delay: shouldReduce ? 0 : index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="glass rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-1 cursor-default"
      style={{ boxShadow: 'var(--shadow-glass)' }}
    >
      <span
        className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent"
        style={{ backgroundImage: 'linear-gradient(135deg, #0078d4 0%, #50e6ff 100%)' }}
      >
        {kpi.value}
      </span>
      <span className="text-xs font-semibold uppercase tracking-widest mt-1" style={{ color: 'var(--text-secondary)' }}>
        {kpi.label}
      </span>
      <span className="text-[11px] leading-tight" style={{ color: 'var(--text-muted)' }}>
        {kpi.sub}
      </span>
    </motion.div>
  )
}

export function ImpactSection() {
  const logosRef = useRef(null)
  const logosInView = useInView(logosRef, { once: true, margin: '-40px 0px' })
  const shouldReduce = useReducedMotion()

  return (
    <section
      id="impact"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
      aria-label="Impact and clients"
    >
      <div className="container-wide space-y-10">

        {/* KPI cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, i) => (
            <KPICard key={kpi.label} kpi={kpi} index={i} />
          ))}
        </div>

        {/* Client logo strip */}
        <div>
          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            <span className="text-xs font-semibold uppercase tracking-widest whitespace-nowrap" style={{ color: 'var(--text-muted)' }}>
              Worked with
            </span>
            <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
          </div>

          {/* Logos */}
          <motion.div
            ref={logosRef}
            className="flex flex-wrap justify-center items-center gap-8 sm:gap-14"
            role="list"
            aria-label="Client logos"
          >
            {clients.map((client, i) => (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                role="listitem"
                aria-label={client.name}
                initial={{ opacity: 0, y: 10 }}
                animate={logosInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{
                  duration: shouldReduce ? 0.1 : 0.45,
                  delay: shouldReduce ? 0 : i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                whileHover={shouldReduce ? {} : { scale: 1.1 }}
                className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300 focus-ring rounded"
              >
                <img
                  src={assetPath(client.logo)}
                  alt={client.name}
                  className="h-8 w-auto object-contain max-w-[110px]"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
