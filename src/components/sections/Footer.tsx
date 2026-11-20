import { profile } from '../../content/portfolio/profile'

export function Footer() {
  return (
    <footer>
      <div className="section-shell flex flex-col gap-5 border-t border-border py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-base font-semibold tracking-[-0.03em] text-fg">
            Kasun Tharanga
          </p>
          <p className="mt-1 text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet"
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-quiet"
          >
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="link-quiet">
            Email
          </a>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="link-quiet"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}
