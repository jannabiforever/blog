import { defineMDSveXConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

const config = defineMDSveXConfig({
	extensions: ['.md', '.svx']
});

export default config;
