<script lang="ts">
	import PostContainer from '$lib/components/PostContainer.svelte';
	import { getPosts } from '$lib/getPosts';
	import { onMount } from 'svelte';

	let posts: App.Post[] = $state([]);
	onMount(() => {
		posts = getPosts();
	});
</script>

{#each posts as post}
	<PostContainer {post} />
{/each}
