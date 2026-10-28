import { expect, test } from "@playwright/test";
import { experience } from "../../src/data/experience";
import { skillGroups } from "../../src/data/skills";

test("removed AI application engineering content is absent from the data", () => {
	const groupIds = skillGroups.map((group) => group.id);
	const groupLabels = skillGroups.map((group) => group.label);
	const skills = skillGroups.flatMap((group) => group.skills);

	expect(groupIds).not.toContain("ai-engineering");
	expect(groupLabels).not.toContain("AI Application Engineering");
	expect(skills).not.toContain("LLM APIs");
	expect(skills).not.toContain("RAG Systems");
	expect(skills).toContain("Ollama");
	expect(skills).toContain("RAG");
	expect(skills).toContain("MCP");
	expect(skills).toContain("Web MCP");
});

test("experience records contain only fields used by the current timeline", () => {
	expect(experience).toHaveLength(1);
	expect(experience[0]).not.toHaveProperty("technologies");
	expect(experience[0]).not.toHaveProperty("summary");
	expect(experience[0]).not.toHaveProperty("placeholder");
	expect(experience[0]?.careerProgression).toHaveLength(3);
});

test("the page renders the retained skills and career timeline", async ({ page }) => {
	await page.goto("/");

	const skillsSection = page.locator("#skills");
	await expect(
		skillsSection.getByRole("heading", { name: "AI & Agent Tooling" }),
	).toBeVisible();
	await expect(skillsSection.getByText("AI Application Engineering", { exact: true })).toHaveCount(0);
	await expect(skillsSection.getByText("LLM APIs", { exact: true })).toHaveCount(0);
	await expect(skillsSection.getByText("Ollama", { exact: true })).toBeVisible();
	await expect(skillsSection.getByText("RAG", { exact: true })).toBeVisible();
	await expect(skillsSection.getByText("MCP", { exact: true })).toBeVisible();
	await expect(skillsSection.getByText("Web MCP", { exact: true })).toBeVisible();

	const timeline = page.locator("#experience");
	await expect(timeline.getByText("Associate Software Developer", { exact: true })).toBeVisible();
	await expect(timeline.getByText("Software Developer", { exact: true })).toBeVisible();
	await expect(timeline.getByText("Senior Software Developer", { exact: true })).toBeVisible();
	await expect(timeline.getByText("Technologies across these roles", { exact: true })).toHaveCount(0);
});
