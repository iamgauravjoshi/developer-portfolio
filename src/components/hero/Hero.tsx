"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, FileBadge, FileUser } from "lucide-react";
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
			className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-32 md:pt-36"
		>
			{/* Ambient orbs */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -left-40 top-[-10%] h-[480px] w-[480px] rounded-full"
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
				className="pointer-events-none absolute -right-40 bottom-[-20%] h-[520px] w-[520px] rounded-full"
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
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono2 text-[11px] tracking-[0.12em] uppercase"
						style={{
							borderColor: "var(--border)",
							color: "var(--muted)",
							background: "var(--surface)",
						}}
					>
						<span
							className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400"
							aria-hidden
						/>
						{profile.role}
					</motion.div>

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

				<h1 className="font-display mt-6 font-bold leading-[0.95] whitespace-nowrap text-[clamp(2.6rem,8.5vw,6.5rem)]">
					<MaskedLine text="Gaurav Joshi" delay={0.05} />
				</h1>

				<motion.p
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.45 }}
					className="mt-6 max-w-xl text-lg md:text-xl leading-relaxed"
					style={{ color: "var(--muted)" }}
				>
					<span
						className="font-serif-it text-[1.35em] leading-none"
						style={{ color: "var(--foreground)" }}
					>
						I build full-stack web products with React, TypeScript, Next.js, and Node.js{" "}
					</span>
					for product teams and independent projects.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 14 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.58 }}
					className="mt-8 flex flex-wrap items-center gap-3"
				>
					<Magnetic>
						<a
							href="#work"
							className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:scale-[1.03] active:translate-y-0 active:scale-[0.98]"
							style={{
								background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
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
