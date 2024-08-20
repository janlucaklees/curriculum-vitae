<script>
	import {
		CallOutline,
		LocationOutline,
		LogoGithub,
		LogoLinkedin,
		MailOutline
	} from 'svelte-ionicons';
	import * as Icons from 'svelte-ionicons';

	import CardCondensed from '../components/cardCondensed.svelte';
	import Experience from '../components/experience.svelte';
	import IconInfo from '../components/IconInfo.svelte';
	import Section from '../components/section.svelte';
	import SkillCloud from '../components/SkillCloud.svelte';
	import Rating from '../components/rating.svelte';

	import { locale } from '../stores/locale';

	import contentPrintEN from '../content.print.en.yml';
	import contentPrintDE from '../content.print.de.yml';
	import contentEN from '../content.en.yml';
	import contentDE from '../content.de.yml';

	const contentMap = {
		de: contentDE,
		en: contentEN
	};

	$: content = contentMap[$locale];
</script>

<div class="pt-6 pr-4 pl-4 border-r-8 border-transparent">
	<header class="mb-4">
		<h1 class="mb-0 text-5xl font-bold leading-none">
			{content.person.name}
		</h1>

		<p class="mb-1 text-2xl leading-none text-subline">
			{content.person.description}
		</p>

		<ul class="grid grid-cols-3 gap-3 font-light list-none">
			<li>
				<IconInfo icon={LocationOutline}>
					{content.person.address.line1}
					<br />
					{content.person.address.line2}
				</IconInfo>
			</li>
			<li>
				<a href={content.person.email.href}>
					<IconInfo icon={MailOutline}>
						{content.person.email.label}
					</IconInfo>
				</a>
				<a href={content.person.phone.href}>
					<IconInfo icon={CallOutline}>
						{content.person.phone.label}
					</IconInfo>
				</a>
			</li>
			<li>
				<a href={content.person.github.href}>
					<IconInfo icon={LogoGithub}>
						{content.person.github.label}
					</IconInfo>
				</a>
				<a href={content.person.linkedin.href}>
					<IconInfo icon={LogoLinkedin}>
						{content.person.linkedin.label}
					</IconInfo>
				</a>
			</li>
		</ul>
	</header>

	<Section title={content.person.title}>
		<p class="font-light leading-tight whitespace-pre-line">
			{@html content.person.summary}
		</p>
	</Section>

	<Section title={content.experiences.title}>
		{#each content.experiences.items as item}
			<Experience {...item} />
		{/each}
	</Section>

	<Section title={content.education.title}>
		{#each content.education.items as item}
			<Experience {...item} />
		{/each}
	</Section>
</div>

<div class="flex flex-col pt-6 pr-4 pl-4 w-1/3 border-l-8 shrink-0 bg-aside border-border">
	<img
		src="portrait_placeholder.jpg"
		alt=""
		class="object-cover object-top mx-auto mb-6 w-1/2 rounded aspect-square"
	/>

	<Section title={content.achievements.title}>
		{#each content.achievements.items as item}
			<CardCondensed
				title={item.title}
				icon={Icons[item.icon]}
			>
				{@html item.description}
			</CardCondensed>
		{/each}
	</Section>

	<!-- <ul>
		<li>CD and devsetup @ leanatic</li>
		<li>Turned around failing Project Prediger</li>
		<li>Layed the foundation for Marketing Dynport</li>
		<li>Vastly improved blog load times dybport</li>
		<li>Complex configurator for cusom beton parts PV</li>
		<li>Algorithm for finding optimal configuration of parts</li>
		<li>Beat CFS</li>
		<li>Hosting my own Cloud Software Stack</li>
		<li>Got my Friend into programming / Taught Programming in University</li>
		<li>Was asked how long I live in Japan</li>
		<li>Build my own kitchen</li>
		<li>Developed my own style of CSS</li>
		<li>Mastered Functional and Declarative Programming</li>
	</ul> -->

	<Section title={content.passions.title}>
		{#each content.passions.items as item}
			<CardCondensed
				title={item.title}
				icon={Icons[item.icon]}
			>
				{@html item.description}
			</CardCondensed>
		{/each}
	</Section>

	{#if content.skills}
		<Section title={content.skills.title}>
			<SkillCloud
				skills={content.skills.items}
				maxProficiency={3}
				positionSeed={0}
				positionSpread={0}
				sortSeed={0}
			/>
		</Section>
	{/if}

	<Section title={content.languages.title}>
		<ul class="grid grid-cols-2 gap-x-4 grid-">
			{#each content.languages.items as item}
				<li>
					<Rating {...item} />
				</li>
			{/each}
		</ul>
	</Section>

	{#if content.footer}
		<div class="mt-auto mb-8 text-sm text-center">
			{@html content.footer}
		</div>
	{/if}
</div>

<style>
	.bg-aside {
		color: var(--color-aside);
		--color: var(--color-aside);
	}
</style>
