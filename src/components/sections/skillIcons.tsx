import type { ComponentType } from 'react';
import {
  Accessibility,
  Code2,
  Database,
  Globe,
  KeyRound,
  Layers,
  MonitorPlay,
  Network,
  Shapes,
  Sparkles,
  TabletSmartphone,
} from 'lucide-react';
import {
  SiD3,
  SiDrizzle,
  SiElectron,
  SiExpress,
  SiFramer,
  SiGithub,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiRedis,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVercel,
  SiVitest,
} from 'react-icons/si';

type Icon = ComponentType<{ className?: string }>;

export const GithubIcon: Icon = SiGithub;

/** LinkedIn removed its brand glyph from icon sets — use the classic "in" mark. */
export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-[4px] font-sans font-bold leading-none ${className ?? ''}`}
      style={{ background: 'currentColor', width: '1em', height: '1em', fontSize: 'inherit' }}
    >
      <span style={{ color: 'var(--surface, #262133)', fontSize: '0.72em', transform: 'translateY(-0.04em)' }}>in</span>
    </span>
  );
}

const map: Record<string, Icon> = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  'HTML / CSS': SiHtml5,
  'HTML5 / CSS3': SiHtml5,
  Java: SiOpenjdk,
  SQL: Database,
  React: SiReact,
  'Next.js': SiNextdotjs,
  Electron: SiElectron,
  'Responsive UI': TabletSmartphone,
  'Tailwind CSS': SiTailwindcss,
  'Framer Motion': SiFramer,
  'Three.js': SiThreedotjs,
  'D3.js': SiD3,
  'Radix UI': SiRadixui,
  'Design systems': Shapes,
  Zustand: Layers,
  'React Query': SiReactquery,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  'Drizzle ORM': SiDrizzle,
  'MongoDB / Mongoose': SiMongodb,
  MongoDB: SiMongodb,
  'REST API design': Network,
  'Auth (JWT)': KeyRound,
  'AI SDK': Sparkles,
  'Gemini API': SiGooglegemini,
  'RAG Systems': Sparkles,
  'Token Analytics': Sparkles,
  'Git / GitHub': SiGithub,
  Vercel: SiVercel,
  'GitHub Pages': Globe,
  Vitest: SiVitest,
  Playwright: MonitorPlay,
  'Redis (learning)': SiRedis,
  'RabbitMQ (learning)': SiRabbitmq,
  'Accessibility (WCAG AA)': Accessibility,
};

export function skillIcon(name: string): Icon {
  return map[name] ?? Code2;
}
