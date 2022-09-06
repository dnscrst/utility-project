<template>
    <div class="todolist-page">
      <main>
        <h1>Todo App</h1>
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