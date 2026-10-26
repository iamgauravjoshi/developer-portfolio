import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/types';
import { categoryMeta } from '@/data/skills';
import { Chip } from '@/components/ui/primitives';

/** Stylized browser mockup — abstract preview, never a faked screenshot. */
export function BrowserFrame({ project, tall = false }: { project: Project; tall?: boolean }) {
  const meta = categoryMeta[project.category];
  return (
    <div
      className="overflow-hidden rounded-3xl"
      style={{ border: '1px solid var(--border)', background: 'var(--surface-elevated)', boxShadow: 'var(--shadow-card)' }}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid var(--border)' }}>
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#ff5f57' }} aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#febc2e' }} aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#28c840' }} aria-hidden />
        <span
          className="ml-3 hidden sm:block truncate rounded-md px-3 py-1 font-mono2 text-[11px]"
          style={{ background: 'var(--surface-raised)', color: 'var(--muted)' }}
        >
          {(project.liveUrl ?? project.githubUrl ?? `gj.dev/work/${project.slug}`).replace('https://', '')}
        </span>
      </div>
      <div
        className={`relative flex flex-col justify-between gap-6 p-6 md:p-8 ${tall ? 'min-h-[320px] md:min-h-[400px]' : 'min-h-[240px] md:min-h-[300px]'}`}
        style={{ background: `linear-gradient(135deg, ${project.accent}14 0%, transparent 55%), var(--surface-elevated)` }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
            maskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 0%, black 30%, transparent 75%)',
          }}
        />
        <div className="relative">
          <p className="font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: project.accent }}>
            {meta.label} — {project.domain}
          </p>
          <p className="font-display mt-3 text-2xl md:text-[2rem] font-semibold leading-tight text-balance">
            {project.title}
          </p>
          <p className="mt-2 max-w-md text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            {project.problem}
          </p>
        </div>
        <div className="relative flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectMeta({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono2 text-[11px] tracking-[0.14em] uppercase" style={{ color: 'var(--muted)' }}>
      <span className="inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: meta.color }} aria-hidden />
        {meta.label}
      </span>
      <span>{project.year}</span>
      <span>{project.domain}</span>
      <span>{project.status}</span>
    </div>
  );
}

export function CaseLink({ slug, label = 'Open case study' }: { slug: string; label?: string }) {
  return (
    <Link
      href={`/work/${slug}`}
      className="group inline-flex items-center gap-1.5 text-sm font-medium link-underline"
      style={{ color: 'var(--foreground)' }}
      aria-label={`${label}`}
    >
      {label}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
    </Link>
  );
}
