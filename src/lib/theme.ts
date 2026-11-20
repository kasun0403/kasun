export type ThemeMode = 'light' | 'dark'

const STORAGE_KEY = 'kasun:theme'

export function getStoredTheme(): ThemeMode | null {
  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (raw === 'light' || raw === 'dark') return raw
  return null
}

export function getTheme(): ThemeMode {
  return getStoredTheme() ?? 'dark'
}

export function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme
}

export function setTheme(theme: ThemeMode) {
  window.localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function toggleTheme(): ThemeMode {
  const next: ThemeMode = getTheme() === 'dark' ? 'light' : 'dark'
  setTheme(next)
  return next
}

export function initTheme() {
  applyTheme(getTheme())
}

