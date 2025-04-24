<script lang="ts">
	import Card from '$lib/components/Card.svelte';

	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

	const content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident eveniet
	eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam iure molestias
	cum expedita architecto itaque quae rem`;
</script>

<Card
	{imgSrc}
	postCategory="Post about Rust"
	title="Skeleton is Awesome"
	{content}
	dateString={new Date().toLocaleDateString()}
/>
