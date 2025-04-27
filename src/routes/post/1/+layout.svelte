<script lang="ts">
	import PostContainer from '$lib/components/PostContainer.svelte';

	let { data, children } = $props();
</script>

<div>
	{#if data}
		<PostContainer postMetadata={data.postMetadata}>
			{@render children()}
		</PostContainer>
	{:else}
		<h1 class="h1">Post not found</h1>
	{/if}
</div>
