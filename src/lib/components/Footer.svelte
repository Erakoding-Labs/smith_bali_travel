<script>
	import { site, waLink } from '$lib/config.js';
	import { igSvg, tiktokSvg, waSvg } from './icons.svelte.js';

	const year = 2026;
	const nav = [
		{ href: '#tours', label: 'Tours' },
		{ href: '#how', label: 'How it works' },
		{ href: '#about', label: 'About Kadek' },
		{ href: '#reviews', label: 'Reviews' },
		{ href: '#pricing', label: 'Pricing' },
		{ href: '#faq', label: 'FAQ' },
		{ href: '#plan', label: 'Plan my tour' }
	];
</script>

<footer class="footer">
	<div class="container footer__grid">
		<div class="footer__brand">
			<div class="logo">
				<span aria-hidden="true">🌴</span>
				<strong>{site.brand}</strong>
			</div>
			<p class="slogan">“{site.slogan}”</p>
			<p class="eco">🌱 Eco-friendly private tours in Bali.</p>
		</div>

		<nav class="footer__nav" aria-label="Footer">
			<h4>Explore</h4>
			{#each nav as item}
				<a href={item.href}>{item.label}</a>
			{/each}
		</nav>

		<div class="footer__contact">
			<h4>Get in touch</h4>
			<a class="line" href={waLink()} target="_blank" rel="noopener noreferrer">
				{@html waSvg} {site.phoneDisplay}
			</a>
			<div class="socials">
				<a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
					{@html igSvg}
				</a>
				<a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
					{@html tiktokSvg}
				</a>
			</div>
		</div>
	</div>

	<div class="container footer__bottom">
		<p>© {year} {site.brand}. All rights reserved.</p>
		<p>{site.guide} — {site.tagline}</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--green-900);
		color: rgba(255, 255, 255, 0.82);
		padding-top: clamp(2.5rem, 6vw, 4rem);
	}
	.footer__grid {
		display: grid;
		gap: 2rem;
		grid-template-columns: 1fr;
		padding-bottom: 2.5rem;
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--font-display);
		font-size: 1.3rem;
		color: #fff;
	}
	.slogan {
		font-family: var(--font-display);
		font-style: italic;
		color: var(--teal-100);
		margin: 0.75rem 0 0.5rem;
	}
	.eco {
		font-size: 0.9rem;
		margin: 0;
	}

	h4 {
		color: #fff;
		font-family: var(--font-body);
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.12em;
		margin: 0 0 1rem;
	}
	.footer__nav {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}
	.footer__nav a {
		color: rgba(255, 255, 255, 0.82);
		font-size: 0.95rem;
	}
	.footer__nav a:hover {
		color: #fff;
	}

	.line {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: #fff;
		font-weight: 700;
		margin-bottom: 1rem;
	}
	.socials {
		display: flex;
		gap: 0.6rem;
	}
	.socials a {
		width: 42px;
		height: 42px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.12);
		color: #fff;
		transition: background 0.2s var(--ease);
	}
	.socials a:hover {
		background: var(--sunset);
	}

	.footer__bottom {
		border-top: 1px solid rgba(255, 255, 255, 0.12);
		padding-block: 1.5rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 0.5rem;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.6);
	}
	.footer__bottom p {
		margin: 0;
	}

	@media (min-width: 720px) {
		.footer__grid {
			grid-template-columns: 1.5fr 1fr 1fr;
		}
	}
</style>
