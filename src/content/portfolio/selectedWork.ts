import { showcaseDemos } from '../projectsShowcaseDemos'

export type SelectedProject = {
  id: string
  name: string
  description: string
  category: string
  stack: string[]
  imageSrc?: string
  imageAlt?: string
  href?: string
  /** When true, show as private / no external link */
  private?: boolean
}

/**
 * Featured work using verified assets and descriptions only.
 * Showcase demos provide public screenshots + live URLs.
 * Case-study projects without public links remain unlinked.
 */
export const selectedWork: SelectedProject[] = [
  {
    id: showcaseDemos[0].id,
    name: showcaseDemos[0].title,
    description: showcaseDemos[0].summary,
    category: 'Web application',
    stack: showcaseDemos[0].stack,
    imageSrc: showcaseDemos[0].imageSrc,
    imageAlt: showcaseDemos[0].imageAlt,
    href: showcaseDemos[0].href,
  },
  {
    id: showcaseDemos[1].id,
    name: showcaseDemos[1].title,
    description: showcaseDemos[1].summary,
    category: 'E-commerce',
    stack: showcaseDemos[1].stack,
    imageSrc: showcaseDemos[1].imageSrc,
    imageAlt: showcaseDemos[1].imageAlt,
    href: showcaseDemos[1].href,
  },
  {
    id: showcaseDemos[2].id,
    name: showcaseDemos[2].title,
    description: showcaseDemos[2].summary,
    category: 'Web · Firebase',
    stack: showcaseDemos[2].stack,
    imageSrc: showcaseDemos[2].imageSrc,
    imageAlt: showcaseDemos[2].imageAlt,
    href: showcaseDemos[2].href,
  },
  {
    id: 'gomimap-flutter',
    name: 'Gomi-Map',
    description:
      'Location-based Flutter application — feature delivery, UX improvements, and maintenance alongside the product team.',
    category: 'Mobile',
    stack: ['Flutter', 'Dart', 'REST APIs'],
    private: true,
  },
  {
    id: 'ecommerce-grocery-app',
    name: 'E-commerce Grocery App',
    description:
      'Late-stage UI enhancements, feature delivery, and stability fixes for a grocery ordering mobile application.',
    category: 'Mobile',
    stack: ['Flutter', 'Dart', 'REST APIs', 'Material Design'],
    private: true,
  },
  {
    id: 'pdf-reader-optical',
    name: 'PDF Reader',
    description:
      'Tablet-friendly PDF reader with notes, bookmarks, and Firebase authentication for an optical company workflow.',
    category: 'Mobile · Firebase',
    stack: ['Flutter', 'Dart', 'Firebase Auth', 'Material Design'],
    private: true,
  },
]
