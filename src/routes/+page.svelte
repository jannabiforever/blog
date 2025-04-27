<script>
	import Card from '$lib/components/Card.svelte';

	let { data } = $props();
</script>

<div class="container grid w-3/4 grid-cols-3 gap-8">
	{#each data.allPosts.entries() as [id, postMetadata] (id)}
		<Card {postMetadata} />
	{/each}
</div>
