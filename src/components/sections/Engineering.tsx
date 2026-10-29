"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PROJECT_FILTERS, projects } from "@/data/projects";
import { categoryMeta } from "@/data/skills";
import { profile } from "@/data/profile";
import { filterProjects } from "@/lib/projectCatalog";
import { SectionHeading, Chip } from "@/components/ui/primitives";
import { Reveal } from "@/components/motion/primitives";
import { Tilt } from "@/components/motion/effects";
import { skillIcon, GithubIcon } from "./skillIcons";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const filters = ["All", ...PROJECT_FILTERS] as const;
const repositoryColors = [
	"#8B5CF6",
	"#6366F1",
	"#3B82F6",
	"#0EA5E9",
	"#06B6D4",
	"#14B8A6",
	"#10B981",
	"#84CC16",
	"#F59E0B",
	"#F97316",
	"#EC4899",
	"#D946EF",
];

type Filter = (typeof filters)[number];

export default function Engineering() {
	const [filter, setFilter] = useState<Filter>("All");
	const filteredProjects = filterProjects(projects, filter);
	const professionalProjects = filteredProjects.filter(
		(project) => project.category === "professional",
	);
	const personalProjects = filteredProjects.filter(
		(project) => project.category !== "professional",
	);

	return (
		<section
			id="work"
			aria-labelledby="eng-h"
			className="mx-auto max-w-6xl scroll-mt-28 px-5 py-14 md:px-8 md:py-20"
		>
			<span id="eng-h" className="sr-only">
				Work
			</span>
			<SectionHeading
				index="03"
				eyebrow="Selected projects"
				title="Work"
				body="Professional projects from my work at Okruti and personal projects I build independently."
			/>

			<div
				className="mb-6 flex flex-wrap gap-2"
				role="group"
				aria-label="Filter projects by focus"
			>
				{filters.map((filterOption) => (
					<button
						key={filterOption}
						onClick={() => setFilter(filterOption)}
						aria-pressed={filter === filterOption}
						className={cn(
							"rounded-full border px-4 py-1.5 text-[13px] font-medium transition-all",
						)}
						style={{
							borderColor:
								filter === filterOption ? "var(--foreground)" : "var(--border)",
							background:
								filter === filterOption ? "var(--foreground)" : "transparent",
							color:
								filter === filterOption ? "var(--background)" : "var(--muted)",
						}}
					>
						{filterOption}
					</button>
				))}
			</div>

			{professionalProjects.length > 0 && (
				<ProjectGroup
					id="professional-projects"
					eyebrow="Okruti IT Consulting Pvt. Ltd."
					title="Professional projects"
					description="Products and client work delivered as part of my professional team."
					projects={professionalProjects}
				/>
			)}

			{personalProjects.length > 0 && (
				<ProjectGroup
					id="personal-projects"
					eyebrow="Independent work"
					title="Personal projects"
					description="Products and tools I build independently, including open-source work."
					projects={personalProjects}
				/>
			)}

			<Reveal className="mt-8 text-center">
				<a
					href={profile.github}
					target="_blank"
					rel="noreferrer"
					className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03]"
					style={{
						borderColor: "var(--border-strong)",
						background: "var(--surface)",
					}}
				>
					<GithubIcon className="h-4 w-4" /> More on GitHub{" "}
					<ArrowUpRight className="h-4 w-4" aria-hidden />
				</a>
			</Reveal>
		</section>
	);
}

