"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx>({ theme: 'dark', toggle: () => {} });

const KEY = 'gj-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always start at 'dark' so the first client render matches SSR.
  // The stored / OS preference is applied after mount (theme-init.js
  // already set the <html> class pre-hydration, so there is no flash).
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = window.localStorage.getItem(KEY);
    const next: Theme =
      stored === 'dark' || stored === 'light'
        ? stored
        : window.matchMedia('(prefers-color-scheme: light)').matches
          ? 'light'
          : 'dark';
    // Syncing stored preference after mount so the first client render
    // matches SSR (prevents Sun/Moon hydration mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (next !== 'dark') setTheme(next);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem(KEY, theme);
    const tint = document.querySelector('meta[name="theme-color"]');
    if (tint) tint.setAttribute('content', theme === 'dark' ? '#201c2a' : '#ede8f6');
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
