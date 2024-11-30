<script lang="ts">
	import SongContainer from '$lib/components/SongContainer.svelte';
	import { getSongs } from '$lib/getSongs';
	import { onMount } from 'svelte';

	let songs: App.Song[] = $state([]);
	onMount(() => {
		songs = getSongs();
	});
</script>

{#each songs as song}
	<SongContainer {song} />
{/each}
