<script>
	export let icon;
</script>

<span class="flex gap-1 items-start">
	<span class="pr-[0.1em]">
		<svelte:component
			this={icon}
			size="1em"
		/>
	</span>

	<slot />
</span>
