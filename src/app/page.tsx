import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import Marquee from "@/components/sections/Marquee";
import Engineering from "@/components/sections/Engineering";
import Experience from "@/components/sections/Experience";
import Toolkit from "@/components/sections/Toolkit";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
	alternates: { canonical: "/" },
};

const JSON_LD = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${profile.siteUrl}#website`,
			url: profile.siteUrl,
			name: profile.name,
			alternateName: `${profile.name}'s Portfolio`,
			inLanguage: "en-IN",
		},
		{
			"@type": "Person",
			"@id": `${profile.siteUrl}#person`,
			name: profile.name,
			jobTitle: profile.role,
			url: profile.siteUrl,
			sameAs: [profile.github, profile.linkedin, profile.twitter],
			knowsAbout: ["Full-stack web development", "Frontend engineering", "React", "TypeScript", "Next.js", "Node.js", "REST API design"],
			mainEntityOfPage: { "@id": `${profile.siteUrl}#profile` },
		},
		{
			"@type": "ProfilePage",
			"@id": `${profile.siteUrl}#profile`,
			url: profile.siteUrl,
			name: `${profile.name} — Portfolio`,
			isPartOf: { "@id": `${profile.siteUrl}#website` },
			mainEntity: { "@id": `${profile.siteUrl}#person` },
		},
	],
};

export default function Home() {
	return (
		<main id="main">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(JSON_LD).replace(/</g, "\\u003c"),
				}}
			/>
			<Hero />
			<Marquee />
			<About />
			<Experience />
			<Engineering />
			<Toolkit />
			<Contact />
		</main>
	);
}
