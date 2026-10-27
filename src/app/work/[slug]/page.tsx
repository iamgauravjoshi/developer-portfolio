import type { Metadata } from 'next';
import { Suspense } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { categoryMeta } from '@/data/skills';
import { BrowserFrame, ProjectMeta } from '@/components/projects/frames';
import { Chip } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { GithubIcon } from '@/components/sections/skillIcons';
import type { Project } from '@/types';

const all = projects;

export function generateStaticParams() {
  return all.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = all.find((p) => p.slug === slug);
  // Avoid generating project metadata for unknown slugs.
  if (!project) notFound();
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: { title: project.title, description: project.description, url: `/work/${project.slug}` },
  };
}

function Block({ n, title, children }: { n: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="grid gap-2 md:grid-cols-[72px_1fr] md:gap-6 rounded-[1.75rem] p-5 md:p-7" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
        <span className="font-mono2 text-[12px]" style={{ color: 'var(--accent)' }}>{n}</span>
        <div>
          <h2 className="font-display text-lg font-semibold">{title}</h2>
          <div className="mt-2 text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>{children}</div>
        </div>
      </div>
    </Reveal>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = all.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <Suspense fallback={<CaseFallback />}>
      <CaseBody project={project} />
    </Suspense>
  );
}

function CaseFallback() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 md:px-8 pt-32 md:pt-40 pb-20" aria-busy="true" aria-label="Loading case study">
      <div className="h-4 w-40 animate-pulse rounded-full" style={{ background: 'var(--surface-raised)' }} />
      <div className="mt-4 h-12 w-2/3 animate-pulse rounded-2xl" style={{ background: 'var(--surface-raised)' }} />
      <div className="mt-4 h-64 animate-pulse rounded-[1.75rem]" style={{ background: 'var(--surface-raised)' }} />
    </main>
  );
}

function CaseBody({ project }: { project: Project }) {
  const meta = categoryMeta[project.category];
  const idx = all.findIndex((p) => p.slug === project.slug);
  const next = all[(idx + 1) % all.length];

  return (
    <main id="main" className="mx-auto max-w-6xl px-5 md:px-8 pt-32 md:pt-40 pb-20">
      <Link href="/#work" className="inline-flex items-center gap-1.5 text-sm font-medium link-underline" style={{ color: 'var(--muted)' }}>
        <ArrowLeft className="h-4 w-4" aria-hidden /> All work
      </Link>

      <div className="mt-6">
        <ProjectMeta project={project} />
        <h1 className="font-display mt-3 max-w-3xl text-4xl md:text-6xl font-semibold text-balance">{project.title}</h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: 'var(--muted)' }}>{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Chip color={meta.color}>{meta.label}</Chip>
          {project.technologies.map((t) => <Chip key={t}>{t}</Chip>)}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}>
              Open live project <ExternalLink className="h-4 w-4" aria-hidden />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]" style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}>
              <GithubIcon className="h-4 w-4" /> Source
            </a>
          )}
        </div>
      </div>

      <div className="mt-10">
        <BrowserFrame project={project} tall />
      </div>

      <div className="mt-8 space-y-4">
        <Block n="01" title="Context">
          <p><span style={{ color: 'var(--foreground)' }} className="font-medium">{project.domain}.</span></p>
        </Block>
        <Block n="02" title="Problem">
          <p>{project.problem}</p>
        </Block>
        <Block n="03" title="My role">
          <p>{project.role}</p>
          <ul className="mt-3 space-y-1.5">
            {project.responsibilities.map((r) => (
              <li key={r} className="flex gap-2"><span aria-hidden style={{ color: project.accent }}>→</span> {r}</li>
            ))}
          </ul>
        </Block>
        {project.challenges && (
          <Block n="04" title="Constraints & challenges">
            <p>{project.challenges}</p>
          </Block>
        )}
        {project.solution && (
          <Block n="05" title="Architecture & approach">
            <p>{project.solution}</p>
          </Block>
        )}
        <Block n="06" title="Technical implementation">
          <ul className="space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2"><span aria-hidden style={{ color: project.accent }}>→</span> {h}</li>
            ))}
          </ul>
        </Block>
        {project.outcome && (
          <Block n="07" title="Result">
            <p>{project.outcome}</p>
          </Block>
        )}
        <Block n="08" title="Tech stack">
          <div className="flex flex-wrap gap-2">{project.technologies.map((t) => <Chip key={t}>{t}</Chip>)}</div>
        </Block>
      </div>

      <Reveal className="mt-10">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between gap-6 rounded-[1.75rem] p-6 md:p-8 transition-transform hover:-translate-y-0.5"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span>
            <span className="block font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>Next project</span>
            <span className="font-display mt-1 block text-xl md:text-2xl font-semibold">{next.title}</span>
            <span className="mt-1 block text-sm" style={{ color: 'var(--muted)' }}>{next.domain}</span>
          </span>
          <span className="rounded-2xl p-3 transition-transform group-hover:translate-x-1" style={{ background: 'var(--surface-raised)' }} aria-hidden>
            <ArrowRight className="h-5 w-5" />
          </span>
        </Link>
      </Reveal>

      <p className="mt-8 text-center font-mono2 text-[12px]" style={{ color: 'var(--muted)' }}>
        Like this kind of work? <a className="link-underline" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight className="inline h-3 w-3" aria-hidden /></a>
      </p>
    </main>
  );
}
