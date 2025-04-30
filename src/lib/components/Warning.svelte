<script lang="ts">
	import { TriangleAlert } from '@lucide/svelte';
	let { children } = $props();
</script>

<div class="card preset-tonal-warning mb-12 flex w-full gap-8 p-4">
	<TriangleAlert size={24} />
	{@render children()}
</div>
