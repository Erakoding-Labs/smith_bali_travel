/* Svelte action: fade/slide in elements when they scroll into view.
   Usage: <div class="reveal" use:reveal>  or  use:reveal={{ delay: 120 }} */
export function reveal(node, options = {}) {
	const { delay = 0, threshold = 0.15, once = true } = options;

	// Respect reduced-motion — show immediately.
	if (
		typeof window === 'undefined' ||
		!('IntersectionObserver' in window) ||
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	) {
		node.classList.add('is-visible');
		return {};
	}

	if (delay) node.style.transitionDelay = `${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.classList.add('is-visible');
					if (once) observer.unobserve(node);
				} else if (!once) {
					node.classList.remove('is-visible');
				}
			});
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
