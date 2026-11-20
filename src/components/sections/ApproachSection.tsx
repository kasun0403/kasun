import { approachSteps } from '../../content/portfolio/expertise'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function ApproachSection() {
  return (
    <section id="approach" className="border-b border-border">
      <div className="section-shell py-20 md:py-24">
        <Reveal>
          <SectionHeading label="04 / Approach" title="From problem to production." />
        </Reveal>

        <Reveal delay={0.06}>
          <ol className="mt-12 grid gap-0 border-t border-border md:grid-cols-5">
            {approachSteps.map((step) => (
              <li
                key={step.number}
                className="border-b border-border py-6 md:border-b-0 md:border-r md:px-4 md:py-8 md:last:border-r-0 md:first:pl-0"
              >
                <span className="font-display text-sm text-accent">{step.number}</span>
                <h3 className="mt-3 font-display text-lg text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
