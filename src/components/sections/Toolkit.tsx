"use client";

import { skillIcon } from './skillIcons';
import { techStack } from '@/data/techStack';
import { skillGroups } from '@/data/skills';
import { SectionHeading } from '@/components/ui/primitives';
import { Reveal } from '@/components/motion/primitives';

const brandColorEntries: [string, string][] = [
  ...techStack.map(({ name, color }): [string, string] => [name.toLowerCase(), color]),
  ['javascript', '#F7DF1E'],
  ['redux toolkit', '#764ABC'],
  ['react hook form', '#EC5990'],
  ['react router', '#CA4245'],
  ['react bootstrap', '#0D6EFD'],
  ['google maps', '#4285F4'],
  ['material ui', '#007FFF'],
  ['chart.js', '#FF6384'],
  ['recharts', '#22B5BF'],
  ['pgvector', '#336791'],
  ['supabase', '#3ECF8E'],
  ['razorpay', '#3395FF'],
  ['bullmq', '#E11D48'],
  ['shadcn', '#181717'],
  ['ollama', '#181717'],
  ['web mcp', '#8B5CF6'],
  ['mongoose', '#880000'],
  ['sass', '#CC6699'],
  ['vite', '#646CFF'],
  ['redux', '#764ABC'],
  ['zod', '#3E67B1'],
  ['bootstrap', '#7952B3'],
  ['mcp', '#8B5CF6'],
  ['rag', '#8B5CF6'],
  ['java', '#ED8B00'],
  ['html', '#E34F26'],
  ['css', '#1572B6'],
  ['express', '#444444'],
  ['drizzle', '#C5F74F'],
  ['prisma', '#2D3748'],
  ['react query', '#FF4154'],
  ['radix', '#161618'],
  ['three.js', '#000000'],
  ['redis', '#D82C20'],
  ['rabbitmq', '#FF6600'],
  ['vitest', '#6E9F18'],
  ['gemini', '#8E75B2'],
];
brandColorEntries.sort(([first], [second]) => second.length - first.length);
const brandColors = new Map(brandColorEntries);

function colorForSkill(name: string) {
  const normalized = name.toLowerCase();
  const matchingStackItem = [...brandColors].find(([technology]) => normalized.includes(technology));
  const color = matchingStackItem?.[1];
  return color === '#000000' || color === '#181717' ? 'var(--foreground)' : color ?? 'var(--muted)';
}

export default function Toolkit() {
  return (
    <section id="skills" aria-labelledby="sk-h" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 md:px-8 md:py-20">
      <span id="sk-h" className="sr-only">Tools and skills</span>
      <SectionHeading
        index="04"
        eyebrow="Skills"
        title="Tools & skills"
        body="Languages, frameworks, and platforms I use."
      />
      <div className="mt-10 columns-1 gap-4 md:mt-14 md:columns-2">
        {skillGroups.map((group, groupIndex) => (
          <Reveal key={group.id} delay={groupIndex * 0.04} className="mb-4 break-inside-avoid">
            <div className="h-full rounded-2xl border p-5 md:p-6" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
              <h3 className="font-display text-base font-semibold md:text-lg">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => {
                  const Icon = skillIcon(skill);
                  const color = colorForSkill(skill);

                  return (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium sm:text-sm"
                      style={{
                        borderColor: 'var(--border)',
                        background: 'var(--surface)',
                        color: 'var(--foreground)',
                      }}
                    >
                      <span className="shrink-0" style={{ color }} aria-hidden="true">
                        <Icon className="h-4 w-4" />
                      </span>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
