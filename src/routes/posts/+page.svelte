<script>
    import Post from "$lib/components/PostContainer.svelte";
    import { fetchPosts } from "$lib/fetch-posts";
    import { onMount } from "svelte";

    let posts = [];
    onMount(async () => {
        posts = await fetchPosts();
    });
</script>

<div class="posts-container">
    {#if posts.length === 0}
        <p>Loading...</p>
    {:else}
        {#each posts as post}
            <Post {post} />
        {/each}
    {/if}
</div>
