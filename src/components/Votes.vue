<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['card_id', 'votes'],
    computed: mapGetters([
      'votes_for_card', 'number_of_current_user_votes_for_card'
    ]),
    methods: mapActions([
      'add_vote', 'remove_vote'
    ])
  }

</script>

<template>

  <div class="votes">

    <div v-for="vote in votes_for_card(card_id)" @click="remove_vote(vote.id)" class="vote">&times;</div>
    <div v-if="number_of_current_user_votes_for_card(card_id) == 0" class="vote vote--add" @click="add_vote(card_id)">+</div>

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