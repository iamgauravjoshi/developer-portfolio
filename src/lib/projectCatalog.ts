import type { Project, ProjectFilter } from "../types";

export type ProjectCatalogFilter = "All" | ProjectFilter;

export function filterProjects<T extends Project>(
	projects: readonly T[],
	filter: ProjectCatalogFilter,
): T[] {
	if (filter === "All") return [...projects];
	return projects.filter((project) => project.tags.includes(filter));
}
