import { ProgressiveImage } from '../ProgressiveImage'
import { profile } from '../../content/portfolio/profile'
import heroPortrait from '../../assets/hero-portrait.png'
import { AvailabilityIndicator } from '../ui/AvailabilityIndicator'
import { Reveal } from '../ui/Reveal'

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  window.history.replaceState(null, '', `#${id}`)
}

export function HeroSection() {
  return (
    <section id="hero" className="relative border-b border-border">
      <div className="section-shell py-14 md:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          <div className="order-2 lg:order-1 lg:pb-2">
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  Software Engineer
                </p>
                <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                  Sri Lanka
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.04}>
              <p className="mt-6 font-display text-lg tracking-[-0.02em] text-fg sm:text-xl">
                {profile.name}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-4 max-w-[14ch] font-display text-[2.35rem] leading-[1.08] tracking-[-0.035em] text-fg sm:text-5xl lg:text-[3.4rem] xl:text-[3.65rem]">
                {profile.positioning.statement}
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-muted sm:text-base">
                {profile.positioning.heroSupport}
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollToId('about')}
                  className="btn-primary"
                >
                  Learn more
                </button>
                <button
                  type="button"
                  onClick={() => scrollToId('contact')}
                  className="btn-secondary"
                >
                  Let&apos;s talk
                </button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-6 text-sm text-muted">
                <AvailabilityIndicator label={profile.availabilityLabel} />
                <span className="hidden h-3 w-px bg-border sm:block" aria-hidden />
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
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal delay={0.06}>
              <figure className="relative mx-auto w-full max-w-[420px] lg:ml-auto lg:max-w-none">
                <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted">
                  <span>01</span>
                  <span>Portrait</span>
                </div>
                <div className="overflow-hidden border border-border bg-surface">
                  <ProgressiveImage
                    src={heroPortrait}
                    alt={profile.portraitAlt}
                    wrapperClassName="aspect-[4/5] w-full"
                    imgClassName="h-full w-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                    sizes="(min-width: 1024px) 42vw, 90vw"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-3">
                  <span className="font-display text-sm tracking-[-0.01em] text-fg">
                    {profile.name}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                    {profile.location}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.24}>
          <button
            type="button"
            onClick={() => scrollToId('about')}
            className="mt-14 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted transition hover:text-fg md:mt-16"
            aria-label="Scroll to about section"
          >
            <span className="relative h-9 w-px overflow-hidden bg-border">
              <span className="scroll-indicator-line absolute inset-x-0 top-0 h-3 bg-fg" />
            </span>
            Scroll
          </button>
        </Reveal>
      </div>
    </section>
  )
}
