import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'

const tones = {
  sky: {
    solid:
      'border-sky-400/35 bg-sky-500/15 text-fg hover:bg-sky-500/25 focus-visible:outline-sky-400/50',
    primary:
      'border-sky-300/50 bg-sky-500/20 text-fg font-semibold hover:bg-sky-500/30',
  },
  fuchsia: {
    solid:
      'border-fuchsia-400/30 bg-fuchsia-500/12 text-fg hover:bg-fuchsia-500/22 focus-visible:outline-fuchsia-400/50',
    primary: 'border-fuchsia-300/50 bg-fuchsia-500/18 text-fg hover:bg-fuchsia-500/28',
  },
  emerald: {
    solid:
      'border-emerald-400/30 bg-emerald-500/12 text-fg hover:bg-emerald-500/20 focus-visible:outline-emerald-400/50',
    primary: 'border-emerald-300/50 bg-emerald-500/18 text-fg hover:bg-emerald-500/30',
  },
  amber: {
    solid:
      'border-amber-400/35 bg-amber-500/14 text-fg hover:bg-amber-500/24 focus-visible:outline-amber-400/50',
    primary: 'border-amber-300/50 bg-amber-500/20 text-fg hover:bg-amber-500/32',
  },
  violet: {
    solid:
      'border-violet-400/30 bg-violet-500/12 text-fg hover:bg-violet-500/22 focus-visible:outline-violet-400/50',
    primary: 'border-violet-300/50 bg-violet-500/20 text-fg hover:bg-violet-500/32',
  },
} as const

type Tone = keyof typeof tones

function gameBtn(kind: 'solid' | 'primary' = 'solid', t: Tone = 'sky', extra = '') {
  return `rounded-2xl border px-3 py-2 text-sm font-semibold transition-all duration-200 ${tones[t][kind]} ${extra}`
}

type Cell = 'X' | 'O' | null

function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(() => Array(9).fill(null))
  const [turn, setTurn] = useState<'X' | 'O'>('X')
  const [status, setStatus] = useState<string>('You are ✖️ — tap a square.')
  const lines = useMemo(
    () => [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ],
    [],
  )

  const checkWinner = useCallback(
    (b: Cell[]): 'X' | 'O' | 'draw' | null => {
      for (const [a, c, d] of lines) {
        if (b[a] && b[a] === b[c] && b[a] === b[d]) return b[a] as 'X' | 'O'
      }
      if (b.every(Boolean)) return 'draw'
      return null
    },
    [lines],
  )

  const pickO = useCallback(
    (b: Cell[]) => {
      const empty = b.map((v, i) => (v === null ? i : -1)).filter((i) => i >= 0)
      for (const i of empty) {
        const t = [...b] as Cell[]
        t[i] = 'O'
        if (checkWinner(t) === 'O') return i
      }
      for (const i of empty) {
        const t = [...b] as Cell[]
        t[i] = 'X'
        if (checkWinner(t) === 'X') return i
      }
      if (empty.includes(4)) return 4
      const prefer = [0, 2, 6, 8].filter((i) => empty.includes(i))
      if (prefer.length) return prefer[Math.floor(Math.random() * prefer.length)]
      return empty[Math.floor(Math.random() * empty.length)]
    },
    [checkWinner],
  )

  const reset = () => {
    setBoard(Array(9).fill(null))
    setTurn('X')
    setStatus('You are ✖️ — tap a square.')
  }

  const play = (i: number) => {
    if (turn !== 'X' || board[i] || checkWinner(board)) return
    const next = [...board] as Cell[]
    next[i] = 'X'
    const w = checkWinner(next)
    setBoard(next)
    if (w === 'X') {
      setStatus('You win — nice! 🎉')
      return
    }
    if (w === 'draw') {
      setStatus("It's a draw. 🤝")
      return
    }
    setTurn('O')
    setStatus('🤖 Computer thinking…')
    window.setTimeout(() => {
      setBoard((prev) => {
        if (checkWinner(prev)) return prev
        const after = [...prev] as Cell[]
        const o = pickO(after)
        after[o] = 'O'
        const ww = checkWinner(after)
        if (ww === 'O') setStatus('Computer wins — try again! 💡')
        else if (ww === 'draw') setStatus("It's a draw. 🤝")
        else setStatus('Your turn — ✖️')
        setTurn('X')
        return after
      })
    }, 320)
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">Beat the computer — you are ✖️, CPU is ⭕.</p>
      <div className="grid max-w-[220px] grid-cols-3 gap-2 rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 via-cyan-500/5 to-indigo-500/10 p-2">
        {board.map((c, i) => (
          <button
            key={i}
            type="button"
            aria-label={`cell ${i + 1} ${c ?? 'empty'}`}
            onClick={() => play(i)}
            className={`flex aspect-square items-center justify-center rounded-xl border text-2xl shadow-inner transition-transform hover:scale-105 active:scale-95 ${
              (i + Math.floor(i / 3)) % 2 === 0
                ? 'border-sky-400/20 bg-white/5 dark:bg-white/5'
                : 'border-cyan-400/15 bg-sky-500/5 dark:bg-sky-500/10'
            } disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100`}
            disabled={!!c || turn !== 'X' || !!checkWinner(board)}
          >
            {c === 'X' && <span className="drop-shadow-sm">✖️</span>}
            {c === 'O' && <span className="drop-shadow-sm">⭕</span>}
          </button>
        ))}
      </div>
      <p className="text-sm font-medium text-fg">{status}</p>
      <button type="button" className={gameBtn('solid', 'sky')} onClick={reset}>
        🔄 New round
      </button>
    </div>
  )
}

