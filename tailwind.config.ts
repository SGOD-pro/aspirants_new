import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"theme-primary": {
					DEFAULT: "#6D28D9", // Main color
					light: "#BD9AF4", // Lighter version
				},
				"theme-secondary": {
					DEFAULT: "#5A0AD8", // Main secondary color
					light: "#B789FF", // Lighter version
				},
			},
			fontFamily: {
				lexend: ["var(--font-lexend)", "monospace"],
				kodchasan: ["Kodchasan", "sans-serif"],
			},
		},
	},
	plugins: [],
} satisfies Config;
