import { Page } from '../../components/portfolio/motion'
import { LabMiniGames } from '../../components/lab-games/LabMiniGames'

export default function LabsPage() {
  return (
    <Page className="space-y-6">
      <header className="space-y-3">
        <div className="text-xs font-semibold text-muted">Play · 🎮 ✨</div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Playground</h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Colorful browser mini-games with emoji flourishes — a quick break from scrolling case studies.
        </p>
      </header>

      <LabMiniGames />
    </Page>
  )
}
