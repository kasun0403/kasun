export type WorkExperienceItem = {
  title: string
  company: string
  companyUrl?: string
  range: string
  /** e.g. Part-time, Intern */
  note?: string
  bullets: string[]
}

export const workExperience: WorkExperienceItem[] = [
  {
    title: 'Web project support',
    company: 'Builtapps',
    range: '2025–present',
    bullets: [
      'Supporting custom software and web projects at Builtapps, alongside the team across different areas.',
    ],
  },
  {
    title: 'Flutter Developer',
    company: 'Gomi‑Map',
    range: 'Aug 2025 – Sept 2025',
    note: 'Part-time',
    bullets: [
      'Developed and maintained mobile application features using Flutter.',
      'Collaborated with the Gomi‑Map team on app design and improvements.',
    ],
  },
  {
    title: 'Mobile Application Developer (Flutter)',
    company: 'Digital Yogin',
    range: 'Jan 2023 – May 2023',
    bullets: [
      'Developed feature-rich, user-friendly mobile applications using Flutter.',
      'Integrated APIs and implemented Firebase for real-time data handling and authentication.',
      'Collaborated with cross-functional teams to improve app performance and usability.',
    ],
  },
  {
    title: 'Associate Software Engineer (Mobile – Flutter)',
    company: 'Zeebo Holdings',
    range: 'Jan 2022 – Dec 2022',
    bullets: [
      'Gained hands-on experience with REST APIs and Google Maps APIs.',
      'Optimized app performance.',
    ],
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Inoxza Solutions (Pvt) Ltd',
    range: 'June 2021 – Dec 2021',
    bullets: [
      'Assisted in developing a mobile application for inventory management.',
      'Gained hands-on experience with state management and UI development in Flutter.',
    ],
  },
]

export type KeyProjectHighlight = {
  name: string
  points: string[]
}

export type KeyProjectGroup = {
  /** Aligns with home: e‑commerce, mobile, web/Capacitor. */
  domain: string
  intro?: string
  projects: KeyProjectHighlight[]
}

export const keyProjectHighlightGroups: KeyProjectGroup[] = [
  {
    domain: 'Web apps & Capacitor',
    intro: 'The same “web stack” called out on the home page: React, TypeScript, Vite, Tailwind, Firebase, and packaging with Capacitor for stores.',
    projects: [
      {
        name: 'Affiliate + Google Analytics funnels',
        points: [
          'Landing and campaign pages structured so marketing can measure what converts, not just what loads.',
          'Affiliate and tracking links wired without breaking the rest of the router or ad-blocker-safe assumptions where possible.',
        ],
      },
      {
        name: 'Portfolio & marketing sites',
        points: [
          'Fast, content-led sites (Vite + React) with clear routing, responsive layout, and Firebase Hosting for straightforward deploys.',
          'Tighten typography, spacing, and CTA placement so the site matches how you pitch the product—not a generic template.',
        ],
      },
      {
        name: 'Web → iOS & Android (Capacitor)',
        points: [
          'Wrap an existing Vite/React web app in Capacitor, wire native project settings, and use plugins only where the browser falls short.',
          'Prepare signed builds and checklist-style prep for App Store and Play Store submission from one JS codebase.',
        ],
      },
    ],
  },
  {
    domain: 'E‑commerce',
    intro:
      'E‑commerce web and mobile—different domains and constraints, with catalog, cart, and ordering that still have to work under real traffic.',
    projects: [
      {
        name: 'E‑commerce grocery application',
        points: [
          'Late-stage UI polish and new features for catalog, cart, and ordering flows; kept Material patterns consistent as requirements tightened.',
          'Triage and fixes for high-impact bugs that blocked or slowed releases; focused on checkout paths and day-to-day order flows.',
          'Performance passes on scroll-heavy and list screens so the app stayed smooth on mid-range devices.',
        ],
      },
    ],
  },
  {
    domain: 'Mobile (Flutter)',
    intro: 'Production Flutter work: maps, reading/productivity, APIs, and getting builds through review.',
    projects: [
      {
        name: 'PDF reader (optical / tablet use)',
        points: [
          'Built note-taking, bookmarks, and screen layouts that felt natural on tablets for long reading sessions.',
          'Added Firebase Auth for sign-in, alongside sensible loading and error states for slow networks.',
          'Tightened safe areas and touch targets for mixed portrait/landscape use in the field.',
        ],
      },
      {
        name: 'Gomi‑Map (part-time)',
        points: [
          'Shipped features in small, reviewable slices so the existing roadmap could keep moving without regressions.',
          'Collaborated on UX tweaks with the product team: navigation, map-adjacent flows, and consistency across screens.',
          'Bug-first when stability was at risk, then follow-up for polish once critical paths were solid.',
        ],
      },
      {
        name: 'Simple weather app (personal)',
        points: [
          'City search, live OpenWeather data, and Provider-based state with a clean, lightweight UI.',
          'Theming and readability-first layout—good exercise in API + state shape without over-engineering.',
        ],
      },
      {
        name: 'Hardening & Play Store (various client apps)',
        points: [
          'Final pass debugging across Android builds: crashes, device quirks, and last-mile integration issues.',
          'Supported store listings and deployment steps so apps actually reached testers and production users, not just dev devices.',
        ],
      },
    ],
  },
]
