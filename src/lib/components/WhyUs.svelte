<script>
	import { benefits } from '$lib/data.js';
	import { reveal } from '$lib/reveal.js';
</script>

<section class="section" id="why">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">Why travel with Kadek</span>
			<h2>A private Bali day, done right</h2>
			<p>Friendly, flexible and eco-friendly — everything a big bus tour isn’t.</p>
		</div>

		<div class="grid">
			{#each benefits as b, i}
				<article class="card reveal" use:reveal={{ delay: (i % 3) * 90 }}>
					<div class="card__icon" aria-hidden="true">{b.icon}</div>
					<h3>{b.title}</h3>
					<p>{b.text}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 290px), 1fr));
		gap: var(--grid-gap);
		align-items: stretch;
	}
	.card {
		height: 100%;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: var(--card-pad);
		box-shadow: var(--shadow-sm);
		transition:
			transform 0.25s var(--ease),
			box-shadow 0.25s var(--ease),
			border-color 0.25s var(--ease);
	}
	.card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--green-100);
	}
	.card__icon {
		width: 56px;
		height: 56px;
		display: grid;
		place-items: center;
		font-size: 1.8rem;
		background: var(--green-100);
		border-radius: 14px;
		margin-bottom: 1rem;
	}
	.card h3 {
		margin-bottom: 0.35rem;
	}
	.card p {
		color: var(--ink-soft);
		margin: 0;
		font-size: 0.97rem;
	}
</style>
