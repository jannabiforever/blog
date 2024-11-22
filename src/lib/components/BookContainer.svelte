<script>
  import BookStar from "./BookStar.svelte";

  export let book;

  let shortendDescription = "";
  if (book.description.length > 100) {
    shortendDescription = book.description.slice(0, 100) + "...";
  } else {
    shortendDescription = book.description;
  }
</script>

<div class="book-container">
  <img src={book.cover} alt={book.title} />
  <div class="book-info">
    <div class="book-title">
      <a href="/books/{book.title}">{book.title}</a>
      <p class="author">by. {book.author}</p>
      <BookStar rate={book.rate} />
    </div>
    <div class="book-desc">
      <p>{shortendDescription}</p>
    </div>
  </div>
</div>

<style>
  .book-container {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    background-color: rgba(245, 245, 245, 0.5);

    margin-bottom: 1rem;
  }

  .book-container img {
    width: 30%;
  }

  .book-info {
    width: 60%;
    display: block;
  }

  .book-title a {
    font-size: 2.5rem;
    text-decoration: none;
    color: black;
  }
</style>
