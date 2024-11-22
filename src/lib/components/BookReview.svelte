<script>
    import { fetchBookById } from "$lib/fetch-books";
    import { onMount } from "svelte";
    import BookStar from "./BookStar.svelte";

    const { bookId } = $props();

    let book = $state({
        id: "",
        title: "",
        author: "",
        rate: 3.0,
        description: "",
        cover: "",
    });

    onMount(async () => {
        book = await fetchBookById(bookId);
    });
</script>

<div class="book-review-container">
    <div class="book-info">
        <span class="book-title">
            {book.title}
        </span>
        <span class="book-author">
            by. {book.author}
            <BookStar rate={book.rate} />
        </span>
    </div>
    <img src={book.cover} alt="Book cover" />
</div>

<style>
    .book-review-container {
        display: flex;
        justify-content: space-between;
    }

    .book-review-container img {
        width: 30%;
    }

    .book-info {
        display: flex;
        flex-direction: column;
    }

    .book-title {
        font-size: 3rem;

        margin-bottom: 1rem;
    }

    .book-author {
        font-size: 1.5rem;

        margin-bottom: 1rem;
    }
</style>
