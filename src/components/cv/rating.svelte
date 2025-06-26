<script>
	export let label;
	export let rating;
</script>

<div class="flex gap-2 justify-between items-center">
	<p class="mb-1 font-light">{label}</p>
	<div class="flex gap-1 mb-1">
		{#each { length: 5 } as _, i}
			<div class="overflow-hidden w-3 bg-white rounded-full border border-rating aspect-square">
				<div
					style="width: {Math.min(Math.max(0, rating - i), 1) * 100}%;"
					class="h-full bg-rating"
				></div>
			</div>
		{/each}
	</div>
</div>
