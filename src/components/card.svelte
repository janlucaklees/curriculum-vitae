<script>
	export let icon;
	export let title;
</script>

<section class="flex mb-3">
	<div class="mr-1">
		<svelte:component
			this={icon}
			size="17"
		/>
	</div>

	<div>
		<h3 class="mb-1 text-xl leading-tight">
			{@html title}
		</h3>

		<p class="font-light leading-tight">
			<slot />
		</p>
	</div>
</section>
