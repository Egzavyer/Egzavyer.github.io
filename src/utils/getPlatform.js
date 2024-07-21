const logos = [
	{ platform: "macos", logo: "/assets/Platforms/apple.png" },
	{ platform: "windows", logo: "/assets/Platforms/windows.png" },
	{ platform: "web", logo: "/assets/Platforms/web.png" },
	{ platform: "playstation", logo: "/assets/Platforms/psx.png" },
	{ platform: "xbox", logo: "/assets/Platforms/xbox.png" },
	{ platform: "switch", logo: "/assets/Platforms/switch.svg" },
];

export function getPlatform(platform) {
	const logo = logos.find((logo) => logo.platform === platform.toLowerCase());
	return logo ? logo.logo : "gamepad";
}

export default getPlatform;
