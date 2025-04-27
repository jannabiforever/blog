<script>
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();
	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
</script>

<div class="container grid grid-cols-4 gap-8">
	{#each data.allPosts.entries() as [id, post] (id)}
		<Card {imgSrc} {post} />
	{/each}
</div>
