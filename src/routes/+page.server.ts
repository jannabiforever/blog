import { getAllPostMetadatum } from '$lib/post';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	return {
		allPosts: getAllPostMetadatum()
	};
};
