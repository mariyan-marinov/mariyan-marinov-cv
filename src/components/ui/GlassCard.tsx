'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({ children, className, hover = false, glow = false }: GlassCardProps) {
  const Comp = hover ? motion.div : 'div'

  if (hover) {
    return (
      <motion.div
        className={cn(
          'glass rounded-2xl p-6 transition-colors duration-200',
          glow && 'hover:glow-azure',
          className
        )}
        whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.2), 0 0 20px rgba(0,120,212,0.15)' }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        className
      )}
    >
      {children}
    </div>
  )
}
