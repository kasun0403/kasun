export type ShowcaseDemoClientSheet = {
  /** Short paragraph a non‑technical owner understands in one read */
  ownerIntro: string
  perfectForYouIf: string[]
  painPointsWeAddress: string[]
  whatYourCustomersExperience: string[]
  whatYouCanOperateDayToDay: string[]
  howWeTypicallyWorkTogether: string[]
  /** Maps this demo to flyer “industries” language */
  flyerIndustryFit: string[]
}

export type ShowcaseDemo = {
  id: string
  title: string
  tagline: string
  href: string
  imageSrc: string
  imageAlt: string
  summary: string
  highlights: string[]
  stack: string[]
  clientSheet: ShowcaseDemoClientSheet
}

export const showcaseDemos: ShowcaseDemo[] = [
  {
    id: 'saloon',
    title: 'HI Family Salon',
    tagline: 'Service booking with live slots and WhatsApp handoff',
    href: 'https://saloon-one-theta.vercel.app/',
    imageSrc: '/showcase/saloon.png',
    imageAlt: 'Screenshot of the HI Family Salon demo: hero, services, and booking messaging',
    summary:
      'A polished salon marketing + booking flow: browse services with durations and pricing, pick a date, match to stylists, and move guests toward confirmation with conflict-aware scheduling cues.',
    highlights: [
      'Guided booking path (service → date → stylist)',
      'WhatsApp-style confirmation story on the landing narrative',
      'Service catalog with realistic durations and LKR pricing',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    clientSheet: {
      ownerIntro:
        'This demo shows how a salon (or any appointment business) can look online when bookings are organized instead of scattered across phone calls and messages. Guests see services, prices, and time clearly—so they feel confident before they even walk in.',
      perfectForYouIf: [
        'You run a salon, spa, barber shop, or beauty studio',
        'You take appointments and want fewer “double booked” mistakes',
        'You want customers to self‑serve browsing: services, durations, and prices',
        'You already confirm on WhatsApp but want a cleaner front door on the web',
      ],
      painPointsWeAddress: [
        'Guests asking the same pricing questions repeatedly',
        'Hard to communicate how long each service takes (and why that matters)',
        'Busy reception desks juggling calls while clients wait',
        'No single place that explains your team, services, and booking flow',
      ],
      whatYourCustomersExperience: [
        'A calm, modern website that feels trustworthy on mobile',
        'Clear service menu with realistic durations and local currency pricing',
        'A guided booking story: pick service → pick date → pick stylist',
        'Strong “next step” messaging so customers know what happens after booking',
      ],
      whatYouCanOperateDayToDay: [
        'In a full build, this expands into admin tools: calendars, staff schedules, blocked times, and customer notes',
        'Optional dashboards for daily revenue, popular services, and peak hours',
        'Optional WhatsApp handoff templates so confirmations stay consistent',
        'Designed so you can add new services and prices without rebuilding the whole site',
      ],
      howWeTypicallyWorkTogether: [
        'A short discovery call: your services, pricing rules, staff roles, and peak hours',
        'A simple sitemap: what customers see vs what you manage internally',
        'A staged launch: customer site first, then admin/dashboard features as needed',
        'Training + a small support window after launch so your team is confident',
      ],
      flyerIndustryFit: ['Salons', 'Services (appointments)', 'Clinics (booking‑style flows)'],
    },
  },
  {
    id: 'kasun-fashion',
    title: 'Kasun Fashion',
    tagline: 'Modern apparel storefront with catalog, filters, and cart',
    href: 'https://cloth-store-tau-tan.vercel.app/',
    imageSrc: '/showcase/kasun-fashion.png',
    imageAlt: 'Screenshot of the Kasun Fashion demo: shop categories and product cards',
    summary:
      'An e‑commerce style storefront built for fast browsing: category entry points, new arrivals, product detail routes, and a credible checkout story with delivery and returns messaging.',
    highlights: [
      'Shop flows with sorting and category-driven discovery',
      'Product pages with pricing, sale states, and add‑to‑cart UX',
      'Trust-forward copy for delivery windows and secure checkout',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    clientSheet: {
      ownerIntro:
        'This demo is for retail brands that need a clean online shop: categories, product pages, pricing clarity, and a checkout experience that doesn’t feel “homemade.” It’s built to help customers decide fast—especially on phones.',
      perfectForYouIf: [
        'You sell clothing, accessories, or packaged retail products',
        'You want customers to browse by category and compare options quickly',
        'You need sale pricing, variants (sizes/colors), and stock messaging',
        'You want delivery/returns trust copy that matches Sri Lanka‑style operations',
      ],
      painPointsWeAddress: [
        'Instagram/WhatsApp sales work—but scaling becomes messy without a catalog',
        'Customers hesitate when pricing, sizing, and delivery expectations are unclear',
        'Hard to showcase “new arrivals” and promotions in a structured way',
        'Checkout anxiety: people abandon carts when the flow feels uncertain',
      ],
      whatYourCustomersExperience: [
        'Fast shop browsing with categories and “new arrivals” sections',
        'Product pages that answer the basics: price, sale, details, add to cart',
        'Sorting and filters that help shoppers narrow down without confusion',
        'Trust signals for delivery windows, returns, and secure payments (demo‑appropriate)',
      ],
      whatYouCanOperateDayToDay: [
        'In a full build: product admin, inventory, orders list, statuses, and exports',
        'Dashboards for revenue, top products, returns reasons, and campaign performance',
        'Integrations: payments, SMS/WhatsApp updates, courier workflows (as needed)',
        'SEO‑friendly pages so Google can index categories and products properly',
      ],
      howWeTypicallyWorkTogether: [
        'We align on your catalog structure: categories, variants, and pricing rules',
        'We define fulfillment: pickup vs delivery, regions, SLAs, return policy pages',
        'We launch a tight MVP storefront first, then add admin + automation in phases',
        'We train your team on updating products so you’re not blocked on every change',
      ],
      flyerIndustryFit: ['Retail', 'Services (delivery‑led businesses)', 'Restaurants (menu/catalog patterns)'],
    },
  },
  {
    id: 'men-fashion',
    title: 'Men Fashion — Rental',
    tagline: 'Premium suit & tuxedo rental with date-aware reservations',
    href: 'https://menfashion-tau.vercel.app/',
    imageSrc: '/showcase/men-fashion.png',
    imageAlt: 'Screenshot of the Men Fashion rental demo: hero and collection highlights',
    summary:
      'A premium rental experience for weddings and events: editorial collections, date-aware reservations, deposits explained clearly, and a guided path from browsing to account-backed checkout.',
    highlights: [
      'Rental-focused IA (black tie, modern wedding, outdoor looks)',
      'Pickup/return timeline messaging aligned to real events',
      'Account + role story suitable for guests and staff workflows',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase'],
    clientSheet: {
      ownerIntro:
        'This demo targets rental businesses where dates matter: weddings, events, and formal wear. It shows how to guide customers through collections, sizing notes, rental windows, deposits, and account creation—without overwhelming them.',
      perfectForYouIf: [
        'You rent suits, dresses, equipment, vehicles, or anything “reserved by date range”',
        'You need customers to understand pickup/return timelines in plain language',
        'You want deposits and hold amounts explained upfront to reduce disputes',
        'You need accounts so customers can save carts and bookings across visits',
      ],
      painPointsWeAddress: [
        'Customers don’t understand date ranges, buffers, and return rules',
        'Deposits feel “scary” unless the UI explains what happens at return time',
        'Staff need a controlled workflow: availability, conflicts, and handover checks',
        'High‑consideration purchases need editorial guidance—not only a price list',
      ],
      whatYourCustomersExperience: [
        'Curated collections with clear “who this is for” (black tie, wedding, outdoor)',
        'Rental paths that emphasize dates, fittings, and realistic timelines',
        'Explanations for deposits and returns in customer‑friendly wording',
        'Login/signup flows that support repeat customers and saved bookings',
      ],
      whatYouCanOperateDayToDay: [
        'In a full build: inventory by size/style, blackout dates, damage notes, and staff roles',
        'Admin dashboards for upcoming pickups/returns, revenue, and utilization',
        'Firebase‑style auth and roles can support guest vs staff consoles (as shown in the demo story)',
        'Automation reminders: pickup day, return day, and overdue follow‑ups (optional)',
      ],
      howWeTypicallyWorkTogether: [
        'We model your rental rules: durations, buffers, deposit policy, and fees',
        'We design the customer journey first (trust + clarity), then staff tools',
        'We connect operational steps: fittings, alterations partners, groomsmen bundles',
        'We launch with a pilot season (events/weekends) and refine based on real usage',
      ],
      flyerIndustryFit: ['Retail (rental)', 'Services (events & appointments)', 'Clinics (scheduling parallels)'],
    },
  },
]

export function getShowcaseDemoById(id: string): ShowcaseDemo | undefined {
  return showcaseDemos.find((d) => d.id === id)
}
