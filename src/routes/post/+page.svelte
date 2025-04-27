<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#if data.post}
	<Post post={data.post} />
{:else}
	<h1 class="h1">Post not found</h1>
{/if}
