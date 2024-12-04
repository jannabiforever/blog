<script lang="ts">
	import { page } from '$app/stores';
	import { getSongByTitle } from '$lib/getSongs';

	let song = getSongByTitle($page.params.song_title);
	console.log(song);
</script>

{#if song}
	<h1>{song.title}</h1>
	<p>{song.description}</p>
{/if}

<style>
	h1 {
		margin-bottom: 2rem;
	}

	p {
		text-indent: 1em;
	}
</style>
