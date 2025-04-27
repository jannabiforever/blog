<script lang="ts">
	import type { Snippet } from 'svelte';

	const { postMetadata, children }: { postMetadata: App.PostMetadata; children: Snippet } =
		$props();
</script>

<h1 class="h1">{postMetadata.title}</h1>
<div class="flex justify-between pt-2 pb-2">
	<p class="opacity-60">{postMetadata.createdAt.toLocaleDateString()}</p>
	<p class="opacity-60">{postMetadata.category}</p>
</div>

{#if children}
	<article>
		{@render children()}
	</article>
{/if}
