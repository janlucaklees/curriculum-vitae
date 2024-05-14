<script>
	import {
		GitPullRequestOutline,
		LocationOutline,
		LogoGithub,
		MailOutline,
		MedalOutline,
		TrophyOutline
	} from 'svelte-ionicons';
	import Card from '../components/card.svelte';
	import Section from '../components/section.svelte';
	import Experience from '../components/experience.svelte';
	import Rating from '../components/rating.svelte';
</script>

<div class="pt-8 pr-6 pl-6 border-r-8 border-transparent">
	<header class="mb-8">
		<h1 class="mb-2 text-5xl font-bold">Jan-Luca Klees</h1>
		<p class="mb-1 text-2xl text-subline">Senior Frontend Developer | Something | Something Else</p>
		<ul class="flex gap-2 list-none">
			<li class="flex gap-1 items-center"><MailOutline size="11" />email@janlucaklees.de</li>
			<li class="flex gap-1 items-center"><LogoGithub size="11" />github.com</li>
			<li class="flex gap-1 items-center"><LocationOutline size="11" />Detmold, Germany</li>
		</ul>
	</header>

	<Section title="Summary">
		<p>
			Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
			justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
			ipsum dolor sit amet.
		</p>
	</Section>

	<Section title="Experience">
		<Experience
			jobTitle="Frontend Developer / Product Owner"
			location="Remote"
			duration="01/2020 - Present"
			companyName="LEANATIC GmbH & Co. KG"
		>
			<ul class="pl-4 list-disc">
				<li class="mb-1">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				</li>
				<li class="mb-1">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.
				</li>
				<li class="mb-1">
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
					anim id est laborum.
				</li>
				<li class="">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				</li>
			</ul>
		</Experience>
		<Experience
			jobTitle="Technical Marketing Engineer"
			location="Hamburg, Germany"
			duration="04/2017 - 06/2018"
			companyName="Dynport GmbH"
		>
			<ul class="pl-4 list-disc">
				<li class="mb-1">
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
					dolore eu fugiat nulla pariatur.
				</li>
				<li class="mb-1">
					Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sit amet
					venenatis urna cursus eget. Viverra maecenas accumsan lacus vel facilisis volutpat est.
				</li>
				<li class="">
					Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
					invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
				</li>
			</ul>
		</Experience>
		<Experience
			jobTitle="WordPress Developer"
			location="Hamburg, Germany"
			duration="08/2013 - 12/2019"
			companyName="Self Employed"
		>
			<ul class="pl-4 list-disc">
				<li class="">
					Et malesuada fames ac turpis egestas integer. Ipsum nunc aliquet bibendum enim facilisis
					gravida. Enim ut sem viverra aliquet eget sit. Vitae elementum curabitur vitae nunc sed
					velit dignissim sodales ut. Et netus et malesuada fames ac turpis egestas. A cras semper
					auctor neque vitae tempus quam pellentesque nec.
				</li>
			</ul>
		</Experience>
	</Section>
	<!-- 
	<Section title="Skills">
		<ul>
			<li>HTML</li>
			<li>CSS / SCSS</li>
			<li>JavaScript</li>
			<li>TypeScript</li>
			<li>PHP</li>
		</ul>
		<ul>
			<li>Docker</li>
			<li>Vue</li>
			<li>React</li>
		</ul>
	</Section> -->

	<Section title="Education">
		<Experience
			jobTitle="Theoretical Computer Science"
			location="Hamburg, Germany"
			duration="10/2014 - 01/2018"
			companyName="University of Hamburg"
		>
			<p class="text-sm">81 credit points with 1.8 average; Japanese studies as minor subject.</p>
		</Experience>
	</Section>
</div>

<div class="pt-8 pr-6 pl-6 w-1/3 h-full border-l-8 shrink-0 bg-aside border-border">
	<img
		src="portrait.png"
		alt=""
		class="object-cover object-top mx-auto mb-8 w-1/2 rounded aspect-square"
	/>

	<Section title="Achievements">
		<Card title="Ullamcorper Morbi Tincidunt" icon={GitPullRequestOutline}>
			A iaculis at erat pellentesque adipiscing commodo. Nisi scelerisque eu ultrices vitae. Ac
			tincidunt vitae semper quis lectus nulla at volutpat.
		</Card>
		<Card title="Amet Mattis Vulputate" icon={MedalOutline}>
			At varius vel pharetra vel turpis nunc eget. Ipsum dolor sit amet consectetur. Blandit libero
			volutpat sed cras ornare arcu dui.
		</Card>
		<Card title="Diam Sollicitudin" icon={TrophyOutline}>
			Ultricies mi eget mauris pharetra et ultrices neque. Fusce ut placerat orci nulla pellentesque
			dignissim enim.
		</Card>
		<Card title="Etiam Tempor Orci" icon={TrophyOutline}>
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

	<!-- <Section title="Passions"></Section> -->
	<Section title="Languages">
		<ul class="grid grid-cols-2 gap-x-4 grid-">
			<li>
				<Rating label="German" rating="5" />
			</li>
			<li>
				<Rating label="Japanese" rating="3.5" />
			</li>
			<li>
				<Rating label="English" rating="4.5" />
			</li>
			<li>
				<Rating label="Spanish" rating="1.5" />
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
