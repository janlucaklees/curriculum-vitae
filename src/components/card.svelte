<script>
	export let icon;
	export let title;
</script>

<section class="flex mb-2">
	<div class="pt-1 mr-1">
		<svelte:component this={icon} size="17" />
	</div>

	<div>
		<h3 class="mb-1 text-xl">
			{title}
		</h3>

		<p>
			<slot />
		</p>
	</div>
</section>
