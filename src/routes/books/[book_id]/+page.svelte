<script>
    import BookReview from "$lib/components/BookReview.svelte";
    import { page } from "$app/stores";

    const bookId = $page.params.book_id;
</script>

<BookReview {bookId} />
