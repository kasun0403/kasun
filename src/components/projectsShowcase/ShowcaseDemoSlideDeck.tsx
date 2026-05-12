import { useId, useState } from 'react'
import { motion } from 'framer-motion'
import type { ShowcaseDemo } from '../../content/projectsShowcaseDemos'
import { ProgressiveImage } from '../ProgressiveImage'

const MOBILE_VIEWPORT_W = 390
const MOBILE_VIEWPORT_H = 667

/** Fixed “laptop” viewport so embedded sites use desktop breakpoints; narrow screens scroll to pan. */
const DESKTOP_IFRAME_W = 1280
const DESKTOP_IFRAME_H = 800

const sandbox =
  'allow-scripts allow-same-origin allow-forms allow-popups allow-modals allow-popups-to-escape-sandbox' as const

type SlideTab = 'mobile' | 'desktop' | 'details'

const TABS: { id: SlideTab; label: string }[] = [
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop' },
  { id: 'details', label: 'Details' },
]

function tabIndex(tab: SlideTab) {
  return TABS.findIndex((t) => t.id === tab)
}

function displayUrlForChrome(href: string): string {
  try {
    const u = new URL(href)
    const path = u.pathname === '/' ? '' : u.pathname
    return `${u.hostname}${path}`
  } catch {
    return href
  }
}

function ClientBulletedSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="space-y-2">
      <h4 className="text-sm font-bold uppercase tracking-wide text-teal-900/90">{title}</h4>
      <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-800">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

