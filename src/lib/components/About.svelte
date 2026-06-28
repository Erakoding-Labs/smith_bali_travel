<script>
	import { site } from '$lib/config.js';
	import { reveal } from '$lib/reveal.js';
	import WaButton from './WaButton.svelte';
</script>

<section class="section section--tint" id="about">
	<div class="container about">
		<div class="about__media reveal" use:reveal>
			<img
				src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800&q=75"
				alt="Kadek, your friendly Balinese driver-guide"
				loading="lazy"
			/>
			<span class="badge-eco about__chip">🌱 Sustainable travel</span>
		</div>

		<div class="about__text reveal" use:reveal={{ delay: 120 }}>
			<span class="eyebrow">Meet your guide</span>
			<h2>Hi, I’m {site.guide} 👋</h2>
			<p>
				I’m a born-and-raised Balinese guide who absolutely loves sharing the real Bali — its
				culture, hidden nature and warm people — with friends from all over the world.
			</p>
			<p>
				With me you get a private, relaxed day at <em>your</em> pace. I’ll take you to the famous
				spots and the secret ones, always happy to stop for that perfect photo. Safe, reliable, fun
				— and 100% zero-emission in my electric car.
			</p>
			<p class="about__slogan">“{site.slogan}”</p>

			<div class="about__cta">
				<WaButton label="Say hi to Kadek" />
			</div>
		</div>
	</div>
</section>

<style>
	.about {
		display: grid;
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: center;
	}
	.about__media {
		position: relative;
	}
	.about__media img {
		width: 100%;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-lg);
		aspect-ratio: 4 / 5;
		object-fit: cover;
		max-height: 560px;
	}
	.about__chip {
		position: absolute;
		bottom: 1rem;
		left: 1rem;
		background: rgba(255, 253, 248, 0.95);
		box-shadow: var(--shadow-sm);
	}
	.about__text p {
		color: var(--ink-soft);
		font-size: 1.05rem;
	}
	.about__slogan {
		font-family: var(--font-display);
		font-size: 1.35rem;
		color: var(--green-700);
		font-style: italic;
		margin-top: 1.25rem;
	}
	.about__cta {
		margin-top: 1.5rem;
	}

	@media (min-width: 820px) {
		.about {
			grid-template-columns: 0.85fr 1.15fr;
		}
	}
</style>
