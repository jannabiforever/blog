<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import { Link, OutboundLink, Toggle } from 'carbon-components-svelte';
	import { LogoInstagram, LogoGithub } from 'carbon-icons-svelte';

	let { children } = $props();
	const currentYear: number = new Date().getFullYear();

	let theme = $state('g10');
	$effect(() => {
		document.documentElement.setAttribute('theme', theme);
	});

	$inspect(theme);

	const changeTheme = (isDarkMode: boolean) => {
		theme = isDarkMode ? 'g100' : 'g10';
	};
</script>

<header>
	<nav>
		<div class="nav-links">
			<Link href="/">
				<p>Home</p>
			</Link>
			<Link href="/about">
				<p>About</p>
			</Link>
			<Link href="/posts">
				<p>Posts</p>
			</Link>
			<Link href="/songs">
				<p>Songs</p>
			</Link>
		</div>
		<div class="toggle-theme">
			<Toggle
				id="theme-toggle"
				labelA="Light"
				labelB="Dark"
				on:toggle={(e) => changeTheme(e.detail.toggled)}
			/>
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
	:global(html) {
		font-size: 12px;
	}

	@media screen and (min-width: 768px) {
		:global(html) {
			font-size: 16px;
		}
	}

	@media screen and (min-width: 1024px) {
		:global(html) {
			font-size: 18px;
		}
	}

	@media screen and (min-width: 1280px) {
		:global(html) {
			font-size: 20px;
		}
	}

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

	.nav-links p {
		align-self: end;
	}

	main {
		margin-top: 1rem;
		min-height: 80vh;
	}

	.social-links {
		display: flex;
		flex-direction: column;

		margin-top: 1rem;
	}
</style>
