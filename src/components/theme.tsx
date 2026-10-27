"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'dark' | 'light';

interface ThemeCtx {
  theme: Theme;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx>({ theme: 'light', toggle: () => {} });

const KEY = 'gj-theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Match the server-rendered light default. theme-init.js applies any saved
  // preference before paint; adopt its result after hydration without briefly
  // overwriting the document's class.
  const [theme, setTheme] = useState<Theme>('light');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const next: Theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(next);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (!initialized) return;

    const root = document.documentElement;
    root.classList.toggle('light', theme === 'light');
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    window.localStorage.setItem(KEY, theme);
    const tint = document.querySelector('meta[name="theme-color"]');
    if (tint) tint.setAttribute('content', theme === 'dark' ? '#201c2a' : '#ffffff');
  }, [theme, initialized]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);

  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
