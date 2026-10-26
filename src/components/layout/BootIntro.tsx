"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const SEEN_KEY = 'gj-boot-seen';

/**
 * Cinematic boot frame: faint GJ monogram silhouette on black, shown once per
 * session, then lifting away. Client-only (no SSR) and skipped entirely for
 * repeat views and reduced-motion users.
 */
export default function BootIntro() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(SEEN_KEY) !== '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (!show || reduce) return;
    const t1 = setTimeout(() => {
      setShow(false);
      try {
        sessionStorage.setItem(SEEN_KEY, '1');
      } catch {
        /* storage unavailable */
      }
    }, 1500);
    return () => clearTimeout(t1);
  }, [show, reduce]);

  return (
    <AnimatePresence>
      {show && !reduce && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: '#000' }}
          exit={{ opacity: 0, filter: 'blur(6px)' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <motion.svg
            viewBox="0 0 220 140"
            className="w-[min(calc(100vw-48px),260px)]"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <g fill="none" stroke="#33284f" strokeWidth="24" strokeLinecap="square">
              <path d="M84 34 Q50 4 20 34 Q-4 68 20 102 Q46 132 82 110 L82 82 L48 82" />
              <path d="M196 12 V92 Q196 128 162 128 Q134 128 134 102" />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
