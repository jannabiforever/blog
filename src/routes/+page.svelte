<script>
	import Card1 from '$lib/components/Card1.svelte';
</script>

<div class="container grid grid-cols-4 gap-8">
	{#each [1, 2, 3, 4, 5, 6, 7] as cardIdx (cardIdx)}
		<Card1 />
	{/each}
</div>
