<template>
    <div class="todolist-page main-grid">
      <main>
        <h1>To do app</h1>
        <ToDoList />
      </main>
    </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue';
    export default {
    name: "ToDoListView",
    components: { ToDoList }
}
</script>

<style lang="scss">

</style>