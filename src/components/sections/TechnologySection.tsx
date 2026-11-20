import { toolkitGroups } from '../../content/portfolio/expertise'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function TechnologySection() {
  return (
    <section id="toolkit" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <SectionHeading label="03 / Toolkit" title="Tools I use to build." />
        </Reveal>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {toolkitGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.05}>
              <div>
                <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                  {group.label}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-base text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
