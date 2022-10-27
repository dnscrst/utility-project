<template>
    <div class="todolist-page main-grid">
      <main>
        <ToDoList />
        <h2>{{showthis}}</h2>
      </main>
    </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue';
    export default {
    name: "ToDoListView",
    components: { ToDoList },
    computed: {
      showthis() {
        return this.$store.state.mesagerul
      }
    }
}
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";
  .todolist-page {
    background-image: url("../assets/background.png");
    height: 100%;
  }

</style>