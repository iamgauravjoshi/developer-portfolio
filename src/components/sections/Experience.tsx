"use client";

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { experience } from '@/data/experience';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 25%'],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" aria-labelledby="exp-h" className="border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <span id="exp-h" className="sr-only">Experience</span>
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Experience"
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
          <>
          <div ref={timelineRef} className="relative mt-10 md:mt-14">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[0.875rem] top-0 w-px bg-[var(--border-strong)] lg:left-[calc(37.5%+0.375rem)]"
            />
            <motion.div
              aria-hidden="true"
              className="absolute left-[0.875rem] top-0 w-px origin-top bg-[var(--accent)] shadow-[0_0_12px_var(--accent)] lg:left-[calc(37.5%+0.375rem)]"
              style={{ height: '100%', scaleY: lineProgress }}
            />
            <div className="space-y-16 md:space-y-24">
            {experience.map((e, i) => {
              const roles = e.careerProgression ?? [{ position: e.position, period: e.period, responsibilities: e.responsibilities ?? [] }];
              return (
                <Reveal key={e.id} delay={Math.min(i * 0.05, 0.15)}>
                  <article className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-4 gap-y-3 lg:grid-cols-[minmax(0,0.9fr)_3rem_minmax(0,1.5fr)] lg:gap-x-0 lg:gap-y-0">
                    <div className="hidden self-start pt-0.5 text-left lg:col-start-1 lg:block" style={{ gridRow: `1 / span ${roles.length}` }}>
                      <p className="font-mono2 text-[11px] uppercase tracking-[0.2em]" style={{ color: 'var(--accent)' }}>{e.period}</p>
                      <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{e.company}</h3>
                      {e.location && (
                        <p className="mt-4 inline-flex items-center justify-start gap-1.5 font-mono2 text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--muted)' }}>
                          <MapPin className="h-3.5 w-3.5" aria-hidden />{e.location}
                        </p>
                      )}
                    </div>

                    {roles.map((role, roleIndex) => (
                      <div key={`${e.id}-${role.position}`} className="contents">
                        <div
                          className="relative z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2"
                          style={{ gridRow: roleIndex + 1 }}
                        >
                          <span className="mt-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--surface)] shadow-[0_0_0_6px_var(--glow)]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                          </span>
                        </div>
                        <div
                          className="col-start-2 row-start-1 pb-5 lg:col-start-3 lg:pb-8"
                          style={{ gridRow: roleIndex + 1 }}
                        >
                          {roleIndex === 0 && <p className="mb-1 text-sm font-medium lg:hidden" style={{ color: 'var(--muted)' }}>{e.company}</p>}
                          <p className="font-mono2 text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--accent)' }}>{role.period}</p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                            <h4 className="font-display text-xl font-semibold leading-tight tracking-tight md:text-2xl">{role.position}</h4>
                            {roleIndex === roles.length - 1 && <span className="rounded-full border px-2 py-0.5 font-mono2 text-[9px] uppercase tracking-[0.16em]" style={{ borderColor: 'var(--accent)', color: 'var(--accent)' }}>Current</span>}
                          </div>
                          <ul className="mt-3 max-w-3xl space-y-1.5">
                            {role.responsibilities.map((responsibility) => (
                              <li key={responsibility} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                <span className="mt-[0.6rem] h-px w-3 shrink-0" aria-hidden style={{ background: 'var(--accent)' }} />{responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </article>
                </Reveal>
              );
            })}
            </div>
          </div>
          </>
        )}
      </div>
    </section>
  );
}
