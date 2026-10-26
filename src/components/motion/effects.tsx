"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useCallback, type ReactNode } from 'react';

/** Magnetic hover: element gravitates toward the cursor (desktop, spring-smoothed). */
export function Magnetic({
  children,
  strength = 16,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 220, damping: 16, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 220, damping: 16, mass: 0.4 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduce) return;
      const r = e.currentTarget.getBoundingClientRect();
      rawX.set(((e.clientX - r.left) / r.width - 0.5) * strength);
      rawY.set(((e.clientY - r.top) / r.height - 0.5) * strength);
    },
    [rawX, rawY, reduce, strength],
  );
  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.span
      className={className}
      style={{ x, y, display: 'inline-block' }}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={reduce ? undefined : reset}
    >
      {children}
    </motion.span>
  );
}

/** Pointer-aware tilt for cards: limited rotation, glare-free, transform-only. */
export function Tilt({
  children,
  max = 5,
  className,
}: {
  children: ReactNode;
  max?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 260, damping: 22 });
  const rotateY = useSpring(rawY, { stiffness: 260, damping: 22 });

  const onMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
      const r = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      rawX.set(-py * max * 2);
      rawY.set(px * max * 2);
    },
    [rawX, rawY, max, reduce],
  );
  const reset = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={reduce ? undefined : reset}
    >
      {children}
    </motion.div>
  );
}
