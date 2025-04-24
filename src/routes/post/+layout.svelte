<script lang="ts">
	import MarkdownLayout from '$lib/components/MarkdownLayout.svelte';

	let { children } = $props();
</script>

<MarkdownLayout>
	{@render children()}
</MarkdownLayout>
