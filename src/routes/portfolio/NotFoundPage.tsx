import { NavLink } from 'react-router-dom'
import { Page } from '../../components/portfolio/motion'

export default function NotFoundPage() {
  return (
    <Page className="space-y-4">
      <div className="glass rounded-3xl p-6">
        <div className="text-xs font-semibold text-muted">404</div>
        <div className="mt-2 text-2xl font-semibold tracking-tight">Page not found</div>
        <div className="mt-2 text-sm text-muted">
          The page you’re looking for doesn’t exist (or moved).
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <NavLink
            to="/"
            className="rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_10%)] px-5 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_4%)]"
          >
            Go home
          </NavLink>
          <NavLink
            to="/work"
            className="rounded-full border border-border/80 px-5 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_8%)]"
          >
            Browse work
          </NavLink>
        </div>
      </div>
    </Page>
  )
}

