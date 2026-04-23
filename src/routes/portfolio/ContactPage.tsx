import { useMemo, useState } from 'react'
import { Page } from '../../components/portfolio/motion'
import { profile } from '../../content/portfolio/profile'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry — ${name || 'Hello'}`)
    const body = encodeURIComponent(
      [`Name: ${name}`, `Email: ${email}`, '', message].filter(Boolean).join('\n'),
    )
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }, [email, message, name])

  return (
    <Page className="space-y-6">
      <header className="space-y-3">
        <div className="text-xs font-semibold text-muted">Contact</div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Hiring or have a project?</h1>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Send a short note—hiring context, link to the role, or what you are building. I respond promptly; email
          and LinkedIn work too.
        </p>
      </header>

      <section className="grid gap-3 lg:grid-cols-2">
        <form
          className="glass rounded-3xl p-5"
          onSubmit={(e) => {
            e.preventDefault()
            window.location.href = mailto
          }}
        >
          <div className="text-sm font-semibold">Message</div>
          <div className="mt-4 grid gap-3">
            <label className="grid gap-2 text-sm">
              <span className="text-xs font-semibold text-muted">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-2xl border border-border/70 bg-transparent px-4 py-3 text-sm"
                placeholder="Kasun"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-xs font-semibold text-muted">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-2xl border border-border/70 bg-transparent px-4 py-3 text-sm"
                placeholder="you@company.com"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-xs font-semibold text-muted">Message</span>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-36 rounded-2xl border border-border/70 bg-transparent px-4 py-3 text-sm"
                placeholder="What are you building, and what outcome matters?"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-[color-mix(in_oklch,var(--color-primary),transparent_10%)] px-5 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-primary),transparent_4%)]"
            >
              Send
            </button>
            <div className="text-xs text-muted">This opens your email client to send the message above.</div>
          </div>
        </form>

        <div className="space-y-3">
          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">Details</div>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <p>
                <span className="text-xs font-semibold text-muted">Name</span>
                <span className="mt-0.5 block text-fg">{profile.fullName}</span>
              </p>
              <p>
                <span className="text-xs font-semibold text-muted">Address</span>
                <span className="mt-0.5 block text-fg">{profile.address}</span>
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">Links</div>
            <div className="mt-4 grid gap-2">
              <a
                className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                href={`mailto:${profile.email}`}
              >
                Email
              </a>
              <a
                className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                href={`tel:${profile.phoneE164}`}
              >
                Phone · {profile.phone}
              </a>
              <a
                className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                href={`https://wa.me/${profile.phoneE164.replace(/^\+/, '')}`}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a
                className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-2xl border border-border/70 px-4 py-3 text-sm font-semibold hover:bg-[color-mix(in_oklch,var(--color-card),transparent_10%)]"
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className="glass rounded-3xl p-5">
            <div className="text-sm font-semibold">Calendar</div>
            <div className="mt-1 text-xs text-muted">
              Optional: add a scheduling link.
            </div>
            <div className="mt-4 rounded-2xl border border-border/70 p-4 text-sm text-muted">
              Add your Calendly link here if you want 1‑click booking.
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}

