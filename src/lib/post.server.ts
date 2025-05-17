import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const postDataFilePath = join(__dirname, 'data.json');

interface PostMetadataJson {
	id: number;
	title: string;
	// should be Date, but JSON.parse doesn't do that for me.
	createdAt: string;
	category: string[];
	imgSrc: string;
}

function deserialize_post_metadata(pmj: PostMetadataJson): App.PostMetadata {
	return {
		id: pmj.id,
		title: pmj.title,
		createdAt: new Date(pmj.createdAt),
		category: pmj.category,
		imgSrc: pmj.imgSrc
	};
}

let postMetaDatum: App.PostMetadata[] | null = null;

export async function getAllPostMetadatum(): Promise<App.PostMetadata[]> {
	if (!postMetaDatum) {
		const data: App.PostMetadata[] = await readFile(postDataFilePath).then((f) => {
			const objectArray: PostMetadataJson[] = JSON.parse(f.toString());
			const data: App.PostMetadata[] = [];
			objectArray.forEach((pmj) => data.push(deserialize_post_metadata(pmj)));
			return data;
		});

		postMetaDatum = data;
		return data;
	}
	return postMetaDatum;
}
