<script lang="ts">
	import { TriangleAlert } from '@lucide/svelte';
	let { children } = $props();
</script>

<div class="card preset-tonal-warning mb-12 flex w-full items-center justify-between space-x-3 p-4">
	<TriangleAlert size={36} />
	{@render children()}
</div>
