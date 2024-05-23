<script>
	export let tags;

	export let sortSeed = 4;
	export let sizeMin = 0.5;
	export let sizeMax = 1;
	export let positionSeed = 15;
	export let positionSpread = 1.2;

	const shuffledTags = deterministicShuffle(tags);

	function deterministicShuffle(arr) {
		return arr.sort((a, b) => hash(a.label, sortSeed) - hash(b.label, sortSeed));
	}

	function hash(string, seed = 1) {
		return (
			string.split('').reduce((sum, char, i) => sum + ((i + seed) * char.charCodeAt(0)) / 256, 0) %
			1
		);
	}

	function getSize(value) {
		return sizeMin + (value / 5) * sizeMax;
	}

	function getTop(value) {
		return (hash(value, positionSeed) - 0.5) * positionSpread;
	}
</script>

<div class="flex flex-wrap gap-x-2 justify-between items-center leading-none">
	{#each shuffledTags as tag}
		<div
			class="relative"
			style="font-size: {getSize(tag.rating)}rem; top: {getTop(tag.label)}rem"
		>
			{tag.label}
		</div>
	{/each}
</div>
