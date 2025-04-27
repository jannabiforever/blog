<script lang="ts">
	const { post }: { post: App.Post } = $props();
</script>

<h1 class="h1">{post.title}</h1>
<div class="flex justify-between pt-2 pb-2">
	<p class="opacity-60">{post.createdAt.toLocaleDateString()}</p>
	<p class="opacity-60">{post.category}</p>
</div>
<!--eslint-disable-next-line svelte/no-at-html-tags-->
{@html post.content}
