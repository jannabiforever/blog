<script lang="ts">
	import { codeToHtml } from 'shiki';
	let { code, lang }: { code: string; lang: string } = $props();

	let highlighted: Promise<string> = codeToHtml(code, {
		lang,
		themes: {
			light: 'github-light',
			dark: 'github-dark'
		}
	});
</script>

{#await highlighted}
	<div class="w-full space-y-4">
		<div class="space-y-4">
			<div class="placeholder animate-pulse"></div>
			<div class="grid grid-cols-4 gap-4">
				<div class="placeholder animate-pulse"></div>
				<div class="placeholder animate-pulse"></div>
				<div class="placeholder animate-pulse"></div>
				<div class="placeholder animate-pulse"></div>
			</div>
			<div class="placeholder animate-pulse"></div>
			<div class="placeholder animate-pulse"></div>
		</div>
	</div>
{:then highlighted}
	<div class="pb-4">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html highlighted}
	</div>
{/await}
