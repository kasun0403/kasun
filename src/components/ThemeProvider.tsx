import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'
import { applyTheme, getTheme, setTheme, type ThemeMode } from '../lib/theme'

type ThemeContextValue = {
  theme: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setThemeState] = useState<ThemeMode>(() =>
    typeof window === 'undefined' ? 'dark' : getTheme(),
  )

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const setMode = useCallback((mode: ThemeMode) => {
    setTheme(mode)
    setThemeState(mode)
  }, [])

  const toggle = useCallback(() => {
    const next: ThemeMode = theme === 'dark' ? 'light' : 'dark'
    setMode(next)
  }, [setMode, theme])

  const value = useMemo(() => ({ theme, setMode, toggle }), [theme, setMode, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
