<script>
	import { testimonials } from '$lib/data.js';
	import { reveal } from '$lib/reveal.js';

	let index = $state(0);
	const count = testimonials.length;

	function go(i) {
		index = (i + count) % count;
	}
	function next() {
		go(index + 1);
	}
	function prev() {
		go(index - 1);
	}

	function stars(n) {
		return '★★★★★'.slice(0, n) + '☆☆☆☆☆'.slice(0, 5 - n);
	}
</script>

<section class="section section--green" id="reviews">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow" style="color: var(--teal-100)">Guest reviews</span>
			<h2 style="color:#fff">Loved by travelers worldwide</h2>
			<p style="color: rgba(255,255,255,0.85)">
				Real words from happy guests. Your review could be next!
			</p>
		</div>

		<div class="carousel reveal" use:reveal>
			<button class="nav prev" onclick={prev} aria-label="Previous review">‹</button>

			<div class="viewport">
				<div class="track" style="transform: translateX(-{index * 100}%)">
					{#each testimonials as r}
						<figure class="slide">
							<div class="stars" aria-label="{r.rating} out of 5 stars">{stars(r.rating)}</div>
							<blockquote>“{r.text}”</blockquote>
							<figcaption>
								<strong>{r.name}</strong>
								<span>{r.country}</span>
							</figcaption>
						</figure>
					{/each}
				</div>
			</div>

			<button class="nav next" onclick={next} aria-label="Next review">›</button>
		</div>

		<div class="dots">
			{#each testimonials as _, i}
				<button
					class="dot"
					class:active={i === index}
					onclick={() => go(i)}
					aria-label="Go to review {i + 1}"
				></button>
			{/each}
		</div>
	</div>
</section>

<style>
	.carousel {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 0.5rem;
		max-width: 760px;
		margin-inline: auto;
	}
	.viewport {
		overflow: hidden;
	}
	.track {
		display: flex;
		transition: transform 0.5s var(--ease);
	}
	.slide {
		flex: 0 0 100%;
		margin: 0;
		padding: 0.5rem 1rem;
		text-align: center;
	}
	.stars {
		color: #ffd24a;
		font-size: 1.3rem;
		letter-spacing: 2px;
		margin-bottom: 1rem;
	}
	blockquote {
		font-family: var(--font-display);
		font-size: clamp(1.1rem, 2.4vw, 1.5rem);
		line-height: 1.5;
		margin: 0 0 1.25rem;
		color: #fff;
	}
	figcaption {
		display: flex;
		flex-direction: column;
		gap: 0.1rem;
	}
	figcaption strong {
		font-size: 1.05rem;
	}
	figcaption span {
		color: var(--teal-100);
		font-size: 0.9rem;
	}

	.nav {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.15);
		color: #fff;
		font-size: 1.8rem;
		line-height: 1;
		display: grid;
		place-items: center;
		transition: background 0.2s var(--ease);
	}
	.nav:hover {
		background: rgba(255, 255, 255, 0.3);
	}

	.dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
		margin-top: 1.5rem;
	}
	.dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		border: none;
		background: rgba(255, 255, 255, 0.35);
		padding: 0;
		transition:
			background 0.2s var(--ease),
			transform 0.2s var(--ease);
	}
	.dot.active {
		background: var(--sunset);
		transform: scale(1.25);
	}
</style>
