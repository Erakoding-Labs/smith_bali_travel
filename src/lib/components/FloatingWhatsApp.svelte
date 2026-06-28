<script>
	import { waLink } from '$lib/config.js';
	import { waSvg } from './icons.svelte.js';

	let show = $state(false);

	function onScroll() {
		show = window.scrollY > 500;
	}
</script>

<svelte:window on:scroll={onScroll} />

<a
	class="fab"
	class:show
	href={waLink()}
	target="_blank"
	rel="noopener noreferrer"
	aria-label="Chat on WhatsApp"
>
	{@html waSvg}
	<span class="fab__label">Chat on WhatsApp</span>
	<span class="fab__pulse" aria-hidden="true"></span>
</a>

<style>
	.fab {
		position: fixed;
		right: clamp(1rem, 3vw, 1.5rem);
		bottom: clamp(1rem, 3vw, 1.5rem);
		z-index: 90;
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		padding: 0.85rem 1.1rem;
		background: #25d366;
		color: #fff;
		font-weight: 700;
		border-radius: var(--radius-pill);
		box-shadow: 0 10px 26px rgba(37, 211, 102, 0.45);
		opacity: 0;
		transform: translateY(20px) scale(0.9);
		pointer-events: none;
		transition:
			opacity 0.3s var(--ease),
			transform 0.3s var(--ease),
			background 0.2s var(--ease);
	}
	.fab.show {
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}
	.fab:hover {
		color: #fff;
		background: #1ebe5a;
		transform: translateY(-2px);
	}
	.fab :global(svg) {
		width: 26px;
		height: 26px;
		position: relative;
		z-index: 2;
	}
	.fab__label {
		position: relative;
		z-index: 2;
	}
	.fab__pulse {
		position: absolute;
		inset: 0;
		border-radius: var(--radius-pill);
		background: #25d366;
		z-index: 1;
		animation: pulse 2.2s ease-out infinite;
	}
	@keyframes pulse {
		0% {
			transform: scale(1);
			opacity: 0.5;
		}
		70% {
			transform: scale(1.35);
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.fab__pulse {
			animation: none;
		}
	}

	/* On small screens, collapse to a round icon button to save space. */
	@media (max-width: 560px) {
		.fab__label {
			display: none;
		}
		.fab {
			padding: 0.95rem;
			border-radius: 50%;
		}
	}
</style>
