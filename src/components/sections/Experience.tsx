"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { SectionHeading, Chip } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { cn } from '@/lib/utils';

export default function Experience() {
  const [open, setOpen] = useState<string | null>(experience[0]?.id ?? null);

  return (
    <section id="experience" aria-labelledby="exp-h" className="border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <span id="exp-h" className="sr-only">Experience</span>
        <SectionHeading
          index="04"
          eyebrow="Experience"
          title={<>A timeline with <span className="font-serif-it" style={{ color: 'var(--accent)' }}>receipts, not filler</span></>}
          body="Production software, secure application workflows, and interactive 3D experiences."
        />

        {experience.length === 0 ? (
          <Reveal>
            <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[1.75rem] p-6 md:p-8" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <p className="font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                  Currently — {profile.role}
                </p>
                <h3 className="font-display mt-3 text-xl font-semibold">Professional history, documented properly</h3>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Companies, dates, and references live on my résumé and LinkedIn —
                  accurate and checkable. Role entries render here from a typed data file once added.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03]" style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}>
                    Work history on LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </a>
                  <a href={`mailto:${profile.email}?subject=R%C3%A9sum%C3%A9%20request`} className="inline-flex items-center gap-1.5 rounded-full border px-4 py-2.5 text-sm font-semibold" style={{ borderColor: 'var(--border-strong)' }}>
                    Request résumé
                  </a>
                </div>
              </div>
              <div className="rounded-[1.75rem] p-6 md:p-8" style={{ border: '1px dashed var(--border-strong)' }}>
                <p className="font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>
                  What this timeline will show
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {[
                    'Company, position, dates, location / remote status',
                    'Concise summary with key responsibilities (expandable)',
                    'Technologies per role, linked to shipped projects',
                    'Measurable impact — only where genuinely documented',
                  ].map((t) => (
                    <li key={t} className="flex gap-2.5"><span aria-hidden style={{ color: 'var(--accent)' }}>→</span> {t}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ) : (
          <div className="space-y-3">
            {experience.map((e, i) => {
              const isOpen = open === e.id;
              return (
                <Reveal key={e.id} delay={Math.min(i * 0.05, 0.15)}>
                  <article className="overflow-hidden rounded-[1.75rem]" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                    <button
                      onClick={() => setOpen(isOpen ? null : e.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 p-5 md:p-6 text-left"
                    >
                      <span className="font-mono2 text-[12px]" style={{ color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                      <span className="flex-1">
                        <span className="font-display block text-lg font-semibold">{e.position}</span>
                        <span className="mt-0.5 block text-sm" style={{ color: 'var(--muted)' }}>{e.company} · {e.period}{e.location ? ` · ${e.location}` : ''}</span>
                      </span>
                      <ChevronDown className={cn('h-5 w-5 shrink-0 transition-transform duration-300', isOpen && 'rotate-180')} aria-hidden />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 pb-6 md:px-6 md:pl-[3.25rem]">
                            <p className="max-w-3xl text-[15px] leading-relaxed" style={{ color: 'var(--muted)' }}>{e.summary}</p>
                            <ul className="mt-4 max-w-3xl space-y-2">
                              {e.responsibilities.map((r) => (
                                <li key={r} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                  <span aria-hidden style={{ color: 'var(--accent)' }}>→</span> {r}
                                </li>
                              ))}
                            </ul>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                              {e.technologies.map((t) => <Chip key={t}>{t}</Chip>)}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                </Reveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
