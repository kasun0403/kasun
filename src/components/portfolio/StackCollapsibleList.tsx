import type { StackCategory } from '../../content/portfolio/techStacks'

type Props = {
  categories: StackCategory[]
  /** Tighter padding on the landing page grid */
  compact?: boolean
}

export function StackCollapsibleList({ categories, compact }: Props) {
  return (
    <div className={compact ? 'space-y-2' : 'space-y-2.5'}>
      {categories.map((c) => (
        <details
          key={c.id}
          className="group rounded-2xl border border-border/70 bg-card/30 open:border-border"
        >
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-2xl px-4 py-3 text-sm outline-none transition hover:bg-bg/30 [&::-webkit-details-marker]:hidden"
          >
            <span className="min-w-0 text-left">
              <span className="block font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                {c.kicker}
              </span>
              <span className="mt-0.5 block font-semibold text-fg">{c.label}</span>
            </span>
            <span
              className="shrink-0 text-[10px] text-muted transition-transform duration-200 group-open:rotate-180"
              aria-hidden
            >
              ▼
            </span>
          </summary>
          <ul
            className={`space-y-1.5 border-t border-border/50 pl-4 pr-3 text-sm text-muted ${
              compact ? 'mt-0 pb-3 pt-2.5' : 'mt-0 pb-4 pt-3'
            }`}
          >
            {c.items.map((i) => (
              <li key={i} className="relative pl-3.5 [text-wrap:pretty] before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-primary/50">
                {i}
              </li>
            ))}
            {c.etc ? (
              <li className="mt-2 border-t border-border/40 pt-2 pl-3.5 text-xs [text-wrap:pretty] text-muted/90">
                <span className="font-medium text-muted not-italic">etc.</span> {c.etc}
              </li>
            ) : null}
          </ul>
        </details>
      ))}
    </div>
  )
}
