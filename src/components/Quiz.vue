<template>
  <div class="math-quiz">
    <header>
      <span>Answer: {{ansId}}/10</span>
<!--      <span id="answer-number">1/10</span>-->
      <button  @click="handleExit">&#x2716;</button>
    </header>
    <div class="question-container"
         v-for="quiz in data"
         :key="quiz.id"
         v-if="quiz.id === ansId">
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
    <button id="send-answer"
            @click="handleAnswer">NEXT</button>
  </div>

</template>

<script>
export default {
  name: 'Quiz',
  props: {
    data: Object
  },
  data() {
    return{
      ansId: 1,
      selectedAnswer: '',
      answers: []
    }
  },
  methods: {
    handleExit(){
      this.$emit('handleExit')
    },
    handleAnswer(){
      const ans = {
        id: this.ansId,
        answered: this.selectedAnswer
      }
      this.answers.push(ans)
      if(this.ansId < 10){
        this.ansId +=1
      }
      else{
        this.$store.dispatch('verify_ans', {answers: this.answers})

      }
    },
  }
}
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@media only screen and (min-width: 0) {
  .math-quiz{
    width: 100% ;
    height: auto;
    background-color: black;
    background-size: cover;
    background-repeat: no-repeat;
    display: block;
    margin: 0 40px;
    border: 1px solid black;
    top: -50px;
    right: -40px;
    header{
      padding: 20px;
      display: flex;
      justify-content: space-between;
      color:white;
      span{
        padding: 8px 12px;
        border-radius: 5px;
      }
      span:first-of-type{
        background-color: #2D9DA6;
      }
      #answer-number{
        background-color: rgba(255, 255, 255, 0.1);
        margin-right: 55px;
      }
      button{
        background-color:inherit;
        color:white;
        width: 26px;
        height: 26px;
      }
    }
    .question-container{
      background-color: rgb(70 26 66);
      margin: 10px;
      border-radius: 5px;
      h2{
        padding: 20px;
        color: white;
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

        }
        #a{
          background-color: #2D70AE;
        }
        #b{
          background-color: #2D9DA6;
        }
        #c{
          background-color: #EFA929
        }
        #d{
          background-color: #D5546D;
        }
      }
    }
    #send-answer{
      padding: 8px 12px;
      margin: 15px;
      border-radius: 5px;
    }
  }
}
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 1140px) {
  .math-quiz {
    width: 80%;
    margin: 40px 10%;
    border-radius: 10px;
    top: 0;
    right: 0;
    .question-container{
      background-color: rgb(70 26 66);
      margin:10px 20px;
      border-radius: 5px;
      h2{
        padding: 20px;
        color: white;
      }
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
    #send-answer{
      margin-bottom: 30px;
    }
  }
}



</style>