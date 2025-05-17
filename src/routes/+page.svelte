<script>
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();
</script>

<div class="container grid w-11/12 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
	{#each data.allPosts.entries() as [id, postMetadata] (id)}
		<Card {postMetadata} />
	{/each}
</div>
