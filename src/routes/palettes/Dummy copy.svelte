<script lang="ts">
	import { onMount } from 'svelte';

	export let page: string = '#ffffff';
	export let sidebar: string = '#000000';

	export let color: string = '#000000';
	export let section: string = color;
	export let experience: string = color;
	export let company: string = color;

	export let title: string = color;

	export let sidebarColor: string = page;
	export let sidebarSection: string = sidebarColor;
	export let sidebarExperience: string = sidebarColor;
	export let sidebarCompany: string = sidebarColor;

	let rootElement: HTMLElement;
	let sidebarElement: HTMLElement;

	onMount(() => {
		rootElement.style.setProperty('--page', page);
		rootElement.style.setProperty('--sidebar', sidebar);

		rootElement.style.setProperty('--title', title);

		rootElement.style.setProperty('--color', color);
		rootElement.style.setProperty('--section', section);
		rootElement.style.setProperty('--experience', experience);
		rootElement.style.setProperty('--company', company);

		sidebarElement.style.setProperty('--color', sidebarColor);
		sidebarElement.style.setProperty('--section', sidebarSection);
		sidebarElement.style.setProperty('--experience', sidebarExperience);
		sidebarElement.style.setProperty('--company', sidebarCompany);
	});
</script>

<script>
	import Page from '$components/Page.svelte';
	import Section from '$components/cv/Section.svelte';
	import Experience from '$components/cv/Experience.svelte';
	import ExperienceBrief from '$components/cv/ExperienceBrief.svelte';
	import InfoTableItem from '$components/cv/InfoTable/Item.svelte';
	import InfoTable from '$components/cv/InfoTable.svelte';
	import TimelineItem from '$components/cv/TimelineItem.svelte';

	import content from './content.yml';
</script>

<Page>
	<main class="flex flex-row justify-end items-stretch h-full">
		<div class="flex flex-col">
			<h1 class="text-5xl font-bold text-title leading-none px-8 pt-8 mb-3">
				{content.title}
			</h1>

			<div class="text-lg leading-tight font-normal px-8 mb-8">
				{@html content.summary}
			</div>

			<div class="pl-8 pr-6 mb-8">
				<Section title={content.experiences.title}>
					<div class="flex flex-col gap-6">
						{#each content.experiences.items as item}
							{#if item.brief === true}
								<ExperienceBrief {...item} />
							{:else}
								<Experience {...item} />
							{/if}
						{/each}
					</div>
				</Section>
			</div>

			<div class="pl-8 pr-6 mb-8">
				<Section title={content.breaks.title}>
					<div class="flex flex-col gap-6">
						{#each content.breaks.items as item}
							{#if item.brief === true}
								<ExperienceBrief {...item} />
							{:else}
								<Experience {...item} />
							{/if}
						{/each}
					</div>
				</Section>
			</div>

			<div class="px-8">
				<Section title={content.education.title}>
					<div class="flex flex-col gap-6">
						{#each content.education.items as item}
							{#if item.brief === true}
								<ExperienceBrief {...item} />
							{:else}
								<Experience {...item} />
							{/if}
						{/each}
					</div>
				</Section>
			</div>
		</div>

		<div class="flex flex-col py-8 px-6 w-1/3 shrink-0 bg-sidebar">
			<div class="mb-8">
				<Section title={content.info.title}>
					<InfoTable>
						{#each content.info.items as item}
							<InfoTableItem {...item} />
						{/each}
					</InfoTable>
				</Section>
			</div>

			<div class="mb-8">
				<Section title={content.timeline.title}>
					<div class="flex flex-col gap-4">
						{#each content.timeline.items as item}
							<TimelineItem {...item} />
						{/each}
					</div>
				</Section>
			</div>

			<div class="mb-0">
				<Section title={content.languages.title}>
					<InfoTable>
						{#each content.languages.items as item}
							<InfoTableItem {...item} />
						{/each}
					</InfoTable>
				</Section>
			</div>
		</div>
	</main>
</Page>


<style lang="scss">
	.page {
		width: 210mm;

		color: var(--color);

		background-color: var(--page);
		box-shadow:
			var(--shadow) 0px 14px 28px,
			var(--shadow) 0px 10px 10px;

		.bg-sidebar {
			color: var(--color);
		}
	}
</style>
