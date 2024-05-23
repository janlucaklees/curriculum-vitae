<script>
	import {
		BulbOutline,
		ConstructOutline,
		GitPullRequestOutline,
		LocationOutline,
		LogoGithub,
		MailOutline,
		MedalOutline,
		TerminalOutline,
		TrophyOutline
	} from 'svelte-ionicons';
	import Card from '../components/card.svelte';
	import Section from '../components/section.svelte';
	import Rating from '../components/rating.svelte';
	import Experience from '../components/experience.svelte';
</script>

<div class="pt-8 pr-6 pl-6 border-r-8 border-transparent">
	<header class="mb-8">
		<h1 class="mb-2 text-5xl font-bold">Jan-Luca Klees</h1>
		<p class="mb-1 text-2xl text-subline">
			Senior Frontend Developer | DevOps Enthusiast | Something Else
		</p>
		<ul class="flex gap-3 list-none">
			<li class="flex gap-1 items-center"><MailOutline size="11" />email@janlucaklees.de</li>
			<li class="flex gap-1 items-center"><LogoGithub size="11" />github.com</li>
			<li class="flex gap-1 items-center"><LocationOutline size="11" />Detmold, Germany</li>
		</ul>
	</header>

	<Section title="About Me">
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet.
		</p>
	</Section>

	<Section title="Experience">
		<Experience
			companyName="LEANATIC GmbH & Co. KG"
			location="Remote"
			positions={[
				{
					start: '2020-01-01',
					jobTitle: 'Frontend Developer',
					employmentType: 'Full-time',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				},
				{
					start: '2023-08-01',
					jobTitle: 'Product Owner',
					employmentType: 'Full-time',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				},
				{
					start: '2022-09-01',
					jobTitle: 'Project Manager',
					employmentType: 'Full-time',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>

		<Experience
			companyName="FLOW4 UG"
			location="Hamburg, Germany"
			end="2019-11-01"
			positions={[
				{
					start: '2019-09-01',
					jobTitle: 'Web-Developer',
					employmentType: 'Part-time',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>

		<Experience
			companyName="Phrase a.s."
			location="Hamburg, Germany"
			end="2018-07-01"
			positions={[
				{
					start: '2018-02-01',
					jobTitle: 'Technical Marketing Engineer',
					employmentType: 'Full-time',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				},
				{
					start: '2017-04-01',
					jobTitle: 'Customer Success Manager',
					employmentType: 'Work Student',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>

		<Experience
			companyName="Interface One GmbH"
			location="Hamburg, Germany"
			end="2017-03-01"
			positions={[
				{
					start: '2016-08-01',
					jobTitle: 'Fullstack Developer',
					employmentType: 'Work Student',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>

		<Experience
			companyName="Universität Hamburg"
			location="Hamburg, Germany"
			end="2017-03-01"
			positions={[
				{
					start: '2015-10-01',
					jobTitle: 'Student Assistant',
					employmentType: 'Work Student',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>

		<Experience
			companyName="Freelance"
			location="Hamburg, Germany"
			employmentType="Freelance"
			end="2017-03-01"
			positions={[
				{
					start: '2013-08-01',
					jobTitle: 'WordPress Freelancer',
					employmentType: 'Self-Employed',
					description:
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
				}
			]}
		/>
	</Section>

	<Section title="Skills">
		<ul>
			<li>
				<Rating
					label="HTML5"
					rating="5"
				/>
			</li>
			<li>
				<Rating
					label="CSS / SCSS"
					rating="5"
				/>
			</li>
			<li>
				<Rating
					label="JavaScript / TypeScript"
					rating="5"
				/>
			</li>
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>PHP</li>
			<li>Accessability</li>
			<li>Localization and Internationalization</li>
		</ul>
		<ul>
			<li>Docker</li>
			<li>Vue</li>
			<li>React</li>
		</ul>
	</Section>

	<Section title="Education">
		<Experience
			companyName="University of Hamburg"
			location="Hamburg, Germany"
			employmentType="Freelance"
			end="2018-01-01"
			positions={[
				{
					start: '2014-10-01',
					jobTitle: 'B. sc. in Theoretical Computer Science',
					employmentType: 'Student',
					description: '81 credit points with an 1.8 average; Japanese studies as minor subject.'
				}
			]}
		/>
	</Section>
</div>

<div class="pt-8 pr-6 pl-6 w-1/3 border-l-8 shrink-0 bg-aside border-border">
	<img
		src="portrait.png"
		alt=""
		class="object-cover object-top mx-auto mb-8 w-1/2 rounded aspect-square"
	/>

	<Section title="Achievements">
		<Card
			title="Ullamcorper Morbi Tincidunt"
			icon={GitPullRequestOutline}
		>
			A iaculis at erat pellentesque adipiscing commodo. Nisi scelerisque eu ultrices vitae. Ac
			tincidunt vitae semper quis lectus nulla at volutpat.
		</Card>
		<Card
			title="Amet Mattis Vulputate"
			icon={MedalOutline}
		>
			At varius vel pharetra vel turpis nunc eget. Ipsum dolor sit amet consectetur. Blandit libero
			volutpat sed cras ornare arcu dui.
		</Card>
		<Card
			title="Diam Sollicitudin"
			icon={TrophyOutline}
		>
			Ultricies mi eget mauris pharetra et ultrices neque. Fusce ut placerat orci nulla pellentesque
			dignissim enim.
		</Card>
		<Card
			title="Etiam Tempor Orci"
			icon={BulbOutline}
		>
			Pharetra et ultrices neque ornare aenean. Morbi tempus iaculis urna id volutpat. Molestie a
			iaculis at erat pellentesque adipiscing commodo elit. Justo donec enim diam vulputate ut.
		</Card>
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
	</Section>

	<Section title="Passions">
		<Card
			title="Etiam Tempor Orci"
			icon={TerminalOutline}
		>
			Pharetra et ultrices neque ornare aenean. Morbi tempus iaculis urna id volutpat. Molestie a
			iaculis at erat pellentesque adipiscing commodo elit.
		</Card>
		<Card
			title="Etiam Tempor Orci"
			icon={ConstructOutline}
		>
			Pharetra et ultrices neque ornare aenean. Morbi tempus iaculis urna id volutpat. Molestie a
			iaculis at erat pellentesque adipiscing commodo elit.
		</Card>
	</Section>

	<Section title="Languages">
		<ul class="grid grid-cols-2 gap-x-4 grid-">
			<li>
				<Rating
					label="German"
					rating="5"
				/>
			</li>
			<li>
				<Rating
					label="Japanese"
					rating="3.5"
				/>
			</li>
			<li>
				<Rating
					label="English"
					rating="4.5"
				/>
			</li>
			<li>
				<Rating
					label="Spanish"
					rating="1.5"
				/>
			</li>
		</ul>
	</Section>
</div>

<style>
	.bg-aside {
		--color: #fffffb;

		color: var(--color);
	}
</style>