const MEM_EMOJIS = ['🌟', '🍋', '🎸', '🐠'] as const

function MemoryGame() {
  const [cards, setCards] = useState<{ id: number; v: string; up: boolean; matched: boolean }[]>([])
  const lock = useRef(false)

  const init = useCallback(() => {
    const pair = [...MEM_EMOJIS]
    const deck = [...pair, ...pair]
      .map((v, i) => ({ id: i, v, up: false, matched: false }))
      .sort(() => Math.random() - 0.5)
    setCards(deck)
  }, [])

  useEffect(() => {
    init()
  }, [init])

  const onFlip = (id: number) => {
    if (lock.current) return
    setCards((prev) => {
      const c = prev.find((x) => x.id === id)
      if (!c || c.up || c.matched) return prev
      const up = prev.map((x) => (x.id === id ? { ...x, up: true } : x))
      const open = up.filter((x) => x.up && !x.matched)
      if (open.length === 2) {
        const A = open[0]
        const B = open[1]
        lock.current = true
        if (A.v === B.v) {
          window.setTimeout(() => {
            setCards((cc) =>
              cc.map((x) => (x.id === A.id || x.id === B.id ? { ...x, matched: true, up: true } : x)),
            )
            lock.current = false
          }, 300)
        } else {
          window.setTimeout(() => {
            setCards((cc) => cc.map((x) => (x.id === A.id || x.id === B.id ? { ...x, up: false } : x)))
            lock.current = false
          }, 600)
        }
      }
      return up
    })
  }

  const done = cards.length > 0 && cards.every((c) => c.matched)

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">Flip cards to find all four matching pairs. Back face is 🎴 until revealed.</p>
      <div className="grid max-w-[260px] grid-cols-4 gap-2">
        {cards.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onFlip(c.id)}
            className={`lab-mem-back flex aspect-square items-center justify-center rounded-xl border-2 text-2xl leading-none shadow-sm transition-transform hover:scale-105 active:scale-95 ${
              c.matched
                ? 'border-fuchsia-400/50 bg-fuchsia-500/15 ring-1 ring-fuchsia-400/30'
                : c.up
                  ? 'border-fuchsia-300/40'
                  : 'border-fuchsia-500/20'
            } `}
            style={{ userSelect: 'none' }}
            disabled={c.matched}
            aria-label={c.up || c.matched ? `card ${c.v}` : 'face down card'}
          >
            {c.matched || c.up ? c.v : '🎴'}
          </button>
        ))}
      </div>
      {done && <p className="text-sm font-medium text-fg">🧠 All pairs found — well done!</p>}
      <button type="button" className={gameBtn('solid', 'fuchsia')} onClick={init}>
        🔀 Shuffle & deal
      </button>
    </div>
  )
}

type RPhase = 'intro' | 'wait' | 'ready' | 'early' | 'result'

