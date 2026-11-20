import { motion, useReducedMotion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function Reveal({
  children,
  className,
  delay = 0,
}: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
