<script lang="ts">
	import { marked } from 'marked';
	import type { PageProps } from './$types';
	import { onMount } from 'svelte';
	let { data }: PageProps = $props();

	onMount(() => {
		console.log(data);
	});
</script>

{#if data.found}
	{@html marked(data.source)}
{/if}
