import { motion, useReducedMotion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Page, Reveal, Stagger, StaggerItem } from '../../components/portfolio/motion'
import { CountUp } from '../../components/portfolio/CountUp'
import { Pipeline } from '../../components/portfolio/Pipeline'
import { profile } from '../../content/portfolio/profile'
import { stackCollapsibles } from '../../content/portfolio/techStacks'
import { StackCollapsibleList } from '../../components/portfolio/StackCollapsibleList'
import heroPortrait from '../../assets/hero-portrait.png'

const nowChips = profile.positioning.niches

const metrics = [
  { label: 'Yrs experience · mobile & web', value: 5, suffix: '+' },
  { label: 'Domains shipped in', value: profile.positioning.domains.length, suffix: '' },
  { label: 'Projects shipped or assisted', value: 12, suffix: '+' },
  { label: 'Bugfixes & release assists', value: 20, suffix: '+' },
] as const

type ValueProp = {
  title: string
  text: string
  key: 'primary' | 'primary2' | 'accent'
  tiers?: { label: string; text: string }[]
}

const valueProps: readonly ValueProp[] = [
  {
    title: 'Performance that holds up in review',
    text: 'Fast mobile screens, lean web bundles, and flows that stay smooth under real traffic.',
    key: 'primary',
  },
  {
    title: 'UX you can show leadership',
    text: 'Material on Flutter, disciplined layouts on web, and theming that reads as one product.',
    key: 'primary2',
  },
  {
    title: 'Release & deploy',
    text: 'Publish mobile apps to the App Store and Play Store, plus set up hosting, domains, and production-ready web releases.',
    key: 'accent',
  },
] 

const accentFromKey = (k: ValueProp['key']) => {
  if (k === 'primary2') return 'var(--color-primary-2)'
  if (k === 'accent') return 'var(--color-accent)'
  return 'var(--color-primary)'
}

