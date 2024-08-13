<script>
	export let title;
</script>

<section class="mb-4">
	<h2 class="mb-0 text-2xl font-medium leading-none uppercase">{title}</h2>
	<hr class="mb-2 border-0 border-b line" />
	<slot />
</section>

<style>
	.line {
		border-color: var(--color);
	}
</style>
