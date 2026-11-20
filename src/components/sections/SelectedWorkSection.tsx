import { motion, useReducedMotion } from 'framer-motion'
import { selectedWork } from '../../content/portfolio/selectedWork'
import { ProgressiveImage } from '../ProgressiveImage'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function SelectedWorkSection() {
  const reduce = useReducedMotion()

  return (
    <section id="work" className="border-b border-border">
      <div className="section-shell py-20 md:py-28">
        <Reveal>
          <SectionHeading label="02 / Selected Work" title="Things I've built." />
        </Reveal>

        <div className="mt-14 space-y-0">
          {selectedWork.map((project, index) => {
            const imageLeft = index % 2 === 0
            const hasImage = Boolean(project.imageSrc)
            const number = String(index + 1).padStart(2, '0')

            return (
              <Reveal key={project.id} delay={0.03}>
                <article
                  className={[
                    'grid gap-8 border-t border-border py-12 md:gap-12 md:py-16',
                    hasImage ? 'lg:grid-cols-2 lg:items-center' : 'lg:grid-cols-[0.9fr_1.1fr] lg:items-center',
                  ].join(' ')}
                >
                  {hasImage ? (
                    <motion.div
                      className={imageLeft ? 'lg:order-1' : 'lg:order-2'}
                      whileHover={reduce ? undefined : { y: -4 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block overflow-hidden border border-border bg-surface"
                        aria-label={`Open ${project.name}`}
                      >
                        <div className="flex items-center justify-between border-b border-border px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-muted">
                          <span>{number}</span>
                          <span>{project.category}</span>
                        </div>
                        <ProgressiveImage
                          src={project.imageSrc!}
                          alt={project.imageAlt ?? `${project.name} preview`}
                          wrapperClassName="aspect-[16/10] w-full"
                          imgClassName="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                          sizes="(min-width: 1024px) 50vw, 100vw"
                        />
                      </a>
                    </motion.div>
                  ) : (
                    <div
                      className={[
                        'flex min-h-[200px] items-end border border-border bg-surface p-6 sm:min-h-[240px]',
                        imageLeft ? 'lg:order-1' : 'lg:order-2',
                      ].join(' ')}
                    >
                      <p className="font-display text-6xl tracking-[-0.04em] text-border sm:text-7xl">
                        {number}
                      </p>
                    </div>
                  )}

                  <div className={imageLeft ? 'lg:order-2' : 'lg:order-1'}>
                    {!hasImage ? (
                      <p className="text-[11px] uppercase tracking-[0.16em] text-muted">
                        {project.category}
                      </p>
                    ) : null}
                    <h3
                      className={[
                        'font-display tracking-[-0.025em] text-fg',
                        hasImage ? 'text-2xl sm:text-3xl' : 'mt-3 text-2xl sm:text-3xl',
                      ].join(' ')}
                    >
                      {project.name}
                    </h3>
                    <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-muted">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <li
                          key={tag}
                          className="border border-border px-2.5 py-1 text-[11px] tracking-[-0.01em] text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-7">
                      {project.href ? (
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-sm font-medium text-fg transition hover:text-accent"
                        >
                          View project
                          <span
                            className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          >
                            ↗
                          </span>
                        </a>
                      ) : (
                        <span className="text-sm text-muted">Private project</span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
