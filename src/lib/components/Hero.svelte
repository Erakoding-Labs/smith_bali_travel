<script>
	import WaButton from './WaButton.svelte';

	const trust = ['★ 5-Star Rated', 'Private & Personal', '🌱 Eco-Friendly', 'Fluent English'];
</script>

<section class="hero" id="top">
	<div class="hero__bg" aria-hidden="true"></div>
	<div class="hero__overlay" aria-hidden="true"></div>

	<div class="container hero__inner">
		<span class="badge-eco hero__badge">🌱 Zero-Emission Electric Tours</span>

		<h1>Explore Bali Your Way — Private Tours with a Happy Local Guide</h1>

		<p class="hero__sub">
			Zero-emission electric car · English-speaking driver-guide · 100% personalized itineraries.
		</p>

		<div class="hero__cta">
			<WaButton large label="Chat on WhatsApp" />
			<a href="#tours" class="btn btn--ghost btn--lg">See Tours</a>
		</div>

		<ul class="trust">
			{#each trust as t}
				<li>{t}</li>
			{/each}
		</ul>
	</div>

	<a href="#why" class="scroll-cue" aria-label="Scroll down">
		<span></span>
	</a>
</section>

<style>
	.hero {
		position: relative;
		min-height: 100svh;
		display: flex;
		align-items: center;
		color: #fff;
		overflow: hidden;
		margin-top: -72px; /* sit under transparent sticky header */
		padding-top: 72px;
	}

	.hero__bg {
		position: absolute;
		inset: 0;
		background-image: url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=75');
		background-size: cover;
		background-position: center;
		transform: scale(1.05);
		animation: kenburns 18s ease-out forwards;
	}
	@keyframes kenburns {
		to {
			transform: scale(1.15) translateY(-1.5%);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero__bg {
			animation: none;
			transform: none;
		}
	}

	.hero__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			180deg,
			rgba(20, 68, 47, 0.55) 0%,
			rgba(15, 118, 110, 0.35) 45%,
			rgba(20, 68, 47, 0.75) 100%
		);
	}

	.hero__inner {
		position: relative;
		z-index: 2;
		max-width: 860px;
		padding-block: 4rem;
		animation: rise 0.9s var(--ease) both;
	}
	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(24px);
		}
	}

	.hero__badge {
		background: rgba(228, 243, 233, 0.95);
		margin-bottom: 1.25rem;
	}

	.hero h1 {
		color: #fff;
		font-size: clamp(2.3rem, 6.2vw, 4.2rem);
		text-shadow: 0 2px 24px rgba(0, 0, 0, 0.3);
		margin-bottom: 0.6em;
		max-width: 14ch;
	}

	.hero__sub {
		font-size: clamp(1.05rem, 2.4vw, 1.35rem);
		font-weight: 500;
		max-width: 46ch;
		color: rgba(255, 255, 255, 0.95);
		text-shadow: 0 1px 12px rgba(0, 0, 0, 0.35);
		margin-bottom: 2rem;
	}

	.hero__cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin-bottom: 2.5rem;
	}

	.trust {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem 1.4rem;
		font-weight: 600;
		font-size: 0.92rem;
	}
	.trust li {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
	}
	.trust li:not(:last-child)::after {
		content: '·';
		margin-left: 1.2rem;
		opacity: 0.6;
	}

	.scroll-cue {
		position: absolute;
		bottom: 1.5rem;
		left: 50%;
		transform: translateX(-50%);
		width: 26px;
		height: 42px;
		border: 2px solid rgba(255, 255, 255, 0.7);
		border-radius: 14px;
		z-index: 2;
		display: none;
	}
	.scroll-cue span {
		position: absolute;
		top: 8px;
		left: 50%;
		width: 4px;
		height: 8px;
		margin-left: -2px;
		background: #fff;
		border-radius: 2px;
		animation: cue 1.6s var(--ease) infinite;
	}
	@keyframes cue {
		0% {
			opacity: 0;
			transform: translateY(0);
		}
		40% {
			opacity: 1;
		}
		80% {
			opacity: 0;
			transform: translateY(14px);
		}
	}

	@media (min-width: 700px) {
		.scroll-cue {
			display: block;
		}
		.trust li:not(:last-child)::after {
			margin-left: 1.4rem;
		}
	}
</style>
