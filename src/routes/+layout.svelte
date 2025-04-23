<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto my-24 flex max-w-2xl flex-col gap-16 px-4">
	{@render children()}
</main>

<header class="fixed top-0 right-0 left-0 flex items-center justify-between bg-gray-900 p-4">
	<a class="text-3xl no-underline" href="/">Jungin's Dev Blog</a>
</header>

<footer class="mt-10">
	<div class="flex justify-center">
		<p class="text-center text-sm text-gray-500">© 2025 Jungin's Dev Blog. All rights reserved.</p>
	</div>
</footer>
