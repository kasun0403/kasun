export type WorkExperienceItem = {
  title: string
  company: string
  companyUrl?: string
  range: string
  location?: string
  note?: string
  summary?: string
  bullets: string[]
  technologies?: string[]
}

/** Verified professional history from existing portfolio / CV content. */
export const workExperience: WorkExperienceItem[] = [
  {
    title: 'Freelance Developer',
    company: 'Independent',
    range: 'Oct 2025 – Present',
    summary:
      'Helping build web applications and Capacitor mobile apps, and shipping them to the App Store and Play Store.',
    bullets: [
      'Help develop web applications and mobile applications using Capacitor.',
      'Deploy releases to the App Store and Play Store.',
    ],
    technologies: ['Capacitor', 'React', 'TypeScript', 'App Store', 'Play Store'],
  },
  {
    title: 'Web Project Support',
    company: 'Builtapps',
    range: '2025 – Present',
    location: 'Sri Lanka',
    summary:
      'Supporting custom software and web projects alongside the Builtapps team across product and delivery work.',
    bullets: [
      'Contributing to custom software and web projects with the engineering team.',
      'Supporting implementation, iteration, and delivery across different project areas.',
    ],
    technologies: ['React', 'TypeScript', 'Firebase', 'Web applications'],
  },
  {
    title: 'Flutter Developer',
    company: 'Gomi-Map',
    range: 'Aug 2025 – Sept 2025',
    note: 'Part-time',
    summary:
      'Developed and maintained mobile application features for a location-based Flutter product.',
    bullets: [
      'Shipped mobile features in small, reviewable increments.',
      'Collaborated with the team on design and usability improvements.',
      'Addressed stability issues on critical paths before polish work.',
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs'],
  },
  {
    title: 'Mobile Application Developer',
    company: 'Digital Yogin',
    range: 'Jan 2023 – May 2023',
    summary:
      'Built feature-rich Flutter applications with API integrations and Firebase-backed data flows.',
    bullets: [
      'Developed user-friendly mobile applications using Flutter.',
      'Integrated APIs and Firebase for authentication and real-time data handling.',
      'Collaborated with cross-functional teams to improve performance and usability.',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Zeebo Holdings',
    range: 'Jan 2022 – Dec 2022',
    note: 'Mobile – Flutter',
    summary:
      'Contributed to production Flutter features with a focus on APIs, maps, and performance.',
    bullets: [
      'Integrated REST APIs and Google Maps into Flutter application features.',
      'Improved responsiveness on map and list-heavy screens.',
    ],
    technologies: ['Flutter', 'Dart', 'REST APIs', 'Google Maps'],
  },
  {
    title: 'Flutter Developer Intern',
    company: 'Inoxza Solutions (Pvt) Ltd',
    range: 'June 2021 – Dec 2021',
    summary:
      'Assisted in developing a Flutter inventory-management application and strengthened foundational mobile engineering skills.',
    bullets: [
      'Contributed to inventory-management screens and application flows.',
      'Gained hands-on experience with Flutter UI development and state management.',
    ],
    technologies: ['Flutter', 'Dart'],
  },
]

export type KeyProjectHighlight = {
  name: string
  points: string[]
}

export type KeyProjectGroup = {
  domain: string
  intro?: string
  projects: KeyProjectHighlight[]
}

/** Legacy content retained for unused portfolio routes type-checking. */
export const keyProjectHighlightGroups: KeyProjectGroup[] = [
  {
    domain: 'Mobile (Flutter)',
    projects: [
      {
        name: 'Gomi-Map',
        points: ['Feature delivery and UX improvements on a location-based Flutter app.'],
      },
    ],
  },
]
