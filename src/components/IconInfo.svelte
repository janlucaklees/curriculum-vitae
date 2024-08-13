<script>
	export let icon;
</script>

<span class="flex gap-1 items-start">
	<span class="pt-[0.08em]">
		<svelte:component
			this={icon}
			size="11"
		/>
	</span>

	<slot />
</span>
