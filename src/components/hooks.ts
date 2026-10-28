"use client";

import { useEffect, useState } from 'react';

export function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

export function useActiveSection(ids: string[]) {
  const key = ids.join('|');
  const [sectionState, setSectionState] = useState(() => ({ key, active: '' }));

  // Reset on a key change during render so route changes don't keep a stale
  // active section while the new observer is being attached.
  if (sectionState.key !== key) {
    setSectionState({ key, active: '' });
  }

  useEffect(() => {
    const list = key.split('|');
    if (!key) return;

    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) intersecting.add(e.target.id);
          else intersecting.delete(e.target.id);
        }
        const active = [...list].reverse().find((id) => intersecting.has(id)) ?? '';
        setSectionState((current) =>
          current.key === key && current.active === active
            ? current
            : { key, active },
        );
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    list.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [key]);
  return sectionState.key === key ? sectionState.active : '';
}
