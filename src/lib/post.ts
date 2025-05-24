import datajson from './data.json';

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

export function getAllPostMetadatum(): App.PostMetadata[] {
	if (!postMetaDatum) {
		const data: App.PostMetadata[] = [];
		datajson.forEach((pmj) => data.push(deserialize_post_metadata(pmj)));
		postMetaDatum = data;
		return data;
	}
	return postMetaDatum;
}

export function getPostMetadata(id: number): App.PostMetadata | null {
	const allPost = getAllPostMetadatum();
	return allPost.find((pm) => pm.id === id) ?? null;
}
