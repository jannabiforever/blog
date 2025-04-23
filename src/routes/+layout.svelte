<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="flex h-full justify-center">
	<div class="h-full w-2/3 bg-violet-500">
		{@render children()}
	</div>
</main>
