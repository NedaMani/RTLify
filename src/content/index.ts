import { initFontManager } from "@/utils/FontManager";
import { injectRTLStyles, initSmartInput, removeRTLStyles } from "@/utils/RTLManager";
import { SITE_CONFIG } from "@/constants/siteConfig";

initFontManager();

const host = location.hostname;
const siteConfig = SITE_CONFIG[host];

if (siteConfig) {
	chrome.storage.sync.get(["rtlEnabled"], (result) => {
		const enabled = typeof result.rtlEnabled === "boolean" ? result.rtlEnabled : true;

		if (enabled) {
			injectRTLStyles(siteConfig.messageCSS);
			initSmartInput(siteConfig.inputAdapter);
		}
	});

	chrome.storage.onChanged.addListener((changes) => {
		if (!("rtlEnabled" in changes)) return;

		if (changes.rtlEnabled.newValue) {
			injectRTLStyles(siteConfig.messageCSS);
			initSmartInput(siteConfig.inputAdapter);
		} else {
			removeRTLStyles();
		}
	});
}
