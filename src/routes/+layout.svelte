<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="bg-black">
	{@render children()}
</main>
