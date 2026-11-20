import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider'
import HomePage from './routes/HomePage'
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
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HomePage />} />
          <Route path="/work" element={<Navigate to="/" replace />} />
          <Route path="/work/:slug" element={<Navigate to="/" replace />} />
          <Route path="/skills" element={<HomePage />} />
          <Route path="/labs" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
