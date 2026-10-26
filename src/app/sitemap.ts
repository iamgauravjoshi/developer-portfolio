import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { clientWork } from '@/data/clientWork';

const BASE = 'https://gaurav-joshi.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = [...clientWork, ...projects].map((p) => ({
    url: `${BASE}/work/${p.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));
  return [{ url: BASE, changeFrequency: 'monthly' as const, priority: 1 }, { url: `${BASE}/bucket-list`, changeFrequency: 'monthly' as const, priority: 0.7 }, ...cases];
}
