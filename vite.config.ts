import path from "node:path";
import { crx } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import zip from "vite-plugin-zip-pack";

import manifestFactory from "./manifest.config.js";
import { name, version } from "./package.json";

export default defineConfig(() => {
	const browser = process.env.VITE_BROWSER ?? "chrome";

	return {
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},

		plugins: [
			react(),
			tailwindcss(),
			crx({ manifest: manifestFactory(browser) }),

			zip({
				outDir: "release",
				outFileName: `${browser}-${name}-${version}.zip`,
			}),
		],
	};
});
