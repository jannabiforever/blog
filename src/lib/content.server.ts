import fs from 'fs';
import path from 'path';

export function getPostSourceById(id: string): string | null {
	try {
		const fullPath = path.resolve('src/lib/posts', `${id}.md`);
		const source = fs.readFileSync(fullPath, 'utf-8');
		return source;
	} catch (err) {
		console.log(err instanceof Error ? err.message : String(err));
		return null;
	}
}
