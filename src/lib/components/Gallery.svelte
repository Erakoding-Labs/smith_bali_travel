<script>
	import { gallery } from '$lib/data.js';
	import { site } from '$lib/config.js';
	import { reveal } from '$lib/reveal.js';
	import { igSvg, tiktokSvg } from './icons.svelte.js';
</script>

<section class="section" id="gallery">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">Gallery</span>
			<h2>Moments from the road</h2>
			<p>Real Bali, captured on tour. Follow along for daily inspiration.</p>
		</div>

		<div class="masonry">
			{#each gallery as src, i}
				<figure class="masonry__item reveal" use:reveal={{ delay: (i % 4) * 70 }}>
					<img src={src} alt="Bali tour photo {i + 1}" loading="lazy" />
				</figure>
			{/each}
		</div>

		<div class="social reveal" use:reveal>
			<a class="social__btn ig" href={site.instagram} target="_blank" rel="noopener noreferrer">
				{@html igSvg} Follow on Instagram
			</a>
			<a class="social__btn tt" href={site.tiktok} target="_blank" rel="noopener noreferrer">
				{@html tiktokSvg} Watch on TikTok
			</a>
		</div>
	</div>
</section>

<style>
	.masonry {
		columns: 2;
		column-gap: var(--space-xs);
	}
	.masonry__item {
		break-inside: avoid;
		margin-bottom: var(--space-xs);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
	}
	.masonry__item img {
		width: 100%;
		display: block;
		transition: transform 0.5s var(--ease);
	}
	.masonry__item:hover img {
		transform: scale(1.05);
	}

	.social {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-xs);
		justify-content: center;
		margin-top: var(--space-xl);
	}
	.social__btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.55rem;
		padding: 0.8rem 1.4rem;
		border-radius: var(--radius-pill);
		font-weight: 700;
		color: #fff;
		min-width: 230px; /* mirror: both buttons equal width */
	}
	.social__btn.ig {
		background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
	}
	.social__btn.tt {
		background: #111;
	}
	.social__btn:hover {
		color: #fff;
		transform: translateY(-2px);
		transition: transform 0.2s var(--ease);
	}

	@media (min-width: 640px) {
		.masonry {
			columns: 3;
		}
	}
	@media (min-width: 1000px) {
		.masonry {
			columns: 4;
		}
	}
</style>
