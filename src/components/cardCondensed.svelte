<script>
	export let icon;
	export let title;
</script>

<section class="mb-3">
	<svelte:component
		this={icon}
		size="15"
		class="float-left mr-1"
	/>
	<h3 class="mb-1 text-xl leading-tight">
		{@html title}
	</h3>

	<p class="font-light leading-tight">
		<slot />
	</p>
</section>
