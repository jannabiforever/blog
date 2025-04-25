<script lang="ts">
	const { post }: { post: App.Post } = $props();
</script>

<h1 class="h1">{post.title}</h1>
<p class="opacity-60">{post.createdAt.toLocaleDateString()}</p>
{@html post.content}
