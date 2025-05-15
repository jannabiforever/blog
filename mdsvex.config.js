import { defineMDSveXConfig } from 'mdsvex';
import { join } from 'node:path';

/** @type {import(mdsvex).Config} */
export const mdsvexConfig = defineMDSveXConfig({
	extensions: ['.svx'],
	layout: join(import.meta.dirname, 'src/lib/MDSveXLayout.svelte')
});
