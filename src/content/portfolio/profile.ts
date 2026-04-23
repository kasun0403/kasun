export const profile = {
  name: 'Kasun Tharanga Dilshan',
  /** Full legal name (e.g. contact / formal). */
  fullName: 'Edirisooriya Mudiyanselage Kasun Tharanga Dilshan',
  initials: 'K',
  /** Alt text for the home hero portrait (professional headshot). */
  portraitAlt:
    'Kasun Tharanga Dilshan — professional portrait in a dark suit with a white shirt and university tie, facing the camera',
  headline: 'Web: React, TypeScript, Vite, Tailwind, Capacitor, Firebase · Flutter',
  location: 'Bandarawela, Sri Lanka',
  address: 'Bandarawela, Sri Lanka',
  phone: '+94 77 3068 777',
  /** E.164 for tel:/wa.me. */
  phoneE164: '+94773068777',
  availabilityLabel: 'Open to opportunities (full‑time / contract)',
  replyTimeLabel: '~24h',
  email: 'ktharanga1031@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/kasun-edirisooriya-06101219b/',
    github: 'https://github.com/kasun0403',
  },
  positioning: {
    shortBio:
      '5+ years shipping mobile and web: e‑commerce, affiliate + Google Analytics, and portfolio experiences with React, TypeScript, Vite, react-router-dom, Tailwind, Firebase, and Capacitor (web → iOS and Android). Flutter + Firebase for native mobile. Strong UI/UX, clean integrations, and production releases (stores, hosting, and hardening).',
    niches: ['Flutter + Firebase', 'Capacitor (web → mobile)', 'Store releases (iOS + Android)'] as const,
    /** How you work with AI tooling—teams, not a site disclaimer. */
    workWithAi: {
      label: 'AI‑fluent delivery',
      summary:
        'I work comfortably with code assistants, copilots, and LLM-based workflows: faster iteration, same standards for review, tests, and what ships.',
      text: `I'm effective in modern, AI-augmented engineering environments. I use IDE assistants, pair-programming tools, and LLMs (Cursor, ChatGPT, GitHub Copilot, etc.) where they accelerate exploration, refactors, and documentation—then I apply the same rigor around correctness, security, and maintainability. I'm upfront about that workflow and partner well with teams that expect AI in the day-to-day while keeping humans accountable for outcomes.`,
    },
    domains: [
      'E‑commerce / grocery ordering',
      'Affiliate + analytics (GA) funnels & tracking',
      'Portfolio and marketing sites',
      'Maps & location-based apps',
      'Productivity tools (PDF reader)',
      'Authentication & real‑time data',
    ] as const,
  },
  projectTypes: [
    {
      title: 'E‑commerce',
      text: 'Product catalogs, cart/checkout flows, admin basics, and Firebase-backed data where it fits the product.',
    },
    {
      title: 'Affiliate + Google Analytics',
      text: 'Landing funnels, campaign tracking, affiliate link flows, and GA-friendly page structure to measure what converts.',
    },
    {
      title: 'Portfolios & marketing sites',
      text: 'Fast, polished sites with Vite + React, clean routing, and Firebase Hosting for simple deployments.',
    },
    {
      title: 'Web → mobile (Capacitor)',
      text: 'Package existing web apps for the App Store and Play Store: native shell, plugins where needed, and store-ready builds.',
    },
  ] as const,
  services: [
    {
      title: 'Web projects (React, TypeScript, Vite)',
      text: 'Production web work with React 19, TypeScript, Vite, react-router-dom, Tailwind, Capacitor, and Firebase—e‑commerce, affiliate + GA funnels, portfolio and marketing sites, and performance-minded UI that ships.',
    },
    {
      title: 'Flutter app development (end‑to‑end)',
      text: 'From screens to release: clean UI, state management (Provider/Bloc), and shipping to the App Store and Play Store.',
    },
    {
      title: 'Capacitor: web to iOS & Android',
      text: 'Wrap React/Vite web apps in Capacitor, configure native projects, and prepare signed builds for store submission.',
    },
    {
      title: 'Firebase, APIs, and hardening',
      text: 'Auth, Firestore/Realtime DB, Cloud Functions, Storage, REST integrations—and bug fixes, perf passes, and pre-release stability.',
    },
  ] as const,
} as const