function HeroPortrait() {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className="relative mx-auto w-full max-w-md lg:max-w-none"
      initial={false}
      animate={reduce ? {} : { y: [0, -6, 0] }}
      transition={reduce ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.25rem] opacity-80 blur-2xl"
        style={{
          background: `radial-gradient(65% 55% at 50% 40%, color-mix(in oklch, var(--color-primary), transparent 70%), transparent 70%)`,
        }}
      />
      <div
        className="relative overflow-hidden rounded-[2rem] p-[1px] shadow-[0_32px_80px_-32px_color-mix(in_oklch,var(--color-fg),transparent_75%)]"
        style={{
          background: `linear-gradient(135deg, color-mix(in oklch, var(--color-primary), transparent 30%), color-mix(in oklch, var(--color-accent), transparent 35%))`,
        }}
      >
        <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-card">
          <div className="relative aspect-[3.2/4] w-full sm:aspect-[3.4/4]">
            <img
              src={heroPortrait}
              alt={profile.portraitAlt}
              className="h-full w-full object-cover object-top"
              loading="eager"
              decoding="async"
              sizes="(min-width: 1024px) 42vw, 90vw"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent pt-20 pb-4 px-5 sm:px-6">
          <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted">
            Based in {profile.location.split(',')[0]}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function LandingPage() {
  return (
    <Page className="space-y-20 pb-8 md:space-y-28">
      {/* Hero — portrait + editorial intro */}
      <section className="relative">
        <div
          className="pointer-events-none absolute -right-8 top-8 hidden h-48 w-48 rounded-full opacity-40 blur-3xl md:block"
          style={{
            background: `color-mix(in oklch, var(--color-accent), transparent 65%)`,
          }}
        />
        <div
          className="pointer-events-none absolute -left-4 top-1/2 hidden h-40 w-px -translate-y-1/2 sm:block"
          style={{
            background: `linear-gradient(180deg, var(--color-primary), transparent)`,
            opacity: 0.45,
          }}
        />

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 xl:gap-20">
          <div className="order-2 space-y-7 lg:order-1">
            <Reveal>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
                {profile.headline}
              </p>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-4xl font-semibold leading-[1.04] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-fg">{profile.name}</span>
                <span className="mt-3 block sm:mt-4">
                  I build{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                    }}
                  >
                    web &amp; mobile
                  </span>{' '}
                  <span className="text-muted">products with</span>{' '}
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: `linear-gradient(90deg, var(--color-accent), var(--color-primary))`,
                    }}
                  >
                    clear ownership
                  </span>{' '}
                  <span className="text-muted">and measurable outcomes.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                {profile.positioning.shortBio}
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex flex-wrap items-center gap-3">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-bg shadow-[0_16px_48px_-14px_color-mix(in_oklch,var(--color-primary),transparent_30%)] transition hover:opacity-92"
                  style={{ background: `var(--color-primary)` }}
                >
                  Start a conversation
                </NavLink>
                <NavLink
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full border border-border/90 bg-card/80 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur-sm transition hover:bg-card"
                >
                  View case studies
                </NavLink>
                <div className="hidden h-4 w-px bg-border/90 sm:block" />
                <NavLink
                  to="/about"
                  className="text-sm font-semibold text-muted underline decoration-border underline-offset-4 hover:text-fg"
                >
                  About
                </NavLink>
                <NavLink
                  to="/skills"
                  className="text-sm font-semibold text-muted underline decoration-border underline-offset-4 hover:text-fg"
                >
                  Skills
                </NavLink>
              </div>
            </Reveal>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <Reveal delay={0.08}>
              <HeroPortrait />
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-3 rounded-[1.5rem] border border-border/70 bg-card/70 p-4 backdrop-blur-sm sm:grid-cols-2 sm:p-5 lg:mt-12 lg:grid-cols-4">
            <div className="flex items-start gap-3 rounded-2xl p-1">
              <span className="relative mt-0.5 flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-35" />
                <span
                  className="relative inline-flex h-2.5 w-2.5 rounded-full"
                  style={{ background: `var(--color-primary)` }}
                />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted">Status</div>
                <p className="mt-0.5 text-sm font-medium text-fg">{profile.availabilityLabel}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-dashed border-border/70 bg-bg/30 p-3 sm:col-span-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted">Replies &amp; place</div>
              <p className="mt-0.5 text-sm text-fg/95">
                {profile.replyTimeLabel} · {profile.location}
              </p>
            </div>
            <div className="flex flex-col justify-center rounded-2xl p-1 sm:col-span-2 lg:col-span-1">
              <div className="text-xs font-bold uppercase tracking-wider text-muted">Email</div>
              <a
                href={`mailto:${profile.email}`}
                className="mt-0.5 text-sm font-semibold break-all"
                style={{ color: `var(--color-primary)` }}
              >
                {profile.email}
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:col-span-2 lg:col-span-1">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">Connect</span>
              <a
                href={`tel:${profile.phoneE164}`}
                className="inline-flex items-center justify-center rounded-full border border-border/60 bg-bg/50 px-3.5 py-1.5 text-xs font-semibold transition hover:border-border"
              >
                Phone
              </a>
              <a
                href={`https://wa.me/${profile.phoneE164.replace(/^\+/, '')}`}
                className="inline-flex items-center justify-center rounded-full border border-border/60 bg-bg/50 px-3.5 py-1.5 text-xs font-semibold transition hover:border-border"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                href={profile.links.github}
                className="inline-flex items-center justify-center rounded-full border border-border/60 bg-bg/50 px-3.5 py-1.5 text-xs font-semibold transition hover:border-border"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                className="inline-flex items-center justify-center rounded-full border border-border/60 bg-bg/50 px-3.5 py-1.5 text-xs font-semibold transition hover:border-border"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-6">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
              {profile.positioning.workWithAi.label}
            </div>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              {profile.positioning.workWithAi.summary}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {nowChips.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border/60 bg-card/80 px-3 py-1.5 text-xs font-semibold"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-b from-card/90 to-transparent p-5 sm:p-6">
                <div
                  className="text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl"
                  style={{ color: `var(--color-fg)` }}
                >
                  <CountUp value={m.value} />
                  {m.suffix}
                </div>
                <div className="mt-1 text-sm text-muted">{m.label}</div>
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100"
                  style={{ background: `color-mix(in oklch, var(--color-accent), transparent 88%)` }}
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-dashed border-border/80 bg-card/50 px-4 py-4 sm:px-6 sm:py-5">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">Domains</div>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-muted">
              {profile.positioning.domains.map((d, i) => (
                <span key={d} className="inline-flex items-center gap-3">
                  {i > 0 ? <span className="text-border">·</span> : null}
                  {d}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="space-y-6">
        <Reveal>
          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              How I help
            </h2>
            <p className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl">
              Reliable execution, product-minded UX, and reporting your stakeholders can trust.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {valueProps.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06}>
              <div
                className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-5 pl-6"
                style={{ boxShadow: `inset 4px 0 0 0 ${accentFromKey(v.key)}` }}
              >
                <div
                  className="font-mono text-[10px] font-bold tabular-nums"
                  style={{ color: accentFromKey(v.key) }}
                >
                  0{i + 1}
                </div>
                <h3 className="mt-2 text-base font-semibold leading-snug">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                {v.tiers?.length ? (
                  <ol className="mt-4 space-y-2.5 border-t border-border/60 pt-4">
                    {v.tiers.map((t, idx) => (
                      <li key={t.label} className="flex gap-3 text-sm">
                        <span
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold"
                          style={{
                            color: accentFromKey(v.key),
                            background: `color-mix(in oklch, ${accentFromKey(v.key)}, transparent 88%)`,
                          }}
                        >
                          {idx + 1}
                        </span>
                        <div>
                          <div className="font-semibold text-fg/95">{t.label}</div>
                          <p className="mt-0.5 text-muted leading-relaxed">{t.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <Reveal>
          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
              Services
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              What teams and hiring managers bring me in to deliver.
            </p>
          </div>
        </Reveal>
        <div className="space-y-2">
          {profile.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.04}>
              <div className="group flex flex-col gap-3 rounded-3xl border border-border/60 bg-card/40 p-5 transition sm:flex-row sm:items-start sm:gap-6 sm:p-6 hover:border-border">
                <div
                  className="shrink-0 font-mono text-3xl font-bold tabular-nums sm:w-20 sm:text-4xl"
                  style={{
                    color: accentFromKey(
                      (['primary', 'primary2', 'accent', 'primary'] as const)[i] ?? 'primary',
                    ),
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-semibold leading-snug">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <Reveal>
          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Sectors</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              E‑commerce, funnels, portfolios, and Capacitor.
            </p>
          </div>
        </Reveal>
        <Stagger className="grid gap-3 sm:grid-cols-2">
          {profile.projectTypes.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-3xl border border-border/70 bg-gradient-to-br from-card/80 to-transparent p-5 sm:p-6">
                <h3 className="text-base font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="grid items-stretch gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <Pipeline />
        </Reveal>
        <Reveal delay={0.06}>
          <div className="flex h-full flex-col rounded-3xl border border-border/60 bg-card/40 p-5 sm:p-6">
            <div>
              <h2 className="text-sm font-semibold">How I ship</h2>
              <p className="mt-1 text-xs text-muted">Defaults for real client work.</p>
            </div>
            <ol className="mt-4 flex flex-1 flex-col gap-3 text-sm">
              {[
                {
                  t: 'Clarify the goal',
                  d: 'Audience, must-have flows, and one success metric (conversion, signups, speed).',
                },
                { t: 'Ship in slices', d: 'Small, reviewable chunks: UI, APIs, then analytics + hardening.' },
                {
                  t: 'Make it trustable',
                  d: 'Security-minded Firebase rules, error states, and perf checks pre-release.',
                },
              ].map((step) => (
                <li
                  key={step.t}
                  className="rounded-2xl border border-border/50 bg-bg/40 p-4"
                >
                  <div className="text-xs font-semibold" style={{ color: `var(--color-accent)` }}>
                    {step.t}
                  </div>
                  <div className="mt-1 text-muted leading-relaxed">{step.d}</div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </section>

      <section className="space-y-5">
        <Reveal>
          <div>
            <h2 className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">Stack</h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Tools I reach for by default.</p>
          </div>
        </Reveal>
        <Stagger>
          <StaggerItem>
            <div className="rounded-3xl border border-border/60 p-4 sm:p-5 lg:max-w-3xl">
              <StackCollapsibleList categories={stackCollapsibles} compact />
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <section>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 p-8 sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-85"
              style={{
                background: `radial-gradient(80% 120% at 0% 0%, color-mix(in oklch, var(--color-primary), transparent 80%), transparent 60%), radial-gradient(70% 100% at 100% 100%, color-mix(in oklch, var(--color-accent), transparent 82%), transparent 55%)`,
              }}
            />
            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Let’s see if we’re a fit.</h2>
                <p className="mt-2 max-w-lg text-sm text-muted sm:text-base">
                  Share the role or project, timeline, and what success looks like on your side—I’ll respond with clarity.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <NavLink
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
                  style={{ background: `var(--color-fg)` }}
                >
                  Get in touch
                </NavLink>
                <NavLink
                  to="/work"
                  className="inline-flex items-center justify-center rounded-full border border-fg/20 bg-bg/50 px-5 py-3 text-sm font-semibold text-fg backdrop-blur-sm"
                >
                  Browse work
                </NavLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </Page>
  )
}
