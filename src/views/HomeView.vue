<template>
  <div class="home-page">
    <h1>The Utility Effect</h1>
    <Countdown date="13 January, 2023" />
  </div>
</template>

<script>
  import Countdown from '@/components/Countdown.vue';

    export default {
      name: "HomeView",
      components: { Countdown }
  }
</script>

<style lang="scss">
  @media only screen and (min-width: 0){
    h1{
      font-size: 30px;
      text-align: center;
      margin-top: 50px;
    }
  }
</style>