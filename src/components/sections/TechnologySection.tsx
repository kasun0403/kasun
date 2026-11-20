import { toolkitGroups } from '../../content/portfolio/expertise'
import { Reveal } from '../ui/Reveal'

export function TechnologySection() {
  return (
    <section id="toolkit" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              <span className="inline-block h-px w-6 bg-accent" aria-hidden />
              03 / Technology
            </p>
            <h2 className="mt-4 font-display text-[1.85rem] leading-[1.15] tracking-[-0.03em] text-fg sm:text-4xl md:text-[2.65rem]">
              Technology & Tools
            </h2>
            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              The technologies and platforms I work with
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {toolkitGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.04}>
              <div
                className={[
                  'border-t border-border py-8',
                  index >= 3 ? 'lg:border-b-0' : '',
                ].join(' ')}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-xs tracking-[-0.02em] text-muted">
                    {group.number}
                  </span>
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted">
                    {group.label}
                  </h3>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span className="inline-block text-[15px] tracking-[-0.01em] text-fg transition-colors duration-200 hover:text-accent sm:text-base">
                        {item}
                      </span>
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
