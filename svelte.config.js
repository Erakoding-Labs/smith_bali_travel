import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Official Vercel adapter — zero config. Page is fully prerendered (see +layout.js),
		// so Vercel serves it as static HTML/CDN with no functions needed.
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
