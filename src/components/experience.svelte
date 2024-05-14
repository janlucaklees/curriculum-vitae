<script>
	export let jobTitle;
	export let companyName;
	export let location;
	export let duration;
</script>

<section class="mb-4">
	<div class="flex justify-between items-end">
		<h3 class="text-xl">{jobTitle}</h3>
		<div>{duration}</div>
	</div>

	<div class="flex justify-between items-end">
		<h3 class="text-lg text-subline">{companyName}</h3>
		<div>{location}</div>
	</div>

	<slot />
</section>
