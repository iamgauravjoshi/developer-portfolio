"use client";

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';
import { GithubIcon, LinkedinIcon } from './skillIcons';

type Status = 'idle' | 'sending' | 'done' | 'error';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot anti-spam: bots fill this; humans never see it.
    if (fd.get('company_website')) {
      setStatus('done');
      return;
    }
    const next: Record<string, string> = {};
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    if (name.length < 2) next.name = 'Please add your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = 'Enter a valid email address.';
    if (message.length < 20) next.message = 'Tell me a little more (20+ characters).';
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    // No backend secrets on the frontend: compose a draft in the visitor's
    // email app. The site cannot confirm whether it was opened or sent.
    const subject = encodeURIComponent(`Project enquiry from ${name} — ${String(fd.get('type') ?? 'General')}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${String(fd.get('company') ?? '')}\nProject type: ${String(fd.get('type') ?? '')}\n\n${message}`,
    );
    setTimeout(() => {
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus('done');
    }, 700);
  };

  const inputStyle = {
    background: 'var(--surface-elevated)',
    border: '1px solid var(--border)',
    color: 'var(--foreground)',
  } as const;

  return (
    <section id="contact" aria-labelledby="ct-h" className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-24">
        <span id="ct-h" className="sr-only">Contact</span>
        <SectionHeading
          index="08"
          eyebrow="Contact"
          title={<>Have something <span className="font-serif-it" style={{ color: 'var(--accent)' }}>worth building?</span></>}
          body="Roles, freelance builds, collaborations. I reply personally."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="space-y-4">
              <button
                onClick={copyEmail}
                className="flex w-full items-center justify-between gap-3 rounded-[1.75rem] p-5 text-left transition-transform hover:scale-[1.01] active:scale-[0.99]"
                style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
                aria-live="polite"
              >
                <span>
                  <span className="block font-mono2 text-[11px] tracking-[0.18em] uppercase" style={{ color: 'var(--muted)' }}>Email — click to copy</span>
                  <span className="mt-1 block text-[15px] font-medium break-all">{profile.email}</span>
                </span>
                <span className="rounded-lg p-2" style={{ background: 'var(--surface-raised)' }} aria-hidden>
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </span>
              </button>
              {copied && <p className="text-sm text-emerald-400" role="status">Copied — talk soon.</p>}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedinIcon },
                  { label: 'GitHub', href: profile.github, Icon: GithubIcon },
                ].map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-[1.75rem] p-5 transition-transform hover:scale-[1.02]" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                    <span className="flex items-center gap-2 text-sm font-semibold"><Icon className="h-4 w-4" /> {label}</span>
                    <ArrowUpRight className="h-4 w-4" style={{ color: 'var(--muted)' }} aria-hidden />
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 rounded-[1.75rem] p-5 text-sm" style={{ border: '1px dashed var(--border-strong)', color: 'var(--muted)' }}>
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                Prefer a form? It validates here and opens a pre-filled email — no data stored anywhere.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-[1.75rem] p-5 md:p-7"
              style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}
              aria-label="Contact form"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="ct-name" className="mb-1.5 block text-[13px] font-medium">Name *</label>
                  <input id="ct-name" name="name" autoComplete="name" className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:border-[var(--accent)]" style={inputStyle} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'ct-name-err' : undefined} />
                  {errors.name && <p id="ct-name-err" className="mt-1 text-[12px] text-red-400" role="alert">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="ct-email" className="mb-1.5 block text-[13px] font-medium">Email *</label>
                  <input id="ct-email" name="email" type="email" autoComplete="email" className="w-full rounded-xl px-4 py-2.5 text-sm outline-none" style={inputStyle} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'ct-email-err' : undefined} />
                  {errors.email && <p id="ct-email-err" className="mt-1 text-[12px] text-red-400" role="alert">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="ct-company" className="mb-1.5 block text-[13px] font-medium">Company <span style={{ color: 'var(--muted)' }}>(optional)</span></label>
                  <input id="ct-company" name="company" autoComplete="organization" className="w-full rounded-xl px-4 py-2.5 text-sm outline-none" style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="ct-type" className="mb-1.5 block text-[13px] font-medium">Project type</label>
                  <select id="ct-type" name="type" className="w-full rounded-xl px-4 py-2.5 text-sm outline-none" style={inputStyle} defaultValue="Freelance build">
                    {['Freelance build', 'Engineering role', 'Product collaboration', 'Something else'].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Honeypot — hidden from humans and assistive tech */}
              <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
              <div className="mt-4">
                <label htmlFor="ct-msg" className="mb-1.5 block text-[13px] font-medium">Message *</label>
                <textarea id="ct-msg" name="message" rows={5} className="w-full resize-y rounded-xl px-4 py-2.5 text-sm outline-none" style={inputStyle} placeholder="What are you building, and what does success look like?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'ct-msg-err' : undefined} />
                {errors.message && <p id="ct-msg-err" className="mt-1 text-[12px] text-red-400" role="alert">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 sm:w-auto"
                style={{ background: 'linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)' }}
              >
                {status === 'sending' ? 'Preparing email…' : status === 'done' ? 'Email draft requested' : 'Send message'}
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </button>
              {status === 'error' && Object.keys(errors).length > 0 && (
                <p className="mt-3 text-[13px] text-red-400" role="alert">Fix the highlighted fields and try again.</p>
              )}
              {status === 'done' && (
                <p className="mt-3 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }} role="status" aria-live="polite">
                  Your email app should open with a draft. Review it and press Send there. If it didn’t open, email{' '}
                  <a className="link-underline font-medium" href={`mailto:${profile.email}`} style={{ color: 'var(--foreground)' }}>
                    {profile.email}
                  </a>.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
