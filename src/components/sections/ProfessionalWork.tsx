import { Building2, ShieldCheck, Users } from 'lucide-react';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';
import { SectionHeading, Chip } from '@/components/ui/primitives';
import { skillIcon } from './skillIcons';
import { Reveal } from '@/components/motion/primitives';

const pro = projects.filter((p) => p.category === 'professional');

/**
 * Professional work: honest by construction.
 * Public-repo professional projects render fully; anything under NDA renders
 * as a sanitized pattern card — never fabricated employers or metrics.
 */
export default function ProfessionalWork() {
  return (
    <section id="professional" aria-labelledby="pw-h" className="border-y" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
        <span id="pw-h" className="sr-only">Professional work</span>
        <SectionHeading
          index="02"
          eyebrow="Professional · Inside teams"
          title={<>Products I’ve <span style={{ color: '#7c9eff' }}>helped build</span></>}
          body="Team-delivered work. Confidential items stay sanitized."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pro.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i * 0.06, 0.18)}>
              <article className="flex h-full flex-col rounded-[1.75rem] p-6" style={{ background: 'var(--surface-elevated)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 font-mono2 text-[11px] tracking-[0.16em] uppercase" style={{ color: '#7c9eff' }}>
                  <Building2 className="h-3.5 w-3.5" aria-hidden /> {p.domain}
                </div>
                <h3 className="font-display mt-3 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{p.problem}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.responsibilities.slice(0, 2).map((r) => (
                    <li key={r} className="flex gap-2 text-[13px] leading-relaxed" style={{ color: 'var(--muted)' }}>
                      <span aria-hidden style={{ color: '#7c9eff' }}>·</span> {r}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => {
                    const TIcon = skillIcon(t);
                    return (
                      <Chip key={t}>
                        <TIcon className="h-3 w-3" />
                        {t}
                      </Chip>
                    );
                  })}
                </div>
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noreferrer" className="link-underline mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium" style={{ color: 'var(--muted)' }}>
                    Public repository
                  </a>
                )}
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <article className="flex h-full flex-col rounded-[1.75rem] border-dashed p-6" style={{ border: '1px dashed var(--border-strong)', background: 'transparent' }}>
              <div className="flex items-center gap-2 font-mono2 text-[11px] tracking-[0.16em] uppercase" style={{ color: 'var(--muted)' }}>
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden /> Confidential engagements
              </div>
              <h3 className="font-display mt-3 text-xl font-semibold">Enterprise & client-team work</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Additional team projects live under NDA. I can walk through problem categories,
                responsibilities, and architecture decisions on a call — nothing confidential disclosed.
              </p>
              <ul className="mt-4 space-y-1.5 text-[13px]" style={{ color: 'var(--muted)' }}>
                {['Role & responsibilities per engagement', 'Stack & architecture decisions', 'Team rituals & review culture'].map((t) => (
                  <li key={t} className="flex gap-2"><Users className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden /> {t}</li>
                ))}
              </ul>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline mt-4 inline-flex w-fit items-center gap-1 text-sm font-medium">
                Work history on LinkedIn
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
