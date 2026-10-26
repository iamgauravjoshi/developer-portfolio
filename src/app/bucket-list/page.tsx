import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BucketList, ThingsILove } from '@/components/sections/Beyond';

export const metadata: Metadata = {
  title: 'Bucket List of Dreams',
  description:
    'Gaurav Joshi’s bucket list of dreams — scuba certification, Thailand dives, Navaratri in Ahmedabad, Rishikesh rafting, North India, and a first passport stamp. Plus things I love.',
  alternates: { canonical: '/bucket-list' },
  openGraph: {
    title: 'Bucket List of Dreams — Gaurav Joshi',
    description: 'Stamped dreams and someday dreams, plus things I love.',
    url: '/bucket-list',
  },
};

export default function BucketListPage() {
  return (
    <main id="main" className="pt-32 md:pt-40">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium link-underline"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back home
        </Link>
      </div>
      <BucketList index="01" />
      <ThingsILove index="02" />
    </main>
  );
}
