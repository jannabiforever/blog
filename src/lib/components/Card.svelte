<script lang="ts">
	const { post }: { post: App.PostMetadata } = $props();
</script>

<div>
	<a
		href="/post?id={post.id}"
		class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden border-[1px]"
	>
		<header class="aspect-[21/9] overflow-hidden">
			<img src={post.imgSrc} class="h-full w-full object-cover" alt="banner" />
		</header>
		<article class="space-y-4 p-4">
			<div>
				<h2 class="h6">{post.category}</h2>
				<h3 class="h3">{post.title}</h3>
			</div>
		</article>
		<footer class="flex items-center justify-between gap-4 p-4">
			<small class="opacity-60">By Jungin</small>
			<small class="opacity-60">On {post.createdAt.toLocaleDateString()}</small>
		</footer>
	</a>
</div>
