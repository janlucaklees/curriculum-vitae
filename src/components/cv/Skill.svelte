<script lang="ts">
	export let title;
	export let summary: string | undefined = undefined;
	export let points: string[] = [];
</script>

<section class="flex flex-col">
	<h3 class="text-xl font-normal leading-none text-experience">
		{title}
	</h3>

	{#if summary}
		<p class="mt-1">
			{@html summary}
		</p>
	{/if}

	{#if points.length}
		<ul class="flex flex-col gap-1 mt-2 pl-2">
			{#each points as point}
				<li class="relative pl-1.5 before:absolute before:-left-1.5 before:content-['-']">
					{point}
				</li>
			{/each}
		</ul>
	{/if}
</section>
