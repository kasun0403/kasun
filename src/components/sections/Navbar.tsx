import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import heroPortrait from '../../assets/hero-portrait.png'
import { profile } from '../../content/portfolio/profile'
import { useHeaderPortrait } from '../portfolio/headerPortrait'
import { ProgressiveImage } from '../ProgressiveImage'
import { useTheme } from '../ThemeProvider'
import { AvailabilityIndicator } from '../ui/AvailabilityIndicator'

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'contact', label: 'Contact' },
] as const

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }
}

function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex h-8 w-8 items-center justify-center text-muted transition hover:text-fg"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}

function BrandMark() {
  const { inHeader } = useHeaderPortrait()
  const reduce = useReducedMotion()

  return (
    <a
      href="#hero"
      onClick={(e) => {
        e.preventDefault()
        scrollToId('hero')
      }}
      className="group flex items-center gap-3"
      aria-label="Kasun Tharanga — Home"
    >
      <span className="relative grid h-8 w-8 shrink-0 place-items-center overflow-hidden border border-border bg-surface font-display text-[11px] font-medium tracking-[0.04em] text-fg transition group-hover:border-accent">
        {inHeader ? (
          <motion.div
            layoutId={reduce ? undefined : 'hero-portrait-fly'}
            className="absolute inset-0"
            transition={
              reduce ? undefined : { type: 'spring', stiffness: 420, damping: 38 }
            }
          >
            <ProgressiveImage
              src={heroPortrait}
              alt=""
              wrapperClassName="h-full w-full"
              imgClassName="h-full w-full object-cover object-top"
              decoding="async"
              loading="eager"
            />
          </motion.div>
        ) : (
          <span className="transition group-hover:text-accent" aria-hidden>
            KT
          </span>
        )}
      </span>
      <span className="leading-none">
        <span className="block font-display text-base font-semibold tracking-[-0.03em] text-fg transition group-hover:text-accent sm:text-[1.125rem]">
          Kasun Tharanga
        </span>
        <span className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-muted sm:block">
          Software Engineer
        </span>
      </span>
    </a>
  )
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = ['about', 'expertise', 'contact', 'hero']
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id && visible.target.id !== 'hero') {
          setActive(visible.target.id)
        }
        if (visible?.target.id === 'hero') setActive('')
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.1, 0.3, 0.6] },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleNav = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <header
      className={[
        'sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300',
        scrolled
          ? 'border-border bg-bg/92 shadow-[0_1px_0_0_var(--color-border)] backdrop-blur-md'
          : 'border-transparent bg-bg/70 backdrop-blur-sm',
      ].join(' ')}
    >
      <div className="section-shell flex h-[4.25rem] items-center justify-between gap-6">
        <BrandMark />

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-0.5" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = active === link.id
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.id)
                  }}
                  className={[
                    'relative px-2.5 py-2 text-[13px] tracking-[-0.01em] transition lg:px-3',
                    isActive ? 'text-fg' : 'text-muted hover:text-fg',
                  ].join(' ')}
                >
                  {link.label}
                  <span
                    className={[
                      'absolute inset-x-2.5 -bottom-px h-px origin-left bg-accent transition-transform duration-300 lg:inset-x-3',
                      isActive ? 'scale-x-100' : 'scale-x-0',
                    ].join(' ')}
                    aria-hidden
                  />
                </a>
              )
            })}
          </nav>

          <span className="h-4 w-px bg-border" aria-hidden />

          <AvailabilityIndicator compact className="hidden lg:inline-flex" />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center text-fg"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-[18px]">
              <span
                className={[
                  'absolute left-0 block h-px w-full bg-current transition duration-300',
                  open ? 'top-[7px] rotate-45' : 'top-0',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 top-[7px] block h-px w-full bg-current transition duration-300',
                  open ? 'opacity-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'absolute left-0 block h-px w-full bg-current transition duration-300',
                  open ? 'top-[7px] -rotate-45' : 'top-[14px]',
                ].join(' ')}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="border-t border-border bg-bg md:hidden"
          >
            <nav className="section-shell flex flex-col py-5" aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNav(link.id)
                  }}
                  className={[
                    'border-b border-border py-4 font-display text-2xl tracking-[-0.02em] transition',
                    active === link.id ? 'text-accent' : 'text-fg',
                  ].join(' ')}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-5">
                <AvailabilityIndicator label={profile.availabilityLabel} />
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
