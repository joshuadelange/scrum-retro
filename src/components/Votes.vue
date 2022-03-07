<script>

  import { mapGetters, mapActions } from 'vuex'

  export default {
    props: ['card_id', 'votes'],
    computed: mapGetters([
      'votes_for_card'
    ]),
    methods: mapActions([
      'add', 'remove'
    ])
  }

</script>

<template>

  <div class="votes">

    <div v-for="vote in votes_for_card(card_id)" @click="remove(vote.id)" class="vote">&times;</div>
    <div class="vote vote--add" @click="add(card_id)">+</div>

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