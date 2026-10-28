import { about, philosophy } from "@/data/now";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/primitives";

export default function About() {
	return (
		<section
			id="about"
			aria-labelledby="ab-h"
			className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20"
		>
			<span id="ab-h" className="sr-only">
				About
			</span>
			<SectionHeading
				index="01"
				eyebrow="About"
				title={about.heading}
				body={
					<div className="space-y-4">
						{about.paragraphs.map((p) => (
							<p key={p.slice(0, 24)}>{p}</p>
						))}
					</div>
				}
			/>

			<div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{philosophy.map((p, i) => (
					<Reveal key={p.title} delay={Math.min(i * 0.05, 0.2)}>
						<div className="h-full rounded-[1.75rem] p-5 md:p-6 bg-(--surface-elevated) border-2 border-(--border) hover:border-[rgb(139,92,246)] transition-colors duration-500 ease-in-out">
							<p
								className="font-mono2 text-[11px]"
								style={{ color: "var(--accent)" }}
							>
								{String(i + 1).padStart(2, "0")}
							</p>
							<h3 className="font-display mt-2 font-semibold">{p.title}</h3>
							<p
								className="mt-2 line-clamp-2 text-sm leading-relaxed"
								style={{ color: "var(--muted)" }}
							>
								{p.body}
							</p>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
}
