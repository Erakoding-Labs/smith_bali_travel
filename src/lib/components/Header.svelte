<script>
	import { site } from '$lib/config.js';
	import WaButton from './WaButton.svelte';

	let scrolled = $state(false);
	let menuOpen = $state(false);

	const nav = [
		{ href: '#tours', label: 'Tours' },
		{ href: '#how', label: 'How it works' },
		{ href: '#about', label: 'About' },
		{ href: '#reviews', label: 'Reviews' },
		{ href: '#pricing', label: 'Pricing' },
		{ href: '#faq', label: 'FAQ' }
	];

	function onScroll() {
		scrolled = window.scrollY > 24;
	}

	function close() {
		menuOpen = false;
	}
</script>

<svelte:window on:scroll={onScroll} />

<header class="hdr" class:scrolled class:solid={scrolled || menuOpen} class:at-top={!scrolled && !menuOpen}>
	<div class="container hdr__inner">
		<a href="#top" class="logo" onclick={close} aria-label="{site.brand} home">
			<span class="logo__mark" aria-hidden="true">🌴</span>
			<span class="logo__text">
				<strong>{site.brand}</strong>
				<small>{site.tagline}</small>
			</span>
		</a>

		<nav class="nav" aria-label="Primary">
			{#each nav as item}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<div class="hdr__cta">
			<WaButton label="WhatsApp" />
		</div>

		<button
			class="burger"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class:open={menuOpen}></span>
		</button>
	</div>

	{#if menuOpen}
		<nav class="mobile-nav" aria-label="Mobile">
			{#each nav as item}
				<a href={item.href} onclick={close}>{item.label}</a>
			{/each}
			<div class="mobile-nav__cta">
				<WaButton block />
			</div>
		</nav>
	{/if}
</header>

<style>
	.hdr {
		position: sticky;
		top: 0;
		z-index: 100;
		transition:
			background 0.3s var(--ease),
			box-shadow 0.3s var(--ease),
			backdrop-filter 0.3s var(--ease);
		background: transparent;
	}
	.hdr.solid {
		background: rgba(255, 253, 248, 0.92);
		backdrop-filter: saturate(180%) blur(12px);
		box-shadow: var(--shadow-sm);
	}

	/* Transparent over the hero — make logo, nav & burger white & readable. */
	.hdr.at-top .logo,
	.hdr.at-top .logo__text strong {
		color: #fff;
	}
	.hdr.at-top .logo__text small {
		color: rgba(255, 255, 255, 0.85);
	}
	.hdr.at-top .nav a {
		color: rgba(255, 255, 255, 0.95);
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
	}
	.hdr.at-top .nav a:hover {
		color: #fff;
	}
	.hdr.at-top .burger span,
	.hdr.at-top .burger span::before,
	.hdr.at-top .burger span::after {
		background: #fff;
	}
	.hdr.at-top .burger span.open {
		background: transparent;
	}

	.hdr__inner {
		display: flex;
		align-items: center;
		gap: 1rem;
		min-height: 72px;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		color: var(--green-900);
		margin-right: auto;
	}
	.logo__mark {
		font-size: 1.6rem;
	}
	.logo__text {
		display: flex;
		flex-direction: column;
		line-height: 1.1;
	}
	.logo__text strong {
		font-family: var(--font-display);
		font-size: 1.15rem;
		font-weight: 700;
	}
	.logo__text small {
		font-size: 0.7rem;
		color: var(--teal-700);
		font-weight: 600;
		letter-spacing: 0.02em;
	}

	.nav {
		display: none;
		gap: 1.4rem;
	}
	.nav a {
		color: var(--ink);
		font-weight: 600;
		font-size: 0.95rem;
		position: relative;
		padding: 0.25rem 0;
	}
	.nav a::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: -2px;
		width: 0;
		height: 2px;
		background: var(--sunset);
		transition: width 0.25s var(--ease);
	}
	.nav a:hover {
		color: var(--green-900);
	}
	.nav a:hover::after {
		width: 100%;
	}

	.hdr__cta {
		display: none;
	}

	/* Hamburger */
	.burger {
		width: 44px;
		height: 44px;
		border: none;
		background: transparent;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	.burger span,
	.burger span::before,
	.burger span::after {
		content: '';
		display: block;
		width: 24px;
		height: 2.5px;
		background: var(--green-900);
		border-radius: 2px;
		transition: transform 0.3s var(--ease), opacity 0.2s var(--ease);
	}
	.burger span::before {
		position: absolute;
		transform: translateY(-7px);
	}
	.burger span::after {
		position: absolute;
		transform: translateY(7px);
	}
	.burger span.open {
		background: transparent;
	}
	.burger span.open::before {
		transform: rotate(45deg);
	}
	.burger span.open::after {
		transform: rotate(-45deg);
	}

	.mobile-nav {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 0.5rem var(--gutter) 1.25rem;
		background: rgba(255, 253, 248, 0.98);
		backdrop-filter: blur(12px);
		box-shadow: var(--shadow-md);
		animation: drop 0.25s var(--ease);
	}
	@keyframes drop {
		from {
			opacity: 0;
			transform: translateY(-8px);
		}
	}
	.mobile-nav a {
		color: var(--ink);
		font-weight: 600;
		padding: 0.75rem 0.5rem;
		border-bottom: 1px solid var(--border);
	}
	.mobile-nav__cta {
		margin-top: 0.75rem;
	}

	@media (min-width: 900px) {
		.nav,
		.hdr__cta {
			display: flex;
		}
		.burger {
			display: none;
		}
	}
</style>