function DemoBusinessFitHeader({ demo }: { demo: ShowcaseDemo }) {
  return (
    <header className="border-b border-teal-200/70 bg-gradient-to-br from-teal-50 via-white to-sky-50/80 px-4 py-5 sm:px-6 sm:py-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">What business suits this demo</p>
      <h2 className="mt-2 text-xl font-black tracking-tight text-slate-950 sm:text-2xl">{demo.title}</h2>
      <p className="mt-2 text-sm font-semibold leading-snug text-teal-900 sm:text-base">{demo.tagline}</p>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-600">Industries and use cases</p>
        <ul className="mt-2 flex list-none flex-wrap gap-2 p-0">
          {demo.clientSheet.flyerIndustryFit.map((label) => (
            <li key={label}>
              <span className="inline-block rounded-full border border-teal-300/80 bg-teal-100/80 px-3 py-1 text-xs font-semibold text-teal-950">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-600">Good fit if you…</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-800">
          {demo.clientSheet.perfectForYouIf.map((line) => (
            <li key={line} className="flex gap-2 pl-0.5">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden />
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

type ShowcaseDemoSlideDeckProps = {
  demo: ShowcaseDemo
  /** First card loads desktop iframe eagerly */
  index: number
  waHref: string
}

/**
 * One viewport with tabs (Mobile / Desktop / Details) and a horizontal slide between three panels.
 */
export function ShowcaseDemoSlideDeck({ demo, index, waHref }: ShowcaseDemoSlideDeckProps) {
  const reactId = useId()
  const baseId = `deck-${demo.id}-${reactId.replace(/:/g, '')}`
  const [tab, setTab] = useState<SlideTab>('desktop')
  const [visited, setVisited] = useState({ mobile: false, desktop: true })

  function goTab(next: SlideTab) {
    setTab(next)
    if (next === 'mobile' || next === 'desktop') {
      setVisited((v) => ({ ...v, [next]: true }))
    }
  }

  const i = tabIndex(tab)
  const xPercent = `${-(i * 100) / 3}%`

  return (
    <div className="rounded-2xl border border-teal-200/80 bg-white/95 shadow-inner ring-1 ring-teal-950/5">
      <DemoBusinessFitHeader demo={demo} />
      <div
        role="tablist"
        aria-label={`${demo.title} preview mode`}
        className="flex flex-wrap gap-2 border-b border-teal-100/90 bg-gradient-to-r from-teal-50/80 via-slate-50/90 to-sky-50/70 p-3 sm:gap-3 sm:p-4"
      >
        {TABS.map(({ id, label }) => {
          const selected = tab === id
          return (
            <button
              key={id}
              type="button"
              role="tab"
              id={`${baseId}-tab-${id}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => goTab(id)}
              className={[
                'rounded-xl px-4 py-2.5 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600',
                selected
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-md shadow-teal-700/25'
                  : 'border border-slate-200/90 bg-white text-slate-800 hover:border-teal-300 hover:bg-teal-50/70',
              ].join(' ')}
            >
              {label}
            </button>
          )
        })}
        <a
          href={demo.href}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex items-center self-center rounded-lg px-2 py-1 text-xs font-semibold text-teal-700 underline decoration-teal-300/80 underline-offset-2 sm:text-sm"
        >
          Open in new tab
        </a>
      </div>

      <div className="overflow-hidden bg-gradient-to-b from-slate-50 via-white to-teal-50/30">
        <motion.div
          className="flex w-[300%]"
          animate={{ x: xPercent }}
          transition={{ type: 'spring', stiffness: 380, damping: 38 }}
        >
          {/* Mobile — do not use `hidden` here: it removes panels from layout and collapses the 300% slide track */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-mobile`}
            aria-labelledby={`${baseId}-tab-mobile`}
            aria-hidden={tab !== 'mobile'}
            className={[
              'flex w-1/3 shrink-0 flex-col items-center justify-start bg-gradient-to-b from-slate-200/75 via-slate-50 to-teal-50/40',
              'min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]',
              tab !== 'mobile' ? 'pointer-events-none' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="mb-4 mt-4 max-w-md px-2 text-center text-xs leading-relaxed text-slate-600 sm:px-4">
              Phone-sized frame ({MOBILE_VIEWPORT_W}px) so the demo uses its{' '}
              <span className="font-semibold text-slate-800">mobile</span> layout.
            </p>
            {visited.mobile ? (
              <div className="w-full overflow-x-auto px-2 pb-4 [-webkit-overflow-scrolling:touch] sm:px-4">
                <div
                  className="mx-auto shrink-0 rounded-[2.35rem] border-[10px] border-slate-800 bg-slate-800 p-1 shadow-xl ring-1 ring-white/10"
                  style={{ width: MOBILE_VIEWPORT_W + 8 }}
                >
                  <div className="overflow-hidden rounded-[1.85rem] bg-black shadow-inner">
                    <iframe
                      src={demo.href}
                      title={`${demo.title} — mobile preview`}
                      width={MOBILE_VIEWPORT_W}
                      height={MOBILE_VIEWPORT_H}
                      loading="lazy"
                      className="m-0 block max-w-none border-0 bg-white"
                      sandbox={sandbox}
                      allow="fullscreen"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p className="rounded-xl border border-dashed border-slate-400/60 bg-white/60 px-4 py-8 text-center text-sm text-slate-600">
                Select <span className="font-semibold">Mobile</span> to load this preview.
              </p>
            )}
          </div>

          {/* Desktop — fixed-width iframe (real desktop layout); on phones pan with horizontal + vertical scroll */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-desktop`}
            aria-labelledby={`${baseId}-tab-desktop`}
            aria-hidden={tab !== 'desktop'}
            className={[
              'flex w-1/3 shrink-0 flex-col bg-gradient-to-b from-slate-200/60 via-slate-50 to-teal-50/35',
              'min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]',
              tab !== 'desktop' ? 'pointer-events-none' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <p className="mx-auto mb-2 max-w-lg px-3 pt-4 text-center text-xs leading-relaxed text-slate-600 sm:mb-3 sm:px-4 sm:pt-5">
              <span className="font-semibold text-slate-800">Full desktop size</span> ({DESKTOP_IFRAME_W}×{DESKTOP_IFRAME_H}
              px)—not shrunk to your phone. On a small screen,{' '}
              <span className="font-semibold text-slate-800">scroll sideways and vertically</span> to explore the whole
              window.
            </p>
            <div className="flex min-h-[300px] flex-1 flex-col px-1 pb-2 sm:px-3 sm:pb-3">
              <div
                className="max-h-[min(78vh,880px)] min-h-[260px] flex-1 overflow-auto overscroll-contain rounded-lg border border-teal-200/50 bg-teal-50/20 shadow-inner [-webkit-overflow-scrolling:touch] sm:min-h-[300px] sm:rounded-xl"
                style={{ touchAction: 'pan-x pan-y' }}
              >
                <div className="inline-block shrink-0 p-3 sm:p-4" style={{ width: 'max-content' }}>
                  <div
                    className="shrink-0 overflow-hidden rounded-xl bg-slate-800 shadow-[0_20px_50px_-12px_rgba(15,23,42,0.5)] ring-4 ring-teal-700/35 ring-offset-2 ring-offset-teal-100/60"
                    style={{ width: DESKTOP_IFRAME_W }}
                  >
                    <div className="flex items-center gap-2 border-b border-slate-600/90 bg-slate-600 px-2 py-2 sm:px-3">
                      <div className="flex shrink-0 gap-1.5" aria-hidden="true">
                        <span className="size-2.5 rounded-full bg-red-400/90 sm:size-3" />
                        <span className="size-2.5 rounded-full bg-amber-400/90 sm:size-3" />
                        <span className="size-2.5 rounded-full bg-emerald-400/90 sm:size-3" />
                      </div>
                      <div className="min-w-0 flex-1 truncate rounded-md bg-slate-900/50 px-2 py-1.5 text-center font-mono text-[10px] text-slate-300 sm:text-xs">
                        {displayUrlForChrome(demo.href)}
                      </div>
                    </div>
                    <div className="bg-white">
                      {visited.desktop ? (
                        <iframe
                          src={demo.href}
                          title={`${demo.title} — desktop preview`}
                          width={DESKTOP_IFRAME_W}
                          height={DESKTOP_IFRAME_H}
                          loading={index === 0 ? 'eager' : 'lazy'}
                          className="m-0 block max-w-none border-0 bg-white"
                          sandbox={sandbox}
                          allow="fullscreen"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      ) : null}
                    </div>
                    <div className="flex justify-center rounded-b-md bg-slate-600 py-1.5" aria-hidden="true">
                      <span className="h-1 w-16 rounded-full bg-slate-500/80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-auto border-t border-slate-200/90 bg-white/90 px-3 py-2 text-center text-[11px] text-slate-600 sm:text-xs">
              Same URL as Mobile—here the iframe is wide so you see the desktop layout.
            </p>
          </div>

          {/* Details */}
          <div
            role="tabpanel"
            id={`${baseId}-panel-details`}
            aria-labelledby={`${baseId}-tab-details`}
            aria-hidden={tab !== 'details'}
            className={[
              'flex w-1/3 shrink-0 flex-col bg-white',
              'min-h-[420px] sm:min-h-[480px] lg:min-h-[520px]',
              tab !== 'details' ? 'pointer-events-none' : '',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="max-h-[78vh] min-h-[380px] flex-1 overflow-y-auto overscroll-contain px-5 py-6 sm:min-h-[420px] sm:px-8 sm:py-8 lg:min-h-[460px]">
              <div className="mx-auto max-w-3xl space-y-6">
                <header className="space-y-2 border-b border-teal-100 pb-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-700">About this demo</p>
                  <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">{demo.title}</h3>
                  <p className="text-base font-semibold text-slate-800">{demo.tagline}</p>
                  <p className="text-sm font-medium text-teal-900/90">{demo.summary}</p>
                </header>

                <div className="overflow-hidden rounded-2xl border border-teal-100 bg-gradient-to-br from-teal-50/80 via-white to-sky-50/60 p-2">
                  <ProgressiveImage
                    src={demo.imageSrc}
                    alt={demo.imageAlt}
                    className="aspect-[16/10] w-full rounded-xl object-cover object-top"
                    wrapperClassName="block"
                    shimmerClassName="rounded-xl bg-gradient-to-r from-teal-100/70 via-white/40 to-sky-100/60"
                  />
                </div>

                <p className="text-base leading-relaxed text-slate-800">{demo.clientSheet.ownerIntro}</p>

                <ClientBulletedSection title="Perfect for you if…" items={demo.clientSheet.perfectForYouIf} />
                <ClientBulletedSection
                  title="Problems this kind of system reduces"
                  items={demo.clientSheet.painPointsWeAddress}
                />
                <ClientBulletedSection
                  title="What your customers will feel on the website"
                  items={demo.clientSheet.whatYourCustomersExperience}
                />
                <ClientBulletedSection
                  title="What you can run day‑to‑day (full build)"
                  items={demo.clientSheet.whatYouCanOperateDayToDay}
                />
                <ClientBulletedSection
                  title="How we usually work together"
                  items={demo.clientSheet.howWeTypicallyWorkTogether}
                />

                <section className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-teal-900/90">Fits industries like</h4>
                  <div className="flex flex-wrap gap-2">
                    {demo.clientSheet.flyerIndustryFit.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-teal-200/90 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-950"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-teal-900/90">Quick highlights</h4>
                  <ul className="space-y-2 text-sm leading-relaxed text-slate-800">
                    {demo.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500 shadow-[0_0_0_3px_rgba(20,184,166,0.35)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-2">
                  <h4 className="text-sm font-bold uppercase tracking-wide text-teal-900/90">Built with</h4>
                  <div className="flex flex-wrap gap-2">
                    {demo.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-sky-200/90 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-950"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="flex flex-col gap-2 border-t border-teal-100 pt-5 sm:flex-row sm:flex-wrap">
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600 px-4 py-3 text-center text-sm font-bold text-white shadow-lg shadow-teal-700/25 transition hover:brightness-105"
                  >
                    Open live demo
                  </a>
                  <a
                    href={`${waHref}?text=${encodeURIComponent(`Hi Kasun — I viewed the "${demo.title}" demo on projects.kasuntharanga.com and want something similar.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center rounded-xl border-2 border-teal-500/45 bg-teal-50 px-4 py-3 text-sm font-bold text-teal-950 transition hover:bg-teal-100"
                  >
                    WhatsApp about this idea
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
