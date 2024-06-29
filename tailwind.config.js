/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{jsx,js,ts,tsx}"],
	theme: {
		fontFamily: {
			display: ["Jockey One", "sans-serif"],
			body: ["Istok Web", "sans-serif"],
		},
		extend: {
			colors: {
				primary: "#011627",
				secondary: "#454545",
				text: "#F6F7F8",
			},
		},
	},
	plugins: [],
};
