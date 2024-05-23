<script>
	export let companyName;
	export let location;
	export let start;
	export let end;
</script>

<section class="mb-4">
	<h3 class="text-xl text-subline">{companyName}</h3>

	<div class="flex gap-2">
		<div>{location}</div>
		&middot;
		<div>{start} - {end}</div>
	</div>

	<slot />
</section>
