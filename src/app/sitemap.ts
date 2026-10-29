import type { MetadataRoute } from 'next';
import { profile } from '@/data/profile';
import { projects } from '@/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const cases = projects.filter((p) => p.hasCaseStudy !== false).map((p) => ({
    url: `${profile.siteUrl}work/${p.slug}`,
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));
  return [{ url: profile.siteUrl, changeFrequency: 'monthly' as const, priority: 1 }, ...cases];
}
