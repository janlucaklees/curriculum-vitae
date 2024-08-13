<script>
	import { add, differenceInCalendarMonths, format, compareDesc } from 'date-fns';
	import { CaretForward, Ellipse, EllipseOutline, TrophyOutline } from 'svelte-ionicons';

	export let className = '';
	export let companyName;
	export let location;
	export let end = Date.now();
	export let positions;

	const endDate = add(end, { months: 1 });
	const preparedPositions = preparePositions(positions, endDate);
	const startDate = preparedPositions[preparedPositions.length - 1].start;

	function getDuration(startDate, endDate) {
		let durationInMonths = differenceInCalendarMonths(endDate, startDate);

		const years = Math.trunc(durationInMonths / 12);
		const months = durationInMonths % 12;

		let ret = '';

		if (years > 0) {
			ret += `${years} yrs `;
		}

		if (months > 0) {
			ret += `${months} mos `;
		}

		return ret;
	}

	function preparePositions(positions, end) {
		// Sort the positions by start date.
		positions.sort((a, b) => compareDesc(a.start, b.start));

		// Set end dates for each position.
		let currentEnd = end;
		positions.forEach((position) => {
			position.end = currentEnd;
			currentEnd = position.start;
		});

		// Determine whether the position has success stories.
		positions.forEach((position) => {
			position.hasSuccessStories =
				Array.isArray(position.successStories) && position.successStories.length > 0;
		});

		return positions;
	}
</script>

<section class="mb-3 {className}">
	<header class="flex items-baseline mb-1">
		<h3 class="text-lg leading-none text-subline">
			{companyName}
		</h3>

		<p class="ml-2 leading-none text-gray-300">
			{getDuration(startDate, endDate)}
		</p>

		<div class="ml-auto leading-none text-gray-500">
			{location}
		</div>
	</header>

	{#each preparedPositions as position}
		<div class="mb-2">
			<div class="flex items-baseline">
				<h3 class="mb-1 text-xl leading-none">
					{position.jobTitle}
				</h3>

				{#if positions.length > 1}
					<p class="ml-2 leading-none text-gray-300">
						{getDuration(position.start, position.end)}
					</p>
				{/if}

				<p class="ml-auto leading-none">
					<span class="text-gray-300">
						{position.employmentType}
						since
					</span>
					{format(position.start, 'LL/yyyy')}
				</p>
			</div>

			<p class="font-light leading-tight">
				{position.description}
			</p>
			{#if position.hasSuccessStories}
				<ul class="">
					{#each position.successStories as successStory}
						<li class="relative pl-3 mt-1 font-light leading-tight">
							<span class="absolute left-0 top-[0.25em]">
								<CaretForward size="7" />
							</span>
							{successStory}
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</section>
