"use client";

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { Tilt } from '@/components/motion/effects';
import { skillIcon } from './skillIcons';
import { cn } from '@/lib/utils';

const ctxColors = { professional: '#7c9eff', freelance: '#e8b44a', personal: '#a78bfa' } as const;
const ctxVerbs = { professional: 'Pro', freelance: 'Client', personal: 'Indie' } as const;

export default function Toolkit() {
  const [selected, setSelected] = useState<string | null>('RAG Systems');

  return (
    <section id="skills" aria-labelledby="sk-h" className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20">
      <span id="sk-h" className="sr-only">Technical toolkit</span>
      <SectionHeading
        index="05"
        eyebrow="Engineering toolkit"
        title={<>Skills with <span className="font-serif-it" style={{ color: 'var(--accent)' }}>evidence</span></>}
        body="Tap a tool or concept to see its context."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map((g, gi) => (
          <Reveal key={g.id} delay={Math.min(gi * 0.06, 0.18)}>
            <Tilt max={3} className="h-full">
              <div className="h-full rounded-[1.75rem] p-6" style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <h3 className="font-display text-lg font-semibold">{g.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.skills.map((s) => {
                    const isSel = selected === s.name;
                    const Icon = skillIcon(s.name);
                    return (
                      <button
                        key={s.name}
                        onClick={() => setSelected(isSel ? null : s.name)}
                        aria-pressed={isSel}
                        aria-expanded={isSel}
                        className={cn('inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono2 text-[12px] transition-all duration-200 hover:scale-[1.05] active:scale-[0.97]')}
                        style={{
                          borderColor: isSel ? 'var(--foreground)' : 'var(--border)',
                          background: isSel ? 'var(--foreground)' : 'var(--surface-elevated)',
                          color: isSel ? 'var(--background)' : 'var(--foreground)',
                        }}
                      >
                        <Icon className="h-3.5 w-3.5" />
                        {s.name}
                      </button>
                    );
                  })}
                </div>
                <AnimatePresence initial={false}>
                  {selected && g.skills.some((s) => s.name === selected) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {(() => {
                        const s = g.skills.find((x) => x.name === selected)!;
                        const Icon = skillIcon(s.name);
                        return (
                          <div className="mt-4 flex items-start gap-3 rounded-2xl p-4" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                            <span className="rounded-xl p-2" style={{ background: 'var(--surface-raised)' }}>
                              <Icon className="h-5 w-5" />
                            </span>
                            <div>
                              {s.contexts.length > 0 && (
                                <div className="flex flex-wrap gap-x-3 gap-y-1">
                                  {s.contexts.map((c) => (
                                    <span key={c} className="inline-flex items-center gap-1.5 font-mono2 text-[11px]" style={{ color: 'var(--muted)' }}>
                                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: ctxColors[c] }} aria-hidden />
                                      {ctxVerbs[c]}
                                    </span>
                                  ))}
                                </div>
                              )}
                              {(s.detail || s.projects.length > 0) && (
                                <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                                  {s.detail}{s.detail && s.projects.length > 0 ? ' ' : ''}{s.projects.join(' · ')}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      })()}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
