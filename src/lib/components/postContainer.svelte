<script lang="ts">
	import { formatContents } from '$lib/util';
	let { post }: { post: App.Post } = $props();

	let hasImage = post.imageSource !== null;
</script>

<div class="main-container">
	<div class="text-area">
		<div class="title">
			<h2>
				<a href="/posts/{post.title}">
					{post.title}
					<p>{post.createdAt}</p>
				</a>
			</h2>
		</div>
		<div class="content">
			<p>{formatContents(post.content)}</p>
		</div>
	</div>
	<div class="img-area">
		{#if hasImage}
			<img src={post.imageSource} alt={post.title} />
		{/if}
	</div>
</div>

<style>
	.main-container {
		display: flex;

		margin-bottom: 2rem;
	}

	.text-area {
		width: 70%;
	}

	.title h2 a {
		display: flex;
		gap: 1rem;

		text-decoration: none;
	}

	.title p {
		align-content: end;
	}

	.content {
		margin-top: 1rem;
	}

	.content p {
		text-indent: 1em;
	}

	.img-area {
		width: 30%;
	}

	.img-area img {
		width: 100%;
		height: auto;
	}
</style>
