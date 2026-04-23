const steps = [
  { t: 'Discovery', d: 'Scope, constraints, and success.' },
  { t: 'UX', d: 'Flows, IA, and interaction states.' },
  { t: 'Implement', d: 'Ship-ready UI + integration.' },
  { t: 'Test', d: 'Edge cases and regressions.' },
  { t: 'Deploy', d: 'Release, config, and rollback.' },
  { t: 'Observe', d: 'Metrics, fixes, iteration.' },
] as const

export function Pipeline() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-5 sm:p-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(70% 60% at 10% 0%, color-mix(in oklch, var(--color-primary), transparent 84%), transparent 55%), radial-gradient(60% 55% at 95% 15%, color-mix(in oklch, var(--color-accent), transparent 88%), transparent 55%)',
        }}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full"
              style={{ background: 'var(--color-primary)' }}
            />
            <div className="text-sm font-semibold">Build pipeline</div>
          </div>
          <div className="mt-1 text-xs text-muted">How I take work from idea to impact.</div>
        </div>
        <div className="hidden rounded-full border border-border/60 bg-bg/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted sm:block">
          Repeatable
        </div>
      </div>

      {/* Desktop: stepper. Mobile: stacked cards. */}
      <div className="relative mt-5">
        <div
          className="pointer-events-none absolute left-3 right-3 top-3 hidden h-px sm:block"
          style={{
            background:
              'linear-gradient(90deg, transparent, color-mix(in oklch, var(--color-border), transparent 25%), transparent)',
          }}
        />
        <ol className="grid gap-2 sm:grid-cols-6 sm:gap-3">
          {steps.map((s, idx) => (
            <li key={s.t} className="group relative">
              <div className="hidden sm:flex items-center justify-center">
                <span
                  className="relative z-10 inline-flex h-6 w-6 items-center justify-center rounded-full border border-border/70 bg-card text-[10px] font-mono font-bold tabular-nums transition group-hover:-translate-y-0.5"
                  style={{
                    boxShadow:
                      idx === 0
                        ? '0 0 0 4px color-mix(in oklch, var(--color-primary), transparent 88%)'
                        : undefined,
                  }}
                >
                  {idx + 1}
                </span>
              </div>
              <div className="mt-0 rounded-2xl border border-border/60 bg-bg/40 p-4 transition will-change-transform hover:-translate-y-0.5 hover:bg-bg/55 sm:mt-3 sm:p-3">
                <div className="text-xs font-semibold">{s.t}</div>
                <div className="mt-1 text-xs leading-relaxed text-muted sm:hidden">{s.d}</div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3 hidden text-xs text-muted sm:block">
          {steps.map((s, i) => (
            <span key={s.t} className="inline">
              <span className="font-semibold text-fg/90">{s.d}</span>
              {i !== steps.length - 1 ? <span className="text-border"> · </span> : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

