<script>
    import { shortenDesc } from "$lib/shorten-desc";
    let { post } = $props();
    let shortendDescription = $derived(shortenDesc(post.content));
</script>

<div class="post-container">
    <div class="post-title">
        <h2><a href="/posts/{post.id}">{post.title}</a></h2>
        <p>{post.createdAt}</p>
    </div>
    <p>{shortendDescription}</p>
</div>

<style>
    .post-container {
        padding: 2rem;
        background-color: rgba(245, 245, 245, 0.5);
        margin-bottom: 1rem;
    }

    .post-title {
        padding: 1rem 0;
        display: flex;
        gap: 2rem;
    }

    .post-title h2 {
        display: flex;
        align-items: flex-end;
        margin: 0;
    }

    .post-title h2 a {
        text-decoration: none;
        color: black;
    }

    .post-title p {
        display: flex;
        align-items: flex-end;
        margin: 0;
    }
</style>
