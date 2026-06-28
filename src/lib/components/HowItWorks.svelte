<script>
	import { steps } from '$lib/data.js';
	import { reveal } from '$lib/reveal.js';
	import WaButton from './WaButton.svelte';
</script>

<section class="section" id="how">
	<div class="container">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">How it works</span>
			<h2>Booking is easy & friendly</h2>
			<p>From first hello to your Bali adventure in four simple steps.</p>
		</div>

		<ol class="steps">
			{#each steps as s, i}
				<li class="step reveal" use:reveal={{ delay: i * 90 }}>
					<span class="step__num">{s.n}</span>
					<h3>{s.title}</h3>
					<p>{s.text}</p>
				</li>
			{/each}
		</ol>

		<div class="how__cta reveal" use:reveal>
			<WaButton large label="Start on WhatsApp" />
		</div>
	</div>
</section>

<style>
	.steps {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));
		gap: var(--grid-gap);
		align-items: stretch;
		counter-reset: step;
		position: relative;
	}
	.step {
		height: 100%;
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: var(--card-pad);
		box-shadow: var(--shadow-sm);
		position: relative;
	}
	.step__num {
		display: grid;
		place-items: center;
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: var(--sunset);
		color: #fff;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		margin-bottom: 1rem;
		box-shadow: 0 6px 14px rgba(249, 115, 22, 0.32);
	}
	.step h3 {
		margin-bottom: 0.3rem;
		font-size: 1.2rem;
	}
	.step p {
		color: var(--ink-soft);
		margin: 0;
		font-size: 0.95rem;
	}
	.how__cta {
		text-align: center;
		margin-top: var(--space-xl);
	}
</style>
