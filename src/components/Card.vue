<script>

	export default {
		props: ['name']
	}

</script>

<template>

	<div class="card">

		<p>{{name}}</p>

	</div>

</template>

<style scoped lang="scss">
	.card {
		padding: $gutter;
		@include border-sharp;
		margin: -1px;
		background-color: $colour_secondary;
	}
</style>