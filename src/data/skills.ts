import type { SkillGroup } from "../types";

/** Skills and engineering concepts supplied for the portfolio. */
export const skillGroups: SkillGroup[] = [
	{
		id: "languages",
		label: "Languages",
		skills: ["TypeScript", "JavaScript", "HTML5 / CSS3", "Java", "SQL"],
	},
	{
		id: "frontend",
		label: "Frontend Engineering",
		skills: [
			"React.js",
			"Next.js",
			"Electron",
			"Tailwind CSS",
			"Sass/SCSS",
			"Framer Motion",
			"Three.js",
			"Material UI (MUI)",
			"Bootstrap",
			"shadcn/ui",
			"Zustand",
			"TanStack React Query",
			"Redux",
			"Redux Toolkit",
			"React Hook Form",
			"Zod",
			"React Router DOM",
			"Recharts",
			"Chart.js",
			"Google Maps integration",
			"React Three Fiber",
		],
	},
	{
		id: "backend",
		label: "Backend & Data Engineering",
		skills: [
			"Node.js",
			"Express",
			"NestJS",
			"Auth (JWT)",
			"PostgreSQL",
			"pgvector",
			"Prisma ORM",
			"MongoDB",
			"Mongoose",
			"Supabase",
			"Redis",
			"RabbitMQ",
			"BullMQ",
			"Razorpay",
		],
	},
	{
		id: "infra",
		label: "Platforms & Practices",
		skills: [
			"Git / GitHub",
			"GitHub Actions",
			"Docker",
			"CI/CD",
			"Vercel",
			"Playwright",
		],
	},
	{
		id: "ai-tools",
		label: "AI & Agent Tooling",
		skills: ["Ollama", "RAG", "MCP", "Web MCP"],
	},
];

export const categoryMeta = {
	professional: {
		label: "Professional",
		color: "#7c9eff",
		description: "Work delivered inside companies and teams.",
	},
	independent: {
		label: "Personal",
		color: "#a78bfa",
		description: "Projects designed and developed independently.",
	},
	"open-source": {
		label: "Personal · Open Source",
		color: "#a78bfa",
		description: "Personal projects shared with the open-source community.",
	},
} as const;
