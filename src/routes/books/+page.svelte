<script>
    import Book from "$lib/components/Book.svelte";
    import { fetchBooks } from "$lib/fetch-books";
    import { onMount } from "svelte";

    let books = [];

    onMount(async () => {
        books = await fetchBooks();
        console.log(books);
    });
</script>

<div class="books-container">
    {#if books.length === 0}
        <p>Loading...</p>
    {:else}
        {#each books as book}
            <Book {book} />
        {/each}
    {/if}
</div>
