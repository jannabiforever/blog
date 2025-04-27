import { getAllPosts } from '$lib/getPost';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	const allPosts = await getAllPosts();
	// sort posts by createdAt in descending order
	allPosts.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

	return {
		allPosts
	};
};
