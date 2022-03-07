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
              { name: 'API finally pushed to prod' , votes: [{ voter: 'guest' }]},
              { name: 'Designer on board', votes: [{ voter: 'guest' }] }
            ]
          },
          {
            name: 'Bad',
            cards: [
              { name: 'Wait too long for team to respond to Slack' , votes: [{ voter: 'guest' }, { voter: 'guest' }]},
              { name: 'Sprint goal unclear' , votes: [{ voter: 'guest' }]},
              { name: 'Too many tickets waiting for PO review', votes: [{ voter: 'guest' }] }
            ]
          },
          {
            name: 'Actions',
            cards: [
              { name: 'Plan daily huddle at 11:00', votes: [{ voter: 'guest' }] }
            ]
          },
          {
            name: 'Ideas',
            cards: [
              { name: 'Invite stakeholders to demos more often?', votes: [{ voter: 'guest' }] }
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
