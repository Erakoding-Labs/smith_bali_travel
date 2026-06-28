<script>
	import { faqs } from '$lib/data.js';
	import { reveal } from '$lib/reveal.js';
	import { slide } from 'svelte/transition';

	let open = $state(0);

	function toggle(i) {
		open = open === i ? -1 : i;
	}
</script>

<section class="section section--tint" id="faq">
	<div class="container narrow">
		<div class="section-head center reveal" use:reveal>
			<span class="eyebrow">Good to know</span>
			<h2>Frequently asked questions</h2>
			<p>Still curious? Just message Kadek — he replies fast and friendly.</p>
		</div>

		<ul class="faq reveal" use:reveal>
			{#each faqs as item, i}
				<li class="faq__item" class:open={open === i}>
					<button class="faq__q" aria-expanded={open === i} onclick={() => toggle(i)}>
						<span>{item.q}</span>
						<span class="faq__icon" aria-hidden="true">+</span>
					</button>
					{#if open === i}
						<div class="faq__a" transition:slide={{ duration: 260 }}>
							<p>{item.a}</p>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.narrow {
		max-width: 820px;
	}
	.faq {
		display: grid;
		gap: var(--space-xs);
	}
	.faq__item {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-sm);
		overflow: hidden;
		transition: box-shadow 0.2s var(--ease);
	}
	.faq__item.open {
		box-shadow: var(--shadow-sm);
		border-color: var(--green-100);
	}
	.faq__q {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding: 1.1rem 1.25rem;
		background: transparent;
		border: none;
		text-align: left;
		font-weight: 700;
		font-size: 1.02rem;
		color: var(--green-900);
	}
	.faq__icon {
		flex: none;
		width: 28px;
		height: 28px;
		display: grid;
		place-items: center;
		border-radius: 50%;
		background: var(--green-100);
		color: var(--green-700);
		font-size: 1.3rem;
		line-height: 1;
		transition: transform 0.25s var(--ease);
	}
	.faq__item.open .faq__icon {
		transform: rotate(45deg);
		background: var(--sunset);
		color: #fff;
	}
	.faq__a {
		padding: 0 1.25rem 1.2rem;
	}
	.faq__a p {
		margin: 0;
		color: var(--ink-soft);
	}
</style>
