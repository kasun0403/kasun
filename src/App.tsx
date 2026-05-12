import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PortfolioLayout } from './components/portfolio/PortfolioLayout'
import LandingPage from './routes/portfolio/LandingPage'
import WorkPage from './routes/portfolio/WorkPage'
import WorkDetailPage from './routes/portfolio/WorkDetailPage'
import AboutPage from './routes/portfolio/AboutPage'
import SkillsPage from './routes/portfolio/SkillsPage'
import LabsPage from './routes/portfolio/LabsPage'
import ContactPage from './routes/portfolio/ContactPage'
import NotFoundPage from './routes/portfolio/NotFoundPage'
import ProjectsShowcasePage from './routes/ProjectsShowcasePage'
import { isProjectsShowcaseHost } from './lib/projectsShowcaseHost'

export default function App() {
  if (isProjectsShowcaseHost()) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ProjectsShowcasePage />} />
        </Routes>
      </BrowserRouter>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PortfolioLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<WorkDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/labs" element={<LabsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
