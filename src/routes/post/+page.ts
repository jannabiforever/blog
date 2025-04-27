import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { getPost } from '$lib/getPost';

export const load: PageLoad = async ({ url }) => {
	const postId = url.searchParams.get('id');
	if (!postId) {
		return redirect(303, '/');
	} else {
		const post = await getPost(Number(postId));
		return {
			post
		};
	}
};
