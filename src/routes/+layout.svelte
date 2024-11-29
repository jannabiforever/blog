<script lang="ts">
	let { children } = $props();
	const currentYear: number = new Date().getFullYear();
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/posts">posts</a></li>
			<li><a href="/songs">Songs</a></li>
		</ul>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<div class="copyright-claim">&copy; {currentYear} Jungin Yu.</div>
	<div class="social-links">
		<div class="social-link">
			<a href="http://www.instagram.com/4ortis_mane">instagram</a>
			<a href="http://www.github.com/jannabiforever">github</a>
		</div>
	</div>
</footer>

<style>
	header,
	main,
	footer {
		padding: 0 20vw;
	}

	header {
		background-color: rgba(0, 0, 0, 0.1);
	}

	header nav ul {
		width: 50%;

		display: flex;
		justify-content: space-between;
	}
</style>
