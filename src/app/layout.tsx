import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import SiteChrome from "@/components/SiteChrome";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { validatePortfolioContent } from "@/data/validate";

validatePortfolioContent(projects, skillGroups);

const sans = Inter({ subsets: ["latin"], variable: "--next-sans", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--next-display", display: "swap" });
const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--next-serif",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--next-mono", display: "swap" });

const SITE_URL = "https://gaurav-joshi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gaurav Joshi — Senior Software Engineer | Full-Stack & Frontend Products",
    template: "%s — Gaurav Joshi",
  },
  description:
    "Gaurav Joshi is a Senior Software Engineer building reliable web products, polished interfaces, and systems that scale — professional engineering and independent projects.",
  authors: [{ name: "Gaurav Joshi" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Gaurav Joshi — Senior Software Engineer",
    title: "Gaurav Joshi — Senior Software Engineer",
    description:
      "Engineer who builds products, not just interfaces. Professional engineering and independent projects.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav Joshi — Senior Software Engineer",
    description:
      "Full-stack product engineering: React, TypeScript, Next.js, and Node.js. Professional experience and independent projects.",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Gaurav Joshi",
    jobTitle: "Senior Software Engineer",
    url: SITE_URL,
    sameAs: [
      "https://github.com/iamgauravjoshi",
      "http://www.linkedin.com/in/iamgauravjoshi",
      "https://x.com/iamgauravjoshi",
    ],
    knowsAbout: ["React", "TypeScript", "Next.js", "Node.js", "Full-Stack Development", "Frontend Architecture"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* External src (not inline): valid hoistable script, runs before hydration — no theme flash. */}
        <Script id="gj-theme" src="/theme-init.js" strategy="beforeInteractive" />
        {/* Non-executable data block: never runs, safe to render inline (Next.js JSON-LD pattern). */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
      </head>
      <body className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
