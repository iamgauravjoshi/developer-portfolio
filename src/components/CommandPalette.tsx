"use client";

import { useEffect, useRef, useState, type ComponentType, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, Copy, FileText, Mail, Moon, Search, Sun } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { profile } from '@/data/profile';
import { useTheme } from '@/components/theme';
import { GithubIcon, LinkedinIcon } from './sections/skillIcons';

interface Cmd {
  id: string;
  label: string;
  hint: string;
  run: () => void;
  icon: ComponentType<{ className?: string; style?: CSSProperties }>;
}

export default function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState('');
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const { theme, toggle } = useTheme();
  const reduceMotion = useReducedMotion();

  const go = (hash: string) => {
    onClose();
    if (pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
      });
    } else {
      router.push(`/#${hash}`);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch { /* clipboard unavailable */ }
    onClose();
  };

  const cmds: Cmd[] = [
    { id: 'home', label: 'Go to Home', hint: '#top', run: () => go('top'), icon: ArrowUpRight },
    { id: 'about', label: 'Go to About', hint: '#about', run: () => go('about'), icon: ArrowUpRight },
    { id: 'exp', label: 'Go to Experience', hint: '#experience', run: () => go('experience'), icon: ArrowUpRight },
    { id: 'work', label: 'Go to Work', hint: '#work', run: () => go('work'), icon: ArrowUpRight },
    { id: 'skills', label: 'Go to Skills', hint: '#skills', run: () => go('skills'), icon: ArrowUpRight },
    { id: 'contact', label: 'Go to Contact', hint: '#contact', run: () => go('contact'), icon: Mail },
    { id: 'gh', label: 'Open GitHub', hint: 'external', run: () => { window.open(profile.github, '_blank', 'noopener,noreferrer'); onClose(); }, icon: GithubIcon },
    { id: 'li', label: 'Open LinkedIn', hint: 'external', run: () => { window.open(profile.linkedin, '_blank', 'noopener,noreferrer'); onClose(); }, icon: LinkedinIcon },
    { id: 'copy', label: 'Copy email', hint: profile.email, run: copyEmail, icon: Copy },
    { id: 'resume', label: profile.resumeUrl ? 'Download résumé' : 'Résumé via LinkedIn', hint: 'external', run: () => { window.open(profile.resumeUrl || profile.linkedin, '_blank', 'noopener,noreferrer'); onClose(); }, icon: FileText },
    { id: 'theme', label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode', hint: 'theme', run: () => { toggle(); onClose(); }, icon: theme === 'dark' ? Sun : Moon },
  ];

  const filtered = cmds.filter((c) => c.label.toLowerCase().includes(q.toLowerCase()));

  // Reset search when (re)opened — render-time adjustment, not an effect.
  const [lastOpen, setLastOpen] = useState(open);
  if (open !== lastOpen) {
    setLastOpen(open);
    setQ('');
    setIdx(0);
  }

  useEffect(() => {
    if (!open) return;
    const activeElement = document.activeElement;
    returnFocusRef.current = activeElement instanceof HTMLElement && activeElement !== document.body
      ? activeElement
      : null;
    const t = setTimeout(() => inputRef.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      returnFocusRef.current?.focus();
    };
  }, [open ]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]"
          style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={onClose}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-lg overflow-hidden rounded-3xl"
            style={{ background: 'var(--surface)', border: '1px solid var(--border-strong)', boxShadow: 'var(--shadow-card)' }}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                e.stopPropagation();
                onClose();
              }
              // The search field owns keyboard navigation; keep Tab within the
              // modal instead of moving focus to the page behind it.
              if (e.key === 'Tab') {
                e.preventDefault();
                inputRef.current?.focus();
              }
            }}
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: 'var(--border)' }}>
              <Search className="h-4 w-4" style={{ color: 'var(--muted)' }} aria-hidden />
              <input
                ref={inputRef}
                value={q}
                onChange={(e) => {
                  setQ(e.target.value);
                  setIdx(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown') { e.preventDefault(); setIdx((i) => Math.min(i + 1, filtered.length - 1)); }
                  if (e.key === 'ArrowUp') { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
                  if (e.key === 'Enter' && filtered[idx]) filtered[idx].run();
                }}
                placeholder="Type a command…"
                aria-label="Search commands"
                role="combobox"
                aria-expanded="true"
                aria-controls="cmd-list"
                aria-activedescendant={filtered[idx] ? `cmd-${filtered[idx].id}` : undefined}
                className="w-full bg-transparent text-sm outline-none"
                style={{ color: 'var(--foreground)' }}
              />
              <kbd className="rounded border px-1.5 py-0.5 font-mono2 text-[10px]" style={{ borderColor: 'var(--border)', color: 'var(--muted)' }}>ESC</kbd>
            </div>
            <ul id="cmd-list" role="listbox" aria-label="Commands" className="max-h-72 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm" style={{ color: 'var(--muted)' }}>No matching command.</li>
              )}
              {filtered.map((c, i) => (
                <li key={c.id} role="presentation">
                  <button
                    id={`cmd-${c.id}`}
                    type="button"
                    role="option"
                    aria-selected={i === idx}
                    tabIndex={-1}
                    onMouseEnter={() => setIdx(i)}
                    onClick={c.run}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm"
                    style={{ background: i === idx ? 'var(--surface-raised)' : 'transparent' }}
                  >
                    <c.icon className="h-4 w-4 shrink-0" style={{ color: 'var(--muted)' }} aria-hidden />
                    <span className="flex-1 font-medium">{c.label}</span>
                    <span className="font-mono2 text-[11px]" style={{ color: 'var(--muted)' }}>{c.hint}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
