<script lang="ts">
	let { post }: { post: App.Post } = $props();
</script>

<div class="main-container">
	<h1>{post.title}</h1>
	<p>{post.createdAt}</p>
	<p>{post.content}</p>
</div>
