<template>
  <div class="math-quiz-page center relative">
   <button @click="handleQuiz" class="start-button">START QUIZ</button>
    <Quiz v-if="startQuiz"
          class="absolute-z"
          @handleExit="startQuiz=false"
          :data="data"/>

  </div>

</template>

<script>
import Quiz from "@/components/Quiz";
export default {
    name: 'MathQuizView',
  components: {Quiz},

  data() {
      return {
        startQuiz: false,
        // quiz: {
        //   id: null,
        //   text: '' ,
        //   responses: [
        //     { a: '' },
        //     { b: '' },
        //     { c: '' },
        //     { d: '' }
        //   ]
        // }

      }
    },
    computed: {
      data() {
        return this.$store.state.data.quiz
      }
    },
  // created() {
  //   this.$store.dispatch("get_quiz")
  // },
    methods: {
    handleQuiz() {
      if (!this.startQuiz) {
        this.startQuiz = true
        this.$store.dispatch("get_quiz")
      }
      else{
        this.startQuiz = false
      }
    }
    }
}
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@media only screen and (min-width: 0){
  .math-quiz-page{
    flex-direction: column;
    height: 100%;
    .start-button{
      text-align: center;
      padding: 32px 0;
      border: none;
      border-radius: 5px;
      background-color: lightblue;
      height: 74px;
      width: 140px;
      margin: 0 auto;
  }

  }
}
@media only screen and (min-width: 768px){
  .start-button{

  }
}
@media only screen and (min-width: 1140px){
  .start-button{
    margin-top: 18%;
  }
}

</style>