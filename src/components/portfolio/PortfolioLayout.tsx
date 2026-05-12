import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { getTheme, toggleTheme, type ThemeMode } from '../../lib/theme'
import { profile } from '../../content/portfolio/profile'
import { ProgressiveImage } from '../ProgressiveImage'
import heroPortrait from '../../assets/hero-portrait.png'
import { HeaderPortraitProvider } from './headerPortrait'
import { projectsShowcaseOrigin } from '../../lib/projectsShowcaseHost'

type NavItem = { to: string; label: string }

const navItems: NavItem[] = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/labs', label: 'Playground' },
  { to: '/contact', label: 'Contact' },
]

function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => getTheme())

  return (
    <button
      type="button"
      className="glass inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-fg/90 hover:text-fg"
      onClick={() => setMode(toggleTheme())}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} theme`}
    >
      <span className="font-medium">{mode === 'dark' ? 'Dark' : 'Light'}</span>
      <span className="text-muted">/</span>
      <span className="text-muted">{mode === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center gap-2">
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            [
              'relative rounded-full px-3 py-2 text-sm font-medium transition',
              'hover:bg-[color-mix(in_oklch,var(--color-card),transparent_25%)]',
              isActive ? 'text-fg' : 'text-muted',
            ].join(' ')
          }
          end={item.to === '/'}
        >
          {({ isActive }) => (
            <>
              {isActive ? (
                <motion.span
                  layoutId="nav-indicator-desktop"
                  className="absolute inset-0 -z-10 rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_85%)]"
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              ) : null}
              {item.label}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

function MobileNav() {
  return (
    <nav className="glass fixed inset-x-4 bottom-4 z-50 overflow-hidden rounded-3xl md:hidden">
      <div className="flex items-center justify-between gap-2 px-2 py-2">
        {navItems.slice(0, 5).map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              [
                'relative flex-1 rounded-2xl px-2 py-2 text-center text-xs font-semibold',
                isActive ? 'text-fg' : 'text-muted',
              ].join(' ')
            }
            end={item.to === '/'}
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <motion.span
                    layoutId="nav-indicator-mobile"
                    className="absolute inset-0 -z-10 rounded-2xl bg-[color-mix(in_oklch,var(--color-accent),transparent_86%)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 42 }}
                  />
                ) : null}
                {item.label}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="mt-18 border-t border-border/70 py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="glass grid gap-4 rounded-3xl p-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-lg font-semibold tracking-tight">
              Open to serious conversations about roles and projects.
            </div>
            <div className="mt-1 text-sm text-muted">
              Clear communication, reliable delivery, and scope you can explain to leadership.
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <NavLink
              to="/contact"
              className="rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_12%)] px-4 py-2 text-sm font-semibold text-fg hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_6%)]"
            >
              Get in touch
            </NavLink>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full border border-border/80 px-4 py-2 text-sm font-semibold text-fg hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <div>© {new Date().getFullYear()} {profile.name}</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-fg" href={profile.links.github}>
              GitHub
            </a>
            <a className="hover:text-fg" href={profile.links.linkedin}>
              LinkedIn
            </a>
            <a className="hover:text-fg" href={projectsShowcaseOrigin} target="_blank" rel="noopener noreferrer">
              Live demos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTopOnNavigate() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const id = decodeURIComponent(location.hash.slice(1))
      const el = document.getElementById(id)
      if (el) el.scrollIntoView()
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname, location.search, location.hash])

  return null
}

export function PortfolioLayout() {
  const location = useLocation()
  const key = useMemo(() => location.pathname, [location.pathname])
  const { scrollY } = useScroll()
  const reduceMotion = useReducedMotion()
  const [portraitInHeader, setPortraitInHeader] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    // Threshold is tuned to the home hero; safe default elsewhere.
    setPortraitInHeader(location.pathname === '/' && y > 180)
  })

  return (
    <div className="min-h-dvh">
      <div className="absolute inset-0 -z-10 mesh opacity-90" />
      <div className="absolute inset-0 -z-20 grid-dots opacity-55" />

      <HeaderPortraitProvider inHeader={portraitInHeader}>
        <header className="sticky top-[calc(env(safe-area-inset-top)+0.75rem)] z-40">
          <div className="mx-auto w-full max-w-6xl px-4 pt-4">
            <div className="glass flex items-center justify-between gap-4 rounded-3xl px-4 py-3">
              <NavLink to="/" className="flex items-center gap-2">
                <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-[color-mix(in_oklch,var(--color-primary-2),transparent_80%)] text-sm font-black leading-none tracking-tight">
                  {portraitInHeader ? (
                    <motion.div
                      layoutId="hero-portrait-fly"
                      className="absolute inset-0"
                      transition={
                        reduceMotion ? undefined : { type: 'spring', stiffness: 520, damping: 46 }
                      }
                    >
                      <ProgressiveImage
                        src={heroPortrait}
                        alt={profile.portraitAlt}
                        wrapperClassName="h-full w-full"
                        imgClassName="h-full w-full object-cover object-top"
                        decoding="async"
                        loading="eager"
                      />
                    </motion.div>
                  ) : (
                    profile.initials
                  )}
                </div>
                <div className="leading-tight">
                  <div className="text-sm font-semibold tracking-tight">{profile.name}</div>
                  <div className="text-xs text-muted">{profile.headline}</div>
                </div>
              </NavLink>
              <DesktopNav />
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={projectsShowcaseOrigin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-3 py-2 text-sm font-semibold text-fg ring-1 ring-border/80 transition hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                >
                  <span className="hidden sm:inline">Live demos</span>
                  <span className="sm:hidden">Demos</span>
                </a>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <div key={key} className="mx-auto w-full max-w-6xl px-4 pb-24 pt-8">
            <Outlet />
            <Footer />
          </div>
        </AnimatePresence>
      </HeaderPortraitProvider>

      <MobileNav />
      <ScrollToTopOnNavigate />
    </div>
  )
}

