import { about, philosophy } from "@/data/now";
import { SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/primitives";

export function Philosophy() {
	return (
		<section
			id="about"
			aria-labelledby="ph-h"
			className="border-y scroll-mt-28"
			// className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20"
			style={{ borderColor: "var(--border)", background: "var(--surface)" }}
		>
			<div className="mx-auto max-w-6xl px-5 md:px-8 py-14 md:py-20">
				<span id="ph-h" className="sr-only">
					Engineering philosophy
				</span>
				<SectionHeading
					index="05"
					eyebrow="How I work"
					title={
						<>
							Engineering philosophy,{" "}
							<span
								className="font-serif-it"
								style={{ color: "var(--accent)" }}
							>
								minus the buzzwords
							</span>
						</>
					}
				/>
				<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{philosophy.map((p, i) => (
						<Reveal key={p.title} delay={Math.min(i * 0.05, 0.2)}>
							<div
								className="h-full rounded-[1.75rem] p-5 md:p-6"
								style={{
									background: "var(--surface-elevated)",
									border: "1px solid var(--border)",
								}}
							>
								<p
									className="font-mono2 text-[11px]"
									style={{ color: "var(--accent)" }}
								>
									{String(i + 1).padStart(2, "0")}
								</p>
								<h3 className="font-display mt-2 font-semibold">{p.title}</h3>
								<p
									className="mt-2 text-sm leading-relaxed"
									style={{ color: "var(--muted)" }}
								>
									{p.body}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}

export function About() {
	return (
		<section
			id="about"
			aria-labelledby="ab-h"
			className="mx-auto max-w-6xl scroll-mt-28 px-5 md:px-8 py-14 md:py-20"
		>
			<span id="ab-h" className="sr-only">
				About
			</span>
			<SectionHeading index="01" eyebrow="About" title={about.heading} />
			<div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
				<Reveal>
					<div
						className="space-y-4 text-[15px] md:text-base leading-relaxed"
						style={{ color: "var(--muted)" }}
					>
						{about.paragraphs.map((p) => (
							<p key={p.slice(0, 24)}>
								<span className="sr-only">About Gaurav Joshi: </span>
								{p}
							</p>
						))}
					</div>
				</Reveal>
				<Reveal delay={0.1}>
					<div
						className="rounded-[1.75rem] p-6"
						style={{
							background: "var(--surface)",
							border: "1px solid var(--border)",
						}}
					>
						<p
							className="font-mono2 text-[11px] tracking-[0.2em] uppercase"
							style={{ color: "var(--accent)" }}
						>
							Problems I enjoy
						</p>
						<ul className="mt-4 space-y-3">
							{about.interests.map((t) => (
								<li
									key={t}
									className="flex gap-2.5 text-sm leading-relaxed"
									style={{ color: "var(--muted)" }}
								>
									<span aria-hidden style={{ color: "var(--accent)" }}>
										→
									</span>{" "}
									{t}
								</li>
							))}
						</ul>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
