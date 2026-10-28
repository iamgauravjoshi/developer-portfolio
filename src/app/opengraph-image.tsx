import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role} portfolio`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100%",
				height: "100%",
				padding: 64,
				color: "#241d33",
				backgroundColor: "#ffffff",
				backgroundImage:
					"radial-gradient(circle at 100% 0%, rgba(124, 58, 237, 0.16), transparent 42%), linear-gradient(135deg, #ffffff 0%, #faf8ff 100%)",
				fontFamily: "Arial, sans-serif",
			}}
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: 54,
						height: 54,
						borderRadius: 27,
						background: "linear-gradient(180deg, #a78bfa 0%, #7c3aed 100%)",
						color: "#ffffff",
						fontSize: 20,
						fontWeight: 700,
					}}
				>
					GJ
				</div>
				<div style={{ display: "flex", flexDirection: "column", marginLeft: 16 }}>
					<div style={{ fontSize: 25, fontWeight: 700 }}>{profile.name}</div>
					<div style={{ color: "#6d28d9", fontSize: 13, letterSpacing: 3 }}>
						DEVELOPER PORTFOLIO
					</div>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					flex: 1,
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						color: "#6d28d9",
						fontSize: 22,
						fontWeight: 600,
					}}
				>
					{profile.role} · {profile.location}
				</div>
				<div
					style={{
						marginTop: 20,
						fontSize: 64,
						fontWeight: 700,
						letterSpacing: -2,
						lineHeight: 1.1,
					}}
				>
					Building reliable web products.
				</div>
				<div style={{ marginTop: 20, color: "#5d5470", fontSize: 25 }}>
					React · TypeScript · Next.js · Node.js
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					borderTop: "1px solid rgba(36, 29, 51, 0.14)",
					paddingTop: 20,
					color: "#5d5470",
					fontSize: 16,
				}}
			>
				<span>{profile.name}</span>
				<span>Jaipur, India</span>
			</div>
		</div>,
		size,
	);
}
