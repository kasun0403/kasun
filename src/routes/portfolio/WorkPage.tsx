import { NavLink } from 'react-router-dom'
import { Page, Reveal, Stagger, StaggerItem } from '../../components/portfolio/motion'
import { CountUp } from '../../components/portfolio/CountUp'
import { keyProjectHighlightGroups, workExperience } from '../../content/portfolio/experience'

const yearSpanLabel = '2021–present'
const toolsAcrossProjects = 12
const differentTeams = 5

export default function WorkPage() {
  return (
    <Page className="space-y-10 pb-4">
      <section className="relative">
        <div
          className="pointer-events-none absolute -left-[min(4rem,5vw)] top-0 hidden h-32 w-px sm:block"
          style={{
            background: `linear-gradient(180deg, var(--color-primary-2), transparent)`,
            opacity: 0.55,
          }}
        />
        <header className="space-y-4">
          <Reveal>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.04}>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              <span className="bg-gradient-to-r from-[var(--color-fg)] to-[var(--color-muted)] bg-clip-text text-transparent">
                Work
              </span>
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              A concise portfolio: scope, stack, and what shipped you can share with a hiring manager or client—plus
              what I would improve next.
            </p>
          </Reveal>
        </header>
      </section>

      <section className="space-y-5">
        <Reveal>
          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Experience</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Roles & teams</p>
            <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
              Flutter-focused delivery, with ongoing web support for client projects.
            </p>
          </div>
        </Reveal>
        <div className="space-y-3">
          {workExperience.map((job, i) => (
            <Reveal key={`${job.company}-${job.range}`} delay={i * 0.04}>
              <div className="rounded-3xl border border-border/60 bg-[color-mix(in_oklch,var(--color-card),transparent_4%)] p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-fg">{job.title}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-medium text-fg underline decoration-border/80 underline-offset-4 transition hover:decoration-[var(--color-primary)]"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="font-medium text-fg">{job.company}</span>
                      )}
                      {job.note ? (
                        <span className="text-muted">
                          {' '}
                          · {job.note}
                        </span>
                      ) : null}
                    </p>
                  </div>
                  <p className="shrink-0 text-xs font-mono font-semibold uppercase tracking-wider text-muted sm:text-right">
                    {job.range}
                  </p>
                </div>
                <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm leading-relaxed text-muted marker:text-[color-mix(in_oklch,var(--color-primary),transparent_15%)]">
                  {job.bullets.map((b) => (
                    <li key={b} className="pl-1 [text-wrap:balance]">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div>
            <h3 className="text-sm font-semibold text-fg">Key project highlights</h3>
            <div className="mt-6 space-y-8">
              {keyProjectHighlightGroups.map((group) => (
                <div key={group.domain}>
                  <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                    {group.domain}
                  </h4>
                  {group.intro ? (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{group.intro}</p>
                  ) : null}
                  <ul className="mt-4 space-y-4">
                    {group.projects.map((kp) => (
                      <li
                        key={kp.name}
                        className="rounded-2xl border border-border/50 bg-bg/30 p-4 sm:p-5"
                      >
                        <p className="text-sm font-semibold text-fg">{kp.name}</p>
                        <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-muted">
                          {kp.points.map((p) => (
                            <li key={p} className="pl-1 [text-wrap:balance]">
                              {p}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Stagger className="grid gap-3 sm:grid-cols-3" stagger={0.06}>
        <StaggerItem>
          <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-[color-mix(in_oklch,var(--color-card),transparent_8%)] to-transparent p-5">
            <div className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
              <CountUp value={differentTeams} format={(n) => `${n}+`} />
            </div>
            <div className="mt-1 text-sm text-muted">Different teams</div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_92%)] opacity-0 blur-2xl transition group-hover:opacity-100" />
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-[color-mix(in_oklch,var(--color-card),transparent_6%)] to-transparent p-5">
            <div className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">{yearSpanLabel}</div>
            <div className="mt-1 text-sm text-muted">Year span</div>
          </div>
        </StaggerItem>
        <StaggerItem>
          <div className="h-full overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-[color-mix(in_oklch,var(--color-card),transparent_6%)] to-transparent p-5">
            <div className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
              <CountUp value={toolsAcrossProjects} format={(n) => `${n}+`} />
            </div>
            <div className="mt-1 text-sm text-muted">Tools across projects</div>
          </div>
        </StaggerItem>
      </Stagger>

      <section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 p-8 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{
                background: `radial-gradient(80% 120% at 0% 0%, color-mix(in oklch, var(--color-primary-2), transparent 80%), transparent 60%), radial-gradient(70% 100% at 100% 100%, color-mix(in oklch, var(--color-accent), transparent 82%), transparent 55%)`,
              }}
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Interested in similar work?</h2>
                <p className="mt-2 max-w-lg text-sm text-muted sm:text-base">
                  Share the product or role, timeline, and the outcome you need to show stakeholders—I’ll be direct
                  about fit.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-fg)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)] transition hover:opacity-90"
                >
                  Start a project
                </NavLink>
                <NavLink
                  to="/skills"
                  className="inline-flex items-center justify-center rounded-full border border-fg/20 bg-[color-mix(in_oklch,var(--color-bg),transparent_5%)] px-5 py-3 text-sm font-semibold text-fg backdrop-blur-sm"
                >
                  Skills & stack
                </NavLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
