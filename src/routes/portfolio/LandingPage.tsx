import { motion, useReducedMotion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Page, Reveal, Stagger, StaggerItem } from '../../components/portfolio/motion'
import { CountUp } from '../../components/portfolio/CountUp'
import { Pipeline } from '../../components/portfolio/Pipeline'
import { ProgressiveImage } from '../../components/ProgressiveImage'
import { profile } from '../../content/portfolio/profile'
import { stackCollapsibles } from '../../content/portfolio/techStacks'
import { StackCollapsibleList } from '../../components/portfolio/StackCollapsibleList'
import heroPortrait from '../../assets/hero-portrait.png'
import { useHeaderPortrait } from '../../components/portfolio/headerPortrait'

const metrics = [
  { label: 'Years experience', value: 5, suffix: '+' },
  { label: 'Domains shipped', value: profile.positioning.domains.length, suffix: '' },
  { label: 'Projects', value: 12, suffix: '+' },
  { label: 'Release assists', value: 20, suffix: '+' },
] as const

function HeroPortrait() {
  const reduce = useReducedMotion()
  const { inHeader } = useHeaderPortrait()

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm lg:max-w-none"
      initial={false}
      animate={reduce ? {} : { y: [0, -6, 0] }}
      transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="pointer-events-none absolute -inset-8 rounded-[2.25rem] opacity-70 blur-3xl"
        style={{
          background: `radial-gradient(60% 50% at 50% 40%, color-mix(in oklch, var(--color-primary), transparent 72%), transparent 72%)`,
        }}
      />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-card shadow-[0_28px_64px_-36px_color-mix(in_oklch,var(--color-fg),transparent_70%)] ring-1 ring-border/50">
        <div className="relative aspect-[3.2/4] w-full">
          <motion.div
            layoutId={inHeader ? undefined : 'hero-portrait-fly'}
            className="h-full w-full"
            transition={reduce ? undefined : { type: 'spring', stiffness: 520, damping: 46 }}
          >
            <ProgressiveImage
              src={heroPortrait}
              alt={profile.portraitAlt}
              wrapperClassName="h-full w-full"
              imgClassName="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
              sizes="(min-width: 1024px) 36vw, 80vw"
            />
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg/85 via-bg/25 to-transparent px-5 pb-4 pt-16">
          <p className="text-xs text-muted">{profile.location}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    <Page className="space-y-24 pb-8 md:space-y-32">
      {/* Hero — brand, one line, one CTA group, portrait */}
      <section className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16 xl:gap-20">
          <div className="order-2 space-y-6 lg:order-1">
            <Reveal>
              <p className="text-sm font-medium text-muted">
                <span
                  className="mr-2 inline-block h-1.5 w-1.5 rounded-full align-middle"
                  style={{ background: 'var(--color-primary)' }}
                />
                {profile.availabilityLabel}
              </p>
            </Reveal>

            <Reveal delay={0.04}>
              <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {profile.name}
              </h1>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="max-w-lg text-lg leading-relaxed text-muted sm:text-xl">
                I build web and mobile products—clear ownership, measurable outcomes.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                {profile.positioning.shortBio}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
                  style={{ background: 'var(--color-primary)' }}
                >
                  Start a conversation
                </NavLink>
                <NavLink
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition hover:bg-card"
                >
                  View work
                </NavLink>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 text-sm text-muted">
                <a href={`mailto:${profile.email}`} className="hover:text-fg transition">
                  {profile.email}
                </a>
                <span className="hidden text-border sm:inline" aria-hidden>
                  ·
                </span>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-fg transition"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-fg transition"
                >
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Reveal delay={0.06}>
              <HeroPortrait />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Metrics — open row, no heavy cards */}
      <section>
        <Stagger className="grid grid-cols-2 gap-8 border-y border-border/70 py-8 sm:grid-cols-4 sm:gap-6 md:py-10">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div>
                <div className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
                  <CountUp value={m.value} />
                  {m.suffix}
                </div>
                <div className="mt-1 text-sm text-muted">{m.label}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Focus — niches + domains as plain lists */}
      <section className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Focus</h2>
            <ul className="mt-4 space-y-2.5">
              {profile.positioning.niches.map((n) => (
                <li key={n} className="flex items-start gap-3 text-base text-fg">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: 'var(--color-accent)' }}
                  />
                  {n}
                </li>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              {profile.positioning.workWithAi.summary}
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Domains</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
              {profile.positioning.domains.join(' · ')}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services — single clear section */}
      <section className="space-y-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Services</h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              What I deliver for teams and hiring managers.
            </p>
          </div>
        </Reveal>
        <div className="divide-y divide-border/70 border-y border-border/70">
          {profile.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr] sm:gap-8 sm:py-7">
                <span
                  className="font-mono text-sm tabular-nums text-muted"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Project types — light grid */}
      <section className="space-y-8">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">
              Project types
            </h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Where I ship most often.
            </p>
          </div>
        </Reveal>
        <Stagger className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {profile.projectTypes.map((p) => (
            <StaggerItem key={p.title}>
              <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Pipeline */}
      <section>
        <Reveal>
          <div className="mb-6 max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Process</h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              From idea to impact.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <Pipeline />
        </Reveal>
      </section>

      {/* Stack */}
      <section className="space-y-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted">Stack</h2>
            <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Tools I reach for by default.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.04}>
          <div className="max-w-3xl">
            <StackCollapsibleList categories={stackCollapsibles} compact />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section>
        <Reveal>
          <div className="flex flex-col gap-6 border-t border-border/70 pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-lg">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Let’s see if we’re a fit.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                Share the role or project, timeline, and what success looks like—I’ll respond with
                clarity.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
                style={{ background: 'var(--color-fg)' }}
              >
                Get in touch
              </NavLink>
              <NavLink
                to="/work"
                className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-semibold text-fg transition hover:bg-card"
              >
                Browse work
              </NavLink>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
