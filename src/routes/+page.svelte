<script>
	import { site } from '$lib/config.js';
	import Hero from '$lib/components/Hero.svelte';
	import WhyUs from '$lib/components/WhyUs.svelte';
	import Tours from '$lib/components/Tours.svelte';
	import HowItWorks from '$lib/components/HowItWorks.svelte';
	import About from '$lib/components/About.svelte';
	import Gallery from '$lib/components/Gallery.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Pricing from '$lib/components/Pricing.svelte';
	import PlanForm from '$lib/components/PlanForm.svelte';
	import Faq from '$lib/components/Faq.svelte';
	import FinalCta from '$lib/components/FinalCta.svelte';

	const title = 'Smith Bali Travel — Private Bali Tours with an English Driver-Guide';
	const description =
		'Eco-friendly, zero-emission private Bali tours with Kadek, your happy English-speaking driver-guide. 100% personalized itineraries, door-to-door pickup. Book on WhatsApp.';
	const url = 'https://smithbalitravel.com/';
	const ogImage =
		'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=75';

	// Structured data for rich search results.
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'TravelAgency',
		name: site.brand,
		description,
		url,
		image: ogImage,
		telephone: '+' + site.phoneIntl,
		areaServed: 'Bali, Indonesia',
		priceRange: '$$',
		sameAs: [site.instagram, site.tiktok],
		makesOffer: {
			'@type': 'Offer',
			itemOffered: { '@type': 'Service', name: 'Private electric-car day tours in Bali' }
		}
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Bali private driver guide, Bali private tours, eco-friendly Bali tour, English speaking Bali guide, electric car Bali tour, zero emission Bali"
	/>
	<link rel="canonical" href={url} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.brand} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}<\/script>`}
</svelte:head>

<Hero />
<WhyUs />
<Tours />
<HowItWorks />
<About />
<Gallery />
<Testimonials />
<Pricing />
<PlanForm />
<Faq />
<FinalCta />
