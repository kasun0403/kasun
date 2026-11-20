import { expertiseItems } from '../../content/portfolio/expertise'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function ExpertiseSection() {
  return (
    <section id="expertise" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <SectionHeading label="02 / Expertise" title="What I bring to a team." />
        </Reveal>

        <div className="mt-14 border-t border-border">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.04}>
              <article className="group grid gap-2 border-b border-border py-7 transition md:grid-cols-[4.5rem_minmax(0,15rem)_1fr] md:items-baseline md:gap-10 md:py-9">
                <span className="font-display text-sm tracking-[-0.02em] text-muted transition group-hover:text-accent">
                  {item.number}
                </span>
                <h3 className="font-display text-xl tracking-[-0.02em] text-fg transition group-hover:text-accent md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="max-w-xl text-[15px] leading-[1.7] text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
