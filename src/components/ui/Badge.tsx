import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors duration-150',
        variant === 'default' && 'skill-badge',
        variant === 'accent' && [
          'bg-azure-500/10 text-azure-400 border border-azure-500/30',
          'dark:text-[#50e6ff] dark:bg-azure-500/10 dark:border-azure-500/30',
        ],
        variant === 'outline' && 'border border-[var(--border-color)] text-[var(--text-muted)]',
        className
      )}
    >
      {children}
    </span>
  )
}
