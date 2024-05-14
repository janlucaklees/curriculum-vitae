<script>
	export let title;
</script>

<section class="mb-8">
	<h2 class="mb-1 text-2xl uppercase">{title}</h2>
	<hr class="mb-2 border-0 border-b line" />
	<slot />
</section>

<style>
	.line {
		border-color: var(--color);
	}
</style>
