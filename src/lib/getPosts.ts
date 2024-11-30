const Post1: App.Post = {
	title: 'Post 1',
	content: ['This is the first post.'],
	createdAt: '2024-11-30',
	tags: ['first', 'post'],
	imageSource: "https://image.yes24.com/goods/102946682/XL"
};

const Post2: App.Post = {
	title: 'Post 2',
	content: ['This is the second post.'],
	createdAt: '2024-11-30',
	tags: ['second', 'post'],
	imageSource: null
};

export const getPosts: () => App.Post[] = () => [Post1, Post2];
