import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  id?: string
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
  centered = true,
  id,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 md:mb-16', centered && 'text-center', className)}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-azure-500 mb-3">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-1 w-16 rounded-full',
          centered ? 'mx-auto' : ''
        )}
        style={{ background: 'linear-gradient(90deg, #0078d4, #50e6ff)' }}
      />
    </div>
  )
}
