export async function getPost(id: number): Promise<App.Post | null> {
	const allPosts = await getAllPosts();
	return allPosts.find((post) => post.id === id) || null;
}

export async function getAllPosts(): Promise<App.Post[]> {
	return [
		{
			id: 1,
			title: 'The First Post',
			createdAt: new Date('2023-01-01'),
			category: 'Uncategorized',
			content: 'This is the content of the first post.'
		},
		{
			id: 2,
			title: 'The Second Post',
			createdAt: new Date('2023-01-02'),
			category: 'Uncategorized',
			content: 'This is the content of the second post.'
		}
	];
}
