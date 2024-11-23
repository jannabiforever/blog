<script>
    import Post from "$lib/components/Post.svelte";
    import { page } from "$app/stores";

    const postId = $page.params.post_id;
</script>

<Post {postId} />
