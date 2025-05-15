import adapter from '@sveltejs/adapter-netlify';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvexConfig } from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [mdsvex(mdsvexConfig), vitePreprocess()],

	kit: {
		adapter: adapter({
			edge: false,
			split: false
		})
	}
};

export default config;
