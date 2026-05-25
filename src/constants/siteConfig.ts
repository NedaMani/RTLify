import type { InputAdapter } from "@/utils/RTLManager";

type SiteRTLConfig = {
	messageCSS: string;
	inputAdapter: InputAdapter;
};

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

	"chatgpt.com": {
		messageCSS: `
      .markdown.prose p,
      .markdown.prose li,
      .markdown.prose blockquote,
      .markdown.prose td,
      .markdown.prose th,
      .markdown.prose h1, .markdown.prose h2,
      .markdown.prose h3, .markdown.prose h4,
      .markdown.prose h5, .markdown.prose h6 {
        direction: rtl !important;
      }

      .markdown.prose pre,
      .markdown.prose code,
      .markdown.prose .katex,
      .markdown.prose .katex-display,
      .markdown.prose .katex-html,
      .markdown.prose .katex-mathml {
        direction: ltr !important;
      }
    `,
		inputAdapter: {
			selector: 'div.ProseMirror[contenteditable="true"]#prompt-textarea',
			getText: (el) => el.textContent ?? "",
			setDirection,
		},
	},

	"gemini.google.com": {
		messageCSS: `
      .markdown p,
			.markdown h2,
			.markdown h3,
			.markdown h4,
			.markdown li p,
			.markdown blockquote p {
				direction: rtl !important;
			}

			.markdown table th span,
			.markdown table td span {
				direction: rtl !important;
			}

			.markdown .code-container,
			.markdown code,
			.markdown pre {
				direction: ltr !important;
			}

			.markdown .math-block,
			.markdown .math-inline,
			.markdown .katex,
			.markdown .katex-html {
				direction: ltr !important;
			}
    `,
		inputAdapter: {
			selector: ".ql-editor.textarea",
			getText: (el) => el.textContent ?? "",
			setDirection,
		},
	},

	"notebooklm.google.com": {
		messageCSS: `
			.paragraph.normal,
			.paragraph.heading1,
			.paragraph.blockquote,
			.paragraph.list-item,
			.paragraph.table-paragraph {
				direction: rtl !important;
			}

			code-block-element-view pre,
			code-block-element-view code,
			.katex,
			.katex-html
			.code {
				direction: ltr !important;
			}

			.code {
				unicode-bidi: embed;
			}
    `,
		inputAdapter: {
			selector: "textarea.query-box-input",
			getText: (el) => el.textContent ?? "",
			setDirection,
		},
	},
};
