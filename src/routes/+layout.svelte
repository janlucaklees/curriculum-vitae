<script>
	import './styles.scss';
</script>

<div class="app">
	<main class="flex flex-row-reverse justify-end mx-auto mt-8 mb-8">
		<slot />
	</main>
</div>

<style lang="postcss">
	main {
		width: 210mm;
		height: 297mm;

		background-color: #fffffb;
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
		}
	}
</style>
