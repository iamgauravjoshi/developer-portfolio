"use client";

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Handles hash deep-links across client navigations (e.g. case study
 * “All work” → /#work). Same-page anchors are handled natively by the browser.
 */
export default function ScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        const t = setTimeout(() => {
          const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth';
          el.scrollIntoView({ behavior, block: 'start' });
        }, 60);
        return () => clearTimeout(t);
      }
    }
  }, [pathname]);

  return null;
}
