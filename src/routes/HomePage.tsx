import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar } from '../components/sections/Navbar'
import { HeroSection } from '../components/sections/HeroSection'
import { AboutSection } from '../components/sections/AboutSection'
import { ExpertiseSection } from '../components/sections/ExpertiseSection'
import { TechnologySection } from '../components/sections/TechnologySection'
import { ApproachSection } from '../components/sections/ApproachSection'
import { ContactSection } from '../components/sections/ContactSection'
import { Footer } from '../components/sections/Footer'

const hashToSection: Record<string, string> = {
  '#about': 'about',
  '#expertise': 'expertise',
  '#toolkit': 'toolkit',
  '#approach': 'approach',
  '#contact': 'contact',
  '#hero': 'hero',
}

/** Legacy multi-page paths → section anchors */
const pathToSection: Record<string, string> = {
  '/about': 'about',
  '/work': 'about',
  '/skills': 'expertise',
  '/contact': 'contact',
  '/labs': 'about',
}

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const fromPath = pathToSection[location.pathname]
    const fromHash = hashToSection[location.hash]
    const id = fromHash ?? fromPath

    if (!id) return

    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  return (
    <div className="min-h-dvh bg-bg text-fg">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <TechnologySection />
        <ApproachSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
