export async function getPostMetadata(id: number): Promise<App.PostMetadata | null> {
	const allPosts = await getAllPostMetadatum();

	if (allPosts.length < id) {
		return null;
	} else {
		return allPosts[id - 1];
	}
}

export async function getAllPostMetadatum(): Promise<App.PostMetadata[]> {
	return [
		{
			id: 1,
			title: '검색 엔진 인덱싱 - MeiliSearch 탐구하기',
			createdAt: new Date(),
			category: ['DB', 'Search Engine'],
			imgSrc: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
		}
	];
}
