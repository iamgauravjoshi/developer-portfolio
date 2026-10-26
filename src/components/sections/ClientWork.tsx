import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { clientWork } from '@/data/clientWork';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { Magnetic, Tilt } from '@/components/motion/effects';

const initials: Record<string, string> = {
  'ryoom-studio': 'RY',
  'singhal-buildhome': 'SB',
  'deeksha-model-school': 'DM',
  'om-industrial': 'OM',
};

/**
 * Featured reel — client products presented like app-store features:
 * squircle mark, platform line, headline, highlights, themed action.
 */
export default function ClientWork() {
  return (
    <section id="work" aria-labelledby="cw-h" className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20">
      <span id="cw-h" className="sr-only">Featured client work</span>
      <SectionHeading
        index="01"
        eyebrow="Now shipping · pick one"
        title={<>Featured <span className="font-serif-it" style={{ color: 'var(--accent)' }}>client work</span></>}
        body="Real businesses, live URLs."
      />
      <div className="grid gap-5 md:grid-cols-2" style={{ perspective: '1200px' }}>
        {clientWork.map((p, i) => (
          <Reveal key={p.id} delay={Math.min(i * 0.06, 0.2)}>
            <Tilt max={4} className="h-full">
              <article
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-6 md:p-8"
                style={{
                  background: `linear-gradient(160deg, ${p.accent}1f 0%, var(--surface) 55%)`,
                  border: '1px solid var(--border)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="font-display squircle flex h-14 w-14 shrink-0 items-center justify-center text-lg font-bold text-white"
                    style={{ background: `linear-gradient(160deg, ${p.accent} 0%, #7c3aed 130%)`, boxShadow: `0 12px 32px -12px ${p.accent}99` }}
                    aria-hidden
                  >
                    {initials[p.id] ?? p.title.slice(0, 2).toUpperCase()}
                  </div>
                  <p className="font-mono2 text-right text-[11px] tracking-[0.14em] uppercase leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {p.domain}<br />{p.year}
                  </p>
                </div>

                <h3 className="font-display mt-5 text-2xl md:text-[1.75rem] font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] font-medium leading-relaxed">{p.problem}</p>
                <ul className="mt-3 space-y-1.5">
                  {p.highlights.slice(0, 2).map((h) => (
                    <li key={h} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      <span aria-hidden style={{ color: p.accent }}>→</span> {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
                  <Magnetic>
                    <Link
                      href={`/work/${p.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98]"
                      style={{ background: 'var(--foreground)', color: 'var(--background)' }}
                    >
                      Case study <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                    </Link>
                  </Magnetic>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                      Live <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  )}
                </div>
              </article>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
