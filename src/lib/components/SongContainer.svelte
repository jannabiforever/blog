<script lang="ts">
	import { formatContents } from '$lib/util';
	let { song }: { song: App.Song } = $props();

	let hasImage = song.imageSource !== null;
</script>

<div class="main-container">
	<div class="text-area">
		<div class="title">
			<h2>
				<a href="/posts/{song.title}">
					{song.title}
				</a>
			</h2>
		</div>
		<div class="content">
			<p>{formatContents(song.description)}</p>
		</div>
	</div>
	<div class="img-area">
		{#if hasImage}
			<img src={song.imageSource} alt={song.title} />
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
