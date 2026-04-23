import { NavLink, useParams } from 'react-router-dom'
import { Page } from '../../components/portfolio/motion'
import { getProjectBySlug } from '../../content/portfolio/projects'

function Block({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="glass rounded-3xl p-5">
      <div className="text-xs font-semibold text-muted">{title}</div>
      <div className="mt-3 text-sm leading-relaxed">{children}</div>
    </section>
  )
}

export default function WorkDetailPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <Page className="space-y-4">
        <div className="text-sm text-muted">Project not found.</div>
        <NavLink to="/work" className="text-sm font-semibold hover:underline">
          Back to work
        </NavLink>
      </Page>
    )
  }

  return (
    <Page className="space-y-6">
      <header className="space-y-3">
        <NavLink to="/work" className="text-sm font-semibold text-muted hover:text-fg">
          ← Work
        </NavLink>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">{project.summary}</p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <aside className="glass sticky top-24 rounded-3xl p-5">
          <div className="text-xs font-semibold text-muted">Role</div>
          <div className="mt-1 text-sm font-semibold">{project.role}</div>
          <div className="mt-4 text-xs font-semibold text-muted">Stack</div>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border/70 px-3 py-1 text-xs font-semibold text-muted"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-4 text-xs font-semibold text-muted">Links</div>
          <div className="mt-2 grid gap-2">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-2xl border border-border/70 px-3 py-2 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-4 text-xs font-semibold text-muted">Highlights</div>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </aside>

        <div className="space-y-4">
          {project.caseStudy.map((b, idx) => {
            if (b.type === 'context') {
              return (
                <Block key={idx} title="Context">
                  <p className="text-muted">{b.text}</p>
                </Block>
              )
            }
            const title =
              b.type === 'problem'
                ? 'Problem'
                : b.type === 'constraints'
                  ? 'Constraints'
                  : b.type === 'solution'
                    ? 'Solution'
                    : b.type === 'results'
                      ? 'Results'
                      : 'What I’d do next'
            return (
              <Block key={idx} title={title}>
                <ul className="list-disc space-y-1 pl-5 text-muted">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </Block>
            )
          })}
        </div>
      </div>
    </Page>
  )
}

