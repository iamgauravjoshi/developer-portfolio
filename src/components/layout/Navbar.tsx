"use client";

import { motion } from 'motion/react';
import { ArrowUpRight, BriefcaseBusiness, Code2, History, Mail, Moon, Sun, UserRound } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/socials';
import { profile } from '@/data/profile';
import { useActiveSection, useScrolled } from '@/components/hooks';
import { useTheme } from '@/components/theme';
import { GithubIcon } from '@/components/sections/skillIcons';

const sectionIds = ['work', 'experience', 'skills', 'about', 'contact'];

export default function Navbar({ onCommand }: { onCommand: () => void }) {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const activeSection = useActiveSection(pathname === '/' ? sectionIds : []);
  const active = pathname === '/' ? activeSection : '';
  const { theme, toggle } = useTheme();
  const sectionHref = (href: string) => pathname === '/' ? href : `/${href}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 md:pt-4">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:px-3 focus:py-2 focus:text-sm"
        style={{ background: 'var(--surface-raised)', color: 'var(--foreground)' }}
      >
        Skip to content
      </a>
      <nav
        aria-label="Primary"
        className="flex w-full max-w-3xl items-center gap-1 rounded-full py-1.5 pl-2 pr-1.5 transition-shadow duration-300"
        style={{
          background: 'var(--nav-bg)',
          border: '1px solid var(--border)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          boxShadow: scrolled ? 'var(--shadow-card)' : 'none',
        }}
      >
        <a href={sectionHref('#top')} className="flex items-center gap-2 rounded-full py-1 pl-1 pr-2" aria-label="Gaurav Joshi — back to top">
          <span
            className="font-display flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold text-white"
            style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
            aria-hidden
          >
            GJ
          </span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Gaurav</span>
        </a>

        <span aria-hidden className="mx-0.5 hidden h-[70%] min-h-5 w-px self-center md:block" style={{ background: 'var(--border-strong)' }} />

        <ul className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
          {navLinks.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href}>
                <a
                  href={sectionHref(l.href)}
                  aria-current={isActive ? 'true' : undefined}
                  className="relative block rounded-full px-3.5 py-2 text-[13px] font-semibold tracking-[-0.01em] transition-colors"
                  style={{ color: isActive ? 'var(--foreground)' : 'var(--muted)' }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'var(--surface-raised)' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                  {isActive && (
                    <span aria-hidden className="absolute -bottom-[7px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full" style={{ background: 'var(--accent)' }} />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-auto flex items-center gap-0.5 md:ml-0">
          <button
            onClick={onCommand}
            className="hidden rounded-full px-2.5 py-2 font-mono2 text-[11px] lg:block"
            style={{ color: 'var(--muted)' }}
            aria-label="Open command palette (Ctrl+K)"
            title="Command palette — Ctrl/⌘ K"
          >
            ⌘K
          </button>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="rounded-full p-2 transition-colors hover:opacity-70"
            style={{ color: 'var(--muted)' }}
          >
            <GithubIcon className="h-[18px] w-[18px]" />
          </a>
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            suppressHydrationWarning
            className="rounded-full p-2 transition-transform duration-300 hover:rotate-12"
            style={{ color: 'var(--muted)' }}
          >
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" aria-hidden /> : <Moon className="h-[18px] w-[18px]" aria-hidden />}
          </button>
          <a
            href={sectionHref('#contact')}
            aria-current={active === 'contact' ? 'location' : undefined}
            className="ml-1 hidden items-center gap-1 rounded-full px-4 py-2 text-[13px] font-semibold text-white transition-transform duration-200 hover:scale-[1.04] active:scale-[0.97] sm:inline-flex"
            style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </nav>
      <MobileDock sectionHref={sectionHref} active={active} />
    </header>
  );
}

const dockItems = [
  { label: 'Work', href: '#work', Icon: BriefcaseBusiness },
  { label: 'Experience', href: '#experience', Icon: History },
  { label: 'Skills', href: '#skills', Icon: Code2 },
  { label: 'About', href: '#about', Icon: UserRound },
  { label: 'Contact', href: '#contact', Icon: Mail },
];

function MobileDock({ sectionHref, active }: { sectionHref: (href: string) => string; active: string }) {
  return (
    <nav
      aria-label="Mobile section navigation"
      className="fixed left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-[28rem] -translate-x-1/2 items-center gap-0.5 rounded-full px-1.5 py-1.5 shadow-xl md:hidden"
      style={{
        bottom: 'max(0.75rem, env(safe-area-inset-bottom))',
        background: 'var(--nav-bg)',
        border: '1px solid var(--border-strong)',
        backdropFilter: 'blur(20px) saturate(160%)',
        WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {dockItems.map(({ label, href, Icon }) => {
        const isActive = active === href.slice(1);
        return (
          <a
            key={href}
            href={sectionHref(href)}
            aria-current={isActive ? 'location' : undefined}
            className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-full py-2 text-[9px] font-semibold leading-none transition-colors"
            style={{
              background: isActive ? 'var(--surface-raised)' : 'transparent',
              color: isActive ? 'var(--foreground)' : 'var(--muted)',
            }}
          >
            <Icon className="h-[18px] w-[18px] shrink-0" aria-hidden />
            <span className="truncate">{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
