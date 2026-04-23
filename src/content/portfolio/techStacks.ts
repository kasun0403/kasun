export type StackCategory = {
  id: string
  /** Small header above the stack name: platform / role context */
  kicker: string
  label: string
  items: string[]
  /** Trailing "etc." line for things not spelled out */
  etc?: string
}

/** Primary groups: top-level name → sub stack (scannable for hiring). Order: React → Flutter → Firebase → GitHub. */
export const stackCollapsibles: StackCategory[] = [
  {
    id: 'react',
    kicker: 'Web app · mobile (Capacitor)',
    label: 'React',
    items: [
      'React, TypeScript, Vite',
      'Client routing, Tailwind',
      'Vercel — deployments, preview URLs, environment variables',
      'Capacitor — web to native: iOS & Android shells, store builds, native plugins & config',
      'Icons, charts, PDF export, page capture, QR in the UI',
      'Motion / interaction polish (e.g. Framer Motion) when it helps the story',
      'REST and third-party APIs (maps, weather, analytics-friendly pages, …)',
    ],
    etc: 'Postman, AI-assisted dev workflows, and other tooling as the team agrees.',
  },
  {
    id: 'flutter',
    kicker: 'Mobile',
    label: 'Flutter',
    items: [
      'Dart, Material Design, light / dark theming',
      'State: Provider, Bloc (as the codebase prefers)',
      'Xcode, Android Studio, App Store and Play Store releases',
    ],
    etc: 'for native-feeling iOS and Android from one codebase.',
  },
  {
    id: 'firebase',
    kicker: 'Auth, data & hosting',
    label: 'Firebase',
    items: [
      'Cloud Functions (Node 20)',
      'Firestore + security rules',
      'Realtime Database + security rules',
      'Storage, Hosting (incl. SPA rewrites)',
      'Auth',
      'Transactional email from functions (Resend)',
      'Server-side hardening: password hashing, TOTP / 2FA where needed',
    ],
    etc: 'and related GCP-style ops as the product needs them.',
  },
  {
    id: 'github',
    kicker: 'Repos, review & delivery',
    label: 'GitHub',
    items: [
      'Repos, branches, pull requests, code review',
      'Issues and lightweight project tracking',
      'E2E checks with Playwright where it matters',
    ],
    etc: 'and whatever CI the team already uses.',
  },
]
