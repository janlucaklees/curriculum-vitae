<script lang="ts">
	import { locale, changeLocale, supportedLocales } from '../stores/locale';

	function handleLocaleChange(event) {
		changeLocale(event.target.value);
	}
</script>

<select on:change={handleLocaleChange}>
	{#each supportedLocales as supportedLocale}
		<option value={supportedLocale.code}>
			{supportedLocale.label}
		</option>
	{/each}
</select>
