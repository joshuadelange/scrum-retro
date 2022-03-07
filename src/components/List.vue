<script>

  import { mapGetters, mapActions } from 'vuex';

  import Card from './Card.vue';

  export default {
    props: ['id', 'name'],
    components: { Card },
    computed: mapGetters([
      'cards_for_category'   
    ]),
    methods: mapActions([
      'add_card'
    ])
  }

</script>

<template>

  <div class="list">

    <h2>{{name}}</h2>

    <div class="cards">
      <Card v-for="card in cards_for_category(id)" :id="card.id" />
    </div>

    <button @click="add_card(id)">Add card</button>

  </div>

</template>

<style scoped lang="scss">

  .list {

    flex: 1;
    align-self: flex-start;

    margin: $gutter;

    background-color: $colour-primary;
    @include border-soft;

    h2 {
      display: block;
      margin: $gutter;
      color: $colour-primary-dark;
      font-weight: $font-weight-medium;
      font-size: 1rem;
    }

    button {
      margin: $gutter_half;
    }
  }
</style>
