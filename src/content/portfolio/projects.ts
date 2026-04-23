export type ProjectTag = 'Mobile' | 'Flutter' | 'Firebase' | 'APIs' | 'Shipping'

export type ProjectLink = {
  label: string
  href: string
}

export type CaseStudyBlock =
  | { type: 'context'; text: string }
  | { type: 'problem'; items: string[] }
  | { type: 'constraints'; items: string[] }
  | { type: 'solution'; items: string[] }
  | { type: 'results'; items: string[] }
  | { type: 'next'; items: string[] }

export type Project = {
  slug: string
  title: string
  summary: string
  role: string
  year: string
  tags: ProjectTag[]
  stack: string[]
  highlights: string[]
  links: ProjectLink[]
  caseStudy: CaseStudyBlock[]
}

export const projects: Project[] = [
  {
    slug: 'ecommerce-grocery-app',
    title: 'E‑commerce Grocery App',
    summary: 'UI enhancements, feature delivery, and stability fixes near the finish line.',
    role: 'Associate Software Engineer (Flutter)',
    year: '2022',
    tags: ['Mobile', 'Flutter', 'APIs', 'Shipping'],
    stack: ['Flutter', 'Dart', 'REST APIs', 'Material Design'],
    highlights: ['Shipped UI improvements late-stage', 'Debugged critical issues and optimized flows'],
    links: [
      { label: 'Case study', href: '/work/ecommerce-grocery-app' },
    ],
    caseStudy: [
      { type: 'context', text: 'A grocery ordering app needed final-stage improvements before release.' },
      {
        type: 'problem',
        items: [
          'UI needed polish and consistency across key flows',
          'Critical bugs were blocking a stable release',
        ],
      },
      {
        type: 'constraints',
        items: ['Late stage changes', 'Keep UX consistent', 'Fix issues without regressions'],
      },
      {
        type: 'solution',
        items: [
          'Improved UI and interaction details where users struggled',
          'Debugged high-impact issues and tightened edge cases',
          'Optimized flows and reduced friction in checkout-related screens',
        ],
      },
      {
        type: 'results',
        items: [
          'Smoother, more consistent user experience',
          'Stability improvements during final delivery phase',
        ],
      },
      {
        type: 'next',
        items: ['Add crash/error monitoring', 'Introduce a small UI regression checklist before releases'],
      },
    ],
  },
  {
    slug: 'pdf-reader-optical',
    title: 'PDF Reader for Optical Company',
    summary: 'A tablet-friendly PDF reader with notes, bookmarks, and Firebase login.',
    role: 'Mobile Application Developer (Flutter)',
    year: '2023',
    tags: ['Mobile', 'Flutter', 'Firebase', 'Shipping'],
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Material Design'],
    highlights: ['Built note-taking + bookmarks', 'Improved tablet compatibility', 'Integrated Firebase authentication'],
    links: [{ label: 'Case study', href: '/work/pdf-reader-optical' }],
    caseStudy: [
      { type: 'context', text: 'An optical company needed a PDF reader workflow for tablet use.' },
      {
        type: 'problem',
        items: ['Users needed to annotate and save reading context', 'Tablet UX needed to feel natural'],
      },
      {
        type: 'constraints',
        items: ['Simple UX for busy users', 'Secure login', 'Reliable data storage'],
      },
      {
        type: 'solution',
        items: [
          'Added note-taking and bookmarks for fast navigation',
          'Ensured tablet-friendly layouts and interactions',
          'Implemented Firebase authentication for login',
        ],
      },
      {
        type: 'results',
        items: ['Users could resume reading quickly', 'Improved usability on tablets', 'Secure access via login'],
      },
      { type: 'next', items: ['Add search within PDFs', 'Improve offline handling for annotations'] },
    ],
  },
  {
    slug: 'gomimap-flutter',
    title: 'Gomi‑Map (Part‑time)',
    summary: 'Maintained and improved Flutter app features with the team.',
    role: 'Flutter Developer (Part‑time)',
    year: '2025 (Aug – Sept)',
    tags: ['Mobile', 'Flutter', 'APIs'],
    stack: ['Flutter', 'Dart', 'REST APIs'],
    highlights: ['Delivered features and fixes', 'Collaborated closely on UX improvements'],
    links: [{ label: 'Case study', href: '/work/gomimap-flutter' }],
    caseStudy: [
      { type: 'context', text: 'A production Flutter app needed ongoing feature work and improvements.' },
      {
        type: 'problem',
        items: ['Ship features without slowing the team', 'Keep UX consistent as the app evolved'],
      },
      {
        type: 'constraints',
        items: ['Part‑time schedule', 'Avoid regressions', 'Coordinate with an existing roadmap'],
      },
      {
        type: 'solution',
        items: [
          'Implemented features in small, reviewable increments',
          'Worked with the team on design and usability improvements',
          'Took a bug-first approach when stability was at risk',
        ],
      },
      {
        type: 'results',
        items: ['Steady progress on planned features', 'Improved overall app quality'],
      },
      { type: 'next', items: ['Add analytics to validate UX changes', 'Improve test coverage for key flows'] },
    ],
  },
  {
    slug: 'weather-app',
    title: 'Simple Weather App',
    summary: 'A clean Flutter weather app with search, live data, and theming.',
    role: 'Personal project',
    year: '2022',
    tags: ['Mobile', 'Flutter', 'APIs'],
    stack: ['Flutter', 'Dart', 'OpenWeather API', 'Provider'],
    highlights: ['City search', 'Real-time weather', 'Theme switching'],
    links: [{ label: 'Case study', href: '/work/weather-app' }],
    caseStudy: [
      { type: 'context', text: 'A small project to practice API integration + clean UI.' },
      { type: 'problem', items: ['Display weather quickly', 'Keep UI simple and readable'] },
      { type: 'constraints', items: ['Lightweight state management', 'Fast interactions on mobile'] },
      { type: 'solution', items: ['Provider-based state management', 'Search + theming', 'Clean UI with good spacing'] },
      { type: 'results', items: ['Working demo app for API + state patterns'] },
      { type: 'next', items: ['Add caching', 'Add location-based weather'] },
    ],
  },
]

export const projectTags: ProjectTag[] = ['Mobile', 'Flutter', 'Firebase', 'APIs', 'Shipping']

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

