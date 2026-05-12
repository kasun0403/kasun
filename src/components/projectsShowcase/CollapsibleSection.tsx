import type { ReactNode } from 'react'

const summaryRow =
  'flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 outline-none [&::-webkit-details-marker]:hidden sm:px-6 sm:py-5'

type CollapsibleSectionProps = {
  title: string
  subtitle?: string
  /** When true, section starts expanded */
  defaultOpen?: boolean
  variant?: 'light' | 'dark'
  children: ReactNode
}

/**
 * Native expand/collapse for projects showcase. Uses <details> for accessibility without JS state.
 */
export function CollapsibleSection({
  title,
  subtitle,
  defaultOpen = true,
  variant = 'light',
  children,
}: CollapsibleSectionProps) {
  const shell =
    variant === 'dark'
      ? 'group overflow-hidden rounded-3xl border-2 border-teal-500/25 bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white shadow-[0_28px_90px_-40px_rgba(15,118,110,0.45)]'
      : 'group overflow-hidden rounded-3xl border border-teal-200/70 bg-white/95 shadow-[0_12px_40px_-24px_rgba(15,118,110,0.2)]'

  const summary =
    variant === 'dark'
      ? `${summaryRow} border-b border-white/10 bg-black/25 hover:bg-black/35`
      : `${summaryRow} border-b border-teal-100/90 bg-gradient-to-r from-teal-50/50 to-white hover:from-teal-50/80`

  const titleClass = variant === 'dark' ? 'text-lg font-black sm:text-xl' : 'text-lg font-black text-slate-950 sm:text-xl'
  const subClass =
    variant === 'dark' ? 'mt-1 block text-sm font-medium text-teal-100/90' : 'mt-1 block text-sm font-medium text-slate-600'

  return (
    <details open={defaultOpen} className={shell}>
      <summary className={summary}>
        <div className="min-w-0 flex-1 text-left">
          <span className={titleClass}>{title}</span>
          {subtitle ? <span className={subClass}>{subtitle}</span> : null}
        </div>
        <span
          aria-hidden
          className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-current/15 bg-white/10 text-base leading-none text-current transition-transform duration-200 group-open:rotate-180"
        >
          ▼
        </span>
      </summary>
      <div className={variant === 'dark' ? 'border-t border-white/5' : 'border-t border-teal-100/60'}>
        <div className={variant === 'dark' ? 'px-5 pb-8 pt-4 sm:px-9 sm:pb-10' : 'px-5 pb-8 pt-4 sm:px-7'}>{children}</div>
      </div>
    </details>
  )
}

type MarketingSubFoldProps = {
  title: string
  defaultOpen?: boolean
  children: ReactNode
}

/** Nested <details> for subsections inside the dark “What we build” card */
export function MarketingSubFold({ title, defaultOpen = true, children }: MarketingSubFoldProps) {
  return (
    <details open={defaultOpen} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05]">
      <summary
        className={`${summaryRow} border-b border-white/5 bg-black/15 px-4 py-3 text-left text-sm font-bold text-white hover:bg-black/25 sm:px-5`}
      >
        <span className="min-w-0 flex-1">{title}</span>
        <span
          aria-hidden
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/5 text-xs transition-transform duration-200 group-open:rotate-180"
        >
          ▼
        </span>
      </summary>
      <div className="border-t border-white/5 px-4 py-4 sm:px-5 sm:py-5">{children}</div>
    </details>
  )
}
