export async function getPostMetadata(id: number): Promise<App.PostMetadata | null> {
	const allPosts = await getAllPostMetadatum();
	return allPosts.find((post) => post.id === id) || null;
}

export async function getAllPostMetadatum(): Promise<App.PostMetadata[]> {
	return [
		{
			id: 1,
			title: 'The First Post',
			createdAt: new Date('2023-01-01'),
			category: 'Uncategorized',
			imgSrc:
				'https://machinelearningmastery.com/wp-content/uploads/2017/01/A-Gentle-Introduction-to-the-Random-Walk-for-Times-Series-Forecasting-with-Python.jpg'
		}
	];
}
