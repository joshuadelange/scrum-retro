<script setup>
  import Board from './components/Board.vue'
</script>

<template>

  <Board />

</template>

<style lang="scss">

  * {
    box-sizing: border-box;
  }

  body {
    background: $colour-tertiary;
    color: $colour-text;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #app {
    padding: $gutter;
  }

</style>
