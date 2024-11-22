<script>
    import Post from "$lib/components/PostContainer.svelte";
    import { fetchPosts } from "$lib/fetch-posts";
    import { onMount } from "svelte";
    import SimplifiedPost from "./SimplifiedPost.svelte";

    let posts = $state([]);
    let last_three_posts = $derived(posts.slice(0, 3));
    onMount(async () => {
        posts = await fetchPosts();
    });
</script>

<div class="recent-posts">
    <span class="recent-posts-title">Recent Posts</span>
    <span class="posts">
        <p class="message-when-empty" class:visible={posts.length === 0}>
            No Recent Posts
        </p>
        {#if posts.length != 0}
            {#each last_three_posts as post}
                <SimplifiedPost {post} />
            {/each}
        {/if}
    </span>
</div>

<style>
    .recent-posts {
        margin-top: 2vh;
        height: 30vh;
        display: flex;
        flex-direction: row;
        align-content: center;
        align-items: center;
        justify-content: space-between;
    }

    .recent-posts-title {
        width: 35%;
        font-size: 5rem;
        font-weight: 600;
        text-align: center;
        line-height: 1;
    }

    .posts {
        width: 50%;
        height: 100%;
        padding: 0 2rem;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .message-when-empty {
        display: none;
    }

    .message-when-empty.visible {
        display: block;

        margin-left: 4rem;
        font-size: 2rem;
        color: rgba(0, 0, 0, 0.5);
    }
</style>
