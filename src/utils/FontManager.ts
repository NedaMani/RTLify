export const FONT_STYLE_ID = "rtl-font-style";

export const FONT_MAP: Record<string, string> = {
	Vazirmatn: `"Vazirmatn", system-ui, sans-serif`,
	Arad: `"Arad", system-ui, sans-serif`,
	Sahel: `"Sahel", system-ui, sans-serif`,
	Heebo: `"Heebo", system-ui, sans-serif`,
};

export function injectFonts() {
	if (!document.head) return;
	if (document.getElementById(FONT_STYLE_ID)) return;

	const style = document.createElement("style");
	style.id = FONT_STYLE_ID;

	style.textContent = `
    @font-face {
      font-family: "Vazirmatn";
      src: url("${chrome.runtime.getURL("src/assets/fonts/Vazirmatn.woff2")}") format("woff2");
      font-display: swap;
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: "Sahel";
      src: url("${chrome.runtime.getURL("src/assets/fonts/Sahel.woff2")}") format("woff2");
      font-display: swap;
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
    }
    @font-face {
      font-family: "Arad";
      src: url("${chrome.runtime.getURL("src/assets/fonts/Arad.woff2")}") format("woff2");
      font-display: swap;
      unicode-range: U+0600-06FF, U+0750-077F, U+08A0-08FF, U+FB50-FDFF, U+FE70-FEFF;
    }

    html.rtl-font-enabled *:not(pre):not(code):not(pre *):not(code *):not(svg):not(svg *):not(gem-icon):not(gem-icon *):not(mat-icon):not(mat-icon *):not(.mat-icon):not(.lumi-symbols):not(.mat-ligature-font):not(.material-symbols-outlined) {
      font-family: var(--rtl-chat-font), system-ui, sans-serif !important;
    }
  `;

	document.head.appendChild(style);
}

export function applyFont(font: string, enabled: boolean) {
	const root = document.documentElement;

	if (!enabled) {
		root.classList.remove("rtl-font-enabled");
		root.style.removeProperty("--rtl-chat-font");
		return;
	}

	root.style.setProperty("--rtl-chat-font", FONT_MAP[font] ?? `"${font}", sans-serif`);
	root.classList.add("rtl-font-enabled");
}

export function syncFromStorage() {
	chrome.storage.sync.get({ chatFontFamily: "Vazirmatn", chatFontEnabled: true }, (res) =>
		applyFont(res.chatFontFamily, res.chatFontEnabled),
	);
}

export function initFontManager() {
	injectFonts();
	syncFromStorage();

	chrome.storage.onChanged.addListener((changes, area) => {
		if (area !== "sync") return;
		if ("chatFontFamily" in changes || "chatFontEnabled" in changes) {
			syncFromStorage();
		}
	});
}
