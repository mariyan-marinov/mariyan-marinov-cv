'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = 'up',
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  const getInitial = (): object => {
    if (shouldReduceMotion) return { opacity: 0 }
    const offsets: Record<string, object> = {
      up:    { opacity: 0, y: 40 },
      down:  { opacity: 0, y: -40 },
      left:  { opacity: 0, x: 40 },
      right: { opacity: 0, x: -40 },
      none:  { opacity: 0 },
    }
    return offsets[direction] ?? { opacity: 0, y: 40 }
  }

  const getAnimate = (): object => {
    if (shouldReduceMotion) return { opacity: 1 }
    return { opacity: 1, y: 0, x: 0 }
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitial() as Parameters<typeof motion.div>[0]['initial']}
      animate={(isInView ? getAnimate() : getInitial()) as Parameters<typeof motion.div>[0]['animate']}
      transition={{
        duration: shouldReduceMotion ? 0.1 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedList({
  children,
  className,
  once = true,
}: {
  children: React.ReactNode
  className?: string
  once?: boolean
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-60px 0px' })
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      variants={shouldReduceMotion ? undefined : containerVariants}
      initial={shouldReduceMotion ? { opacity: 0 } : 'hidden'}
      animate={isInView ? (shouldReduceMotion ? { opacity: 1 } : 'visible') : (shouldReduceMotion ? { opacity: 0 } : 'hidden')}
      className={className}
    >
      {children}
    </motion.div>
  )
}
