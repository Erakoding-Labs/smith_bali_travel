<script>
	import { inclusions } from '$lib/data.js';
	import { reveal } from '$lib/reveal.js';
	import WaButton from './WaButton.svelte';
</script>

<section class="section" id="pricing">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">Pricing & inclusions</span>
			<h2>Clear, fair, all-in pricing</h2>
			<p>No hidden costs — ever. Here’s exactly what a private tour day includes.</p>
		</div>

		<div class="cards">
			<div class="incl reveal" use:reveal>
				<h3>✅ What’s included</h3>
				<ul>
					{#each inclusions.included as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>

			<div class="incl excl reveal" use:reveal={{ delay: 120 }}>
				<h3>➕ Not included</h3>
				<ul>
					{#each inclusions.excluded as item}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="note reveal" use:reveal>
			<p>
				💬 <strong>Custom quotes</strong> — message Kadek for your personalized price. It depends on
				your route, hours and group size, and you’ll always get a clear all-in number first.
			</p>
			<WaButton label="Get my price" />
		</div>
	</div>
</section>

<style>
	.cards {
		display: grid;
		gap: var(--grid-gap);
		grid-template-columns: 1fr;
		align-items: stretch;
	}
	.incl {
		height: 100%;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: var(--card-pad);
		box-shadow: var(--shadow-sm);
	}
	.incl h3 {
		margin-bottom: 1rem;
	}
	.incl ul {
		display: grid;
		gap: 0.65rem;
	}
	.incl li {
		position: relative;
		padding-left: 1.6rem;
		color: var(--ink-soft);
	}
	.incl li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: var(--green-600);
		font-weight: 800;
	}
	.excl li::before {
		content: '–';
		color: var(--muted);
	}

	.note {
		margin-top: var(--grid-gap);
		background: var(--sunset-soft);
		border: 1px solid #f8d4ad;
		border-radius: var(--radius);
		padding: var(--card-pad);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
	}
	.note p {
		margin: 0;
		flex: 1;
		min-width: 240px;
		color: #7a3e10;
	}

	@media (min-width: 720px) {
		.cards {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
