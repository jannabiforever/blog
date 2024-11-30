const Post1: App.Post = {
	title: 'Post 1',
	content: 'This is the first post',
	createdAt: '2021-01-01',
	tags: ['first', 'post'],
	imageSource: null
};

export const getPosts: () => App.Post[] = () => [Post1];
