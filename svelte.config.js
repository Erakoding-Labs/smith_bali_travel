import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Static site — deploy anywhere (Netlify, Vercel, GitHub Pages, Cloudflare).
		adapter: adapter({
			fallback: '404.html'
		}),
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
