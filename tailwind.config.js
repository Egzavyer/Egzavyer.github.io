/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
	content: ["./public/src/**/*.{jsx,js,ts,tsx}"],
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
});
