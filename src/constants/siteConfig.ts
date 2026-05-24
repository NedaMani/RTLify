import type { InputAdapter } from "@/utils/RTLManager";

interface SiteRTLConfig {
	messageCSS: string;
	inputAdapter: InputAdapter;
}

const setDirection = (el: HTMLElement, dir: "rtl" | "ltr") => {
	el.style.direction = dir;
	el.style.textAlign = dir === "rtl" ? "right" : "left";
};

export const SITE_CONFIG: Record<string, SiteRTLConfig> = {
	"chat.deepseek.com": {
		messageCSS: `
      .ds-markdown.ds-assistant-message-main-content {
        direction: rtl !important;
      }
      .ds-message .md-code-block,
      .ds-message pre,
      .ds-message code,
      .ds-message .katex,
      .ds-message .katex-display,
      .ds-message .katex-html,
      .ds-message .katex-mathml {
        direction: ltr !important;
      }
    `,
		inputAdapter: {
			selector: 'textarea[placeholder="Message DeepSeek"]',
			getText: (el) => (el as HTMLTextAreaElement).value,
			setDirection,
		},
	},

	"claude.ai": {
		messageCSS: `
      .standard-markdown p,
      .standard-markdown li,
      .standard-markdown blockquote,
      .standard-markdown td,
      .standard-markdown th,
      .standard-markdown h1, .standard-markdown h2,
      .standard-markdown h3, .standard-markdown h4,
      .standard-markdown h5, .standard-markdown h6,
      .progressive-markdown p,
      .progressive-markdown li,
      .progressive-markdown blockquote,
      .progressive-markdown h1, .progressive-markdown h2,
      .progressive-markdown h3, .progressive-markdown h4,
      .progressive-markdown h5, .progressive-markdown h6 {
        direction: rtl !important;
      }

      .font-claude-response pre,
      .font-claude-response code,
      .font-claude-response .katex,
      .font-claude-response .katex-display,
      .font-claude-response .katex-html,
      .font-claude-response .katex-mathml {
        direction: ltr !important;
      }
    `,
		inputAdapter: {
			selector: '.tiptap.ProseMirror[contenteditable="true"]',
			getText: (el) => el.textContent ?? "",
			setDirection,
		},
	},
};
