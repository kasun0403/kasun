type AvailabilityIndicatorProps = {
  label?: string
  className?: string
  compact?: boolean
}

export function AvailabilityIndicator({
  label = 'Available for opportunities',
  className,
  compact = false,
}: AvailabilityIndicatorProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 text-muted',
        compact ? 'text-[11px] uppercase tracking-[0.12em]' : 'text-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden>
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-35" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
      </span>
      <span>{compact ? 'Available' : label}</span>
    </span>
  )
}
