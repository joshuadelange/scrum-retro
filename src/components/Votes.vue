<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['card_id'],
    computed: mapGetters([
      'votes_for_card'
    ]),
    methods: mapActions([
      'add_vote', 'remove_vote'
    ])
  }

</script>

<template>

  <div class="votes">

    <div v-for="vote in votes_for_card(card_id)" @click="remove_vote(vote.id)" class="vote">&times;</div>
    <div class="vote vote--add" @click="add_vote(card_id)">+</div>

  </div>

</template>

<style scoped lang="scss">
  .votes {
    display: flex;

    .vote {

      width: 22px;
      height: 22px;
      border-radius: 11px;

      margin-right: $gutter-quarter;

      text-align: center;
      line-height: 1.2rem;

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