<script>
	import { site } from '$lib/config.js';
	import { reveal } from '$lib/reveal.js';
	import WaButton from './WaButton.svelte';
	import { igSvg, tiktokSvg } from './icons.svelte.js';
</script>

<section class="cta">
	<div class="cta__bg" aria-hidden="true"></div>
	<div class="cta__overlay" aria-hidden="true"></div>
	<div class="container cta__inner reveal" use:reveal>
		<span class="badge-eco">🌱 Zero-emission · 100% private</span>
		<h2>Ready to discover the real Bali?</h2>
		<p>Message Kadek today and start planning your perfect, stress-free island day.</p>

		<div class="cta__buttons">
			<WaButton large label="Chat on WhatsApp Now" />
		</div>

		<div class="cta__social">
			<a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
				{@html igSvg}
			</a>
			<a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok">
				{@html tiktokSvg}
			</a>
		</div>
	</div>
</section>

<style>
	.cta {
		position: relative;
		color: #fff;
		text-align: center;
		overflow: hidden;
	}
	.cta__bg {
		position: absolute;
		inset: 0;
		background-image: url('https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1600&q=75');
		background-size: cover;
		background-position: center;
	}
	.cta__overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(160deg, rgba(15, 118, 110, 0.85), rgba(20, 68, 47, 0.9));
	}
	.cta__inner {
		position: relative;
		z-index: 2;
		padding-block: clamp(4rem, 9vw, 7rem);
		max-width: 680px;
	}
	.cta h2 {
		color: #fff;
		font-size: clamp(2rem, 5vw, 3.2rem);
		margin: 1rem 0 0.5rem;
	}
	.cta p {
		font-size: 1.15rem;
		color: rgba(255, 255, 255, 0.92);
		margin-bottom: 2rem;
	}
	.cta__buttons {
		display: flex;
		justify-content: center;
	}
	.cta__social {
		display: flex;
		justify-content: center;
		gap: 0.75rem;
		margin-top: 2rem;
	}
	.cta__social a {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: rgba(255, 255, 255, 0.15);
		color: #fff;
		transition:
			background 0.2s var(--ease),
			transform 0.2s var(--ease);
	}
	.cta__social a:hover {
		background: rgba(255, 255, 255, 0.95);
		color: var(--green-900);
		transform: translateY(-2px);
	}
</style>
