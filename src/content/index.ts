import { initFontManager } from "@/utils/FontManager";
import { injectRTLStyles, initSmartInput } from "@/utils/RTLManager";
import { SITE_CONFIG } from "@/constants/siteConfig";

initFontManager();

const siteConfig = SITE_CONFIG[location.hostname];

if (siteConfig) {
	injectRTLStyles(siteConfig.messageCSS);
	initSmartInput(siteConfig.inputAdapter);
}
