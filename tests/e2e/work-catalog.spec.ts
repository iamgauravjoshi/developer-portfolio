import { expect, test } from "@playwright/test";
import { PROJECT_FILTERS, projects } from "../../src/data/projects";
import { filterProjects } from "../../src/lib/projectCatalog";

test("All keeps every project when the catalog exceeds nine entries", () => {
	const seed = projects[0];
	expect(seed).toBeDefined();
	const expandedCatalog = [
		...projects,
		...Array.from({ length: 4 }, (_, index) => ({
			...seed,
			id: `regression-project-${index}`,
			slug: `regression-project-${index}`,
		})),
	];

	expect(filterProjects(expandedCatalog, "All")).toHaveLength(
		expandedCatalog.length,
	);
});

test("explicit project tags determine filter results", () => {
	for (const filter of PROJECT_FILTERS) {
		const expectedProjects = projects.filter((project) =>
			project.tags.includes(filter),
		);
		expect(filterProjects(projects, filter)).toEqual(expectedProjects);
	}
});

test("work filters display every matching project", async ({ page }) => {
	await page.goto("/");

	const workSection = page.locator("#work");
	const filters = workSection.getByRole("group", { name: "Filter projects" });
	const cards = workSection.locator("article");

	await expect(cards).toHaveCount(projects.length);
	for (const filter of PROJECT_FILTERS) {
		await filters.getByRole("button", { name: filter, exact: true }).click();
		await expect(cards).toHaveCount(filterProjects(projects, filter).length);
	}

	await filters.getByRole("button", { name: "All", exact: true }).click();
	await expect(cards).toHaveCount(projects.length);
});
