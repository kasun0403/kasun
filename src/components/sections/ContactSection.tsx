import { profile } from '../../content/portfolio/profile'
import { AvailabilityIndicator } from '../ui/AvailabilityIndicator'
import { Reveal } from '../ui/Reveal'

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            <span className="inline-block h-px w-6 bg-accent" aria-hidden />
            05 / Contact
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-[16ch] font-display text-[2.25rem] leading-[1.1] tracking-[-0.035em] text-fg sm:text-5xl md:text-[3.25rem]">
            Have something worth building?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-lg text-[15px] leading-[1.7] text-muted sm:text-base">
            I&apos;m open to meaningful engineering opportunities, collaborations, and interesting
            product challenges.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              Get in touch
            </a>
            <AvailabilityIndicator label={profile.availabilityLabel} />
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 grid gap-8 border-t border-border pt-9 sm:grid-cols-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 inline-block text-[15px] text-fg transition hover:text-accent"
              >
                {profile.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Social</p>
              <div className="mt-3 flex gap-5 text-[15px]">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg transition hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-fg transition hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Location</p>
              <p className="mt-3 text-[15px] text-fg">{profile.location}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
