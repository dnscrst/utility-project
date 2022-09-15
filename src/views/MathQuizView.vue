<template>
  <div class="math-quiz-page center relative">
   <button @click="handleQuiz" class="start-button">START QUIZ</button>
    <Quiz v-if="startQuiz"
          class="absolute-z"
          @handleExit="startQuiz=false"
    />
  </div>

</template>

<script>
import Quiz from "@/components/Quiz";
export default {
    name: 'MathQuizView',
  components: {Quiz},

  data() {
      return {
        startQuiz: false
      }
    },

    methods: {
    handleQuiz() {
      this.startQuiz = !this.startQuiz
    }
    }
}
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
.start-button{
  margin-top: 18%;
  padding: 30px 40px;
  border: none;
  border-radius: 5px;
  background-color: lightblue;
}
</style>