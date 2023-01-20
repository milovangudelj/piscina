/** @type {import('tailwindcss').Config} */
module.exports = {
	presets: [require("@piscinadiagordo/ui/dist/themeConfig")],
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
