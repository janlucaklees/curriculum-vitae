<script lang="ts">
	import hash from '$lib/hash';

	export let skills: Array<SkillType>;

	export let minProficiency: number = 1;
	export let maxProficiency: number = 5;

	export let minFontSize: number = 0.6;
	export let maxFontSize: number = 1.4;

	export let minFontWeight: number = 100;
	export let maxFontWeight: number = 450;

	export let sortSeed: number = 42;
	export let positionSeed: number = 1337;
	export let positionSpread: number = 1.2;

	const shuffledSkills = deterministicShuffle(skills);

	function deterministicShuffle(arr: Array<SkillType>) {
		return arr.sort((a, b) => hash(a.label, sortSeed) - hash(b.label, sortSeed));
	}

	function getFontSize({ proficiency }: SkillType) {
		return project(proficiency, minProficiency, maxProficiency, minFontSize, maxFontSize);
	}

	function getFontWeight({ proficiency }: SkillType) {
		return project(proficiency, minProficiency, maxProficiency, minFontWeight, maxFontWeight);
	}

	function getTop({ label }: SkillType) {
		return (hash(label, positionSeed) - 0.5) * positionSpread;
	}

	function project(
		value: number,
		minValue: number,
		maxValue: number,
		minRange: number,
		maxRange: number
	) {
		if (value <= minValue) {
			return minRange;
		}

		if (value >= maxValue) {
			return maxRange;
		}

		const valueRange = maxValue - minValue;
		const valueInPercent = (value - minValue) / valueRange;
		const rangeRange = maxRange - minRange;

		return valueInPercent * rangeRange + minRange;
	}
</script>

<div class="flex flex-wrap gap-x-2 justify-between items-center leading-none">
	{#each shuffledSkills as skill}
		<div
			class="relative"
			style="
				font-size: {getFontSize(skill)}rem;
				font-weight: {getFontWeight(skill)};
				top: {getTop(skill)}rem;
			"
		>
			{skill.label}
		</div>
	{/each}
</div>
