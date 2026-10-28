import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
	await page.addInitScript(() => {
		try {
			sessionStorage.setItem("gj-boot-seen", "1");
		} catch {
			// The intro is decorative; tests should still work when storage is blocked.
		}
	});
});

test("primary navigation reaches the work section", async ({ page }) => {
	await page.goto("/");

	const primaryNavigation = page.getByRole("navigation", { name: "Primary" });
	await primaryNavigation.getByRole("link", { name: "Work", exact: true }).click();

	await expect(page).toHaveURL(/#work$/);
	await expect(page.locator("#work")).toBeInViewport();
});

test("profile metadata uses the canonical site and official role", async ({ page }) => {
	await page.goto("/");

	await expect(page).toHaveTitle(
		"Gaurav Joshi | Senior Software Developer in Jaipur",
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		"href",
		"https://gaurav-joshi.vercel.app/",
	);
	await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
		"content",
		"Gaurav Joshi | Senior Software Developer in Jaipur",
	);
	await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
		"content",
		/https:\/\/gaurav-joshi\.vercel\.app\/opengraph-image/,
	);

	const jsonLdText = await page.locator('script[type="application/ld+json"]').textContent();
	expect(jsonLdText).not.toBeNull();
	const graph = JSON.parse(jsonLdText ?? "{}")["@graph"];
	expect(graph.find((node: { "@type": string }) => node["@type"] === "WebSite")).toMatchObject({
		name: "Gaurav Joshi",
		alternateName: "Gaurav Joshi's Portfolio",
		url: "https://gaurav-joshi.vercel.app/",
	});
	expect(graph.find((node: { "@type": string }) => node["@type"] === "Person")).toMatchObject({
		name: "Gaurav Joshi",
		jobTitle: "Senior Software Developer",
		url: "https://gaurav-joshi.vercel.app/",
	});

	const robots = await page.request.get("/robots.txt");
	expect(await robots.text()).toContain(
		"Sitemap: https://gaurav-joshi.vercel.app/sitemap.xml",
	);
	const sitemap = await page.request.get("/sitemap.xml");
	expect(await sitemap.text()).toContain("https://gaurav-joshi.vercel.app/");
	const socialImage = await page.request.get("/opengraph-image");
	expect(socialImage.ok()).toBeTruthy();
	expect(socialImage.headers()["content-type"]).toContain("image/png");
});

test("a project detail page renders its project title", async ({ page }) => {
	await page.goto("/work/clerisy");

	await expect(
		page.getByRole("heading", { level: 1, name: "Clerisy" }),
	).toBeVisible();
	await expect(page).toHaveTitle("Clerisy | Gaurav Joshi");
	await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
		"href",
		"https://gaurav-joshi.vercel.app/work/clerisy",
	);
	await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute(
		"content",
		"Clerisy | Gaurav Joshi",
	);
	await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute(
		"content",
		/AI project meeting intelligence/,
	);
	await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
});

test("contact form reports validation errors for empty required fields", async ({ page }) => {
	await page.goto("/");

	const contactForm = page.getByRole("form", { name: "Contact form" });
	await contactForm.getByRole("button", { name: "Send message" }).click();

	await expect(contactForm.locator("#ct-name-err")).toHaveText("Please add your name.");
	await expect(contactForm.locator("#ct-email-err")).toHaveText(
		"Enter a valid email address.",
	);
	await expect(contactForm.locator("#ct-msg-err")).toHaveText(
		"Tell me a little more (20+ characters).",
	);
});

test("contact form exposes the requested maximum lengths", async ({ page }) => {
	await page.goto("/");

	await expect(page.locator("#ct-name")).toHaveAttribute("maxlength", "120");
	await expect(page.locator("#ct-company")).toHaveAttribute("maxlength", "120");
	await expect(page.locator("#ct-email")).toHaveAttribute("maxlength", "254");
	await expect(page.locator("#ct-msg")).toHaveAttribute("maxlength", "1500");
});

