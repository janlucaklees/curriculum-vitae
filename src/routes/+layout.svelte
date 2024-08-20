<script lang="ts">
	import './styles.scss';
</script>

<div class="app">
	<main class="flex flex-row-reverse justify-end items-stretch mx-auto mt-8 mb-8">
		<slot />
	</main>
</div>

<style lang="postcss">
	main {
		width: 210mm;
		min-height: 297mm;
		/* height: 297mm; */
		overflow: hidden;

		background-color: var(--page);
		box-shadow:
			rgba(0, 0, 0, 0.25) 0px 14px 28px,
			rgba(0, 0, 0, 0.22) 0px 10px 10px;
	}

	@page {
		margin: 0;
		padding: 0;
		size: A4;
	}

	@media print {
		main {
			width: 100vw;
			height: 100vh;

			margin: 0 !important;

			box-shadow: none !important;
		}
	}
</style>
