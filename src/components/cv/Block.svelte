<script lang="ts">
	import Section from '$components/section.svelte';

	export let overline: string;
	export let title: string;
	export let focus: string;
	export let highlights: string[] = [];
	export let summary: string;
	export let successStory: string;
	export let keySkills: string[] = [];
	export let bgColor: string = '#FFFFFF';
	export let textColor: string = 'var(--color)';
</script>

<section class="px-8 pt-6">
	<h2 class="mb-1 text-lg font-medium leading-none opacity-60">{overline}</h2>
	<h2 class="mb-0 text-2xl font-medium leading-none uppercase">{@html title}</h2>
	<hr
		class="mb-2 border-0 border-b line"
		style="border-color: {textColor};"
	/>

	<!-- <header class="mb-3">
		<h2 class="text-3xl font-semibold leading-none">{title}</h2>
		<p class="text-lg">{focus}</p>
	</header> -->

	<ul class="flex text-sm gap-5 mb-6">
		{#each highlights as highlight}
			<li>
				{highlight}
			</li>
		{/each}
	</ul>

	<p class="mb-6 text-xl">{summary}</p>

	<div class="mb-6">
		<h3 class="mb-1 text-xl leading-none">Success story</h3>
		<p class="font-light leading-tight">{successStory}</p>
	</div>

	<div>
		<h3 class="mb-1 text-xl leading-none">Key skills</h3>
		<ul class="list-disc list-inside font-light leading-tight">
			{#each keySkills as skill}
				<li>{skill}</li>
			{/each}
		</ul>
	</div>
</section>
