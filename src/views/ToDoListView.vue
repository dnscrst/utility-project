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
    components: { ToDoList }
}
</script>

<style lang="scss">

</style>