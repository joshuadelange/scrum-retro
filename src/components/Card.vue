<script>

	import Votes from './Votes.vue';

	export default {
		components: { Votes },
		props: ['name', 'votes'],
		mounted() {
			console.log('mounted');
			console.log(this.votes);
		}
	}

</script>

<template>

	<div class="card">

		<p>{{name}}</p>

		<Votes :votes="votes" />

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