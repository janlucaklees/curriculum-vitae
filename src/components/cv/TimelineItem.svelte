<script>
	import { format } from 'date-fns';

	export let title;
	export let position;
	export let start;
	export let end;

	export let isBreak = false;
</script>

<section class="">
	<h4 class="leading-none text-experience font-normal">
		{@html position}
	</h4>

	<div class="flex items-baseline mt-1.5">
		{#if title}
			<h3 class="leading-none text-sm text-company flex items-baseline">
				{#if !isBreak}
					<span class="opacity-75 leading-none relative -top-0.5 mr-0.5">@</span>
				{/if}
				<span class="">{@html title}</span>
			</h3>
		{/if}

		<div class="leading-none text-right ml-auto text-sm">
			{#if start && end}
				{format(start, 'MMM yyyy')} - {format(end, 'MMM yyyy')}
			{:else if start}
				since {format(start, 'MMM yyyy')}
			{:else if end}
				until {format(end, 'MMM yyyy')}
			{/if}
		</div>
	</div>
</section>
