import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { CollapsibleSection, MarketingSubFold } from '../components/projectsShowcase/CollapsibleSection'
import { ShowcaseDemoSlideDeck } from '../components/projectsShowcase/ShowcaseDemoSlideDeck'
import { showcaseDemos } from '../content/projectsShowcaseDemos'
import {
  capabilityStrip,
  consultationCta,
  deliveryAndHandover,
  industryChips,
  marketingHeadline,
  valuePillars,
  whyChooseUs,
} from '../content/projectsShowcaseMarketing'
import { profile } from '../content/portfolio/profile'

const mainSiteOrigin =
  (import.meta.env.VITE_MAIN_SITE_ORIGIN as string | undefined)?.replace(/\/$/, '') ||
  'https://kasuntharanga.com'

const waHref = `https://wa.me/${profile.phoneE164.replace(/\+/g, '')}`

export default function ProjectsShowcasePage() {
  useEffect(() => {
    document.title = 'Kasun — Live web demos'
    const meta = document.querySelector('meta[name="description"]')
    if (meta) {
      meta.setAttribute(
        'content',
        'Custom web apps and dashboards for small businesses—plus live demos for salons, retail, and rentals. Book a free consultation.',
      )
    }
    document.documentElement.dataset.theme = 'light'
  }, [])

  return (
    <div className="min-h-dvh bg-[linear-gradient(165deg,#f8fafc_0%,#f0fdfa_32%,#e0f2fe_68%,#f1f5f9_100%)] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-50"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 18%, rgba(45,212,191,0.22), transparent 44%), radial-gradient(circle at 82% 12%, rgba(56,189,248,0.2), transparent 42%), radial-gradient(circle at 50% 92%, rgba(15,118,110,0.12), transparent 48%)',
        }}
      />

      <header className="relative w-full px-4 pb-6 pt-14 sm:px-6 sm:pt-20 lg:px-10 xl:px-14">
        <CollapsibleSection
          title="Introduction"
          subtitle="Availability, what this page is for, and quick ways to reach out"
          defaultOpen
        >
          <div className="flex flex-col gap-6 pt-2">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-200/90 bg-white/85 px-4 py-1.5 text-sm font-semibold text-teal-900 shadow-sm backdrop-blur-sm"
        >
          <span className="size-2 rounded-full bg-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.28)]" />
          Available for freelance & contract builds
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="space-y-4"
        >
          <h1 className="text-balance text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Polished, production‑style demos you can click through today.
          </h1>
          <p className="max-w-[min(100%,52rem)] text-pretty text-lg leading-relaxed text-slate-800 sm:text-xl lg:max-w-none">
            These are live interfaces I ship with React and TypeScript: clear UX, credible commerce flows, and polish
            that wins trust. If you want something similar for your brand, say hello—I typically reply{' '}
            {profile.replyTimeLabel}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href={`mailto:${profile.email}?subject=Project%20inquiry%20from%20projects.kasuntharanga.com`}
            className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-teal-600/20 ring-2 ring-white/40 transition hover:bg-slate-900"
          >
            Email a project brief
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-slate-300/90 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm backdrop-blur-sm transition hover:border-teal-400 hover:bg-white"
          >
            WhatsApp {profile.phone}
          </a>
          <a
            href={mainSiteOrigin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border-2 border-dashed border-teal-400/80 bg-teal-50/90 px-5 py-3 text-sm font-semibold text-teal-950 backdrop-blur-sm transition hover:bg-teal-100"
          >
            Full portfolio site
          </a>
        </motion.div>
          </div>
        </CollapsibleSection>
      </header>

      <main className="relative w-full space-y-14 px-4 pb-24 sm:px-6 lg:px-10 xl:px-14">
        <CollapsibleSection
          variant="dark"
          title="What we build & how we deliver"
          subtitle="Custom apps, handover, industries, and why teams work with me"
          defaultOpen
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45 }}
            className="space-y-6"
          >
            <MarketingSubFold title="Overview, mission & service flyer">
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-teal-200/90">What we build</p>
              <h2 id="what-we-build-heading" className="text-balance text-3xl font-black tracking-tight sm:text-4xl">
                {marketingHeadline.primary}
              </h2>
              <p lang="si" className="text-lg font-semibold leading-relaxed text-slate-200">
                {marketingHeadline.sinhala}
              </p>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-slate-300/95 lg:max-w-3xl xl:max-w-4xl">
                {marketingHeadline.mission}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {capabilityStrip.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
              <div className="rounded-2xl border border-amber-300/40 bg-amber-400/15 px-4 py-3 text-sm font-semibold text-amber-50 backdrop-blur-sm">
                <span className="text-amber-200">Free: </span>
                {consultationCta.line}
              </div>
              <a
                href={`${waHref}?text=${encodeURIComponent('Hi Kasun — I want a free consultation and a demo walkthrough.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center rounded-xl bg-teal-500 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/25 transition hover:bg-teal-400"
              >
                WhatsApp <span className="whitespace-nowrap">{profile.phone}</span>
                <span lang="si" className="ml-2 hidden font-semibold text-white/95 sm:inline">
                  — {consultationCta.sinhalaConnect}
                </span>
              </a>
            </div>
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-2 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm">
                <img
                  src="/showcase/service-flyer.png"
                  alt="Service flyer: custom web applications, dashboards, industries served, and contact details"
                  className="h-auto w-full rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
              </div>
            </MarketingSubFold>

            <MarketingSubFold title="Handover & first three months">
              <div className="rounded-2xl border border-teal-400/35 bg-teal-500/10 p-5 backdrop-blur-sm sm:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-100">{deliveryAndHandover.title}</h3>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-200 sm:text-base xl:max-w-5xl">
              {deliveryAndHandover.body}
            </p>
              </div>
            </MarketingSubFold>

            <MarketingSubFold title="Core value pillars">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {valuePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:bg-white/10"
              >
                <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/95">{pillar.body}</p>
              </div>
            ))}
              </div>
            </MarketingSubFold>

            <MarketingSubFold title="Industries we serve">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur-sm sm:p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-100/95">Solutions for every industry</h3>
            <p className="mt-2 max-w-4xl text-sm leading-relaxed text-slate-300/90 xl:max-w-5xl">
              Small businesses use the same foundations: bookings, catalogs, payments, and simple admin dashboards. If
              you see your category below, the demos further down show what the customer‑facing experience can feel like.
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {industryChips.map((chip) => (
                <li key={chip.label}>
                  <span className="inline-flex flex-col rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-left">
                    <span className="text-sm font-bold text-white">{chip.label}</span>
                    <span className="text-xs text-slate-400">{chip.hint}</span>
                  </span>
                </li>
              ))}
            </ul>
              </div>
            </MarketingSubFold>

            <MarketingSubFold title="Why choose us">
              <div className="grid gap-4 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300/95">{item.body}</p>
              </div>
            ))}
              </div>
            </MarketingSubFold>
          </motion.div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Live demos"
          subtitle="Mobile, desktop, and full write-up for each project—slide between tabs"
          defaultOpen
        >
        <section aria-label="Live demos" className="space-y-6 pt-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Live demos (slide views)</h2>
            <p className="max-w-4xl text-base leading-relaxed text-slate-800 xl:max-w-6xl">
              Each project has one preview area with tabs: <span className="font-semibold">Mobile</span>,{' '}
              <span className="font-semibold">Desktop</span>, and <span className="font-semibold">Details</span>. Tap a
              tab and the view <span className="font-semibold">slides</span> horizontally. Desktop opens first so
              clients see the full layout immediately; <span className="font-semibold">Details</span> includes the full
              business write‑up, screenshot, and contact actions—no extra panel.
            </p>
          </div>

          <div className="space-y-10">
            {showcaseDemos.map((demo, index) => (
              <motion.article
                key={demo.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="overflow-hidden rounded-3xl border border-teal-200/60 bg-white/90 shadow-[0_24px_70px_-36px_rgba(15,118,110,0.18)] backdrop-blur-md"
              >
                <div className="bg-gradient-to-br from-teal-50/90 via-white to-slate-100/90 p-3 sm:p-5">
                  <ShowcaseDemoSlideDeck demo={demo} index={index} waHref={waHref} />
                </div>
              </motion.article>
            ))}
          </div>
        </section>
        </CollapsibleSection>

        <CollapsibleSection
          title="Get in touch"
          subtitle="Email, LinkedIn, or WhatsApp—tell me what you want to build"
          defaultOpen
        >
          <section aria-label="Contact" className="pt-2">
            <div className="mx-auto w-full max-w-4xl space-y-4 text-center lg:max-w-5xl">
            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Let’s build your next system.</h2>
            <p className="text-base leading-relaxed text-slate-800 sm:text-lg">
              Share your business type, what you sell or book, and what feels messy today. I’ll reply with a simple
              plan: what we launch first, what we add next, and what you’ll see in a demo.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-900"
              >
                {profile.email}
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-slate-900/15 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
              >
                LinkedIn
              </a>
              <a
                href={`${waHref}?text=${encodeURIComponent('Hi Kasun — I want a free consultation for a custom web app / dashboard.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border-2 border-teal-500/45 bg-teal-50 px-5 py-3 text-sm font-bold text-teal-950 transition hover:bg-teal-100"
              >
                WhatsApp
              </a>
            </div>
            </div>
          </section>
        </CollapsibleSection>
      </main>

      <footer className="relative w-full border-t border-teal-200/50 bg-white/70 px-4 py-8 text-center text-sm text-slate-600 backdrop-blur-sm sm:px-6 lg:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name}. Crafted for{' '}
          <span className="font-semibold text-slate-900">projects.kasuntharanga.com</span>.
        </p>
      </footer>
    </div>
  )
}
