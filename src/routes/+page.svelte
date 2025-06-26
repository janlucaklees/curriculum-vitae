<script>
	import Page from '$components/Page.svelte';
	import Section from '$components/cv/Section.svelte';
	import Experience from '$components/cv/Experience.svelte';
	import ExperienceBrief from '$components/cv/ExperienceBrief.svelte';
	import InfoTableItem from '$components/cv/InfoTable/Item.svelte';
	import InfoTable from '$components/cv/InfoTable.svelte';
	import Skill from '$components/cv/Skill.svelte';
	import TimelineItem from '$components/cv/TimelineItem.svelte';

	import content from './content.yml';
</script>

<Page>
	<main class="flex flex-row justify-end items-stretch h-full">
		<div class="flex flex-col">
			<h1 class="text-5xl font-bold text-title leading-none px-8 pt-8 mb-3">
				{content.title}
			</h1>

			<div class="text-2xl leading-tight font-normal px-8 mb-8">
				{@html content.summary}
			</div>

			<div class="text-lg leading-tight font-normal px-8 mb-2">
				After welcoming my first child, supporting my in-laws in Japan, starting a part-time MBA,
				and pursuing a startup attempt, I’m now returning to work with fresh energy.
			</div>

			<div class="text-lg leading-tight font-normal px-8 mb-12">
				With sharpened priorities, I’m ready to tackle my next high-impact role in product
				leadership.
			</div>

			<div class="pl-8 pr-6 mb-10">
				<Section title={content.skills.title}>
					<div class="flex flex-col gap-4">
						{#each content.skills.items as item}
							<Skill {...item} />
						{/each}
					</div>
				</Section>
			</div>

			<div class="pl-8 pr-6 mb-10">
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

			<!-- <div class="pl-8 pr-6 mb-8">
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
			</div> -->

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
			<div class="mb-10">
				<Section title={content.info.title}>
					<InfoTable>
						{#each content.info.items as item}
							<InfoTableItem {...item} />
						{/each}
					</InfoTable>
				</Section>
			</div>

			<div class="mb-10">
				<Section title={content.principles.title}>
					<ul class="flex flex-col gap-1 mt-2">
						{#each content.principles.items as point}
							<li class="text-lg font-normal">
								{point}
							</li>
						{/each}
					</ul>
				</Section>
			</div>

			<div class="mb-10">
				<Section title={content.tools.title}>
					<ul class="flex flex-col gap-1 mt-2 pl-2">
						{#each content.tools.items as point}
							<li class="relative pl-1.5 before:absolute before:-left-1.5 before:content-['-']">
								{point}
							</li>
						{/each}
					</ul>
					<footer class="mt-2">
						{content.tools.footer}
					</footer>
				</Section>
			</div>

			<div class="mb-10">
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
