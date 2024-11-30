<script lang="ts">
	let { song }: { song: App.Song } = $props();
</script>

<div class="main-container">
	<h1>{song.title}</h1>
	<p>{song.description}</p>

	{#if song.imageSource != null}
		<img src={song.imageSource} alt={song.title} />
	{/if}
</div>

<style>
	.main-container img {
		width: 30%;
		height: auto;
	}
</style>
