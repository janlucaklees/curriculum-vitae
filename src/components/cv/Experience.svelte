<script>
	import { format } from 'date-fns';

	export let title;
	export let info;
	export let description;
	export let items;
</script>

<section class="flex flex-col">
	<!-- Positions -->
	{#each items as item}
		<!-- Title and dates -->
		<div class="flex items-baseline">
			<h4 class="text-xl font-normal leading-none text-experience">
				{item.title}
			</h4>

			<div class="leading-none text-right ml-auto">
				{#if item.start && item.end}
					{format(item.start, 'MMM yyyy')} - {format(item.end, 'MMM yyyy')}
				{:else if item.start}
					since {format(item.start, 'MMM yyyy')}
				{:else if item.end}
					until {format(item.end, 'MMM yyyy')}
				{/if}
			</div>
		</div>

		<!-- Text description -->
		{#if item.summary}
			<p class="mt-1">
				{@html item.summary}
			</p>
		{/if}

		<!-- Bulletpoints -->
		{#if item.points}
			<ul class="flex flex-col gap-1 mt-2 pl-2">
				{#each item.points as point}
					<li class="relative pl-1.5 before:absolute before:-left-1.5 before:content-['-']">
						{point}
					</li>
				{/each}
			</ul>
		{/if}
	{/each}

	<footer class="mt-2 text-company">
		<!-- Company title and info -->
		<div class="flex items-baseline">
			<h3 class="leading-none flex items-baseline">
				<span class="opacity-75 leading-none relative -top-0.5 mr-0.5">@</span>
				<span class="">{title}</span>
			</h3>

			{#if info}
				<ul class="flex text-sm">
					{#each info as item}
						<li class="leading-none ml-2 flex">
							&bull;
							<span class="pl-2">
								{item}
							</span>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<!-- Company description -->
		{#if description}
			<div class="text-sm text-justify leading-tight mt-0.5">
				{@html description}
			</div>
		{/if}
	</footer>
</section>
