<script lang="ts">
	let { children } = $props();
</script>

<div class="prose dark:prose-invert">
	{#if children}
		{@render children()}
	{/if}
</div>
