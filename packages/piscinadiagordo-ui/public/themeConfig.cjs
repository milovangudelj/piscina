const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

const withOpacity = (variableName) => {
	return ({ opacityValue }) => {
		if (opacityValue !== undefined) {
			return `rgba(var(${variableName}), ${opacityValue})`;
		}
		return `rgb(var(${variableName}))`;
	};
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				karla: ["var(--karla-font)", ...defaultTheme.fontFamily.sans],
				montserrat: [
					"var(--montserrat-font)",
					...defaultTheme.fontFamily.sans,
				],
			},
			letterSpacing: {
				button: "1.13px",
			},
			fontSize: {
				overline: ["9.22px", { lineHeight: "1.3" }],
				h1: ["54.94px", { lineHeight: "1.3" }],
				"h1-mobile": ["43.95px", { lineHeight: "1.3" }],
				h2: ["43.95px", { lineHeight: "1.3" }],
				"h2-mobile": ["35.16px", { lineHeight: "1.3" }],
				h3: ["35.16px", { lineHeight: "1.3" }],
				"h3-mobile": ["28.13px", { lineHeight: "1.3" }],
				h4: ["28.13px", { lineHeight: "1.3" }],
				"h4-mobile": ["22.5px", { lineHeight: "1.3" }],
				h5: ["22.5px", { lineHeight: "1.3" }],
				"h5-mobile": ["20px", { lineHeight: "1.3" }],
				subtitle: ["20px", { lineHeight: "1.6" }],
				"subtitle-mobile": ["18px", { lineHeight: "1.6" }],
				base: ["18px", { lineHeight: "1.8" }],
				"base-sm": ["16px", { lineHeight: "1.8" }],
				"base-xs": ["14px", { lineHeight: "1.8" }],
				button: ["18px", { lineHeight: "24px" }],
				"button-sm": ["16px", { lineHeight: "20px" }],
				"button-xs": ["14px", { lineHeight: "16px" }],
				nav: ["16px", { lineHeight: "1.6" }],
				caption: ["11.52px", { lineHeight: "1.3" }],
			},
			colors: {
				primary: {
					50: "#F0F9FF",
					100: "#E0F3FF",
					200: "#C0E7FC",
					300: "#7DD2FA",
					400: "#49BAF2",
					500: "#36A9E1",
					600: "#2489BF",
					700: "#1F6C99",
					800: "#1D5B7D",
					900: "#1E4B66",
				},
				secondary: {
					50: "#FFF9F0",
					100: "#FFF3E0",
					200: "#FCE4C0",
					300: "#FAC87D",
					400: "#F3AF49",
					500: "#F39200",
					600: "#E08700",
					700: "#C77700",
					800: "#AF6900",
					900: "#925700",
				},
				success: {
					50: "#ECFDF5",
					100: "#D1FAE5",
					200: "#A7F3D0",
					300: "#6EE7B7",
					400: "#34D399",
					500: "#10B981",
					600: "#059669",
					700: "#047857",
					800: "#065F46",
					900: "#064E3B",
				},
				error: {
					50: "#FEF2F2",
					100: "#FEE2E2",
					200: "#FECACA",
					300: "#FCA5A5",
					400: "#F87171",
					500: "#EF4444",
					600: "#DC2626",
					700: "#B91C1C",
					800: "#991B1B",
					900: "#7F1D1D",
				},
				gray: {
					50: "#FAFAFA",
					100: "#F4F4F5",
					200: "#E4E4E7",
					300: "#D4D4D8",
					400: "#A1A1AA",
					500: "#71717A",
					600: "#52525B",
					700: "#3F3F46",
					800: "#27272A",
					900: "#18181B",
				},
				dark: {
					he: "rgba(0, 0, 0, .87)",
					me: "rgba(0, 0, 0, .6)",
					le: "rgba(0, 0, 0, .38)",
				},
				light: {
					he: "rgba(255, 255, 255, 1)",
					me: "rgba(255, 255, 255, .74)",
					le: "rgba(255, 255, 255, .38)",
				},
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		plugin(function ({ addVariant }) {
			addVariant(
				"supports-bfilter",
				"@supports (backdrop-filter: blur(5px))"
			);
		}),
	],
};
