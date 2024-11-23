<script>
    import Book from "$lib/components/BookContainer.svelte";
    import { fetchBooks } from "$lib/fetch-books";
    import { onMount } from "svelte";

    let books = [];

    onMount(async () => {
        books = await fetchBooks();
    });
</script>

<div class="books-container">
    {#if books.length === 0}
        <p>No Content</p>
    {:else}
        {#each books as book}
            <Book {book} />
        {/each}
    {/if}
</div>
