# 🌴 Smith Bali Travel

Conversion-focused website for **Smith Bali Travel** — zero-emission private Bali tours with Kadek, your happy English driver-guide.

Built with **SvelteKit** (Svelte 5) + static adapter. Fast, mobile-first, SEO-ready. Every CTA deep-links to WhatsApp.

---

## Run it

```bash
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # static site -> /build
npm run preview    # preview the production build
```

Deploy the `build/` folder to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

---

## ✏️ Edit content (no coding needed)

Everything the owner changes lives in **two files**:

| File | What's inside |
|------|---------------|
| [src/lib/config.js](src/lib/config.js) | Brand name, **WhatsApp number**, Instagram & TikTok links, default greeting. Change the phone number in ONE place (`phoneIntl`) and every button updates. |
| [src/lib/data.js](src/lib/data.js) | Tours (titles, prices, photos), benefits, steps, gallery images, **reviews**, inclusions, FAQs, form dropdown. |

### Swap photos
Images use Unsplash placeholders. To use your own:
1. Drop photos in the [static/](static/) folder (e.g. `static/tours/ubud.jpg`).
2. In `data.js`, change the `image:` URL to `/tours/ubud.jpg`.

### Change prices / pax
Edit `price` and `paxNote` on each tour in `data.js`.

### Add/replace reviews
Edit the `testimonials` array in `data.js` — name, country (emoji flag), `rating` (1–5), text.

---

## Key features

- **WhatsApp everywhere** — header, hero, every tour card, floating button, final CTA.
- **Plan My Tour form** — formats Name / Email / Dates / Group / Interest / Message into a pre-filled WhatsApp chat ([PlanForm.svelte](src/lib/components/PlanForm.svelte)).
- **Per-tour deep links** — each "Book" button sends a tour-specific message.
- **SEO** — meta title/description, Open Graph + Twitter tags, JSON-LD `TravelAgency` schema ([+page.svelte](src/routes/+page.svelte)).
- **Eco angle** — leaf motif + zero-emission badges.
- **Performance** — lazy-loaded images, static prerender, system + Google fonts.
- **Accessible** — high contrast, alt text, large tap targets, reduced-motion support.

## Sections (single-page scroll)

Hero → Why Us → Tours → How It Works → About Kadek → Gallery → Reviews → Pricing → Plan My Tour → FAQ → Final CTA → Footer.

---

## Update the live domain

For correct SEO/Open Graph, set your real domain in:
- `url` and `ogImage` in [src/routes/+page.svelte](src/routes/+page.svelte)
- [static/robots.txt](static/robots.txt)
