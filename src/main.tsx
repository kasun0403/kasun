import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { applyTheme, initTheme } from './lib/theme'
import { isProjectsShowcaseHost } from './lib/projectsShowcaseHost'

if (isProjectsShowcaseHost()) {
  applyTheme('light')
} else {
  initTheme()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
