export type EducationItem = {
  period: string
  degree: string
  institution: string
  detail?: string
}

/** Verified from existing portfolio Skills page content. */
export const education: EducationItem[] = [
  {
    period: '2023–2025',
    degree: 'M.Sc. in Information Technology',
    institution: 'Kyoto College of Graduate Studies for Informatics, Japan',
  },
  {
    period: '2017–2022',
    degree: 'B.Sc. in Business Information Systems (Special)',
    institution: 'University of Sri Jayewardenepura, Sri Lanka',
    detail: 'English medium · Second class honours',
  },
]
