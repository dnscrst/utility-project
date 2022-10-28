<template>
    <div class="todolist-page main-grid">
      <main>
        <ToDoList />
      </main>
    </div>
</template>

<script>
  import ToDoList from '@/components/ToDoList.vue';
  export default {
    name: "ToDoListView",
    components: { ToDoList },
  }
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";

  @media only screen and (min-width: 0px) {
    .todolist-page {
      background-image: url("../assets/background.png");
      height: 100%;
    }
  }
</style>