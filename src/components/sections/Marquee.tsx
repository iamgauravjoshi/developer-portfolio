import { skillIcon } from './skillIcons';
import { techStack } from '@/data/techStack';

/** Infinite product marquee — stack ticker with brand icons. Pauses on hover. */
export default function Marquee() {
  const row = [...techStack, ...techStack];
  return (
    <section aria-label="Scrolling technology stack" className="marquee overflow-hidden border-y py-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((t, i) => {
          const Icon = skillIcon(t.name);
          return (
            <span key={`${t.name}-${i}`} className="flex items-center gap-10" aria-hidden={i >= techStack.length}>
              <span
                className="font-display flex items-center gap-2 whitespace-nowrap text-[15px] font-semibold tracking-tight"
                style={{ color: t.color === '#000000' || t.color === '#181717' ? 'var(--foreground)' : t.color }}
              >
                <Icon className="h-4 w-4" />
                {t.name}
              </span>
              <span aria-hidden style={{ color: 'var(--accent)' }}>✦</span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
