<script>
	import { waLink } from '$lib/config.js';
	import { waSvg } from './icons.svelte.js';

	let {
		message = undefined,
		label = 'Chat on WhatsApp',
		variant = 'primary', // primary | ghost | outline
		large = false,
		block = false,
		icon = true,
		class: extra = ''
	} = $props();
</script>

<a
	href={waLink(message)}
	target="_blank"
	rel="noopener noreferrer"
	class="btn btn--{variant} {large ? 'btn--lg' : ''} {block ? 'btn--block' : ''} {extra}"
>
	{#if icon}{@html waSvg}{/if}
	{label}
</a>
