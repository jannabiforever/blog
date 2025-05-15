<script lang="ts">
	import { Switch } from '@skeletonlabs/skeleton-svelte';
	import IconMoon from '@lucide/svelte/icons/moon';
	import IconSun from '@lucide/svelte/icons/sun';
	import { Github, Instagram } from '@lucide/svelte';
	import { browser } from '$app/environment';
	import '../app.css';

	let { children } = $props();

	// Get default theme from local storage
	const theme = browser ? (localStorage.getItem('theme') === 'light' ? 'light' : 'dark') : 'light';

	let isLightMode = $state(theme === 'light');
	$effect(() => {
		// try update local storage when mode changes
		if (browser) {
			localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
		}

		// set document class as mode
		document.documentElement.setAttribute('data-mode', isLightMode ? 'light' : 'dark');
	});

	function handleModeChange(checked: boolean) {
		isLightMode = checked;
	}
</script>

<header class="sticky top-0 z-50 flex h-[70px] w-full items-center border backdrop-blur-lg">
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
		<div class="flex items-stretch justify-end gap-3">
			<!-- theme switch toggle -->
			<Switch
				name="mode"
				controlActive="bg-surface-200"
				checked={isLightMode}
				onCheckedChange={(e) => handleModeChange(e.checked)}
			>
				{#snippet inactiveChild()}<IconMoon size="14" />{/snippet}
				{#snippet activeChild()}<IconSun size="14" />{/snippet}
			</Switch>
			<!-- Divider -->
			<span class="border-surface-200-800 border-r"></span>
			<!-- Social -->
			<nav class="flex items-center gap-1">
				<!-- github -->
				<a
					class="btn-icon hover:preset-tonal"
					href="https://github.com/jannabiforever"
					target="_blank"
					title="GitHub"
				>
					<Github />
				</a>
				<!-- instagram -->
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

<div class="container mx-auto grid min-h-screen grid-cols-1">
	<main class="mx-auto my-24 flex w-full justify-center px-4">
		{@render children()}
	</main>
</div>

<footer class="mt-10">
	<div class="flex justify-center">
		<p class="text-center text-sm">© 2025 Jungin's Dev Blog. All rights reserved.</p>
	</div>
</footer>
