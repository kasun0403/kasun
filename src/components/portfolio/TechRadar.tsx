type RadarLevel = 'Using daily' | 'Comfortable' | 'Exploring'

export type RadarItem = {
  label: string
  category: string
  level: RadarLevel
  angleDeg: number
}

const ringForLevel: Record<RadarLevel, number> = {
  'Using daily': 0.28,
  Comfortable: 0.52,
  Exploring: 0.78,
}

const levelColor: Record<RadarLevel, string> = {
  'Using daily': 'var(--color-primary)',
  Comfortable: 'var(--color-primary-2)',
  Exploring: 'var(--color-accent)',
}

export function TechRadar({
  items,
  size = 520,
}: {
  items: RadarItem[]
  size?: number
}) {
  const c = size / 2
  const rings = [
    { r: c * ringForLevel['Using daily'], label: 'Using daily' as const },
    { r: c * ringForLevel.Comfortable, label: 'Comfortable' as const },
    { r: c * ringForLevel.Exploring, label: 'Exploring' as const },
  ]

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width="100%"
      height="100%"
      role="img"
      aria-label="Tech radar"
      className="max-w-[560px]"
    >
      <defs>
        <radialGradient id="fade" cx="50%" cy="50%" r="52%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>

      <rect x="0" y="0" width={size} height={size} fill="url(#fade)" />

      {rings.map((ring) => (
        <g key={ring.label}>
          <circle
            cx={c}
            cy={c}
            r={ring.r}
            fill="none"
            stroke="color-mix(in oklch, var(--color-border), transparent 30%)"
            strokeWidth="1"
          />
          <text
            x={c}
            y={c - ring.r + 18}
            textAnchor="middle"
            fontSize="12"
            fill="var(--color-muted)"
          >
            {ring.label}
          </text>
        </g>
      ))}

      <line
        x1={c}
        y1={12}
        x2={c}
        y2={size - 12}
        stroke="color-mix(in oklch, var(--color-border), transparent 40%)"
      />
      <line
        x1={12}
        y1={c}
        x2={size - 12}
        y2={c}
        stroke="color-mix(in oklch, var(--color-border), transparent 40%)"
      />

      {items.map((it) => {
        const r = c * ringForLevel[it.level]
        const a = (it.angleDeg * Math.PI) / 180
        const x = c + Math.cos(a) * r
        const y = c + Math.sin(a) * r
        return (
          <g key={it.label}>
            <circle
              cx={x}
              cy={y}
              r="6"
              fill={levelColor[it.level]}
              opacity="0.9"
            />
            <circle
              cx={x}
              cy={y}
              r="10"
              fill="transparent"
              stroke={levelColor[it.level]}
              opacity="0.25"
            />
            <text
              x={x + 14}
              y={y + 4}
              fontSize="12"
              fill="var(--color-fg)"
            >
              {it.label}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

