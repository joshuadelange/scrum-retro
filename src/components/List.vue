<script>

  import Card from './Card.vue';

  export default {
    props: ['name', 'cards'],
    components: { Card },
    data() {
      return {
      }
    }
  }

</script>

<template>

  <div class="list">

    <h2>{{name}}</h2>

    <div class="cards">
      <Card v-for="card in cards" :name="card.name" :votes="card.votes" />
    </div>

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