test("contact form rejects over-limit values at submission", async ({ page }) => {
	await page.goto("/");

	await page.locator("#ct-name").evaluate((element) => {
		(element as HTMLInputElement).value = "N".repeat(121);
	});
	await page.locator("#ct-company").evaluate((element) => {
		(element as HTMLInputElement).value = "C".repeat(121);
	});
	await page.locator("#ct-email").evaluate((element) => {
		(element as HTMLInputElement).value = `${"a".repeat(243)}@example.com`;
	});
	await page.locator("#ct-msg").evaluate((element) => {
		(element as HTMLTextAreaElement).value = "M".repeat(1501);
	});

	const contactForm = page.getByRole("form", { name: "Contact form" });
	await contactForm.getByRole("button", { name: "Send message" }).click();

	await expect(contactForm.locator("#ct-name-err")).toHaveText(
		"Name must be 120 characters or fewer.",
	);
	await expect(contactForm.locator("#ct-company-err")).toHaveText(
		"Company must be 120 characters or fewer.",
	);
	await expect(contactForm.locator("#ct-email-err")).toHaveText(
		"Email must be 254 characters or fewer.",
	);
	await expect(contactForm.locator("#ct-msg-err")).toHaveText(
		"Message must be 1,500 characters or fewer.",
	);
});

test("theme toggle switches dark and light modes", async ({ page }) => {
	await page.goto("/");

	await page.getByRole("button", { name: "Switch to dark theme" }).click();
	await expect(page.locator("html")).toHaveClass(/dark/);
	expect(await page.evaluate(() => localStorage.getItem("gj-theme"))).toBe("dark");

	await page.getByRole("button", { name: "Switch to light theme" }).click();
	await expect(page.locator("html")).toHaveClass(/light/);
	expect(await page.evaluate(() => localStorage.getItem("gj-theme"))).toBe("light");
});

test("theme toggling still works when local storage is unavailable", async ({ page }) => {
	const pageErrors: string[] = [];
	page.on("pageerror", (error) => pageErrors.push(error.message));
	await page.addInitScript(() => {
		Object.defineProperty(window, "localStorage", {
			configurable: true,
			get() {
				throw new DOMException("Storage is blocked", "SecurityError");
			},
		});
	});
	await page.goto("/");

	await page.getByRole("button", { name: "Switch to dark theme" }).click();
	await expect(page.locator("html")).toHaveClass(/dark/);
	await page.getByRole("button", { name: "Switch to light theme" }).click();
	await expect(page.locator("html")).toHaveClass(/light/);
	expect(pageErrors).toEqual([]);
});

test("reduced motion uses instant scrolling for palette and route navigation", async ({ page }) => {
	await page.emulateMedia({ reducedMotion: "reduce" });
	await page.addInitScript(() => {
		const testWindow = window as unknown as {
			scrollBehaviors: (ScrollBehavior | undefined)[];
		};
		testWindow.scrollBehaviors = [];
		Element.prototype.scrollIntoView = function (options?: boolean | ScrollIntoViewOptions) {
			testWindow.scrollBehaviors.push(
				typeof options === "object" ? options.behavior : undefined,
			);
		};
	});
	await page.goto("/work/clerisy");

	await page.keyboard.press("Control+k");
	await page.getByRole("combobox", { name: "Search commands" }).fill("Go to Work");
	await page.getByRole("option", { name: /Go to Work/ }).click();
	await expect(page).toHaveURL(/#work$/);
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as {
						scrollBehaviors: (ScrollBehavior | undefined)[];
					}).scrollBehaviors,
			),
		)
		.toEqual(["auto"]);

	await page.keyboard.press("Control+k");
	await page.getByRole("combobox", { name: "Search commands" }).fill("Go to About");
	await page.getByRole("option", { name: /Go to About/ }).click();
	await expect
		.poll(() =>
			page.evaluate(
				() =>
					(window as unknown as {
						scrollBehaviors: (ScrollBehavior | undefined)[];
					}).scrollBehaviors,
			),
		)
		.toEqual(["auto", "auto"]);
});

test("the not-found page offers a working route home", async ({ page }) => {
	await page.goto("/this-route-does-not-exist");

	await expect(
		page.getByRole("heading", { level: 1, name: "Lost in the void?" }),
	).toBeVisible();
	await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
		"content",
		/noindex/,
	);
	await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
	await expect(page.locator('script[type="application/ld+json"]')).toHaveCount(0);
	await page.getByRole("link", { name: "Back Home" }).click();
	await expect(page).toHaveURL("http://127.0.0.1:3000/");
});
