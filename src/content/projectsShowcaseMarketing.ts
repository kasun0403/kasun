/** Client-facing copy aligned with the service flyer (custom apps, dashboards, SMB focus). */

export const marketingHeadline = {
  primary: 'Smarter custom applications & dashboards',
  sinhala: 'ඔබේ ව්‍යාපාරයට සරිලන පරිදි සකස් කළ ඔබේම වෙබ් අඩවියක්.',
  mission:
    'We design and build customized web apps and dashboards for direct client management—so you can handle bookings, sales, inventory, and staff workflows in one place while you grow the business.',
} as const

export type ValuePillar = { title: string; body: string }

export const valuePillars: ValuePillar[] = [
  {
    title: 'Tailored to your business',
    body: 'Built around your goals, pricing, and day‑to‑day workflow—not a one‑size template.',
  },
  {
    title: 'Secure & reliable',
    body: 'Solid hosting, sensible permissions, and careful handling of customer data and payments.',
  },
  {
    title: 'Data‑driven insights',
    body: 'Dashboards and reports that answer real questions: revenue, bookings, stock, and trends.',
  },
  {
    title: 'Scalable & future‑ready',
    body: 'Start lean, then extend features, integrations, and automation as demand grows.',
  },
]

export type IndustryChip = { label: string; hint: string }

export const industryChips: IndustryChip[] = [
  { label: 'Salons', hint: 'Bookings, services, stylists' },
  { label: 'Gyms', hint: 'Memberships, schedules' },
  { label: 'Restaurants', hint: 'Menus, orders, pickup' },
  { label: 'Clinics', hint: 'Appointments, patient flows' },
  { label: 'Services', hint: 'Quotes, jobs, invoices' },
  { label: 'Retail', hint: 'Catalog, checkout, delivery' },
  { label: '& more', hint: 'If you serve customers, we can map a system' },
]

export type WhyUsPoint = { title: string; body: string }

export const whyChooseUs: WhyUsPoint[] = [
  {
    title: 'Direct communication',
    body: 'You work directly with the builder—clear updates, fast answers, no mystery layers.',
  },
  {
    title: 'On‑time delivery',
    body: 'Milestones you can see: discovery, design, build, launch, and a sensible buffer for fixes.',
  },
  {
    title: 'Ongoing support',
    body: 'Help after launch for tweaks, training, small improvements, and when your business changes.',
  },
  {
    title: 'Affordable pricing',
    body: 'Practical scopes for small businesses: start with what pays back first, then expand.',
  },
]

export const capabilityStrip = [
  'Custom web applications',
  'Powerful dashboards',
  'Automation & integrations',
  'Cloud‑based solutions',
] as const

export const consultationCta = {
  line: 'Get a free project consultation and walkthrough of a live demo.',
  sinhalaConnect: 'අප හා අදම සම්බන්ධ වන්න',
} as const
