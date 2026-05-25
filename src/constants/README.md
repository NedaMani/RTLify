## Test Prompt

```
Please generate a response that includes ALL of the following elements in a single
answer:

1. A normal English paragraph
2. A Persian (Farsi) paragraph
3. A mixed Persian + English paragraph
4. A Markdown heading
5. A Markdown bullet list
6. A numbered list
7. A Markdown table
8. Inline code examples
9. A fenced code block with JavaScript
10. A fenced code block with Python
11. A blockquote
12. Bold and italic markdown
13. A LaTeX math formula
14. A long streaming-style explanation
15. A hyperlink
16. A JSON code block
17. A shell/bash code block
18. Nested markdown structures
19. Arabic text
20. Hebrew text Make the response large and complex enough to fully test rendering behavior in the
    UI.
```

## Discover Config

### 1. Discover messageCSS Prompt

```
I'm building a browser extension that applies RTL (right-to-left) direction
to AI chat responses for Persian/Arabic users.

Below is the raw HTML of a response from this chatbot.
Please analyze the CSS class names and structure, then write a CSS snippet that:

1. Sets `direction: rtl` and `text-align: right` on all **text-content elements**
   (paragraphs, list items, headings, blockquotes, table cells).
2. Keeps `direction: ltr` on **code blocks, inline code, and math (KaTeX)**
   so they don't break.
3. Uses only the class names you actually see in the HTML below.
4. Does NOT touch layout/wrapper elements — only leaf text nodes.

Return ONLY the raw CSS, no explanation.

HTML:
<rendered chatbot HTML>
```

### 2. Discover inputAdapter Prompt

```
I'm building a browser extension that detects the text direction of user input
in AI chatbots and applies RTL/LTR styling accordingly.

Below is the HTML of the input area of this chatbot.
Please give me a JavaScript `inputAdapter` object with this exact shape:

{
  selector: string,       // a CSS selector that uniquely targets the input element
  getText: (el) => string // a function that reads the current text from that element
}

Rules:
- `selector` must work with `document.querySelector`.
- `getText` should return the raw text content (no HTML).
- If it's a `<textarea>`, use `.value`.
- If it's a contenteditable `div`, use `.textContent ?? ""`.
- Do NOT add setDirection — that's handled separately.

Return ONLY a valid JavaScript object literal, no explanation, no surrounding code.

HTML:
<rendered input chatbot HTML>
```
