import { Page, Reveal, Stagger, StaggerItem } from '../../components/portfolio/motion'
import { TechRadar, type RadarItem } from '../../components/portfolio/TechRadar'
import { stackCollapsibles } from '../../content/portfolio/techStacks'
import { StackCollapsibleList } from '../../components/portfolio/StackCollapsibleList'
import { profile } from '../../content/portfolio/profile'

const radar: RadarItem[] = [
  // Web — using daily
  { label: 'React 19', category: 'Web', level: 'Using daily', angleDeg: 5 },
  { label: 'TypeScript', category: 'Web', level: 'Using daily', angleDeg: 45 },
  { label: 'Vite', category: 'Web', level: 'Using daily', angleDeg: 85 },
  { label: 'Vercel', category: 'Web', level: 'Comfortable', angleDeg: 105 },
  { label: 'react-router-dom', category: 'Web', level: 'Using daily', angleDeg: 125 },
  { label: 'Tailwind', category: 'Web', level: 'Using daily', angleDeg: 165 },
  { label: 'Capacitor', category: 'Web', level: 'Using daily', angleDeg: 205 },
  { label: 'Firebase', category: 'Web', level: 'Using daily', angleDeg: 245 },
  // Mobile — using daily
  { label: 'Flutter', category: 'Mobile', level: 'Using daily', angleDeg: 285 },
  { label: 'Dart', category: 'Mobile', level: 'Using daily', angleDeg: 325 },
  // Backend & integrations
  { label: 'REST APIs', category: 'Backend', level: 'Comfortable', angleDeg: 25 },
  { label: 'Google Maps API', category: 'Integrations', level: 'Comfortable', angleDeg: 145 },
  // Mobile state
  { label: 'Provider', category: 'Mobile', level: 'Comfortable', angleDeg: 265 },
  { label: 'Bloc', category: 'Mobile', level: 'Exploring', angleDeg: 350 },
] as const

const timeline = [
  {
    year: '2025',
    title: 'Web projects (ongoing)',
    text: 'Client and product work with React 19, TypeScript, Vite, react-router-dom, Tailwind, Capacitor, and Firebase—SPAs, funnels, and mobile-ready web shells.',
  },
  {
    year: '2023–2025',
    title: 'M.Sc. in Information Technology',
    text: 'Kyoto College of Graduate Studies for Informatics, Japan.',
  },
  {
    year: '2017–2022',
    title: 'B.Sc. in Business Information Systems (Special)',
    text: 'University of Sri Jayewardenepura, Sri Lanka (English medium). Second class honours.',
  },
] as const

export default function SkillsPage() {
  return (
    <Page className="space-y-6">
      <header className="space-y-3">
        <div className="text-xs font-semibold text-muted">Tech</div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Skills & stack</h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          5+ years shipping mobile and web. Day to day: React 19, TypeScript, Vite, react-router-dom, Tailwind,
          Capacitor, and Firebase for web; Flutter for mobile; and the same web stack for e‑commerce, affiliate
          + GA, and portfolio work. {profile.positioning.workWithAi.summary}
        </p>
      </header>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-sm font-semibold">Stacks I ship with</div>
          <div className="mt-1 text-xs text-muted">
            Open a group for the sub stack—day-to-day and fuller client work are covered together.
          </div>
          <div className="mt-4 max-w-3xl">
            <StackCollapsibleList categories={stackCollapsibles} />
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-sm font-semibold">Types of projects</div>
          <div className="mt-1 text-xs text-muted">Where this stack usually shows up in my work.</div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.projectTypes.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/70 p-4">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-muted">{p.text}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="grid gap-3 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">Tech radar</div>
            <div className="mt-1 text-xs text-muted">
              Rings: using daily / comfortable / exploring.
            </div>
            <div className="mt-5 grid w-full place-items-center overflow-x-auto">
              <TechRadar items={[...radar]} size={600} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">Timeline</div>
            <div className="mt-1 text-xs text-muted">Where the energy went.</div>
            <Stagger className="mt-5 space-y-4" stagger={0.08}>
              {timeline.map((t) => (
                <StaggerItem key={t.year}>
                  <div className="relative pl-6">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-[var(--color-primary)]" />
                    <div className="absolute left-[5px] top-5 h-[calc(100%-12px)] w-[2px] bg-[color-mix(in_oklch,var(--color-border),transparent_35%)]" />
                    <div className="inline-flex items-center gap-2">
                      <span className="rounded-full border border-border/70 px-2 py-1 text-[11px] font-semibold text-muted">
                        {t.year}
                      </span>
                      <div className="text-sm font-semibold">{t.title}</div>
                    </div>
                    <div className="mt-1 text-sm text-muted">{t.text}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}

