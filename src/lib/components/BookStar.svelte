<script>
    let { rate } = $props();
    const full_star = "⭐";
    const empty_star = "☆";

    let full_star_cnt = $derived(Math.floor(rate));
    let has_empty_star = $derived(rate - full_star_cnt > 0.5);

    let stars = $derived(
        full_star.repeat(full_star_cnt) + (has_empty_star ? empty_star : ""),
    );
</script>

<div class="book-star">
    <span class="star">{stars}</span>
</div>
