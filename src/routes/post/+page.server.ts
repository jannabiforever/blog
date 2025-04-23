import type { PageServerLoad } from './$types';
import { getPostSourceById } from '$lib/content.server';
export const load: PageServerLoad = async ({ url }) => {
	const postId = url.searchParams.get('id');
	if (!postId) {
		return { found: false };
	}

	const source = getPostSourceById(postId);

	if (!source) {
		return { found: false };
	}

	return {
		found: true,
		source
	};
};
