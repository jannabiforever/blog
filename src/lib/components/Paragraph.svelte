<script lang="ts">
	let { children } = $props();
</script>

<p class="pb-4 text-justify text-sm">
	{@render children()}
</p>
