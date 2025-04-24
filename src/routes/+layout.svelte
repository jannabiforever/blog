<script lang="ts">
	import '../app.css';
	import { Github, Instagram } from '@lucide/svelte';

	let { children } = $props();
</script>

<header class=" sticky top-0 z-50 flex h-[70px] w-full items-center border backdrop-blur-lg">
	<div
		class="container mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 xl:grid-cols-[1fr_auto_1fr] xl:px-10"
	>
		<!-- Left -->
		<div>
			<a href="/" class="h3">Blog</a>
		</div>

		<!-- Middle, just for aligning -->
		<div></div>

		<!-- Right -->
		<div class="flex items-stretch justify-end gap-2">
			<!-- TOOD: light switch -->
			<!-- Divider -->
			<span class="border-surface-200-800 border-r"></span>
			<!-- Social -->
			<nav class="flex items-center gap-1">
				<a
					class="btn-icon hover:preset-tonal"
					href="https://github.com/jannabiforever"
					target="_blank"
					title="GitHub"
				>
					<Github />
				</a>

				<a
					class="btn-icon hover:preset-tonal"
					href="https://instagram.com/4ortis_mane"
					target="_blank"
					title="Instagram"
				>
					<Instagram />
				</a>
			</nav>
		</div>
	</div>
</header>

<div
	class="container mx-auto grid grid-cols-1 px-4 xl:grid-cols-[240px_minmax(0px,_1fr)_280px] xl:px-10"
>
	<main class="mx-auto my-24 flex max-w-2xl flex-col gap-16 px-4">
		{@render children()}
	</main>
</div>

<footer class="mt-10">
	<div class="flex justify-center">
		<p class="anchor-font-color text-center text-sm">
			© 2025 Jungin's Dev Blog. All rights reserved.
		</p>
	</div>
</footer>
