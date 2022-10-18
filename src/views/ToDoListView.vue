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

</style>