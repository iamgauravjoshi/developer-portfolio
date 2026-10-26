/** Current year, cached at build/prerender time (Cache Components semantics). */
export async function getYear(): Promise<number> {
  'use cache';
  return new Date().getFullYear();
}
