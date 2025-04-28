<script lang="ts">
	const { postMetadata }: { postMetadata: App.PostMetadata } = $props();
</script>

<div>
	<a
		href="/post/{postMetadata.id}"
		class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden border-[1px]"
	>
		<header class="aspect-[21/9] overflow-hidden">
			<img src={postMetadata.imgSrc} class="h-full w-full object-cover" alt="banner" />
		</header>
		<article class="space-y-4 p-4">
			<div>
				<h6 class="h6 anchor-font-color flex gap-2">
					{#each postMetadata.category.entries() as [i, category] (i)}
						<span class="inline">#{category}</span>
					{/each}
				</h6>
				<h3 class="h3">{postMetadata.title}</h3>
			</div>
		</article>
		<footer class="flex items-center justify-between gap-4 p-4">
			<small class="opacity-60">By Jungin</small>
			<small class="opacity-60">On {postMetadata.createdAt.toLocaleDateString()}</small>
		</footer>
	</a>
</div>
