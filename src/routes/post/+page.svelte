<script lang="ts">
	import PostContainer from '$lib/components/PostContainer.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#if data.postMetadata}
	<PostContainer postMetadata={data.postMetadata}>
		<p>Post content goes here.</p>
	</PostContainer>
{:else}
	<h1 class="h1">Post not found</h1>
{/if}
