<script>
	import './styles.scss';
</script>

<div class="app">
	<main class="flex mx-auto mt-5 shadow-2xl">
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
