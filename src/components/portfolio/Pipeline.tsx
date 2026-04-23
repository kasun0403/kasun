const steps = ['Discovery', 'UX', 'Implement', 'Test', 'Deploy', 'Observe'] as const

export function Pipeline() {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="text-sm font-semibold">Build pipeline</div>
      <div className="mt-1 text-xs text-muted">How I take work from idea to impact.</div>
      <div className="mt-4 grid gap-2 sm:grid-cols-6">
        {steps.map((s, idx) => (
          <div key={s} className="relative">
            <div className="rounded-2xl border border-border/70 px-3 py-3 text-center text-xs font-semibold transition will-change-transform hover:-translate-y-0.5 hover:bg-[color-mix(in_oklch,var(--color-card),transparent_8%)]">
              {s}
            </div>
            {idx !== steps.length - 1 ? (
              <div className="pointer-events-none hidden sm:block absolute right-[-10px] top-1/2 h-[2px] w-[20px] -translate-y-1/2 bg-[color-mix(in_oklch,var(--color-border),transparent_40%)]" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

