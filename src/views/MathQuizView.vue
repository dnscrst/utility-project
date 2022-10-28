<template>
  <div class="math-quiz-page center">
    <div :class="!startQuiz ? 'quiz-start' : ''"
          v-if="!startQuiz">
      <h3>MATH QUIZ</h3>
      <p>{{ welcome.body }}</p>
      <button @click="handleQuiz"
              class="base-button start-quiz">
        START QUIZ
      </button>
    </div>
    <Quiz v-else
          @handleExit="startQuiz=false"
          :data="data"/>
  </div>

</template>

<script>
  import Quiz from "@/components/Quiz";
  export default {
    name: 'MathQuizView',
    components: {Quiz},
    data () {
      return {
        startQuiz: false,
      }
    },

    computed: {
      data () {
        return this.$store.state.data.quiz
      },
      welcome () {
        return this.$store.state.welcome
      }
    },

    methods: {
      handleQuiz () {
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
  @import "src/styles/vars.scss";

  @media only screen and (min-width: 0){
    .math-quiz-page {
      flex-direction: column;
      height: 100%;
      background-image: url("../assets/background.png");
      .quiz-start {
        background-color: $dark-blue;
        color: white;
        padding: 50px 40px;
        margin: 20px 0;
        .start-quiz {
          background-color: $light-blue;
          color: white;
          animation: pulse;
          animation-duration: 1.5s;
          animation-iteration-count: infinite;
          &:hover {
            animation: green-button 4s ease-in;
          }
       }
        h3 {
          margin: 10px auto 30px;
        }
        p {
          line-height: 1.8;
          font-size: 17px;
          margin: 0 auto;
        }
      }
    }
  }
  @media only screen and (min-width: 1140px){
    .start-button{
      margin-top: 18%;
    }
  }
</style>