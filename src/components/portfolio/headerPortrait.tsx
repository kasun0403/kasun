/* eslint-disable react-refresh/only-export-components */
import * as React from 'react'

type HeaderPortraitState = {
  inHeader: boolean
}

const Ctx = React.createContext<HeaderPortraitState | null>(null)

export function HeaderPortraitProvider({
  inHeader,
  children,
}: React.PropsWithChildren<{ inHeader: boolean }>) {
  return <Ctx.Provider value={{ inHeader }}>{children}</Ctx.Provider>
}

export function useHeaderPortrait() {
  const v = React.useContext(Ctx)
  return v ?? { inHeader: false }
}

