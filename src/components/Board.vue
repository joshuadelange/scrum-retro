<script>
  import List from './List.vue'

  export default {
    components: { List },
    data() {
      return {
        message: 'test',
        lists: [
          { name: 'Good' },
          { name: 'Bad' },
          { name: 'Actions' },
          { name: 'Ideas' }
        ]
      }
    }
  }

</script>

<template>

  <div class="lists">
    <List v-for="list in lists" :name="list.name" />
  </div>

</template>

<style scoped>

  .lists {
    display: flex;
  }

</style>
