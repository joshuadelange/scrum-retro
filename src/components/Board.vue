<script>
  import List from './List.vue'

  export default {
    components: { List },
    data() {
      return {
        message: 'test',
        lists: [
          {
            name: 'Good',
            cards: [
              { name: 'API finally pushed to prod' },
              { name: 'Designer on board' }
            ]
          },
          {
            name: 'Bad',
            cards: [
              { name: 'Wait too long for team to respond to Slack' },
              { name: 'Sprint goal unclear' },
              { name: 'Too many tickets waiting for PO review' }
            ]
          },
          {
            name: 'Actions',
            cards: [
              { name: 'Plan daily huddle at 11:00' }
            ]
          },
          {
            name: 'Ideas',
            cards: [
              { name: 'Invite stakeholders to demos more often?' }
            ]
          }
        ]
      }
    }
  }

</script>

<template>

  <div class="lists">
    <List v-for="list in lists" :name="list.name" :cards="list.cards" />
  </div>

</template>

<style scoped>

  .lists {
    display: flex;
  }

</style>
