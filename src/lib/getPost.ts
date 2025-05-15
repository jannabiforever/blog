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
			title: '검색 엔진 - MeiliSearch 코드 베이스 탐구하기',
			createdAt: new Date('2025-04-29'),
			category: ['DB', 'Search Engine', 'Rust'],
			imgSrc: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg'
		},
		{
			id: 2,
			title: 'SurrealDB as BaaS',
			createdAt: new Date('2024-05-01'),
			category: ['DB', 'BaaS', 'Rust'],
			imgSrc:
				'https://repository-images.githubusercontent.com/436658287/48975688-cf92-4b36-9fe1-fbe0a492a74b'
		},
		{
			id: 3,
			title: 'Ugly Programming Language',
			createdAt: new Date('2024-05-02'),
			category: ['Java', 'Javascript', 'Rust'],
			imgSrc:
				'https://cdn.prod.website-files.com/60c9c0b391375d23f6b0931f/6400750989805400b1ab8688_Are%20There%20Ugly%20Languages%20MI.png'
		}
	];
}
