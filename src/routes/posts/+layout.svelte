<script lang="ts">
	import PostContainer from '$lib/components/PostContainer.svelte';
	import type { LayoutProps } from './$types';

	let { data, children }: LayoutProps = $props();
</script>

{#if data.postMetadata}
	<PostContainer postMetadata={data.postMetadata}>
		{#if children}
			{@render children()}
		{:else}
			<p class="border-error-50">Error</p>
		{/if}
	</PostContainer>
{/if}
