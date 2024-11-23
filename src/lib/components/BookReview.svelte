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
        <span class="book-main-review">
            {book.description}
        </span>
    </div>
    <div class="img-wrapper">
        <img src={book.cover} alt="Book cover" />
    </div>
</div>

<style>
    .book-review-container {
        display: flex;
        justify-content: space-between;

        padding: 1rem;
    }

    .img-wrapper {
        width: 30%;
        height: auto;
    }

    .book-info {
        margin-right: 2rem;
        display: flex;
        flex-direction: column;
    }

    .book-title {
        font-size: 3rem;

        margin-bottom: 1rem;
    }

    .book-author {
        display: flex;
        gap: 3rem;
        font-size: 1.5rem;

        margin-bottom: 3rem;
    }

    .book-main-review {
        padding: 0.5rem;
        font-size: 1.3rem;
        background-color: rgba(10, 10, 10, 0.3);
    }
</style>
