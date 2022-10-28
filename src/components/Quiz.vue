<template>
  <div class="quiz">
    <div v-if="this.ansId <= 10" class="math-quiz">
      <header >
        <span>Answer: {{ansId}}/10</span>
        <button  @click="handleExit">&#x2716;</button>
      </header>
      <div class="question-container"
           v-for="quiz in data"
           :key="quiz.id"
           v-if="quiz.id === ansId && !finished">
        <h2>{{quiz.id}}. {{ quiz.text }}</h2>
        <div class="answers center">
          <input type="radio"
                 name="answer"
                 v-model="selectedAnswer"
                 value="a"
                 id="a">
          <label for="a" id="a">{{quiz.responses[0].a}}</label>
          <input type="radio"
                 name="answer"
                 id="b"
                 value="b"
                 v-model="selectedAnswer">
          <label for="b" id="b">{{quiz.responses[1].b}}</label>
          <input type="radio"
                 name="answer"
                 v-model="selectedAnswer"
                 value="c"
                 id="c">
          <label for="c" id="c">{{quiz.responses[2].c}}</label>
          <input type="radio"
                 name="answer"
                 v-model="selectedAnswer"
                 value="d"
                 id="d">
          <label for="d" id="d">{{quiz.responses[3].d}}</label>
        </div>
        </div>
      <button id="next-answer"
              @click="handleAnswer">NEXT</button>
    </div>
    <div v-if="this.ansId > 10" class="quiz-finish center">
      <button v-if="!this.finished"
              id="send-answer"
              @click="handleResult">
        FINISH
      </button>
      <p v-else> {{ correct }} / 10 correct answers</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Quiz',
    props: [ 'data' ],

    data() {
      return{
        ansId: 1,
        selectedAnswer: '',
        answers: [],
        results: '',
        correct: 0,
        finished: false
      }
    },

    methods: {
      handleExit(){
        this.$emit('handleExit')
        this.correct = 0

      },
      handleAnswer(){
        const ans = {
          id: this.ansId,
          answered: this.selectedAnswer
        }
        this.answers.push(ans)
        if(this.ansId <= 10){
          this.ansId +=1
        }
        this.getResponses()
      },
      handleResult(){
        this.handleAnswer()
        this.getResults()
        this.showResult()
        this.finished = true
      },
      getResponses() {
        this.$store.dispatch('verify_ans', {answers: this.answers})
      },
      getResults() {
         this.results = this.$store.state.data.result
      },
      showResult() {
        this.correct = 0
        this.results.forEach( (result) => {
           if (result.correctAnswer === true) {this.correct +=1}
        })
      }
    },
  }
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";

  @media only screen and (min-width: 0) {
    .math-quiz{
      width: 100% ;
      height: auto;
      background-color: $dark-blue;
      background-size: cover;
      background-repeat: no-repeat;
      display: block;
      border: 1px solid $dark-blue;
      margin-top: 90px;
      header{
        padding: 20px;
        display: flex;
        justify-content: space-between;
        color:white;
        span{
          padding: 8px 12px;
          border-radius: 5px;
          margin-bottom: 30px;
        }
        span:first-of-type{
          background-color: $light-blue;
        }
        button{
          background-color:inherit;
          color:white;
          width: 26px;
          height: 26px;
          border: none;
        }
      }
      .question-container{
        background-color: white;
        margin: -20px 10px 10px;
        border-radius: 5px;
        z-index: 98;
        h2{
          padding: 20px;
          color: $dark-blue;
        }
        .answers {
          flex-direction: column;
          padding: 30px 40px;
          input {
            display: none;
            &:checked+label{
              border: 4px solid green;
            }
          }
          label {
            width: 100%;
            height: 80px;
            border: none;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-bottom: 13px;
            color: $dark-blue;
            font-weight: bold;
            background-color: $light-blue;
          }
        }
      }
      #next-answer {
        background-color: $light-blue;
        border: none;
        border-radius: 5px;
        padding: 8px 12px;
        margin-bottom: 10px;
        color: white;
      }
    }
    .quiz-finish {
      background-color: #243f56;
      width: 100%;
      margin: 0 auto;
      height: 200px;
      #send-answer {
        background-color: $light-blue;
        color: white;
        width: 132px;
        height: 80px;
        border: 3px solid white;
        border-radius: 6px;
        margin: auto;
      }
      p {
        margin: auto;
        color: white;
        font-weight: bold;
        font-size: 22px;
      }
    }
  }
  @media only screen and (min-width: 1140px) {
    .math-quiz {
      width: 80%;
      margin: 0 auto;
      border-radius: 10px;
      top: 0;
      right: 0;
      header > span {
        margin-bottom: 0;
      }
      .question-container {
        margin:10px 20px;
        .answers {
          justify-content: space-between;
          padding: 50px 40px;
          flex-direction: row;
          label {
            width: 23%;
            height: 230px;
            margin-bottom: 0;
          }
        }
      }
    }
    .quiz-finish {
      p {
        font-size: 28px;
      }
    }
  }
</style>