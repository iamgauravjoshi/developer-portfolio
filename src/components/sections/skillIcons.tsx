import type { ComponentType } from "react";
import {
	BarChart3,
	Code2,
	Database,
	Globe,
	KeyRound,
	Layers,
	MonitorPlay,
	Network,
	Sparkles,
} from "lucide-react";
import {
	SiDocker,
	SiDrizzle,
	SiElectron,
	SiExpress,
	SiFramer,
	SiGithub,
	SiGithubactions,
	SiGooglemaps,
	SiGooglegemini,
	SiBootstrap,
	SiChartdotjs,
	SiHtml5,
	SiJavascript,
	SiMongodb,
	SiMongoose,
	SiMui,
	SiNestjs,
	SiNextdotjs,
	SiNodedotjs,
	SiOllama,
	SiOpenjdk,
	SiPrisma,
	SiPostgresql,
	SiPython,
	SiRabbitmq,
	SiReact,
	SiReacthookform,
	SiReactrouter,
	SiReactquery,
	SiRedis,
	SiRedux,
	SiRazorpay,
	SiSass,
	SiShadcnui,
	SiSupabase,
	SiTailwindcss,
	SiThreedotjs,
	SiTypescript,
	SiVite,
	SiVercel,
	SiVitest,
	SiZod,
} from "react-icons/si";

type Icon = ComponentType<{ className?: string }>;

export const GithubIcon: Icon = SiGithub;

/** LinkedIn removed its brand glyph from icon sets — use the classic "in" mark. */
export function LinkedinIcon({ className }: { className?: string }) {
	return (
		<span
			aria-hidden
			className={`inline-flex items-center justify-center rounded-[4px] font-sans font-bold leading-none ${className ?? ""}`}
			style={{
				background: "currentColor",
				width: "1em",
				height: "1em",
				fontSize: "inherit",
			}}
		>
			<span
				style={{
					color: "var(--surface, #262133)",
					fontSize: "0.72em",
					transform: "translateY(-0.04em)",
				}}
			>
				in
			</span>
		</span>
	);
}

const map: Record<string, Icon> = {
	TypeScript: SiTypescript,
	JavaScript: SiJavascript,
	Python: SiPython,
	"HTML / CSS": SiHtml5,
	"HTML5 / CSS3": SiHtml5,
	Java: SiOpenjdk,
	SQL: Database,
	React: SiReact,
	"React.js": SiReact,
	"Next.js": SiNextdotjs,
	Vite: SiVite,
	Electron: SiElectron,
	"Tailwind CSS": SiTailwindcss,
	"Sass/SCSS": SiSass,
	"Framer Motion": SiFramer,
	"Three.js": SiThreedotjs,
	"Material UI (MUI)": SiMui,
	Bootstrap: SiBootstrap,
	"shadcn/ui": SiShadcnui,
	Zustand: Layers,
	"React Query": SiReactquery,
	"TanStack React Query": SiReactquery,
	Redux: SiRedux,
	"Redux Toolkit": SiRedux,
	"React Hook Form": SiReacthookform,
	Zod: SiZod,
	"React Router DOM": SiReactrouter,
	Recharts: BarChart3,
	"Chart.js": SiChartdotjs,
	"Google Maps integration": SiGooglemaps,
	"React Three Fiber": SiReact,
	"Node.js": SiNodedotjs,
	NestJS: SiNestjs,
	Express: SiExpress,
	PostgreSQL: SiPostgresql,
	pgvector: Database,
	"Prisma ORM": SiPrisma,
	"Drizzle ORM": SiDrizzle,
	"MongoDB / Mongoose": SiMongodb,
	MongoDB: SiMongodb,
	Mongoose: SiMongoose,
	Supabase: SiSupabase,
	"REST API design": Network,
	"Auth (JWT)": KeyRound,
	"AI SDK": Sparkles,
	"Gemini API": SiGooglegemini,
	"RAG Systems": Sparkles,
	RAG: Sparkles,
	MCP: Network,
	"Web MCP": Globe,
	Ollama: SiOllama,
	BullMQ: Layers,
	Razorpay: SiRazorpay,
	"Token Analytics": Sparkles,
	"Git / GitHub": SiGithub,
	"GitHub Actions": SiGithubactions,
	Vercel: SiVercel,
	"GitHub Pages": Globe,
	Vitest: SiVitest,
	Playwright: MonitorPlay,
	Redis: SiRedis,
	RabbitMQ: SiRabbitmq,
	Docker: SiDocker,
};

export function skillIcon(name: string): Icon {
	return map[name] ?? Code2;
}
