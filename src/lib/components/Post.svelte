<script>
    import { fetchPostById } from "$lib/fetch-posts";
    import { onMount } from "svelte";

    let { postId } = $props();
    let post = $state({
        id: 0,
        title: "",
        content: "",
        createdAt: "",
    });

    onMount(async () => {
        post = await fetchPostById(postId);
    });
</script>

<div class="post-container">
    <span class="post-title">
        <p>{post.title}</p>
        <p>{post.createdAt}</p>
    </span>
    <span class="post-content">
        <p>{post.content}</p>
    </span>
</div>
