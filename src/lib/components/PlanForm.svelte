<script>
	import { tourOptions } from '$lib/data.js';
	import { waLink } from '$lib/config.js';
	import { reveal } from '$lib/reveal.js';
	import { waSvg } from './icons.svelte.js';

	let name = $state('');
	let email = $state('');
	let dates = $state('');
	let group = $state('');
	let interest = $state('');
	let message = $state('');

	// Build a tidy, pre-filled WhatsApp message from the form fields.
	function buildMessage() {
		const lines = [
			'Hi Kadek! I’d like to plan a Bali private tour 🌴',
			'',
			`• Name: ${name || '-'}`,
			`• Email: ${email || '-'}`,
			`• Travel dates: ${dates || '-'}`,
			`• Group size: ${group || '-'}`,
			`• Tour interest: ${interest || '-'}`
		];
		if (message.trim()) {
			lines.push('', `Message: ${message.trim()}`);
		}
		return lines.join('\n');
	}

	function handleSubmit(e) {
		e.preventDefault();
		window.open(waLink(buildMessage()), '_blank', 'noopener');
	}
</script>

<section class="section" id="plan">
	<div class="container narrow">
		<div class="panel reveal" use:reveal>
			<div class="panel__head">
				<span class="eyebrow">Plan my tour</span>
				<h2>Get a free custom itinerary</h2>
				<p>
					Fill this in and we’ll open WhatsApp with your details ready to send. Kadek replies fast —
					usually within a few hours.
				</p>
			</div>

			<form onsubmit={handleSubmit} novalidate>
				<div class="row">
					<label>
						<span>Name</span>
						<input bind:value={name} type="text" placeholder="Your name" autocomplete="name" />
					</label>
					<label>
						<span>Email</span>
						<input
							bind:value={email}
							type="email"
							placeholder="you@email.com"
							autocomplete="email"
						/>
					</label>
				</div>

				<div class="row">
					<label>
						<span>Travel dates</span>
						<input bind:value={dates} type="text" placeholder="e.g. 12–15 Aug 2026" />
					</label>
					<label>
						<span>Group size</span>
						<input bind:value={group} type="text" placeholder="e.g. 2 adults" inputmode="numeric" />
					</label>
				</div>

				<label>
					<span>Tour interest</span>
					<select bind:value={interest}>
						<option value="" disabled selected>Choose a tour…</option>
						{#each tourOptions as opt}
							<option value={opt}>{opt}</option>
						{/each}
					</select>
				</label>

				<label>
					<span>Message <small>(optional)</small></span>
					<textarea
						bind:value={message}
						rows="3"
						placeholder="Anything special you’d love to see or do?"
					></textarea>
				</label>

				<button type="submit" class="btn btn--primary btn--lg btn--block">
					{@html waSvg} Send via WhatsApp
				</button>
				<p class="formnote">No spam, no account needed — it just opens a pre-filled WhatsApp chat.</p>
			</form>
		</div>
	</div>
</section>

<style>
	.narrow {
		max-width: 760px;
	}
	.panel {
		background: var(--surface);
		border: 1px solid var(--border);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
		padding: clamp(1.5rem, 4vw, 2.75rem);
	}
	.panel__head {
		text-align: center;
		margin-bottom: 1.75rem;
	}
	.panel__head p {
		color: var(--ink-soft);
		margin: 0;
	}

	form {
		display: grid;
		gap: 1rem;
	}
	.row {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr;
	}
	label {
		display: grid;
		gap: 0.4rem;
	}
	label > span {
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--green-900);
	}
	label small {
		font-weight: 500;
		color: var(--muted);
	}
	input,
	select,
	textarea {
		width: 100%;
		font-family: inherit;
		font-size: 1rem;
		padding: 0.8rem 0.95rem;
		border: 1.5px solid var(--border);
		border-radius: var(--radius-sm);
		background: var(--sand-50);
		color: var(--ink);
		transition:
			border-color 0.2s var(--ease),
			box-shadow 0.2s var(--ease),
			background 0.2s var(--ease);
	}
	input::placeholder,
	textarea::placeholder {
		color: var(--muted);
	}
	input:focus,
	select:focus,
	textarea:focus {
		outline: none;
		border-color: var(--teal-500);
		background: #fff;
		box-shadow: 0 0 0 3px var(--teal-100);
	}
	textarea {
		resize: vertical;
	}
	.formnote {
		text-align: center;
		font-size: 0.82rem;
		color: var(--muted);
		margin: 0.25rem 0 0;
	}

	@media (min-width: 600px) {
		.row {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
