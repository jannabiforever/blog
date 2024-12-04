<script lang="ts">
	import { page } from '$app/stores';
	import { getPostByTitle } from '$lib/getPosts';

	let post: App.Post | undefined = getPostByTitle($page.params.post_title);
</script>

{#if post}
	<h1>{post.title}</h1>
	<p>{post.content}</p>
{/if}

<style>
	h1 {
		margin-bottom: 2rem;
	}

	p {
		text-indent: 1em;
	}
</style>