function ReactionGame() {
  const [phase, setPhase] = useState<RPhase>('intro')
  const [ms, setMs] = useState<number | null>(null)
  const t0 = useRef(0)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const start = () => {
    clearTimers()
    setMs(null)
    setPhase('wait')
    const delay = 1500 + Math.random() * 3000
    const id = window.setTimeout(() => {
      t0.current = performance.now()
      setPhase('ready')
    }, delay)
    timers.current.push(id)
  }

  const onAreaClick = () => {
    if (phase === 'wait') {
      clearTimers()
      setPhase('early')
      return
    }
    if (phase === 'ready') {
      setMs(Math.round(performance.now() - t0.current))
      setPhase('result')
    }
  }

  useEffect(() => {
    return () => clearTimers()
  }, [])

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">When the light goes green, tap as fast as you can — not before! 🚦</p>
      <button
        type="button"
        onClick={onAreaClick}
        className={`flex min-h-[120px] w-full max-w-[280px] flex-col items-center justify-center gap-1 rounded-2xl border-2 px-3 text-sm font-semibold transition-all duration-200 ${
          phase === 'ready'
            ? 'border-emerald-400/80 bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/25'
            : phase === 'early'
              ? 'border-rose-400/50 bg-gradient-to-br from-rose-500/90 to-red-600/80 text-white'
              : 'border-border/60 bg-gradient-to-br from-slate-500/10 via-zinc-500/5 to-slate-500/10'
        }`}
      >
        {phase === 'intro' && (
          <>
            <span className="text-2xl" aria-hidden>
              ⏱️
            </span>
            <span>Tap “Start” below, then click here when it turns green.</span>
          </>
        )}
        {phase === 'wait' && (
          <>
            <span className="text-2xl" aria-hidden>
              ⏳
            </span>
            <span>Wait for green…</span>
          </>
        )}
        {phase === 'ready' && (
          <>
            <span className="text-3xl" aria-hidden>
              ⚡
            </span>
            <span className="text-base">Click now!</span>
          </>
        )}
        {phase === 'early' && (
          <>
            <span className="text-2xl" aria-hidden>
              🐇
            </span>
            <span>Too early — wait for green next time.</span>
          </>
        )}
        {phase === 'result' && ms !== null && (
          <>
            <span className="text-2xl" aria-hidden>
              {ms < 200 ? '🔥' : ms < 300 ? '👍' : '🎯'}
            </span>
            <span className="text-2xl tabular-nums tracking-tight">{ms} ms</span>
          </>
        )}
      </button>
      {phase === 'result' && ms !== null && (
        <p className="text-xs text-muted">
          {ms < 180 ? 'Reflexes on point.' : ms < 280 ? 'Solid reaction time.' : 'Keep practicing — you will get faster.'}
        </p>
      )}
      {phase === 'intro' && (
        <button type="button" className={gameBtn('primary', 'emerald')} onClick={start}>
          🚀 Start
        </button>
      )}
      {(phase === 'early' || phase === 'result') && (
        <button
          type="button"
          className={gameBtn('primary', 'emerald')}
          onClick={() => {
            setPhase('intro')
            setMs(null)
          }}
        >
          ↩️ Try again
        </button>
      )}
      {phase === 'ready' && <p className="text-xs text-emerald-600/80 dark:text-emerald-300/80">Click the green panel!</p>}
    </div>
  )
}

const RPS = [
  { key: 'Rock' as const, em: '🪨', sub: 'Rock' },
  { key: 'Paper' as const, em: '📄', sub: 'Paper' },
  { key: 'Scissors' as const, em: '✂️', sub: 'Scissors' },
] as const

function RpsGame() {
  const [you, setYou] = useState<(typeof RPS)[number]['key'] | null>(null)
  const [cpu, setCpu] = useState<(typeof RPS)[number]['key'] | null>(null)
  const [streak, setStreak] = useState(0)

  const play = (y: (typeof RPS)[number]['key']) => {
    const c = RPS[Math.floor(Math.random() * 3)].key
    setYou(y)
    setCpu(c)
    if (y === c) return
    const win =
      (y === 'Rock' && c === 'Scissors') || (y === 'Paper' && c === 'Rock') || (y === 'Scissors' && c === 'Paper')
    if (win) setStreak((s) => s + 1)
    else setStreak(0)
  }

  const cpuEm = (k: (typeof RPS)[number]['key']) => RPS.find((x) => x.key === k)?.em
  const youEm = (k: (typeof RPS)[number]['key']) => RPS.find((x) => x.key === k)?.em

  const outcome = useMemo(() => {
    if (!you || !cpu) return null
    if (you === cpu) return '🤝 Tie'
    const win =
      (you === 'Rock' && cpu === 'Scissors') || (you === 'Paper' && cpu === 'Rock') || (you === 'Scissors' && cpu === 'Paper')
    return win ? '🏆 You win' : '🤖 CPU wins'
  }, [you, cpu])

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">Best of luck — build a win streak. Ties keep your streak safe.</p>
      <div className="flex flex-wrap gap-3">
        {RPS.map((c) => (
          <button
            key={c.key}
            type="button"
            className={`${gameBtn('solid', 'amber', 'flex min-w-[5.5rem] flex-col items-center gap-0.5 py-3')}`}
            onClick={() => play(c.key)}
          >
            <span className="text-3xl" aria-hidden>
              {c.em}
            </span>
            <span className="text-[0.7rem] font-medium uppercase tracking-wide text-muted">{c.sub}</span>
          </button>
        ))}
      </div>
      {you && cpu && (
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1">
            <span className="text-muted">You</span> <span className="text-2xl leading-none">{youEm(you)}</span>
          </span>
          <span className="text-muted">vs</span>
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1">
            <span className="text-muted">CPU</span> <span className="text-2xl leading-none">{cpuEm(cpu)}</span>
          </span>
        </div>
      )}
      {you && cpu && <p className="text-sm font-medium text-fg">{outcome}</p>}
      <p className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-sm font-semibold">
        <span aria-hidden>🔥</span> Win streak: {streak}
      </p>
    </div>
  )
}

