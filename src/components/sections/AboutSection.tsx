import { portfolioStats } from '../../content/portfolio/stats'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <SectionHeading label="01 / About" title="Engineering with product thinking." />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20">
          <Reveal delay={0.06}>
            <div className="max-w-xl space-y-5 text-[15px] leading-[1.75] text-muted sm:text-base">
              <p>
                I&apos;m a software engineer focused on building practical, reliable, and user-friendly
                digital products.
              </p>
              <p>
                My work spans web applications, mobile development, backend integrations, and
                production deployments.
              </p>
              <p>
                I enjoy understanding the bigger picture — from architecture and user experience to
                implementation, testing, and delivery.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="grid grid-cols-2 gap-px border border-border bg-border">
              {portfolioStats.map((stat) => (
                <div key={stat.label} className="bg-bg px-5 py-6 sm:px-6 sm:py-7">
                  <dt className="text-[10px] uppercase tracking-[0.16em] text-muted">{stat.label}</dt>
                  <dd className="mt-3 font-display text-[2rem] tracking-[-0.03em] text-fg sm:text-[2.35rem]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
