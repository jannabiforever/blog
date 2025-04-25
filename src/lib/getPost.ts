export function getPost(id: number): App.Post | null {
	if (id === 1) {
		return {
			id: 1,
			title: 'First Post',
			content: '<p>This is the first post.</p>',
			createdAt: new Date('2023-01-01')
		};
	}
	return null;
}
