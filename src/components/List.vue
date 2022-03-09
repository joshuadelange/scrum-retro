<script>

  import { mapGetters, mapActions } from 'vuex';

  import Card from './Card.vue';

  export default {
    props: ['category_id'],
    components: { Card },
    computed: {
      category(){
        return this.$store.getters.category_for_id(this.category_id);
      },
      ...mapGetters([
        'cards_for_category', 'category_for_id'   
      ])
    },
    methods: mapActions([
      'add_card'
    ])
  }

</script>

<template>

  <div class="list">

    <h2>{{category.name}}</h2>

    <div class="cards">
      <Card v-for="card in cards_for_category(category_id)" :card_id="card.id" />
    </div>

    <button @click="add_card(category_id)">Add card</button>

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
      color: $colour-text;
      font-weight: $font-weight-medium;
      font-size: 1rem;
    }

    button {
      margin: $gutter_half;
      @include button;
    }
  }
</style>
