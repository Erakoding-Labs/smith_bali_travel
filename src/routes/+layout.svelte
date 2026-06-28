<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import FloatingWhatsApp from '$lib/components/FloatingWhatsApp.svelte';

	let { children } = $props();
</script>

<Header />

<main>
	{@render children()}
</main>

<Footer />
<FloatingWhatsApp />
