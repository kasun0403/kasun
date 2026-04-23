import { useEffect, useMemo, useRef, useState } from 'react'

function useInViewOnce<T extends Element>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || inView) return

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.2 },
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [inView])

  return { ref, inView } as const
}

export function CountUp({
  value,
  durationMs = 900,
  format,
}: {
  value: number
  durationMs?: number
  format?: (n: number) => string
}) {
  const { ref, inView } = useInViewOnce<HTMLSpanElement>()
  const [current, setCurrent] = useState(0)

  const fmt = useMemo(() => format ?? ((n: number) => n.toLocaleString()), [format])
  const reduce = useMemo(
    () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false,
    [],
  )
  const display = reduce && inView ? value : current

  useEffect(() => {
    if (!inView) return
    if (reduce) return

    const start = performance.now()
    const from = 0
    const to = value

    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs)
      const eased = 1 - Math.pow(1 - t, 3)
      setCurrent(Math.round(from + (to - from) * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs, inView, reduce, value])

  return (
    <span ref={ref} className="tabular-nums">
      {fmt(display)}
    </span>
  )
}

