/* ============================================================
   SITE CONFIG — edit brand info, contacts & links here.
   One file controls every CTA, phone number and social link.
   ============================================================ */

export const site = {
	brand: 'Smith Bali Travel',
	guide: 'Kadek',
	tagline: 'Your Happy English Driver-Guide',
	slogan: "Don't just be a Tourist — be a Traveler.",
	description:
		'Zero-emission private Bali tours with Kadek, a friendly English-speaking local driver-guide. 100% personalized, eco-friendly, door-to-door.',

	// Contact — change the number in ONE place.
	phoneDisplay: '+62 857-3881-5922',
	phoneIntl: '6285738815922', // digits only, country code, no +

	instagram: 'https://www.instagram.com/smith_bali_travel',
	tiktok: 'https://www.tiktok.com/@smithbalitravelbest',

	// Default WhatsApp greeting (used by the main CTAs).
	defaultMessage: "Hi Kadek! I'd like to book a Bali private tour"
};

/** Build a wa.me deep link with a pre-filled (URL-encoded) message. */
export function waLink(message = site.defaultMessage) {
	return `https://wa.me/${site.phoneIntl}?text=${encodeURIComponent(message)}`;
}
