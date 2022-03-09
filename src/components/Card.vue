<script>

	import Votes from './Votes.vue';

	import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

	export default {
		components: { Votes, FontAwesomeIcon },
		props: ['card_id'],
		data (){
			return {
				editing: false,
				new_name: ''
			}
		},
		mounted(){
			if(this.card.name == null) {
				this.editing = true
			}
		},
		computed: {
			card(){
				return this.$store.getters.card_for_id(this.card_id) || {};
			}
		},
		methods: {
			save_card(){
				if(this.new_name == '') return
				this.editing = false;
				this.$store.dispatch('update_card_name', {id: this.card_id, name: this.new_name });
			},
			edit_card(){
				this.editing = true;
				this.new_name = this.card.name;
			},
			delete_card(){
				if(confirm('Are you sure you want to delete this card?')) {
					this.$store.dispatch('delete_card', this.card_id);
				}
			}
		}
	}

</script>

<template>

	<div class="card">

		<p class="name" v-if="!editing">
			{{card.name}}
		</p>

		<div v-if="editing" class="form">
			<input type="text" v-model="new_name" @keyup.enter="save_card" />
			<button @click="save_card"><font-awesome-icon icon="check" /></button>
		</div>

		<div v-if="!editing" class="bottom-row">
			<Votes :card_id="card_id" />

			<div class="card-buttons">
				<font-awesome-icon class="edit" @click="edit_card" icon="pencil" />
				<font-awesome-icon class="delete" @click="delete_card" icon="trash" />
			</div>
		</div>

	</div>

</template>

<style scoped lang="scss">
	.card {
		padding: $gutter;
		@include border-sharp;
		margin: -1px;
		background-color: $colour_secondary;

		.form {
			display: flex;
			padding-bottom: $gutter;

			input {
				width: 100%;
				flex-grow: 1;
				font-size: 1.25rem;
				@include border-sharp;
				padding: $gutter;
			}
		}

		p {
			font-size: 1.25rem;

		}

		.bottom-row {
			display: flex;
			justify-content: space-between;
			svg {
				display: none;
				font-size: 1rem;
				margin-left: $gutter-half;
				color: $colour-text-light;
				cursor: pointer;

				&:hover{
					color: $colour-text;
				}
			}
		}

		&:hover {
			.bottom-row svg {
				display: inline;
			}
		}

		button {
			@include button;
		}
	}
</style>