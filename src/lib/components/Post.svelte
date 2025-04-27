<script lang="ts">
	const { post }: { post: App.Post } = $props();
</script>

<h1 class="h1">{post.title}</h1>
<p class="opacity-60">{post.createdAt.toLocaleDateString()}</p>
<!--eslint-disable-next-line svelte/no-at-html-tags-->
{@html post.content}
