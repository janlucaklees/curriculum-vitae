<script lang="ts">
	import { onMount } from 'svelte';

	import { selectedTheme, changeTheme, supportedThemes } from '../stores/theme';

	function handleThemeChange(event) {
		changeTheme(event.target.value);
		setTheme();
	}

	onMount(() => {
		setTheme();
	});

	function setTheme() {
		Object.entries(supportedThemes[$selectedTheme].cssVariables).forEach(([name, value]) => {
			document.documentElement.style.setProperty(`--${name}`, value);
		});
	}
</script>

<select on:change={handleThemeChange}>
	{#each Object.entries(supportedThemes) as [key, supportedTheme]}
		<option
			value={key}
			selected={key === $selectedTheme}
		>
			{supportedTheme.name}
		</option>
	{/each}
</select>
