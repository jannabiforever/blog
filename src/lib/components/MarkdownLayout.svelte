<script lang="ts">
	const { children } = $props();
</script>

<section class="flex w-3/5">
	<div>{@render children()}</div>
</section>
