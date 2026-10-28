import { socials } from "@/data/socials";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";

export default function Footer() {
	return (
		<footer className="border-t" style={{ borderColor: "var(--border)" }}>
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-5 md:px-8">
				<Link
					href="/#top"
					aria-label="Gaurav Joshi — home"
					className="font-display shrink-0 whitespace-nowrap text-(--accent) font-semibold transition-colors md:text-lg"
				>
					Gaurav Joshi
				</Link>
				<nav aria-label="Social links">
					<ul className="flex items-center gap-1 sm:gap-2.5">
						{socials.map((social) => (
							<li key={social.label}>
								<a
									href={social.href}
									target={
										social.href.startsWith("mailto:") ? undefined : "_blank"
									}
									rel={
										social.href.startsWith("mailto:") ? undefined : "noreferrer"
									}
									aria-label={social.label}
									title={social.label}
									className="flex h-8 w-8 items-center justify-center rounded-full border bg-[var(--surface)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-110 focus-visible:-translate-y-1 focus-visible:scale-110 sm:h-9 sm:w-9"
									style={{
										borderColor: "var(--border)",
										color:
											social.label === "GitHub"
												? "var(--social-github)"
												: social.label === "LinkedIn"
													? "var(--social-linkedin)"
													: social.label === "Email"
														? "var(--social-email)"
														: "var(--social-x)",
									}}
								>
									{social.label === "GitHub" ? (
										<SiGithub className="h-4 w-4" aria-hidden="true" />
									) : null}
									{social.label === "LinkedIn" ? (
										<FaLinkedinIn className="h-4 w-4" aria-hidden="true" />
									) : null}
									{social.label === "Email" ? <MailIcon /> : null}
									{social.label === "Twitter / X" ? (
										<SiX className="h-4 w-4" aria-hidden="true" />
									) : null}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	);
}

function MailIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden
		>
			<rect width="20" height="16" x="2" y="4" rx="2" />
			<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
		</svg>
	);
}
