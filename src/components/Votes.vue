<script>

	export default {
		props: ['votes'],
		mounted() {
			console.log('mounted', this.votes);
		}
	}

</script>

<template>

	<div class="votes">

		<div v-for="vote in votes" class="vote">&times;</div>
		<div class="vote vote--add">+</div>

	</div>

</template>

<style scoped lang="scss">
	.votes {
		display: flex;

		.vote {

			width: 20px;
			height: 20px;
			border-radius: 10px;

			margin-right: $gutter-quarter;

			text-align: center;
			line-height: 1rem;

			cursor: pointer;

			@include dot-filled;

			&:hover {
				@include dot-empty;
			}
		}

		.vote--add {
			@include dot-empty;

			&:hover {
				@include dot-filled;
			}
		}

	}
</style>