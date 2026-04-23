import { Page, Reveal, Stagger, StaggerItem } from '../../components/portfolio/motion'
import { InfoCardGrid, type InfoCard } from '../../components/portfolio/Infographics'
import { profile } from '../../content/portfolio/profile'

const bestAt = [
  'Flutter mobile apps with clean Material UI and solid state management',
  'Web funnels (e‑commerce, affiliate + GA) with React, TypeScript, Vite, react-router-dom, Tailwind, Capacitor, and Firebase',
  'Capacitor wrappers + store releases: iOS and Android builds, signing, and submission support',
  'AI‑augmented workflows: code assistants, copilots, and LLM tools used with clear review and ownership of what ships',
] as const

const values = [
  { title: 'Clarity', text: 'Clean problem statements and honest constraints.' },
  { title: 'Velocity', text: 'Ship small, learn fast, iterate confidently.' },
  { title: 'Craft', text: 'Details matter—UX, performance, and accessibility.' },
] as const

const principles: InfoCard[] = [
  {
    icon: 'wand',
    title: 'Delight is functional',
    text: 'Tiny UX details reduce friction and make flows feel obvious.',
    accent: 'primary2',
  },
  {
    icon: 'shield',
    title: 'Trust through quality',
    text: 'Accessible defaults, resilient states, and guardrails around edge cases.',
    accent: 'primary',
  },
  {
    icon: 'flow',
    title: 'Systems over one-offs',
    text: 'Tokens, reusable components, and patterns that scale with the product.',
    accent: 'accent',
  },
] as const

export default function AboutPage() {
  return (
    <Page className="space-y-6">
      <header className="space-y-3">
        <div className="text-xs font-semibold text-muted">Story</div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          I’m {profile.name}. With 5+ years across mobile and web, I build products that are visually sharp, technically
          solid, and measurable—mobile (Flutter) and web (React, TypeScript, Vite, Tailwind, react-router-dom, Capacitor,
          and Firebase) for routing, app-store-ready shells, auth, data, and hosting.
        </p>
      </header>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-xs font-semibold text-muted">{profile.positioning.workWithAi.label}</div>
          <p className="mt-2 max-w-3xl text-sm text-muted sm:text-base">{profile.positioning.workWithAi.text}</p>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-xs font-semibold text-muted">Project types</div>
          <div className="mt-2 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.projectTypes.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border/70 p-4">
                <div className="text-sm font-semibold">{p.title}</div>
                <div className="mt-2 text-sm text-muted">{p.text}</div>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-xs font-semibold text-muted">Focus</div>
          <div className="mt-2 grid gap-3 lg:grid-cols-2">
            <div className="rounded-2xl border border-border/70 p-4">
              <div className="text-sm font-semibold">Domains</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
                {profile.positioning.domains.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border/70 p-4">
              <div className="text-sm font-semibold">What I bring to a team</div>
              <p className="mt-2 text-sm text-muted">
                I’m product-minded: clean UI, predictable state, and careful integrations. I
                can jump into an existing codebase, ship user-visible improvements quickly,
                and help harden the product before a release.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <section className="space-y-4">
        <div>
          <div className="text-xs font-semibold text-muted">Principles</div>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight">What you’ll feel.</h2>
        </div>
        <Reveal>
          <InfoCardGrid items={[...principles]} />
        </Reveal>
      </section>

      <section className="grid gap-3 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">What I’m best at</div>
            <Stagger className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted" stagger={0.05}>
              {bestAt.map((b) => (
                <StaggerItem key={b}>
                  <li>{b}</li>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">How I work</div>
            <Stagger className="mt-3 grid gap-2" stagger={0.06}>
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <div className="rounded-2xl border border-border/70 p-4">
                    <div className="text-xs font-semibold text-muted">{v.title}</div>
                    <div className="mt-1 text-sm">{v.text}</div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </section>

      <Reveal>
        <section className="glass rounded-3xl p-5">
          <div className="text-sm font-semibold">Looking for</div>
          <p className="mt-2 text-sm text-muted">
            Teams that want a senior engineer who can own outcomes end‑to‑end: clarify the
            problem, ship iteratively, and raise the bar for performance, UX, and reliability.
          </p>
        </section>
      </Reveal>
    </Page>
  )
}

