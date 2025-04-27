import { getPostMetadata } from '$lib/getPost';
import type { LayoutLoad } from './$types';

const id = 1;

export const load: LayoutLoad = async () => {
	const postMetadata = await getPostMetadata(id);

	return {
		postMetadata
	};
};
