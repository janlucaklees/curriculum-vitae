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
</style>
