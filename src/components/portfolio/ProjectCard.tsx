import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import type { Project } from '../../content/portfolio/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 420, damping: 28 }}
      className="glass group rounded-3xl p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs text-muted">{project.year}</div>
          <div className="mt-1 text-lg font-semibold tracking-tight">{project.title}</div>
          <div className="mt-1 text-sm text-muted">{project.summary}</div>
        </div>
        <div className="hidden sm:flex flex-wrap items-center justify-end gap-1">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/70 px-2 py-1 text-[11px] font-semibold text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.highlights.slice(0, 2).map((h) => (
          <div
            key={h}
            className="rounded-2xl bg-[color-mix(in_oklch,var(--color-card),transparent_18%)] px-3 py-2 text-xs text-fg/90"
          >
            {h}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="text-[11px] text-muted">
              {s}
            </span>
          ))}
        </div>
        <NavLink
          to={`/work/${project.slug}`}
          className="rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_12%)] px-4 py-2 text-sm font-semibold text-fg hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_6%)]"
        >
          View
        </NavLink>
      </div>
    </motion.div>
  )
}

