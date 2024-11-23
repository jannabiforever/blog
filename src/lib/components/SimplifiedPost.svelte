<script>
    let { post } = $props();
</script>

<div class="simplified-post">
    <span class="post-title"><a href="/posts/{post.id}">{post.title}</a></span>
    <span class="post-created-at">{post.createdAt}</span>
</div>

<style>
    .simplified-post {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .post-title {
        font-size: 1.2rem;
    }

    .post-title a {
        text-decoration: none;
        color: black;
    }

    .post-created-at {
        font-size: 1.2rem;
    }
</style>
