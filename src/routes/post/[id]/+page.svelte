<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import { getPost } from '$lib/getPost';

	const post: App.Post | null = getPost(1);
</script>

{#if post}
	<Post {post} />
{:else}
	<h1>Post not found</h1>
{/if}
