<template>
  <main class="app main-grid" >
    <NavBar />
    <router-view/>
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';

  
  export default {
    name: "App",
    components: { NavBar }
}
</script>

<style lang="scss">
  .app{
    height: 100%;
  }
</style>

