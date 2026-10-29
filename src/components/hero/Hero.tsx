"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { MaskedLine } from "@/components/motion/primitives";
import { Magnetic } from "@/components/motion/effects";
import { GithubIcon } from "@/components/sections/skillIcons";

const timeFmt = new Intl.DateTimeFormat("en-GB", {
	timeZone: "Asia/Kolkata",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false,
});

function JaipurClock() {
	const [time, setTime] = useState<string | null>(null);
	useEffect(() => {
		const tick = () => setTime(`${timeFmt.format(new Date())} IST`);
		tick();
		const t = setInterval(tick, 1000);
		return () => clearInterval(t);
	}, []);
	return (
		<span className="tabular" suppressHydrationWarning>
			{time ?? "--:--:--"}
		</span>
	);
}

export default function Hero() {
	const resumeHref = profile.resumeUrl || profile.linkedin;
	const reduce = useReducedMotion();

	return (
		<section
			id="top"
			className="relative flex min-h-svh items-center overflow-hidden pb-16 pt-24 md:pt-36"
		>
			{/* Ambient orbs */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -left-40 top-[-10%] h-120 w-120 rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 65%)",
					filter: "blur(40px)",
				}}
				animate={reduce ? undefined : { x: [0, 60, 0], y: [0, 40, 0] }}
				transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
			/>
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -right-40 bottom-[-20%] h-130 w-130 rounded-full"
				style={{
					background:
						"radial-gradient(circle, rgba(232,180,74,0.12) 0%, transparent 65%)",
					filter: "blur(40px)",
				}}
				animate={reduce ? undefined : { x: [0, -50, 0], y: [0, -50, 0] }}
				transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
			/>

			<div className="mx-auto w-full max-w-6xl px-5 md:px-8">
				<div className="flex flex-wrap items-start justify-between gap-4">
					<motion.a
						href="#contact"
						aria-label="Open for collaboration. Go to contact section."
						// initial={{ opacity: 0, y: 12 }}
						animate={{ y: [0, 6, 0] }}
						transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
						className="group inline-flex items-center gap-3 rounded-full border border-(--border) py-1.5 pl-1.5 pr-2 shadow-[0_8px_24px_-18px_rgba(38,24,64,0.45)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-violet-300 hover:shadow-[0_12px_28px_-16px_rgba(124,58,237,0.35)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-violet-500"
						style={{
							color: "var(--foreground)",
							background: "color-mix(in srgb, var(--surface) 88%, transparent)",
						}}
					>
						<span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white bg-violet-100 ring-1 ring-violet-200/80">
							<Image
								src="/gaurav-joshi-portrait.png"
								alt=""
								fill
								sizes="48px"
								className="object-cover object-top"
							/>
						</span>
						<span className="flex min-w-0 flex-col text-left leading-tight">
							<span className="text-[13px] font-semibold tracking-tight">
								Open for collaboration
							</span>
							<span
								className="mt-0.5 text-xs"
								style={{ color: "var(--muted)" }}
							>
								Projects · Consulting · Mentorship
							</span>
						</span>
						<span
							aria-hidden="true"
							className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white shadow-sm transition-transform duration-200 group-hover:translate-x-0.5"
						>
							<ArrowRight className="h-4 w-4" />
						</span>
					</motion.a>

					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						className="text-left sm:text-right"
					>
						<p
							className="font-mono2 text-[11px] tracking-[0.18em] uppercase"
							style={{ color: "var(--muted)" }}
						>
							Based in Jaipur, India
						</p>
						<p className="mt-1 text-sm font-medium">
							Local time <JaipurClock />
						</p>
					</motion.div>
				</div>

				<div className="mt-6 flex flex-col-reverse gap-6 items-center lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-8">
					<div className="min-w-0">
						<h1 className="font-display font-bold leading-[0.95] whitespace-nowrap text-[clamp(2.6rem,8.5vw,6.5rem)]">
							<MaskedLine text="Gaurav Joshi" delay={0.05} />
						</h1>

						<motion.p
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.45 }}
							className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
							style={{ color: "var(--muted)" }}
						>
							I turn ideas into digital experiences that feel effortless, look
							beautiful, and solve real problems. Always curious, always
							building, always looking for a better way.
							{/* <span
								className="font-serif-it text-[1.35em] leading-none"
								style={{ color: "var(--foreground)" }}
							>
								{" "}
								Always curious, always building, always looking for a better
								way.{" "}
							</span> */}
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 14 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7, delay: 0.58 }}
							className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3"
						>
							<Magnetic>
								<a
									href="#work"
									className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:scale-[1.03] active:translate-y-0 active:scale-[0.98]"
									style={{
										background:
											"linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
										boxShadow: "0 10px 28px -16px rgba(124,58,237,0.8)",
									}}
								>
									View selected work
									<ArrowDown className="h-4 w-4" aria-hidden />
								</a>
							</Magnetic>
							<Magnetic>
								<a
									href={profile.github}
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-px active:translate-y-0 active:scale-[0.98]"
									style={{
										borderColor: "var(--border-strong)",
										color: "var(--foreground)",
										background: "var(--surface)",
									}}
								>
									<GithubIcon className="h-4 w-4" />
									GitHub
								</a>
							</Magnetic>
							<a
								href={resumeHref}
								target="_blank"
								rel="noreferrer"
								className="link-underline inline-flex items-center gap-1 text-sm font-medium"
								style={{ color: "var(--muted)" }}
							>
								{profile.resumeUrl && "Download résumé"}
								<ArrowUpRight className="h-4 w-4" aria-hidden />
							</a>
						</motion.div>
					</div>

					<figure className="relative mx-auto sm:ml-auto sm:mr-0 mt-2 rounded-full overflow-hidden w-full max-w-70 sm:max-w-82.5 lg:mt-0 lg:max-w-95">
						<Image
							src="/gaurav-joshi-portrait.png"
							alt="Portrait of Gaurav Joshi"
							width={1254}
							height={1254}
							preload
							sizes="(min-width: 1024px) 40vw, (min-width: 640px) 55vw, 80vw"
							className="relative z-10 h-auto w-full object-contain"
						/>
					</figure>
				</div>
			</div>

			<motion.a
				href="#work"
				aria-label="Scroll to selected work"
				className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"
				animate={{ y: [0, 8, 0] }}
				transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
				style={{ color: "var(--muted)" }}
			>
				<ArrowDown className="h-5 w-5" aria-hidden />
			</motion.a>
		</section>
	);
}
