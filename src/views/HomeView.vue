<template>
  <div class="home-page">
    <main>
      <h1>The Utility Effect</h1>
      <Countdown date="13 January, 2023" />
      <BasicHomeComp />
    </main> 
  </div>
</template>

<script>
  import Countdown from '@/components/Countdown.vue';
import BasicHomeComp from '@/components/BasicHomeComp.vue';

    export default {
      name: "HomeView",
      components: { Countdown, BasicHomeComp }
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