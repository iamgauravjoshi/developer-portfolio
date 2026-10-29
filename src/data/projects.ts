import type { Project, ProjectFilter } from "../types";

export const PROJECT_FILTERS = [
	"Full Stack",
	"Frontend",
	"Backend",
	"Tools",
	"Experiments",
] as const satisfies readonly ProjectFilter[];

/**
 * Professional projects are based on the author's provided work history;
 * independent project details are grounded in their repositories.
 * No unverified metrics or technology stacks are added.
 */
export const projects: Project[] = [
	{
		id: "okruti-iam",
		slug: "okruti-iam",
		title: "Okruti IAM",
		category: "professional",
		tags: ["Full Stack", "Backend", "Tools"],
		domain: "Identity & Access Management · Multi-tenant SaaS",
		problem:
			"SaaS applications need consistent sign-in and authorization across customer tenants, client applications, and access scopes.",
		description:
			"A multi-tenant identity and access management platform that centralizes authentication and authorization for SaaS applications, with an administration console and Node.js integration SDK.",
		role: "Software Developer on the Okruti IT Consulting Pvt. Ltd. team",
		responsibilities: [
			"Developed scoped access assignments across platform, tenant, and client levels.",
			"Implemented role-based authorization with explicit allow and deny effects, expiring assignments, deny-overrides, and default-deny behavior.",
			"Built OAuth 2.0 and OpenID Connect flows, token issuance, live permission checks, decision history, and access-change webhooks.",
			"Created the React administration console and Node.js SDK for connected-application sign-in and permission checks.",
		],
		technologies: [
			"React",
			"TypeScript",
			"Zustand",
			"Node.js",
			"PostgreSQL",
			"Drizzle ORM",
			"OAuth 2.0",
			"OpenID Connect",
			"JWT",
		],
		challenges:
			"Authorization decisions had to account for application subscriptions, client availability, assignment scope and expiry, with explicit denials taking precedence and unassigned access denied by default.",
		solution:
			"Centralized identity and access administration across applications, tenants, and clients. Connected applications can use signed tokens or live authorization checks; decisions are recorded and access changes can be sent through webhooks.",
		highlights: [
			"Administrators manage tenants, clients, users, applications, roles, permissions, and access assignments.",
			"Applications can be subscribed to by tenants and enabled for specific clients.",
			"Scoped assignments support expiration and explicit allow or deny effects.",
			"Connected applications integrate through OAuth/OIDC flows, signed tokens, live checks, and a Node.js SDK.",
		],
		outcome:
			"Delivered a shared identity and authorization layer with an administration console and integration paths for connected SaaS applications.",
		accent: "#8b5cf6",
	},
	{
		id: "people-nest",
		slug: "people-nest",
		title: "People Nest",
		category: "professional",
		tags: ["Full Stack"],
		domain: "HRMS · Employee lifecycle management",
		problem:
			"Employee lifecycle management needs coordinated HR workflows and secure experiences tailored to each user role.",
		description:
			"A scalable HRMS portal focused on employee lifecycle management, workflow handling, and secure role-based user experiences.",
		role: "Software Developer on the Okruti IT Consulting Pvt. Ltd. team",
		responsibilities: [
			"Built portal features focused on employee lifecycle management.",
			"Implemented workflow handling across HR processes.",
			"Developed secure user experiences based on role.",
		],
		technologies: [],
		solution:
			"Organized the portal around employee lifecycle workflows and role-based user experiences.",
		highlights: [
			"Employee lifecycle management in a centralized HRMS portal.",
			"Workflow handling for HR processes.",
			"Secure, role-based user experiences.",
		],
		outcome:
			"Delivered a scalable HRMS portal centered on employee lifecycle workflows and role-based access.",
		accent: "#8b5cf6",
	},
	{
		id: "rcr-mining-technologies",
		slug: "rcr-mining-technologies",
		title: "RCR Mining Technologies",
		category: "professional",
		tags: ["Frontend", "Tools"],
		domain: "E-commerce · 3D equipment configurator",
		context:
			"RCR Mining Technologies, part of NRW Holdings, manufactures materials-handling and processing equipment.",
		problem:
			"Complex mining equipment needs a commerce experience where customers can explore products and configure equipment interactively.",
		description:
			"An interactive Dynamics 365 Commerce experience for RCR Mining Technologies, featuring a 3D equipment configurator and near real-time data updates.",
		role: "Software Developer on the Okruti IT Consulting Pvt. Ltd. team",
		responsibilities: [
			"Developed a Three.js product configurator integrated with React and Microsoft Dynamics 365 Commerce.",
			"Customized commerce flows, including cart functionality and Site Builder enhancements.",
			"Built reusable product-grid features for filtering, sorting, and pagination.",
			"Implemented polling for near real-time updates and optimized rendering, state management, and asynchronous data handling.",
			"Joined client requirement-gathering calls to align delivery with project goals.",
		],
		technologies: [
			"Microsoft Dynamics 365",
			"React",
			"TypeScript",
			"SCSS",
			"Three.js",
			"React Three Fiber",
		],
		challenges:
			"The configurator combined 3D rendering, commerce integration, and polling-driven updates, so render cycles and asynchronous state changes needed careful optimization to reduce UI lag.",
		solution:
			"Integrated a Three.js configurator with Dynamics 365 Commerce, extended cart and Site Builder flows, and built a reusable product grid with filtering, sorting, and pagination.",
		highlights: [
			"Interactive 3D equipment configuration using Three.js and React.",
			"Dynamics 365 Commerce cart and Site Builder customizations.",
			"Polling-based near real-time updates with optimized render and state flows.",
			"Direct participation in client requirement-gathering calls.",
		],
		outcome:
			"Delivered an interactive equipment-commerce experience with 3D configuration, product discovery, and near real-time updates.",
		accent: "#8b5cf6",
	},
	{
		id: "clerisy",
		slug: "clerisy",
		title: "Clerisy",
		category: "independent",
		tags: ["Frontend", "Experiments"],
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
		githubUrl: "https://github.com/iamgauravjoshi/Clerisy",
		accent: "#a78bfa",
		challenges:
			"Integrating multiple AI providers without tying product features to one vendor, while keeping the provider layer and application data typed.",
		solution:
			"Built an Electron desktop shell with a provider-agnostic AI SDK layer for Anthropic, Google, and OpenAI. Zod schemas validate structured data, and the UI can work across providers without being rewritten for each integration.",
		outcome:
			"Delivered a multi-provider desktop prototype with packaged Windows builds and typed validation around its AI integrations.",
	},
	{
		id: "classloom",
		slug: "classloom",
		title: "Classloom",
		category: "independent",
		tags: ["Full Stack", "Frontend", "Backend"],
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
		githubUrl: "https://github.com/iamgauravjoshi/classloom",
		accent: "#a78bfa",
	},
	{
		id: "dwelldesk",
		slug: "dwelldesk",
		title: "DwellDesk",
		category: "independent",
		tags: ["Full Stack", "Frontend", "Backend"],
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
		githubUrl: "https://github.com/iamgauravjoshi/DwellDesk",
		accent: "#a78bfa",
		challenges:
			"The product combines relational property, tenant, and billing data with client-side workflows, so server-fetched data and local interaction state need clear ownership.",
		solution:
			"Built with the Next.js App Router, PostgreSQL, and typed Drizzle access. React Query handles server-state caching while Zustand holds client interaction state.",
		outcome:
			"Established an in-development multi-tenant property-management product with relational domain modeling and separated server and client state.",
	},
	{
		id: "vidscribe",
		slug: "vidscribe",
		title: "VidScribe",
		category: "independent",
		tags: ["Full Stack", "Frontend", "Backend", "Experiments"],
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
		githubUrl: "https://github.com/iamgauravjoshi/VidScribe",
		accent: "#a78bfa",
	},
	{
		id: "career-canvas",
		slug: "career-canvas",
		title: "Career Canvas",
		category: "independent",
		tags: ["Full Stack", "Frontend", "Backend", "Experiments"],
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
		githubUrl: "https://github.com/iamgauravjoshi/career-canvas-frontend",
		accent: "#a78bfa",
	},
	{
		id: "token-atlas",
		slug: "token-atlas",
		title: "Token Atlas",
		category: "independent",
		tags: ["Frontend", "Experiments"],
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
		githubUrl: "https://github.com/iamgauravjoshi/token-atlas",
		accent: "#a78bfa",
	},
	{
		id: "akriti-ui",
		slug: "akriti-ui",
		title: "Akriti UI",
		category: "open-source",
		tags: ["Frontend", "Tools"],
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
		githubUrl: "https://github.com/iamgauravjoshi/akriti-ui",
		accent: "#a78bfa",
	},
	{
		id: "threed-viewer",
		slug: "threed-model-viewer",
		title: "3D Model Viewer & Configurator",
		category: "independent",
		tags: ["Frontend", "Experiments"],
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
		githubUrl: "https://github.com/iamgauravjoshi/ThreeD-Model-Viewer",
		accent: "#a78bfa",
	},
];

export const getProject = (slug: string) =>
	projects.find((p) => p.slug === slug);
