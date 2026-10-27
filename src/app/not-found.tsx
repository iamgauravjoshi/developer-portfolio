import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-[65vh] max-w-3xl flex-1 flex-col items-center justify-center px-5 py-32 text-center md:py-40">
      <p className="font-mono2 text-[11px] uppercase tracking-[0.22em]" style={{ color: 'var(--accent)' }}>404 · Not found</p>
      <h1 className="font-display mt-4 text-5xl font-semibold tracking-tight md:text-7xl">
        Lost in <span className="font-serif-it" style={{ color: 'var(--accent)' }}>the void?</span>
      </h1>
      <p className="mt-5 max-w-xl text-base font-normal leading-relaxed md:text-lg">
        This page is missing, but your developer partner isn’t
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back Home
        </Link>
      </div>
    </main>
  );
}
