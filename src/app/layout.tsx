import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme";
import SiteChrome from "@/components/SiteChrome";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import { profile } from "@/data/profile";
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

const SITE_TITLE = `${profile.name} | ${profile.role} in ${profile.location.split(',')[0]}`;
const SOCIAL_IMAGE = `${profile.siteUrl}opengraph-image`;
const SITE_DESCRIPTION = `${profile.name} is a ${profile.role} in ${profile.location}, building full-stack web products with React, TypeScript, Next.js, and Node.js. Explore his work and experience.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: SITE_TITLE,
    template: `%s | ${profile.name}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: profile.name }],
  openGraph: {
    type: "website",
    siteName: profile.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    images: [{
      url: SOCIAL_IMAGE,
      width: 1200,
      height: 630,
      alt: `${profile.name} — ${profile.role}`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SOCIAL_IMAGE],
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* External src (not inline): valid hoistable script, runs before hydration — no theme flash. */}
        <Script id="gj-theme" src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body className={`${sans.variable} ${display.variable} ${serif.variable} ${mono.variable}`}>
        <ThemeProvider>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
