<script lang="ts">
	const {
		imgSrc,
		postCategory,
		title,
		content,
		dateString
	}: { imgSrc: string; postCategory: string; title: string; content: string; dateString: string } =
		$props();
	const MAX_CONTENT_LENGTH = 252;
	let shortenedContent = content.slice(0, MAX_CONTENT_LENGTH) + '...';
</script>

<a
	href="/"
	class="card preset-filled-surface-100-900 border-surface-200-800 card-hover divide-surface-200-800 block max-w-md divide-y overflow-hidden border-[1px]"
>
	<header>
		<img src={imgSrc} class="aspect-[21/9] grayscale hue-rotate-90" alt="banner" />
	</header>
	<article class="space-y-4 p-4">
		<div>
			<h2 class="h6">{postCategory}</h2>
			<h3 class="h3">{title}</h3>
		</div>
		<p class="opacity-60">
			{shortenedContent}
		</p>
	</article>
	<footer class="flex items-center justify-between gap-4 p-4">
		<small class="opacity-60">By Jungin</small>
		<small class="opacity-60">On {dateString}</small>
	</footer>
</a>
