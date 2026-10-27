import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
	index,
	eyebrow,
	title,
	body,
	id,
}: {
	index: string;
	eyebrow: string;
	title: ReactNode;
	body?: string | ReactNode;
	id?: string;
}) {
	return (
		<div className="mb-10 md:mb-14" id={id}>
			<div
				className="flex items-center gap-3 font-mono2 text-[11px] tracking-[0.22em] uppercase"
				style={{ color: "var(--muted)" }}
			>
				<span style={{ color: "var(--accent)" }}>{index}</span>
				<span
					className="h-px w-8"
					style={{ background: "var(--border-strong)" }}
					aria-hidden
				/>
				<span>{eyebrow}</span>
			</div>
			<h2 className="font-display mt-4 text-4xl md:text-6xl leading-[1.02] font-semibold text-balance max-w-3xl">
				{title}
			</h2>
			{body && (
				<div
					className="mt-4 max-w-2xl text-[15px] md:text-lg leading-relaxed"
					style={{ color: "var(--muted)" }}
				>
					{body}
				</div>
			)}
		</div>
	);
}

export function Chip({
	children,
	color,
}: {
	children: ReactNode;
	color?: string;
}) {
	return (
		<span
			className={cn(
				"inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono2 text-[11px] leading-none",
			)}
			style={{
				borderColor: "var(--border)",
				background: "var(--surface-elevated)",
				color: "var(--muted)",
			}}
		>
			{color && (
				<span
					className="h-1.5 w-1.5 rounded-full"
					style={{ background: color }}
					aria-hidden
				/>
			)}
			{children}
		</span>
	);
}

export function CategoryDot({
	color,
	label,
}: {
	color: string;
	label: string;
}) {
	return (
		<span className="inline-flex items-center gap-1.5 font-mono2 text-[11px] tracking-[0.14em] uppercase">
			<span
				className="h-1.5 w-1.5 rounded-full"
				style={{ background: color }}
				aria-hidden
			/>
			<span style={{ color: "var(--muted)" }}>{label}</span>
		</span>
	);
}
