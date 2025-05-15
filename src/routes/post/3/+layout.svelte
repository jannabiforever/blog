<script lang="ts">
	import PostContainer from '$lib/components/PostContainer.svelte';

	let { data, children } = $props();
</script>

<div class="container w-full md:w-1/2">
	{#if data.postMetadata}
		<PostContainer postMetadata={data.postMetadata}>
			{@render children()}
		</PostContainer>
	{:else}
		<h1 class="h1">Post not found</h1>
	{/if}
	<a
		href="/"
		class="card card-hover preset-filled-surface-100-900 mt-8 flex items-center justify-center p-3"
	>
		목록으로
	</a>
</div>
