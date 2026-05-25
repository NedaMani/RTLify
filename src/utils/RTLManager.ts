export const RTL_STYLE_ID = "rtl-direction-style";

function isRTLChar(char: string) {
	return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF]/.test(char);
}

function isLTRChar(char: string) {
	return /[A-Za-z]/.test(char);
}

export function detectDirection(text: string): "rtl" | "ltr" {
	for (const char of text.trim()) {
		if (isLTRChar(char)) return "ltr";
		if (isRTLChar(char)) return "rtl";
	}
	return "ltr";
}

export function injectRTLStyles(css: string) {
	if (document.getElementById(RTL_STYLE_ID)) return;

	const style = document.createElement("style");
	style.id = RTL_STYLE_ID;
	style.textContent = css;
	document.head.appendChild(style);
}

export type InputAdapter = {
	selector: string;
	getText: (el: Element) => string;
	setDirection: (el: HTMLElement, dir: "rtl" | "ltr") => void;
};

function applySmartDirection(el: HTMLElement, adapter: InputAdapter) {
	const dir = detectDirection(adapter.getText(el));
	adapter.setDirection(el, dir);
}

export function initSmartInput(adapter: InputAdapter) {
	const attach = (el: HTMLElement) => {
		applySmartDirection(el, adapter);

		const handler = () => applySmartDirection(el, adapter);

		el.addEventListener("input", handler);
		el.addEventListener("keyup", handler);
		el.addEventListener("paste", () => setTimeout(handler, 0));
	};

	const scan = () => {
		const el = document.querySelector(adapter.selector) as HTMLElement | null;

		if (el && !el.dataset.rtlInit) {
			el.dataset.rtlInit = "true";
			attach(el);
		}
	};

	scan();
	setInterval(scan, 500);
}

export function removeRTLStyles() {
	document.getElementById(RTL_STYLE_ID)?.remove();
}
