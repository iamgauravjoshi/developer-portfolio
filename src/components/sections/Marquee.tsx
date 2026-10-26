import { skillIcon } from './skillIcons';

const items = [
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Electron',
  'Tailwind CSS',
  'Zustand',
  'D3.js',
  'Framer Motion',
  'Git / GitHub',
];

/** Infinite product marquee — stack ticker with brand icons. Pauses on hover. */
export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Technology stack" className="marquee overflow-hidden border-y py-4" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {row.map((t, i) => {
          const Icon = skillIcon(t);
          const serif = i % 3 === 1;
          return (
            <span key={`${t}-${i}`} className="flex items-center gap-10" aria-hidden={i >= items.length}>
              <span
                className={`flex items-center gap-2 whitespace-nowrap ${serif ? 'font-serif-it text-[1.3em]' : 'font-display text-[15px] font-semibold tracking-tight'}`}
                style={{ color: serif ? 'var(--accent)' : 'var(--muted)' }}
              >
                <Icon className="h-4 w-4" />
                {t}
              </span>
              <span aria-hidden style={{ color: 'var(--accent)' }}>✦</span>
            </span>
          );
        })}
      </div>
    </section>
  );
}
