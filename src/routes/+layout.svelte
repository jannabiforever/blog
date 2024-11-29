<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Link, OutboundLink } from 'carbon-components-svelte';
	import { LogoInstagram, LogoGithub } from 'carbon-icons-svelte';

	let { children } = $props();
	const currentYear: number = new Date().getFullYear();
</script>

<header>
	<nav>
		<div class="nav-links">
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/posts">Posts</Link>
			<Link href="/songs">Songs</Link>
		</div>
		<div class="toggle-theme">
			<button>Toggle Theme</button>
		</div>
	</nav>
</header>

<main>
	{@render children()}
</main>

<footer>
	<div class="copyright-claim">&copy; {currentYear} Jungin Yu. All rights reserved.</div>
	<div class="social-links">
		<div class="social-link">
			<OutboundLink href="http://www.instagram.com/4ortis_mane">
				<LogoInstagram size={20} />
				instagram
			</OutboundLink>
		</div>
		<div class="social-link">
			<OutboundLink href="http://www.github.com/jannabiforever">
				<LogoGithub size={20} />
				github
			</OutboundLink>
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
		padding-top: 1vh;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	.nav-links {
		width: 50%;
		display: flex;
		justify-content: space-between;
	}

	.social-links {
		display: flex;
		flex-direction: column;
	}
</style>
