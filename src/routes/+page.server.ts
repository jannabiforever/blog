import { getAllPostMetadatum } from '$lib/post.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		allPosts: await getAllPostMetadatum()
	};
};
