import { defineConfig, devices } from "@playwright/test";

const isCI = Boolean(process.env.CI);
const port = Number(process.env.PLAYWRIGHT_PORT ?? "3000");
if (!Number.isInteger(port) || port < 1 || port > 65_535) {
	throw new Error("PLAYWRIGHT_PORT must be an integer between 1 and 65535.");
}
const baseURL = `http://127.0.0.1:${port}`;

export default defineConfig({
	testDir: "./tests/e2e",
	fullyParallel: true,
	forbidOnly: isCI,
	retries: isCI ? 1 : 0,
	reporter: "list",
	use: {
		baseURL,
		trace: "retain-on-failure",
		screenshot: "only-on-failure",
	},
	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
	],
	webServer: {
		command: isCI
			? `npm run start -- --hostname 127.0.0.1 --port ${port}`
			: `npm run dev -- --hostname 127.0.0.1 --port ${port}`,
		url: baseURL,
		reuseExistingServer: !isCI || process.env.PLAYWRIGHT_PORT !== undefined,
		timeout: 120_000,
	},
});
