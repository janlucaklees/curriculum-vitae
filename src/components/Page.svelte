<div class="page">
	<slot />
</div>

<style lang="postcss">
	.page {
		width: 210mm;
		height: 297mm;
		overflow: hidden;

		background-color: var(--page);
		box-shadow:
			var(--shadow) 0px 14px 28px,
			var(--shadow) 2px 5px 10px;
	}

	@page {
		margin: 0;
		padding: 0;
		size: A4;
	}

	@media print {
		.page {
			width: 100vw;
			height: 100vh;

			margin: 0 !important;

			box-shadow: none !important;

			page-break-after: always;
		}
	}
</style>
