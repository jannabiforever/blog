import { fail } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const postId = params.id;
	if (!postId) {
		fail(404);
	}
	const post = await import(`../${postId}.md`);
	const { title, date } = post.metadata;

	return {
		title,
		date,
		content: post.default
	};
};
