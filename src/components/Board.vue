<script>
  import List from './List.vue'

  import { mapState } from 'vuex'

  export default {
    components: { List },
    computed: mapState({
      categories: state => state.categories.all
    })
  }

</script>

<template>

  <div class="lists">
    <List v-for="category in categories" :category_id="category.id" />
  </div>

</template>

<style scoped>

  .lists {
    display: flex;
  }

</style>
