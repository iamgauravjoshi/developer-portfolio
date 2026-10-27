"use client";

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import ScrollManager from '@/components/layout/ScrollManager';
import CommandPalette from '@/components/CommandPalette';

const BootIntro = dynamic(() => import('@/components/layout/BootIntro'), { ssr: false });

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const [palette, setPalette] = useState(false);
  const [easter, setEaster] = useState(false);

  const openPalette = useCallback(() => setPalette(true), []);
  const closePalette = useCallback(() => setPalette(false), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = typeof e.key === 'string' ? e.key.toLowerCase() : '';
      if ((e.metaKey || e.ctrlKey) && key === 'k') {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Konami easter egg: a small toast linking to the portfolio source.
  useEffect(() => {
    const seq = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let i = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = typeof e.key === 'string' ? e.key.toLowerCase() : '';
      i = key === seq[i] ? i + 1 : 0;
      if (i === seq.length) {
        i = 0;
        setEaster(true);
        setTimeout(() => setEaster(false), 4200);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="flex min-h-screen flex-col" style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <ScrollManager />
      <BootIntro />
      <ScrollProgress />
      <Navbar onCommand={openPalette} />
      <div className="flex flex-1 flex-col pb-24 md:pb-0">{children}</div>
      <Footer />
      <CommandPalette open={palette} onClose={closePalette} />
      <AnimatePresence>
        {easter && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            role="status"
            className="fixed bottom-6 left-1/2 z-[90] -translate-x-1/2 rounded-2xl px-5 py-3 font-mono2 text-[12px]"
            style={{ background: 'var(--surface-raised)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-card)' }}
          >
            ↑↑↓↓←→←→BA — you found it. This site is hand-built with Next.js + TS.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
