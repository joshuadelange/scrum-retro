<script>

	import Votes from './Votes.vue';

	export default {
		components: { Votes },
		props: ['id', 'name']
	}

</script>

<template>

	<div class="card">

		<p>{{name}}</p>

		<Votes :card_id="id" />

	</div>

</template>

<style scoped lang="scss">
	.card {
		padding: $gutter;
		@include border-sharp;
		margin: -1px;
		background-color: $colour_secondary;

		p {
			font-size: 1.25rem;
		}
	}
</style>