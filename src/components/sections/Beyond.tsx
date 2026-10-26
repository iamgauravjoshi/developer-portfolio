"use client";

import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, Check, Compass } from 'lucide-react';
import Link from 'next/link';
import { bucketList, loves } from '@/data/personal';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { cn } from '@/lib/utils';

type Filter = 'All' | 'Stamped' | 'Someday';

const filters: Filter[] = ['All', 'Stamped', 'Someday'];

function DreamTitle({ title, done }: { title: string; done: boolean }) {
  return (
    <span className="relative inline-block">
      <span className={cn(done && 'opacity-80')}>{title}</span>
      {done && (
        <motion.span
          aria-hidden
          className="absolute left-[-2%] top-1/2 h-[2.5px] w-[104%]"
          style={{
            background: 'linear-gradient(90deg, #34d399, #10b981)',
            borderRadius: 999,
            transform: 'translateY(-50%) rotate(-1.2deg)',
            boxShadow: '0 0 12px rgba(52, 211, 153, 0.45)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        />
      )}
    </span>
  );
}

export function BucketList({ index = '09', showLink = false }: { index?: string; showLink?: boolean }) {
  const [filter, setFilter] = useState<Filter>('All');
  const doneCount = bucketList.filter((d) => d.done).length;
  const pct = Math.round((doneCount / bucketList.length) * 100);

  const list = useMemo(
    () =>
      bucketList.filter((d) => {
        if (filter === 'Stamped') return d.done;
        if (filter === 'Someday') return !d.done;
        return true;
      }),
    [filter],
  );

  return (
    <section id="bucket-list" aria-labelledby="bl-h" className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20">
      <span id="bl-h" className="sr-only">Bucket list of dreams</span>
      <SectionHeading
        index={index}
        eyebrow="Beyond code · Passport mode"
        title={
          <>
            Bucket list of <span className="font-serif-it" style={{ color: 'var(--accent)' }}>dreams</span>
          </>
        }
        body="Some stamped, some someday. Completed dreams get the green line — stamped like a passport."
      />

      <Reveal>
        <div
          className="mb-6 flex flex-wrap items-center gap-4 rounded-[1.75rem] p-5 md:p-6"
          style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
        >
          <span
            className="font-display flex h-11 w-11 items-center justify-center rounded-2xl text-white"
            style={{ background: 'linear-gradient(180deg, #34d399 0%, #059669 100%)' }}
            aria-hidden
          >
            <Compass className="h-5 w-5" />
          </span>
          <div className="min-w-44 flex-1">
            <p className="font-mono2 text-[11px] tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>
              <span className="tabular text-emerald-400">{doneCount}/{bucketList.length} stamped</span> · {pct}% there
            </p>
            <div
              className="mt-2 h-2 overflow-hidden rounded-full"
              style={{ background: 'var(--surface-raised)' }}
              role="progressbar"
              aria-valuenow={pct}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${doneCount} of ${bucketList.length} dreams completed`}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #34d399, #10b981)', width: `${pct}%` }}
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
          <div className="flex gap-2" role="group" aria-label="Filter dreams">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className="rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all"
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
        </div>
      </Reveal>

      <motion.ul layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((d, i) => (
            <motion.li
              key={d.id}
              layout
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Reveal delay={Math.min(i * 0.05, 0.2)} className="h-full">
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-5"
                  style={{
                    background: d.done ? 'var(--surface)' : 'var(--surface-elevated)',
                    border: d.done ? '1px solid var(--border)' : '1px dashed var(--border-strong)',
                  }}
                >
                  {d.done && (
                    <span
                      aria-hidden
                      className="font-mono2 pointer-events-none absolute right-4 top-4 rotate-[8deg] rounded-md border-2 px-2 py-0.5 text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ borderColor: 'rgba(52, 211, 153, 0.6)', color: '#34d399' }}
                    >
                      Stamped
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{
                        background: d.done ? 'rgba(52, 211, 153, 0.12)' : 'var(--surface-raised)',
                        color: d.done ? '#34d399' : 'var(--accent)',
                      }}
                      aria-hidden
                    >
                      <d.Icon className="h-5 w-5" />
                    </span>
                    <span className="font-mono2 text-[11px] tracking-[0.16em] uppercase" style={{ color: 'var(--muted)' }}>
                      {d.done ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400">
                          <Check className="h-3.5 w-3.5" aria-hidden /> Done
                        </span>
                      ) : (
                        'Someday'
                      )}
                    </span>
                  </div>
                  <h3 className="font-display mt-3 text-lg font-semibold leading-snug">
                    <DreamTitle title={d.title} done={d.done} />
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {d.detail}
                  </p>
                </article>
              </Reveal>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {showLink && (
        <Reveal className="mt-8 text-center">
          <Link
            href="/bucket-list"
            className="inline-flex items-center gap-1.5 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
            style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}
          >
            Full bucket-list page <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      )}
    </section>
  );
}

export function ThingsILove({ index = '10' }: { index?: string }) {
  return (
    <section aria-labelledby="love-h" className="mx-auto max-w-6xl px-5 md:px-8 pb-14 md:pb-20">
      <span id="love-h" className="sr-only">Things I love</span>
      <SectionHeading
        index={index}
        eyebrow="Things I love"
        title={
          <>
            Fuel for <span className="font-serif-it" style={{ color: 'var(--gold)' }}>after hours</span>
          </>
        }
        body="Two rabbit holes I happily fall into when I'm not shipping."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {loves.map((l, i) => (
          <Reveal key={l.title} delay={Math.min(i * 0.07, 0.14)}>
            <article
              className="group flex h-full items-start gap-4 rounded-[1.75rem] p-6 transition-transform duration-300 hover:-translate-y-1"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <span
                className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
                aria-hidden
              >
                <l.Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="font-mono2 block text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display mt-1 block text-xl font-semibold">{l.title}</span>
                <span className="mt-1.5 block text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {l.blurb}
                </span>
              </span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
