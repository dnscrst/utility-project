<template>
  <div class="calculator-page center">
    <div class="center">
      <div class="calculator center">
        <span class="center display"> {{current || '0'}}</span>
        <button
            class="operators red"
            @click="clear">AC
        </button>
        <button
            class="operators"
            @click="sign">+/-
        </button>
        <button
            class="operators"
            @click="percent">%
        </button>
        <button
            class="operators"
            @click="division">/
        </button>
        <button
            @click="append('7')">7
        </button>
        <button
            @click="append('8')">8
        </button>
        <button
            @click="append('9')">9
        </button>
        <button
            class="operators"
            @click="multiplication">*
        </button>
        <button
            @click="append('4')">4
        </button>
        <button
            @click="append('5')">5
        </button>
        <button
            @click="append('6')">6
        </button>
        <button
            class="operators"
            @click="minus">-
        </button>
        <button
            @click="append('1')">1
        </button>
        <button
            @click="append('2')">2
        </button>
        <button
            @click="append('3')">3
        </button>
        <button
            class="operators"
            @click="add">+
        </button>
        <button
            class="zero"
            @click="append('0')">0
        </button>
        <button
            @click="dot">.
        </button>
        <button
            class="operators green"
            @click="equal">=
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CalculatorView',
    data(){
      return{
        current: '',
        previous: '',
        operator: null,
        operatorClicked: false
      }
    },
    methods: {
      clear() {
        this.current = ''
      },
      append(value) {
        // concateneaza cele doua valori
        if(this.current.length <= 16){
          if(this.operatorClicked){
            this.current = ''
            this.operatorClicked = false
           }
          this.current = `${this.current}${value}`
        }
      },
      percent() {
        this.current = `${parseFloat(this.current)/100}`
      },
      sign() {
        //daca valoarea de la indexul 0 este - atunci taie prima valoare, altfel pune - in fata
        this.current = this.current.charAt(0) === '-' ? this.current.slice(1) : `-${this.current}`
      },
      dot() {
        if(this.current.indexOf('.') === -1){
          this.append('.')
        }
      },
      setPrevious() {
        this.previous = this.current
        this.operatorClicked = true
      },
      division() {
        this.operator = (a,b) => a/b
        this.setPrevious()
      },
      multiplication() {
        this.operator = (a,b) => a*b
        this.setPrevious()
      },
      minus() {
        this.operator = (a,b) => a-b
        this.setPrevious()
      },
      add() {
        this.operator = (a,b) => a+b
        this.setPrevious()
      },
      equal() {
        if(!this.previous) {
          this.current= `${parseFloat(this.current)}`
        }
        else{
        this.current = `${this.operator(parseFloat(this.previous), parseFloat(this.current))}`
        this.previous = null
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";
  @media only screen and (min-width: 0) {
    .calculator-page {
      height: 100%;
      background-image: url("../assets/background.png");
      > div {
        background-color: rgba(79, 178, 145, 0.5);
        backdrop-filter: blur(2px);
        -webkit-backdrop-filter: blur(7.4px);
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 20px 0;
        .calculator {
          width: 300px;
          height: 460px;
          flex-wrap: wrap;
          background-color: $dark-blue;
          box-shadow: -5px -5px 9px #ffffff73, 5px 5px 7px #5e687949;
          padding: 20px 10px;
          margin: auto;
          border-radius: 5px;
          .display {
            background-color: white;
            width: 100%;
            height: 70px;
            font-size: 30px;
            margin-bottom: 10px;
            border: 2px solid rgb(176 176 176);
            padding-top: 15px;
          }
          button {
            width: calc(90% / 4);
            height: 60px;
            font-weight: bold;
            font-size: 16px;
            border: none;
            border-radius: 3px;
            cursor: pointer;
            background-color: #F2F2F2;
            margin: 2px;
            box-shadow: 1px 1px 1px 0 rgb(176 176 176);
            &:hover{
              background-color: lightgrey;
            }
          }
          .zero {
            width: calc(92.5%/2);
          }
          .green {
            background-color: $light-blue;
          }
          .red{
            background-color: #F75D59 ;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .calculator-page {
      > div {
        .calculator {
          width: 415px;
          height: 495px;
          padding: 20px 25px;
        }
      }
    }
  }
  @media only screen and (min-width: 1140px) {

  }

</style>
