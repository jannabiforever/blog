import { getPostMetadata } from '$lib/post.server';
import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ url }) => {
	try {
		const id = Number(url.pathname.split('/').reverse().at(0));
		if (!id) {
			throw Error('unreachable');
		}

		const postMetadata: App.PostMetadata | null = await getPostMetadata(id);

		return {
			postMetadata
		};
	} catch (err) {
		console.error(err);
		return redirect(303, '/');
	}
};
