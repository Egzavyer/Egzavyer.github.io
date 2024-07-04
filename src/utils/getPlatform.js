const logos = [
	{ platform: "macos", logo: "../src/assets/Platforms/apple.png" },
	{ platform: "windows", logo: "../src/assets/Platforms/windows.png" },
	{ platform: "web", logo: "../src/assets/Platforms/web.png" },
	{ platform: "ps4", logo: "../src/assets/Platforms/psx.png" },
	{ platform: "xbox", logo: "../src/assets/Platforms/xbox.png" },
	{ platform: "switch", logo: "../src/assets/Platforms/switch.svg" },
];

export function getPlatform(platform) {
	const logo = logos.find((logo) => logo.platform === platform.toLowerCase());
	return logo ? logo.logo : "gamepad";
}

export default getPlatform;
