<script lang="ts">
	export let title: string;
</script>

<section class="">
	<h2
		class="text-section uppercase text-sm font-normal border-b-2 border-section pb-0.5 mb-4 leading-none"
	>
		{title}
	</h2>
	<slot />
</section>
