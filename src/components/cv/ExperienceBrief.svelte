<script>
	import { format } from 'date-fns';

	export let title;
	export let items;
</script>

<section class="">
	{#each items as item}
		<div class="flex items-baseline">
			<h4 class="text-xl font-normal leading-none text-experience">
				{item.title}
			</h4>

			{#if title}
				<h3 class="leading-none flex items-baseline ml-4">
					<span class="opacity-75 leading-none relative -top-0.5 mr-0.5">@</span>
					<span class="text-company">{title}</span>
				</h3>
			{/if}

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
	{/each}
</section>
