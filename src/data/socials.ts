import type { Social } from "../types";
import { profile } from "./profile";

export const socials: Social[] = [
	{ label: "Email", href: `mailto:${profile.email}`, handle: profile.email },
	{ label: "GitHub", href: profile.github, handle: "@iamgauravjoshi" },
	{ label: "LinkedIn", href: profile.linkedin, handle: "in/iamgauravjoshi" },
	{ label: "Twitter / X", href: profile.twitter, handle: "@iamgauravjoshi" },
];

export const navLinks = [
	{ label: "Home", href: "#top" },
	{ label: "About", href: "#about" },
	{ label: "Experience", href: "#experience" },
	{ label: "Work", href: "#work" },
	{ label: "Skills", href: "#skills" },
];
