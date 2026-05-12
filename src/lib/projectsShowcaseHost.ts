/** Canonical hostname for the live demos subdomain (main site links here). */
export const PROJECTS_SHOWCASE_HOST = 'projects.kasuntharanga.com' as const

export const projectsShowcaseOrigin = `https://${PROJECTS_SHOWCASE_HOST}` as const

/**
 * Single-page “live demos” site for projects.kasuntharanga.com (or preview via env).
 */
export function isProjectsShowcaseHost(): boolean {
  if (import.meta.env.VITE_PROJECTS_SHOWCASE === 'true') return true
  if (typeof window === 'undefined') return false
  const host = window.location.hostname.toLowerCase()
  return host === PROJECTS_SHOWCASE_HOST || host.startsWith('projects.')
}
