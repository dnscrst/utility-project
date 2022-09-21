<template>
  <div class="math-quiz">
    <header>
      <span>Answer: 0/10</span>
<!--      <span id="answer-number">1/10</span>-->
      <button  @click="handleExit">&#x2716;</button>
    </header>
    <div class="question-container">
      <h2>question</h2>
      <div class="answers center">
        <input type="radio"
               name="answer"
               value="1"
               id="a">
        <label for="a" id="a">1</label>
        <input type="radio"
               name="answer"
               value="2"
               id="b">
        <label for="b" id="b">2</label>
        <input type="radio"
               name="answer"
               value="3"
               id="c">
        <label for="c" id="c">3</label>
        <input type="radio"
               name="answer"
               value="4"
               id="d">
        <label for="d" id="d">4</label>
      </div>
    </div>
    <button id="send-answer">SEND ANSWER</button>
  </div>

</template>

<script>
export default {
  name: 'Quiz',
  data() {
    return {

    }
  },

  methods: {
    handleExit(){
      this.$emit('handleExit')
    }
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
    top: -48px;
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
    margin: 40px 40px;
    border-radius: 10px;
    top: 0;
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
        padding: 30px 40px;
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