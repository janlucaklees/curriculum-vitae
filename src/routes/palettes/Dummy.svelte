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

<div
	class="page"
	bind:this={rootElement}
>
	<main class="flex flex-row justify-end items-stretch h-full">
		<div class="flex flex-col">
			<h1 class="text-5xl font-bold text-title leading-none px-8 pt-8 mb-3">Jan-Luca Klees</h1>

			<div class="text-2xl font-normal leading-tight px-8 mb-10">
				I create 10x the leverage by unblocking teams, aligning features with value, and simplifying
				complexity.
			</div>

			<div class="pl-8 pr-6">
				<section class="">
					<h2
						class="text-section uppercase text-sm font-normal border-b-2 border-section pb-0.5 mb-6 leading-none"
					>
						Relevant Experiences
					</h2>
					<div class="flex flex-col gap-6">
						<section class="flex flex-col">
							<div class="flex items-baseline">
								<h4 class="leading-none text-experience text-xl font-normal">
									Cross-functional Tech &amp; Product Lead
								</h4>
								<div class="leading-none text-right ml-auto opacity-75">Jan 2020 - Oct 2024</div>
							</div>

							<p class="mt-2">
								Originally hired as a frontend developer, I gradually took ownership of critical
								delivery functions — product ownership, project coordination, DevOps, Tech Lead. I
								stepped up where structure was missing, creating clarity, stability, and momentum in
								an environment.
							</p>

							<footer class="mt-3 text-company">
								<div class="flex items-baseline">
									<h3 class="leading-none flex items-baseline">
										<span class="leading-none relative -top-0.5 mr-0.5">@</span>
										<span class="">LEANATIC GmbH</span>
									</h3>
									<ul class="flex text-sm">
										<li class=" leading-none ml-2 flex">
											•
											<span class="pl-2">Boutique Software Agency</span>
										</li>
										<li class=" leading-none ml-2 flex">
											•
											<span class="pl-2">Remote</span>
										</li>
										<li class=" leading-none ml-2 flex">
											•
											<span class="pl-2">Less than 10 employees</span>
										</li>
									</ul>
								</div>
								<div class="text-sm opacity-75 text-justify leading-tight mt-0.5">
									Custom web apps and PIM systems for SMEs in residental construction, civil
									engineering, and insurance.
								</div>
							</footer>
						</section>
					</div>
				</section>
			</div>
		</div>

		<div
			class="flex flex-col py-8 px-6 w-1/3 shrink-0 bg-sidebar"
			bind:this={sidebarElement}
		>
			<section class="mb-14">
				<h2
					class=" mb-6 text-section border-b-2 border-section pb-0.5 mb-3 leading-none uppercase text-sm font-normal"
				>
					About Me
				</h2>
				<table class="w-full -mb-2">
					<tbody>
						<tr>
							<th class="align-top font-light text-left p-0 pr-4 w-1/3">Name</th>
							<td class="p-0 pb-2 w-2/3 font-normal"> Jan-Luca Elias Klees </td>
						</tr>
						<tr>
							<th class="align-top font-light text-left p-0 pr-4 w-1/3">Address</th>
							<td class="p-0 pb-2 w-2/3 font-normal">
								Hans-Hinrichs-Str. 2<br />32756 Detmold<br />Germany
							</td>
						</tr>
					</tbody>
				</table>
				<!--<InfoTable>-->
			</section>
			<section class="">
				<h2
					class=" mb-6 text-section border-b-2 border-section pb-0.5 mb-3 leading-none uppercase text-sm font-normal"
				>
					Career Timeline
				</h2>
				<div class="flex flex-col gap-5">
					<section class="">
						<h4 class="leading-none text-experience font-normal">
							Fatherhood, MBA,<br />Startup Exploration
						</h4>
						<div class="flex items-baseline mt-2">
							<h3 class="leading-none text-sm text-company flex items-baseline">
								<span class="">Sabbatical</span>
							</h3>
							<div class="leading-none text-right ml-auto text-sm opacity-75">since Nov 2024</div>
						</div>
					</section>
					<section class="">
						<h4 class="leading-none text-experience font-normal">
							➤ Cross-functional<br />Tech &amp; Product Lead
						</h4>
						<div class="flex items-baseline mt-2">
							<h3 class="leading-none text-sm text-company flex items-baseline">
								<span
									class="leading-none -mt-0.5 mr-0.5"
									data-svelte-h="svelte-afoxx7">@</span
								> <span class="">LEANATIC GmbH</span>
							</h3>
							<div class="leading-none text-right ml-auto text-sm opacity-75">
								Jan 2020 - Oct 2024
							</div>
						</div>
					</section>
				</div>
			</section>
		</div>
	</main>
</div>

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
