<script lang="ts">
	export let label: string;
	export let value: string;
	export let href: string | undefined = undefined;
</script>

<tr>
	<th class="align-top font-light text-left p-0 pr-4 w-1/3">
		{label}
	</th>
	<td class="p-0 pb-2 w-2/3 font-normal">
		{#if href}
			<a {href}>
				{@html value}
			</a>
		{:else}
			{@html value}
		{/if}
	</td>
</tr>
