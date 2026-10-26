import type { Metadata } from 'next';
import { ArrowLeft, ArrowUpRight, Terminal } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/ui/primitives';

export const metadata: Metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-3xl px-5 pt-32 md:pt-40 pb-24 text-center">
      <SectionHeading
        index="404"
        eyebrow="Not found"
        title={
          <>
            Lost in <span className="font-serif-it" style={{ color: 'var(--accent)' }}>the void?</span>
          </>
        }
      />

      <div
        className="mx-auto max-w-xl rounded-[1.75rem] p-6 text-left md:p-8"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}
      >
        <div className="flex items-center gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono2 text-[11px]" style={{ color: 'var(--muted)' }}>
            gaurav@portfolio: ~
          </span>
        </div>
        <p className="mt-5 font-mono2 text-[13px]" style={{ color: 'var(--muted)' }}>
          <span style={{ color: '#34d399' }}>$</span> gj --where-am-i
        </p>
        <div className="mt-3 flex items-start gap-3">
          <span
            className="font-mono2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
            style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
            aria-hidden
          >
            &lt;/&gt;
          </span>
          <div>
            <p className="text-[15px] md:text-base font-medium leading-relaxed">
              This developer is so busy coding they haven&apos;t finished their profile yet!
            </p>
            <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Come back soon to learn more about this developer — the page moved or the URL is wrong.
            </p>
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 font-mono2 text-[12px]" style={{ color: 'var(--muted)' }}>
          <Terminal className="h-3.5 w-3.5" aria-hidden /> error 404 · route not found · but the work is still here
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back home
        </Link>
        <Link
          href="/bucket-list"
          className="inline-flex items-center gap-1.5 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
          style={{ borderColor: 'var(--border-strong)', background: 'var(--surface)' }}
        >
          See bucket list <ArrowUpRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </main>
  );
}
