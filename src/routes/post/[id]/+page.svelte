<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<p>{data.data.title}</p>
<p>{data.data.date}</p>
<p>{data.data.content}</p>
