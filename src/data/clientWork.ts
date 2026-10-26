import type { Project } from '../types';

/**
 * Freelance / client work — each entry verified against its live prototype.
 * Copy is written as business case studies (context → user problem →
 * approach → implementation → deliverable). No invented business metrics.
 */
export const clientWork: Project[] = [
  {
    id: 'ryoom-studio',
    slug: 'ryoom-studio',
    title: 'RYOOM Studio',
    category: 'client',
    year: '2026',
    domain: 'Architecture · Interior Design',
    client: 'RYOOM Studio, Jaipur',
    problem:
      'A design studio sells taste and trust — but plan PDFs and WhatsApp photos don’t communicate spatial quality to prospective clients.',
    description:
      'A portfolio-first studio site for an architecture and interior practice in Jaipur. Editorial project galleries, practice/services positioning, process narrative, and enquiry capture — designed so the work does the selling.',
    role: 'Designer & frontend engineer (freelance)',
    responsibilities: [
      'Editorial gallery system with project narratives',
      'Services + process pages that pre-qualify enquiries',
      'Enquiry flow with project-type qualification',
      'Responsive image strategy for heavy portfolio assets',
    ],
    technologies: ['TypeScript', 'React', 'Responsive Images'],
    highlights: [
      'Gallery-led IA: projects are the navigation',
      'Restrained, material-forward visual language for an architecture audience',
      'Enquiry capture qualified by project type and scope',
    ],
    challenges:
      'Portfolio imagery is heavy; the site must feel cinematic without shipping megabytes on first load.',
    solution:
      'Route-level splitting, lazy-loaded galleries with static posters, and responsive image sizes per breakpoint.',
    outcome: 'Delivered as a live, reviewable prototype for stakeholder sign-off.',
    status: 'Prototype',
    featured: true,
    liveUrl: 'https://ryoom-studio-prototype.vercel.app/',
    accent: '#e8b44a',
  },
  {
    id: 'singhal-buildhome',
    slug: 'singhal-buildhome',
    title: 'Singhal Buildhome',
    category: 'client',
    year: '2026',
    domain: 'Real Estate · Residential Development',
    client: 'Singhal Buildhome Pvt. Ltd., Jaipur',
    problem:
      'Homebuyers drown in listings but starve for trust: which projects are real, where exactly, and who do I talk to?',
    description:
      'A transparency-first residential site for a Jaipur developer (roots from 2005; Pvt. Ltd. since 2010). Curated project collection with filters by BHK and type, honest status labelling, office/location truth, and a callback-first enquiry flow — with prices and availability deliberately left to real conversation.',
    role: 'Designer & frontend engineer (freelance)',
    responsibilities: [
      'Project collection with BHK / type filters',
      'Trust system: public-source cross-checks, accuracy notes',
      'Callback + WhatsApp enquiry flows with site-visit scheduling',
      'Location and office information architecture',
    ],
    technologies: ['TypeScript', 'React', 'Forms & Filters'],
    highlights: [
      'Filterable collection (BHK, apartments / floors / houses)',
      'Honest-by-design: no invented prices, RERA IDs, or availability',
      'Multi-channel contact: call, WhatsApp, callback form',
    ],
    challenges:
      'Real-estate prototypes often invent inventory data. Every unverifiable field had to be designed out, not faked.',
    solution:
      'Status labels tied to research notes, an explicit accuracy section, and enquiry CTAs that route verification to the team.',
    outcome: 'Delivered as a live, reviewable prototype for stakeholder sign-off.',
    status: 'Prototype',
    featured: true,
    liveUrl: 'https://singhal-buildhome-prototype.vercel.app/',
    accent: '#e8b44a',
  },
  {
    id: 'deeksha-model-school',
    slug: 'deeksha-model-school',
    title: 'Deeksha Model School',
    category: 'client',
    year: '2026',
    domain: 'Education · Foundational School',
    client: 'Deeksha Model School, Jaipur',
    problem:
      'Parents choosing a first school feel anxiety, not excitement — safety, warmth, and credibility must land in seconds.',
    description:
      'A warmth-first admissions site for an exclusive foundational school (Playgroup → Grade 3, est. 1999). Program-per-age IA, parent testimonials, gallery of real classroom moments, and an admissions enquiry flow tuned for the 2026–27 cycle.',
    role: 'Designer & frontend engineer (freelance)',
    responsibilities: [
      'Age-stage program IA (Playgroup → Grades 1–3)',
      'Admissions enquiry + school-visit booking flow',
      'Gallery and testimonial trust layer',
      'Contact, timings, and location clarity for parents',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    highlights: [
      'Six-stage program pages matched to how children learn at each age',
      'Admissions-centred conversion path with visit booking',
      'Real photography over stock imagery',
    ],
    challenges:
      'The audience is anxious parents on phones, often on slow networks — every page must reassure fast.',
    solution:
      'Mobile-first layouts, compressed real photography, and a persistent call/enquire action within one tap.',
    outcome: 'Delivered as a live, reviewable prototype for stakeholder sign-off.',
    status: 'Prototype',
    featured: true,
    liveUrl: 'https://nexformtech.github.io/dms-prototype/index.html',
    accent: '#e8b44a',
  },
  {
    id: 'om-industrial',
    slug: 'om-industrial-solution',
    title: 'Om Industrial Solution',
    category: 'client',
    year: '2026',
    domain: 'Industrial · Material Handling (Brand: Stock Easy)',
    client: 'Om Industrial Solution, Jaipur',
    problem:
      'B2B buyers need specs, prices, and a quote path — a brochure site that hides any of the three loses the deal to IndiaMART.',
    description:
      'A catalog-commerce site for a Jaipur manufacturer/wholesaler (est. 2017) of pallet trucks, stackers, drum handling, and scissor tables. 36 verified equipment models with specs and direct pricing, category navigation, RFQ basket with WhatsApp handoff, and an official factsheet (GSTIN, warranty, logistics).',
    role: 'Designer & frontend engineer (freelance)',
    responsibilities: [
      '36-model catalog with search, sort, and filter',
      'Technical datasheet views per equipment model',
      'Multi-item RFQ basket → WhatsApp + form submission',
      'Factsheet, reviews, and facility/location sections',
    ],
    technologies: ['JavaScript', 'Catalog Architecture', 'Forms & RFQ State'],
    highlights: [
      'Full commerce-shaped flow without a backend: basket → RFQ → WhatsApp',
      'Datasheet-grade specs (capacity, lift height, fork dimensions)',
      'Trust layer: GSTIN, warranty, verified reviews, facilities',
    ],
    challenges:
      '36 SKUs with dense specs must stay browsable on a phone in a warehouse with poor connectivity.',
    solution:
      'Client-side filtering/sorting, progressive catalog loading, and a printable catalog summary for offline sharing.',
    outcome: 'Delivered as a live, reviewable prototype for stakeholder sign-off.',
    status: 'Prototype',
    featured: true,
    liveUrl: 'https://nexformtech.github.io/om-industrial-prototype/',
    accent: '#e8b44a',
  },
];

export const allCaseStudies: Project[] = [...clientWork];
