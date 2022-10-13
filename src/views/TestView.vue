<template>
    <div id="app" class="main-grid">
        <TicTacToe />
    </div>
  </template>

<script>
import TicTacToe from "../components/TicTacToe.vue";

    export default {
    name: "TestView",
    components: { TicTacToe },
}
</script>

<style lang="scss" scoped>

</style>