<script lang="ts">
	let { children } = $props();
</script>

<div class="mdsvex-container">
	{#if children}
		{@render children()}
	{/if}
</div>
