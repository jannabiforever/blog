<script lang="ts">
	import type { Snippet } from 'svelte';

	const { postMetadata, children }: { postMetadata: App.PostMetadata; children: Snippet } =
		$props();
</script>

<h2 class="h2 max-w-3xl">{postMetadata.title}</h2>
<div class="container flex gap-8 pt-2 pb-8">
	<h4 class="h4 opacity-60">{postMetadata.createdAt.toLocaleDateString()}</h4>
	<h4 class="h4 flex gap-4 opacity-60">
		{#each postMetadata.category.entries() as [i, category] (i)}
			<span class="inline">#{category}</span>
		{/each}
	</h4>
</div>

{#if children}
	<article class="max-w-4xl">
		{@render children()}
	</article>
{/if}
