import { motion, useReducedMotion } from 'framer-motion'

export type InfoCard = {
  title: string
  text: string
  accent?: 'primary' | 'primary2' | 'accent'
  icon: 'spark' | 'bolt' | 'chart' | 'shield' | 'wand' | 'flow'
}

function accentVars(accent: InfoCard['accent']) {
  if (accent === 'primary2') return { fg: 'var(--color-primary-2)', bg: 'color-mix(in oklch, var(--color-primary-2), transparent 86%)' }
  if (accent === 'accent') return { fg: 'var(--color-accent)', bg: 'color-mix(in oklch, var(--color-accent), transparent 86%)' }
  return { fg: 'var(--color-primary)', bg: 'color-mix(in oklch, var(--color-primary), transparent 86%)' }
}

function Icon({ name, color }: { name: InfoCard['icon']; color: string }) {
  const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: color, strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }

  switch (name) {
    case 'spark':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2l1.2 6.1L19 10l-5.8 1.9L12 18l-1.2-6.1L5 10l5.8-1.9L12 2z" />
        </svg>
      )
    case 'bolt':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M13 2L3 14h7l-1 8 12-14h-7l-1-6z" />
        </svg>
      )
    case 'chart':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 19V5" />
          <path d="M4 19h16" />
          <path d="M8 16v-5" />
          <path d="M12 16V8" />
          <path d="M16 16v-7" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M12 2l8 4v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4z" />
          <path d="M9 12l2 2 4-5" />
        </svg>
      )
    case 'wand':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M4 20l10-10" />
          <path d="M14 10l6-6" />
          <path d="M15 3l2 2" />
          <path d="M13 5l2 2" />
          <path d="M6 18l2 2" />
        </svg>
      )
    case 'flow':
      return (
        <svg {...common} aria-hidden="true">
          <path d="M7 7h10" />
          <path d="M7 17h10" />
          <path d="M7 7v10" />
          <path d="M17 7v10" />
          <path d="M9 9h6v6H9z" />
        </svg>
      )
  }
}

export function InfoCardGrid({ items }: { items: InfoCard[] }) {
  const reduce = useReducedMotion()

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => {
        const a = accentVars(it.accent)
        return (
          <motion.div
            key={it.title}
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={reduce ? undefined : { scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 420, damping: 28 }}
            className="glass group rounded-3xl p-5"
          >
            <div className="flex items-start gap-3">
              <div
                className="grid h-10 w-10 place-items-center rounded-2xl border border-border/70"
                style={{ background: a.bg }}
              >
                <Icon name={it.icon} color={a.fg} />
              </div>
              <div>
                <div className="text-sm font-semibold tracking-tight">{it.title}</div>
                <div className="mt-1 text-sm text-muted">{it.text}</div>
              </div>
            </div>
            <div
              className="pointer-events-none mt-4 h-px w-full opacity-70"
              style={{
                background:
                  'linear-gradient(90deg, transparent, color-mix(in oklch, var(--color-border), transparent 20%), transparent)',
              }}
            />
            <div className="mt-3 text-xs font-semibold text-muted">
              Designed for crisp UX and measurable outcomes.
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

