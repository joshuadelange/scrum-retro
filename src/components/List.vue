<script>

  import { mapGetters } from 'vuex';

  import Card from './Card.vue';

  export default {
    props: ['id', 'name'],
    components: { Card },
    computed: mapGetters([
      'cards_for_category'   
    ])
  }

</script>

<template>

  <div class="list">

    <h2>{{name}}</h2>

    <div class="cards">
      <Card v-for="card in cards_for_category(id)" :id="card.id" :name="card.name" />
    </div>

    <button>Add card</button>

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
  }
</style>
