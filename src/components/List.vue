<script>

  import Card from './Card.vue';

  export default {
    props: ['name'],
    components: { Card },
    data() {
      return {
        cards: [
          {'name': 'bla 1'},
          {'name': 'bla 2'},
          {'name': 'bla 3'}
        ]
      }
    }
  }

</script>

<template>

  <div class="list">

    <h2>{{name}}</h2>

    <div class="cards">
      <Card v-for="card in cards" :name="card.name" />
    </div>

  </div>

</template>

<style scoped lang="scss">

  .list {

    flex: 1;

    margin: $gutter;

    background-color: $colour-primary;

    @include border-soft;

    h2 {
      display: block;
      margin: $gutter;
      color: $colour-primary-dark;
      font-weight: $font-weight-medium;
    }
  }
</style>
