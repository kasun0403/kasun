import { profile } from './profile'

/**
 * Verified metrics from the existing portfolio landing page.
 * Do not invent additional achievements.
 */
export const portfolioStats = [
  { label: 'Years experience', value: '5+' },
  { label: 'Projects', value: '12+' },
  { label: 'Domains shipped', value: String(profile.positioning.domains.length) },
  { label: 'Release assists', value: '20+' },
] as const
