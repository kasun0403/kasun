type SectionHeadingProps = {
  label: string
  title: string
  className?: string
}

export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={['max-w-2xl', className].filter(Boolean).join(' ')}>
      <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
        <span className="inline-block h-px w-6 bg-accent" aria-hidden />
        {label}
      </p>
      <h2 className="mt-4 font-display text-[1.85rem] leading-[1.15] tracking-[-0.03em] text-fg sm:text-4xl md:text-[2.65rem]">
        {title}
      </h2>
    </div>
  )
}
