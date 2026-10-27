import Hero from "@/components/hero/Hero";
import Marquee from "@/components/sections/Marquee";
import Engineering from "@/components/sections/Engineering";
import Experience from "@/components/sections/Experience";
import Toolkit from "@/components/sections/Toolkit";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
	return (
		<main id="main">
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
