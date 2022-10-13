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
  body {
    //background: url('../assets/BaseIcons/backgroundTLF.png') no-repeat center center fixed;
    //-moz-background-size: cover;
    //-webkit-background-size: cover;
    //-o-background-size: cover;
    //background-size: cover;
    h1 {
      text-align: center;
      padding-top: 35px;
  }
 }
}
</style>