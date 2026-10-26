"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { SectionHeading, Chip } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { Tilt } from '@/components/motion/effects';
import { skillIcon, GithubIcon } from './skillIcons';
import { cn } from '@/lib/utils';

const filters = ['All', 'Full Stack', 'Frontend', 'Backend', 'Tools', 'Experiments'] as const;
type Filter = (typeof filters)[number];

function tagOf(p: (typeof projects)[number]): Filter[] {
  const tech = p.technologies.join(' ').toLowerCase();
  const tags: Filter[] = [];
  if (/node|express|mongo|jwt|backend|postgres|drizzle|fastapi|python/.test(tech)) tags.push('Backend');
  if (/react|three|tailwind|framer|html|css|next|electron|d3|radix|zustand/.test(tech)) tags.push('Frontend');
  if (tags.includes('Frontend') && tags.includes('Backend')) tags.push('Full Stack');
  if (/tool|library|utility|redis|rabbitmq|dsa|sql|practice/.test((p.title + ' ' + p.description).toLowerCase())) tags.push('Tools');
  if (p.status === 'Archived' || p.status === 'Prototype') tags.push('Experiments');
  return [...new Set(tags)];
}

export default function Engineering() {
  const [filter, setFilter] = useState<Filter>('All');
  const list = projects.filter((p) => filter === 'All' || tagOf(p).includes(filter)).slice(0, 9);

  return (
    <section id="engineering" aria-labelledby="eng-h" className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20">
      <span id="eng-h" className="sr-only">Engineering projects</span>
      <SectionHeading
        index="03"
        eyebrow="The lineup · More builds"
        title={<>The <span className="font-serif-it" style={{ color: '#a78bfa' }}>lineup</span></>}
        body="39 repos, filtered by shape of work. Everything links to source."
      />
      <div className="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={cn('rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all')}
            style={{
              borderColor: filter === f ? 'var(--foreground)' : 'var(--border)',
              background: filter === f ? 'var(--foreground)' : 'transparent',
              color: filter === f ? 'var(--background)' : 'var(--muted)',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ perspective: '1200px' }}>
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <Tilt key={p.id} max={4} className="h-full">
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="group flex h-full flex-col rounded-[1.75rem] p-5"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center justify-between font-mono2 text-[11px]" style={{ color: 'var(--muted)' }}>
                  <span>{p.year} · {p.status}</span>
                  <GithubIcon className="h-4 w-4" />
                </div>
                <h3 className="font-display mt-2.5 text-lg font-semibold">
                  <Link href={`/work/${p.slug}`} className="link-underline">{p.title}</Link>
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.technologies.slice(0, 3).map((t) => {
                    const TIcon = skillIcon(t);
                    return (
                      <Chip key={t}>
                        <TIcon className="h-3 w-3" />
                        {t}
                      </Chip>
                    );
                  })}
                </div>
                <div className="mt-auto flex items-center gap-3 pt-4 text-[13px] font-medium">
                  <Link href={`/work/${p.slug}`} className="inline-flex items-center gap-0.5 link-underline">
                    Details <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </Link>
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="link-underline" style={{ color: 'var(--muted)' }}>
                      Source
                    </a>
                  )}
                </div>
              </motion.article>
            </Tilt>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal className="mt-8 text-center">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}
        >
          <GithubIcon className="h-4 w-4" /> More on GitHub — 39 repositories
        </a>
      </Reveal>
    </section>
  );
}