const S_PADS = [
  { id: 0, bg: 'oklch(0.62 0.24 20)', em: '🔴' },
  { id: 1, bg: 'oklch(0.58 0.2 150)', em: '🟢' },
  { id: 2, bg: 'oklch(0.58 0.22 255)', em: '🔵' },
  { id: 3, bg: 'oklch(0.7 0.2 95)', em: '🟡' },
] as const

function nextSeq(prev: number[]) {
  const last = prev.length ? prev[prev.length - 1] : -1
  let n: number
  do {
    n = Math.floor(Math.random() * 4)
  } while (n === last && prev.length > 0)
  return [...prev, n]
}

function SimonGame() {
  const [seq, setSeq] = useState<number[]>([])
  const [userStep, setUserStep] = useState(0)
  const [showing, setShowing] = useState(false)
  const [inputActive, setInputActive] = useState(false)
  const [lit, setLit] = useState<number | null>(null)
  const [message, setMessage] = useState('🎵 Watch the colors light up, then repeat the pattern.')
  const runRef = useRef(0)

  const playSequence = useCallback((s: number[]) => {
    const id = ++runRef.current
    setShowing(true)
    setInputActive(false)
    setLit(null)
    let i = 0
    const step = () => {
      if (id !== runRef.current) return
      if (i >= s.length) {
        setLit(null)
        setShowing(false)
        setInputActive(true)
        return
      }
      setLit(s[i])
      window.setTimeout(() => {
        if (id !== runRef.current) return
        setLit(null)
        i += 1
        window.setTimeout(step, 180)
      }, 450)
    }
    window.setTimeout(step, 200)
  }, [])

  const startFresh = useCallback(() => {
    setMessage('👀 Look closely…')
    setUserStep(0)
    const s = nextSeq([])
    setSeq(s)
    window.setTimeout(() => playSequence(s), 200)
  }, [playSequence])

  const handlePad = (id: number) => {
    if (!inputActive) return
    setLit(id)
    window.setTimeout(() => setLit(null), 160)
    const need = seq[userStep]
    if (id !== need) {
      setMessage('✖️ Out of order — new game?')
      setInputActive(false)
      setSeq([])
      setUserStep(0)
      return
    }
    if (userStep === seq.length - 1) {
      setMessage(`✨ Round ${seq.length} cleared! Next is longer…`)
      setUserStep(0)
      setInputActive(false)
      const longer = nextSeq(seq)
      setSeq(longer)
      window.setTimeout(() => playSequence(longer), 500)
    } else {
      setUserStep((u) => u + 1)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-xs text-muted">{message}</p>
      <div className="grid max-w-[220px] grid-cols-2 gap-3 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-indigo-500/10 p-3">
        {S_PADS.map((c) => (
          <button
            key={c.id}
            type="button"
            aria-label={`color pad ${c.em}`}
            onClick={() => handlePad(c.id)}
            className="flex h-20 flex-col items-center justify-center gap-0.5 rounded-2xl border-2 text-lg font-semibold shadow-md transition-transform active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
            style={{
              borderColor:
                lit === c.id
                  ? 'color-mix(in oklch, white, transparent 0%)'
                  : 'color-mix(in oklch, var(--color-border), transparent 0%)',
              background:
                lit === c.id
                  ? c.bg
                  : `color-mix(in oklch, ${c.bg}, var(--color-card) 50%)`,
              boxShadow: lit === c.id ? '0 0 24px color-mix(in oklch, ' + c.bg + ', transparent 40%)' : undefined,
            }}
            disabled={!inputActive}
          >
            <span className="text-2xl drop-shadow-sm" aria-hidden>
              {c.em}
            </span>
            <span className="text-[0.65rem] font-bold uppercase tracking-wider text-fg/80">{c.id + 1}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-muted">Pads light up only when it is your turn to repeat. 🧩</p>
      <div className="flex flex-wrap gap-2">
        <button type="button" className={gameBtn('primary', 'violet')} onClick={startFresh} disabled={showing}>
          {seq.length ? '🎮 New game' : '▶️ Start'}
        </button>
      </div>
    </div>
  )
}

const GAME_CARDS: {
  id: 'tic' | 'memory' | 'reaction' | 'rps' | 'simon'
  icon: string
  title: string
  blurb: string
  bar: string
  iconBg: string
  children: ReactNode
}[] = [
  {
    id: 'tic',
    icon: '🎯',
    title: 'Tic-tac-toe',
    blurb: 'Classic grid — you vs. the machine.',
    bar: 'bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500',
    iconBg: 'from-sky-500/20 to-cyan-500/20 ring-sky-400/30',
    children: <TicTacToe />,
  },
  {
    id: 'memory',
    icon: '🧠',
    title: 'Memory',
    blurb: 'Match emoji pairs on the board.',
    bar: 'bg-gradient-to-r from-fuchsia-500 via-pink-400 to-rose-500',
    iconBg: 'from-fuchsia-500/20 to-pink-500/20 ring-fuchsia-400/30',
    children: <MemoryGame />,
  },
  {
    id: 'reaction',
    icon: '⚡',
    title: 'Reaction',
    blurb: 'Test your reflexes in milliseconds.',
    bar: 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500',
    iconBg: 'from-emerald-500/20 to-teal-500/20 ring-emerald-400/30',
    children: <ReactionGame />,
  },
  {
    id: 'rps',
    icon: '✊',
    title: 'Rock · Paper · Scissors',
    blurb: 'Instant duels and a win streak to chase.',
    bar: 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600',
    iconBg: 'from-amber-500/20 to-orange-500/20 ring-amber-400/35',
    children: <RpsGame />,
  },
  {
    id: 'simon',
    icon: '🎹',
    title: 'Simon',
    blurb: 'Listen with your eyes — repeat the color order.',
    bar: 'bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500',
    iconBg: 'from-violet-500/20 to-fuchsia-500/20 ring-violet-400/30',
    children: <SimonGame />,
  },
]

export function LabMiniGames() {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <section className="space-y-5">
      <div>
        <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
          <span className="mr-1.5" aria-hidden>
            🎪
          </span>
          Mini games
        </h2>
        <p className="mt-1.5 text-sm text-muted">
          Tap a card header to expand or collapse. Five quick browser games — no install, all inline.
        </p>
      </div>
      {/* items-start: without this, grid items in the same row stretch to the tallest card and a
          collapsed neighbor looks “expanded” (empty stretched panel). */}
      <ul className="grid gap-3 items-start lg:grid-cols-2 lg:gap-4">
        {GAME_CARDS.map((g) => {
          const isOpen = !!expanded[g.id]
          const panelId = `lab-game-panel-${g.id}`
          return (
            <li
              key={g.id}
              className="w-full min-w-0 list-none self-start overflow-hidden rounded-3xl border border-border/50 bg-[color-mix(in_oklch,var(--color-card),transparent_8%)] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.15)] dark:shadow-[0_24px_60px_-28px_rgba(0,0,0,0.5)]"
            >
              <div className={`h-1.5 w-full ${g.bar} opacity-90`} />
              <div className="border-t border-border/40">
                <button
                  type="button"
                  id={`lab-game-trigger-${g.id}`}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(g.id)}
                  className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_94%)] dark:hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_90%)]"
                >
                  <div
                    className={`flex h-14 w-14 shrink-0 select-none items-center justify-center rounded-2xl bg-gradient-to-br text-2xl ring-1 ${g.iconBg} shadow-sm`}
                  >
                    <span aria-hidden>{g.icon}</span>
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <h3 className="text-base font-semibold text-fg">{g.title}</h3>
                    <p className="mt-0.5 text-xs leading-relaxed text-muted">{g.blurb}</p>
                  </div>
                  <span
                    className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-[color-mix(in_oklch,var(--color-card),transparent_20%)] text-muted transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                    aria-hidden
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={`lab-game-trigger-${g.id}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-border/30 px-4 pb-5 pt-1">{g.children}</div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