function ProjectGroup({
	id,
	eyebrow,
	title,
	description,
	projects,
}: {
	id: string;
	eyebrow: string;
	title: string;
	description: string;
	projects: Project[];
}) {
	return (
		<section
			id={id}
			aria-labelledby={`${id}-heading`}
			className="mt-10 scroll-mt-28"
		>
			<div className="mb-5 max-w-2xl">
				<p
					className="font-mono2 text-[11px] tracking-[0.18em] uppercase"
					style={{ color: "var(--accent)" }}
				>
					{eyebrow}
				</p>
				<h3
					id={`${id}-heading`}
					className="font-display mt-2 text-2xl font-semibold md:text-3xl"
				>
					{title} <span className="text-base font-medium">({projects.length})</span>
				</h3>
				<p className="mt-2 text-sm" style={{ color: "var(--muted)" }}>
					{description}
				</p>
			</div>

			<motion.div
				layout
				className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
				style={{ perspective: "1200px" }}
			>
				<AnimatePresence mode="popLayout">
					{projects.map((project, index) => (
						<ProjectCard
							key={project.id}
							project={project}
							index={index}
						/>
					))}
				</AnimatePresence>
			</motion.div>
		</section>
	);
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
	const category = categoryMeta[project.category];
	const hasCaseStudy = project.hasCaseStudy !== false;

	return (
		<Tilt max={4} className="h-full">
			<motion.article
				layout
				initial={{ opacity: 0, scale: 0.96 }}
				animate={{ opacity: 1, scale: 1 }}
				exit={{ opacity: 0, scale: 0.96 }}
				transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
				className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-5 transition-[border-color,box-shadow] duration-300"
				style={{
					background: "var(--surface)",
					borderWidth: "0.5px",
					borderColor: "var(--border)",
					boxShadow: "var(--shadow-card)",
				}}
				onPointerMove={(event) => {
					const bounds = event.currentTarget.getBoundingClientRect();
					event.currentTarget.style.setProperty(
						"--pointer-x",
						`${event.clientX - bounds.left}px`,
					);
					event.currentTarget.style.setProperty(
						"--pointer-y",
						`${event.clientY - bounds.top}px`,
					);
				}}
				onPointerEnter={(event) => {
					event.currentTarget.style.borderColor = "#8B5CF6";
					event.currentTarget.style.boxShadow =
						"0 0 0 1px rgba(139, 92, 246, 0.24), 0 16px 44px rgba(139, 92, 246, 0.14)";
				}}
				onPointerLeave={(event) => {
					event.currentTarget.style.borderColor = "var(--border)";
					event.currentTarget.style.boxShadow = "var(--shadow-card)";
				}}
			>
				<div
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					style={{
						background: `radial-gradient(260px circle at var(--pointer-x, 50%) var(--pointer-y, 50%), color-mix(in srgb, ${repositoryColors[index % repositoryColors.length]} 22%, transparent), transparent 72%)`,
					}}
				/>
				<div className="relative z-10 flex h-full flex-col">
					<div className="flex justify-end">
						<span
							className="rounded-full border px-2.5 py-1 font-mono2 text-[10px] uppercase tracking-wide"
							style={{
								color: category.color,
								borderColor: `color-mix(in srgb, ${category.color} 32%, transparent)`,
								background: `color-mix(in srgb, ${category.color} 9%, var(--surface))`,
							}}
						>
							{category.label}
						</span>
					</div>
					<h4 className="font-display mt-2.5 text-lg font-semibold">
						{hasCaseStudy ? (
							<Link href={`/work/${project.slug}`} className="link-underline">
								{project.title}
							</Link>
						) : (
							project.title
						)}
					</h4>
					<p
						className="mt-1.5 line-clamp-2 text-[13.5px] leading-relaxed"
						style={{ color: "var(--muted)" }}
					>
						{project.description}
					</p>
					{project.technologies.length > 0 && (
						<div className="mt-3 flex flex-wrap gap-1.5">
							{project.technologies.slice(0, 3).map((technology) => {
								const TechnologyIcon = skillIcon(technology);
								return (
									<Chip key={technology}>
										<TechnologyIcon className="h-3 w-3" />
										{technology}
									</Chip>
								);
							})}
						</div>
					)}
					{(hasCaseStudy || project.githubUrl) && (
						<div className="mt-auto flex items-center gap-3 pt-4 text-[13px] font-medium">
							{hasCaseStudy && (
								<Link
									href={`/work/${project.slug}`}
									className="inline-flex items-center gap-0.5 link-underline"
								>
									Details
									<ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
								</Link>
							)}
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noreferrer"
									className="link-underline"
									style={{ color: "var(--muted)" }}
								>
									Source
								</a>
							)}
						</div>
					)}
				</div>
			</motion.article>
		</Tilt>
	);
}
