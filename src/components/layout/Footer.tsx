import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { navLinks, socials } from '@/data/socials';
import { profile } from '@/data/profile';
import { GithubIcon, LinkedinIcon } from '@/components/sections/skillIcons';

export default function Footer({ year }: { year: number }) {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <a href="/#top" className="flex items-center gap-2.5" aria-label="Gaurav Joshi — back to top">
              <span
                className="font-display flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
                aria-hidden
              >
                GJ
              </span>
              <span className="font-display text-lg font-semibold">Gaurav Joshi</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Senior Software Engineer. Designed & engineered by hand — dark-first,
              keyboard-friendly, and fast on purpose.
            </p>
            <a
              href={`${profile.github}/portfolio-website`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 font-mono2 text-[11px] link-underline"
              style={{ color: 'var(--muted)' }}
              title="A small developer detail"
            >
              view source →
            </a>
          </div>

          <nav aria-label="Sections" className="flex gap-12">
            <div>
              <p className="font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>Sections</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={`/${l.href}`} className="link-underline text-sm font-medium">{l.label}</a>
                  </li>
                ))}
                <li>
                  <a href="/bucket-list" className="link-underline text-sm font-medium">Bucket list</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-mono2 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'var(--muted)' }}>Elsewhere</p>
              <ul className="mt-3 space-y-2">
                {socials.slice(0, 3).map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm font-medium">
                      {s.label} <ArrowUpRight className="h-3 w-3" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="flex md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
            <a
              href="/#top"
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[13px] font-semibold transition-transform hover:scale-[1.04]"
              style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}
              aria-label="Back to top"
            >
              Top <ArrowUp className="h-3.5 w-3.5" aria-hidden />
            </a>
            <div className="flex gap-2">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border p-2.5 transition-transform hover:scale-105" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                <GithubIcon className="h-4 w-4" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border p-2.5 transition-transform hover:scale-105" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-full border p-2.5 transition-transform hover:scale-105" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t pt-6 font-mono2 text-[11px]" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>
          © {year} {profile.name} · gaurav-joshi.vercel.app · Built with Next.js
        </p>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
