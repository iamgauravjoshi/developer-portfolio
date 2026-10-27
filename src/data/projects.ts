import type { Project } from "../types";

/**
 * Independent + professional engineering projects.
 * Newest first. Everything here is verifiable from the GitHub profile —
 * descriptions come from repository descriptions, READMEs, and manifests.
 * No invented metrics.
 */
export const projects: Project[] = [
	{
		id: "dwelldesk",
		slug: "dwelldesk",
		title: "DwellDesk",
		category: "independent",
		domain: "SaaS · Property Management",
		problem:
			"Hostel, PG, and co-living operators in India run beds, tenants, and rent collection across registers and chat threads.",
		description:
			"A property-management SaaS for hostels, PGs, co-living, and shared accommodation owners and operators — built on Next.js with PostgreSQL, server-state caching, and a typed ORM layer.",
		role: "Designer & sole engineer",
		responsibilities: [
			"Multi-tenant SaaS domain modelling (properties, tenants, billing)",
			"Next.js App Router architecture with server-side data access",
			"Typed PostgreSQL access via Drizzle ORM",
		],
		technologies: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Drizzle ORM",
			"React Query",
			"Zustand",
			"Tailwind CSS",
		],
		highlights: [
			"Full-stack Next.js 16 on the modern toolchain (React 19, Tailwind v4)",
			"Server-state caching with React Query + client state in Zustand",
			"Relational modelling for a genuinely CRUD-heavy domain",
		],
		status: "In development",
		featured: true,
		githubUrl: "https://github.com/iamgauravjoshi/DwellDesk",
		accent: "#a78bfa",
	},
	{
		id: "clerisy",
		slug: "clerisy",
		title: "Clerisy",
		category: "independent",
		domain: "AI · Meeting Intelligence",
		problem:
			"Meetings produce notes, but project state never updates — decisions evaporate between calls.",
		description:
			"AI project meeting intelligence that answers “what changed in the project because of this meeting?” — a cross-platform desktop app wired to multiple AI providers through a single typed SDK layer, with a tested codebase.",
		role: "Designer & sole engineer",
		responsibilities: [
			"Electron desktop shell with NSIS-packaged Windows builds",
			"Multi-provider AI integration (Anthropic, Google, OpenAI) via the Vercel AI SDK",
			"Typed schemas with Zod plus Vitest coverage",
		],
		technologies: [
			"Electron",
			"React",
			"TypeScript",
			"AI SDK",
			"Anthropic",
			"Google AI",
			"OpenAI",
			"Zod",
			"Vitest",
		],
		highlights: [
			"Real desktop product: Electron + Vite + packaged installers",
			"Provider-agnostic AI layer — swap models without rewriting features",
			"Tested with Vitest and Testing Library from the start",
		],
		status: "Prototype",
		featured: true,
		githubUrl: "https://github.com/iamgauravjoshi/Clerisy",
		accent: "#a78bfa",
	},
	{
		id: "token-atlas",
		slug: "token-atlas",
		title: "Token Atlas",
		category: "independent",
		domain: "AI · Token Analytics",
		problem:
			"Token spend across AI agents is invisible — nobody knows where the budget actually goes.",
		description:
			"An application to track token consumption across AI agents, with a world map of usage, rankings, agent comparisons, and analytics — built with D3 geography, end-to-end Playwright coverage, and a Radix-based UI.",
		role: "Designer & sole engineer",
		responsibilities: [
			"D3 + TopoJSON world-map visualization of usage stats",
			"Rankings, agent comparisons, and analytics views",
			"Playwright end-to-end suite over a typechecked codebase",
		],
		technologies: [
			"React",
			"TypeScript",
			"Vite",
			"D3.js",
			"TopoJSON",
			"Radix UI",
			"Vitest",
			"Playwright",
		],
		highlights: [
			"Data-visualization craft: zoomable D3 geo map",
			"Accessible dialogs and primitives via Radix UI",
			"E2E-tested delivery pipeline (typecheck → build → Playwright)",
		],
		status: "Prototype",
		githubUrl: "https://github.com/iamgauravjoshi/token-atlas",
		accent: "#a78bfa",
	},
	{
		id: "classloom",
		slug: "classloom",
		title: "Classloom",
		category: "independent",
		domain: "Education · School Operating System",
		problem:
			"Indian schools run admissions, fees, attendance, and communication across disconnected registers and chat threads.",
		description:
			"A school operating system for Indian schools — admissions, student records, fee tracking, attendance, and parent communication in one maintainable TypeScript codebase.",
		role: "Designer & sole engineer",
		responsibilities: [
			"Domain modelling for admissions, batches, fees, and attendance",
			"TypeScript-first architecture with reusable UI primitives",
			"Responsive layouts for office desktops and classroom devices",
		],
		technologies: ["TypeScript", "React", "Node.js"],
		highlights: [
			"Multi-module product surface (admissions → fees → attendance)",
			"Reusable component architecture instead of per-page one-offs",
			"Built for low-training school staff: dense but legible UI",
		],
		status: "In development",
		featured: true,
		githubUrl: "https://github.com/iamgauravjoshi/classloom",
		accent: "#a78bfa",
	},
	{
		id: "vidscribe",
		slug: "vidscribe",
		title: "VidScribe",
		category: "independent",
		domain: "AI · Video Productivity",
		problem:
			"Long videos bury the one answer you need; scrubbing timelines is slow.",
		description:
			"Extract, summarize, and interact with video transcripts using AI. Paste a video, get a structured transcript with an AI summary layer and follow-up Q&A over the content.",
		role: "Designer & sole engineer",
		responsibilities: [
			"Transcript ingestion and chunking pipeline",
			"Summarization + conversational Q&A over transcript context",
			"Playback-synced reading experience",
		],
		technologies: ["TypeScript", "React", "AI APIs", "Node.js"],
		highlights: [
			"RAG-style Q&A scoped to a single video’s transcript",
			"Summary hierarchy: TL;DR → key points → full transcript",
			"MIT-licensed open repository",
		],
		status: "Prototype",
		featured: true,
		githubUrl: "https://github.com/iamgauravjoshi/VidScribe",
		accent: "#a78bfa",
	},
	{
		id: "akriti-ui",
		slug: "akriti-ui",
		title: "Akriti UI",
		category: "open-source",
		domain: "Design Systems · Component Library",
		problem:
			"Product interfaces often rebuild buttons, inputs, and dialogs from scratch.",
		description:
			"A reusable UI component library with typed, themeable primitives for buttons, inputs, dialogs, and navigation — designed to keep product interfaces consistent without a heavy dependency footprint.",
		role: "Author & maintainer",
		responsibilities: [
			"API design for composable, typed components",
			"Theming via design tokens (dark-first)",
			"Docs and usage examples per component",
		],
		technologies: ["TypeScript", "React", "CSS Variables"],
		highlights: [
			"Token-driven theming shared with this portfolio",
			"Accessibility-first: focus states, keyboard support, ARIA",
			"Provides reusable patterns for consistent product interfaces",
		],
		status: "In development",
		featured: true,
		githubUrl: "https://github.com/iamgauravjoshi/akriti-ui",
		accent: "#a78bfa",
	},
	{
		id: "threed-viewer",
		slug: "threed-model-viewer",
		title: "3D Model Viewer & Configurator",
		category: "independent",
		domain: "3D · Product Configuration",
		problem:
			"Static product photos can’t answer “what does it look like in this finish, from this angle?”",
		description:
			"A 3D model configurator and viewer — load product models, switch materials/finishes, and inspect from any angle. Two repositories: configurator core plus a viewer shell.",
		role: "Sole engineer",
		responsibilities: [
			"3D scene setup: lighting, camera controls, materials",
			"Configuration state (finishes, parts, variants)",
			"Performance budget for mid-range devices",
		],
		technologies: ["TypeScript", "Three.js", "React"],
		highlights: [
			"Real-time material/finish switching",
			"Orbit + constrained inspection controls",
			"Separated core (ThreeDConfigurator) from viewer app",
		],
		status: "Prototype",
		githubUrl: "https://github.com/iamgauravjoshi/ThreeD-Model-Viewer",
		accent: "#a78bfa",
	},
	{
		id: "career-canvas",
		slug: "career-canvas",
		title: "Career Canvas",
		category: "independent",
		domain: "Productivity · Résumé Builder",
		problem:
			"Résumé builders force rigid templates; creative professionals need structure without sameness.",
		description:
			"Creative, interactive résumé creation — a full-stack MERN app with a React frontend and an Express/MongoDB backend for templates, content blocks, and export.",
		role: "Full-stack engineer",
		responsibilities: [
			"Block-based résumé composer UI",
			"MERN auth backend with per-user documents",
			"Template system with export flow",
		],
		technologies: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
		highlights: [
			"Full-stack ownership: two repos, one product",
			"Authenticated document persistence",
			"Composable content blocks over fixed templates",
		],
		status: "Archived",
		githubUrl: "https://github.com/iamgauravjoshi/career-canvas-frontend",
		accent: "#a78bfa",
	},
	{
		id: "youtube-backend",
		slug: "youtube-backend",
		title: "YouTube-Scale Backend",
		category: "independent",
		domain: "Backend · Video Platform",
		problem:
			"Learning backend properly means modelling a real domain — users, videos, subscriptions, likes — not toy CRUD.",
		description:
			"A YouTube-like backend in Express.js: authentication, video/membership schemas, subscriptions, likes, and aggregation pipelines for feeds and channel stats.",
		role: "Backend engineer",
		responsibilities: [
			"Mongoose schema design across 8+ entities",
			"JWT auth with refresh rotation",
			"Aggregation pipelines for feeds and stats",
		],
		technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "JWT"],
		highlights: [
			"Production-shaped schema: videos, playlists, subs, likes",
			"Aggregation-heavy read paths",
			"Documented API surface for a future frontend",
		],
		status: "Archived",
		githubUrl: "https://github.com/iamgauravjoshi/youtube-backend",
		accent: "#a78bfa",
	},
	{
		id: "json-to-excel",
		slug: "json-to-excel",
		title: "JSON → Excel Toolkit",
		category: "independent",
		domain: "Developer Tools",
		problem:
			"Non-technical teammates need spreadsheet exports; developers live in JSON.",
		description:
			"A small full-stack utility: paste or upload JSON, get a clean Excel workbook — separate frontend and backend repos with validation and sheet mapping.",
		role: "Full-stack engineer",
		responsibilities: [
			"Upload/validation flow",
			"Sheet generation service",
			"Download + error states",
		],
		technologies: ["JavaScript", "React", "Node.js", "Express"],
		highlights: [
			"Two-repo full-stack split",
			"Validation-first UX",
			"One-click workbook download",
		],
		status: "Archived",
		githubUrl: "https://github.com/iamgauravjoshi/json-to-excel-frontend",
		accent: "#a78bfa",
	},
	{
		id: "uni-placement",
		slug: "university-placement-system",
		title: "University Placement System",
		category: "independent",
		domain: "EdTech · Placements",
		problem:
			"Placement cells coordinate students, drives, and shortlists across spreadsheets and notice boards.",
		description:
			"A university placement management frontend — student profiles, drive listings, applications, and shortlist views for placement coordinators.",
		role: "Frontend engineer",
		responsibilities: [
			"Role-aware dashboards",
			"Drive + application flows",
			"Shortlist management views",
		],
		technologies: ["JavaScript", "React", "REST APIs"],
		highlights: [
			"Coordinator-first workflows",
			"Application state tracking",
			"Searchable student records",
		],
		status: "Archived",
		githubUrl:
			"https://github.com/iamgauravjoshi/University-Placement-Frontend",
		accent: "#a78bfa",
	},
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
	projects.find((p) => p.slug === slug);
