<script>
	import { BusinessOutline } from 'svelte-ionicons';

	import IconInfo from '../IconInfo.svelte';

	export let overline;
	export let title;
	export let company;
	export let since;
</script>

<li class="vertical-timeline__entry flex">
	<span class="w-[5rem] opacity-65 text-3xl font-extralight leading-none">{since}</span>

	<p class="flex flex-col">
		<span class="text-xl leading-none">{overline}</span>
		<span class="text-2xl font-normal leading-none pb-1">{title}</span>
		<span class="opacity-65">
			{company}
		</span>
	</p>
</li>

<style lang="scss">
	.vertical-timeline__entry:not(:first-child) {
		padding-bottom: 1rem;
	}
</style>
