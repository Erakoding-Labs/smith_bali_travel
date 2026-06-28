<script>
	import { tours } from '$lib/data.js';
	import { waLink } from '$lib/config.js';
	import { reveal } from '$lib/reveal.js';
	import { waSvg } from './icons.svelte.js';

	function bookMsg(title) {
		return `Hi Kadek! I'm interested in the "${title}" tour. Could you share details and a quote?`;
	}
</script>

<section class="section section--tint" id="tours">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">Popular tours</span>
			<h2>Pick a tour — or design your own</h2>
			<p>Every itinerary is private and fully editable. These are favourites to get you inspired.</p>
		</div>

		<div class="grid">
			{#each tours as t, i}
				<article class="tour reveal" use:reveal={{ delay: (i % 3) * 90 }}>
					<div class="tour__media">
						<img src={t.image} alt={t.title + ' — Bali private tour'} loading="lazy" />
						<div class="tour__tags">
							{#each t.tags as tag}
								<span>{tag}</span>
							{/each}
						</div>
					</div>

					<div class="tour__body">
						<h3>{t.title}</h3>
						<p class="tour__desc">{t.desc}</p>

						<div class="tour__meta">
							<span class="tour__dur">🕒 {t.duration}</span>
							<span class="tour__price">{t.price} <small>{t.paxNote}</small></span>
						</div>

						<a
							class="btn btn--primary btn--block"
							href={waLink(bookMsg(t.title))}
							target="_blank"
							rel="noopener noreferrer"
						>
							{@html waSvg} Book on WhatsApp
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
		gap: var(--grid-gap);
		align-items: stretch;
	}
	.tour {
		height: 100%;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		overflow: hidden;
		box-shadow: var(--shadow-sm);
		display: flex;
		flex-direction: column;
		transition:
			transform 0.25s var(--ease),
			box-shadow 0.25s var(--ease);
	}
	.tour:hover {
		transform: translateY(-5px);
		box-shadow: var(--shadow-lg);
	}
	.tour:hover .tour__media img {
		transform: scale(1.06);
	}

	.tour__media {
		position: relative;
		aspect-ratio: 4 / 3;
		overflow: hidden;
		background: var(--sand-200);
	}
	.tour__media img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.5s var(--ease);
	}
	.tour__tags {
		position: absolute;
		top: 0.7rem;
		left: 0.7rem;
		display: flex;
		gap: 0.35rem;
		flex-wrap: wrap;
	}
	.tour__tags span {
		background: rgba(255, 253, 248, 0.92);
		color: var(--green-700);
		font-size: 0.7rem;
		font-weight: 700;
		padding: 0.2rem 0.6rem;
		border-radius: var(--radius-pill);
		backdrop-filter: blur(4px);
	}

	.tour__body {
		padding: var(--card-pad);
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.tour__body h3 {
		margin-bottom: 0.4rem;
	}
	.tour__desc {
		color: var(--ink-soft);
		font-size: 0.95rem;
		flex: 1;
	}
	.tour__meta {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin: 0.6rem 0 1.1rem;
		flex-wrap: wrap;
	}
	.tour__dur {
		font-size: 0.85rem;
		color: var(--muted);
		font-weight: 600;
	}
	.tour__price {
		font-weight: 800;
		color: var(--green-900);
		font-size: 1.05rem;
	}
	.tour__price small {
		display: block;
		font-weight: 500;
		font-size: 0.72rem;
		color: var(--muted);
		text-align: right;
	}
</style>
