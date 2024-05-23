<script>
	export let tags;

	const shuffledTags = shuffle(tags);

	function shuffle(arr) {
		return arr
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value);
	}

	function hash(string) {
		return (
			string.split('').reduce((sum, char, i) => sum + ((i + 1) * char.charCodeAt(0)) / 256, 0) % 1
		);
	}
</script>

<div class="flex flex-wrap gap-x-2 justify-center items-center">
	{#each shuffledTags as tag}
		<div
			style="font-size: {0.25 + tag.rating / 2.5}rem; position: relative; top: {hash(tag.label)}rem"
		>
			{tag.label}
		</div>
	{/each}
</div>
