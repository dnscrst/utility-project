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
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@import "src/styles/vars.scss";

  .app{
    height: 100%;
  }
</style>

