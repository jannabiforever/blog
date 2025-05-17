import { defineMDSveXConfig } from 'mdsvex';
import { join } from 'node:path';
import { createHighlighter } from 'shiki';

const theme = 'github-dark';
const highlighter = await createHighlighter({
	themes: [theme],
	langs: ['javascript', 'typescript', 'rust', 'c', 'java']
});

/** @type {import(mdsvex).Config} */
export const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.svx'],
	layout: join(import.meta.dirname, 'src/lib/MDSveXLayout.svelte'),
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const html = highlighter.codeToHtml(code, { lang, theme });
			return `{@html \`${html}\` }`;
		}
	}
});
