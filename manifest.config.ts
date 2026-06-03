import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

export default function manifestFactory(browser: string) {
	const isFirefox = browser === "firefox";

	return defineManifest({
		manifest_version: 3,

		name: pkg.name,
		version: pkg.version,

		permissions: ["storage"],

		...(isFirefox && {
			browser_specific_settings: {
				gecko: {
					id: "rtl-chat@example.com",
					data_collection_permissions: {
						required: ["none"],
					},
				},
			},
		}),

		web_accessible_resources: [
			{
				resources: ["src/assets/fonts/*.woff2", "src/assets/fonts/*.ttf"],
				matches: [
					"*://chat.deepseek.com/*",
					"*://claude.ai/*",
					"*://chatgpt.com/*",
					"*://gemini.google.com/*",
					"*://notebooklm.google.com/*",
				],
			},
		],

		icons: {
			48: "public/logo-48.png",
			170: "public/logo-170.png",
		},

		action: {
			default_icon: {
				48: "public/logo-48.png",
				170: "public/logo-170.png",
			},
			default_popup: "src/popup/index.html",
		},

		content_scripts: [
			{
				matches: [
					"*://chat.deepseek.com/*",
					"*://claude.ai/*",
					"*://chatgpt.com/*",
					"*://gemini.google.com/*",
					"*://notebooklm.google.com/*",
				],
				js: ["src/content/index.ts"],
			},
		],
	});
}
