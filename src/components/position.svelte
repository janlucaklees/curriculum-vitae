<script>
	export let jobTitle;
	export let start;
</script>

<section class="mb-4">
	<div class="flex justify-between items-end">
		<h3 class="text-lg">{jobTitle}</h3>
		<div>{start}</div>
	</div>

	<slot />
</section>
