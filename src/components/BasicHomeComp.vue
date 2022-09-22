<template>
    <div class="home-section">
        <section >
          <div class="basic-icons">
                <figure v-for="item in images">
                    <img :src="item.url" alt="">
                </figure>
          </div>
          <div class="component-button">
            <button @click="goCalculator">Calculator</button>
            <button @click="goToDoList">ToDo List</button>
            <button @click="goMathQuiz">Math Quiz</button>
          </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'BasicHomeComp',
        data() {
            return{
                images:[
                    {
                        url: require('../assets/BaseIcons/Calculator.png')
                    },
                    {
                        url: require('../assets/BaseIcons/ToDoList.png')
                    },
                    {
                        url: require('../assets/BaseIcons/MathQuiz.png')
                    },  
                ]           

            }
        },
        methods: {
            goCalculator() {
                return this.$router.push('/calculator')
                       
            },
            goToDoList() {
                return this.$router.push('/todolist')
                       
            },
            goMathQuiz() {
                return this.$router.push('/mathquiz')
                       
            },
        }
    }
</script>

<style lang="scss" >
@media only screen and (min-width: 0) {
    .home-section {
        padding-top: 150px;
       .basic-icons {
            text-align: center;
        }
        img {
            width: 150px;
            margin-bottom: 30px;
        }
        .component-button {
            display: none;
    }
}
}
@media only screen and (min-width: 768px) {
    .home-section {
        width: 100%;
        .basic-icons {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
        .component-button {
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            text-align: center;
            gap: 50px;
            
        }
        button {
          color: white;
          background-color: rgb(27, 214, 255);
          padding: 7px 25px;
          border-radius: 33px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s;
          &:hover {
            transform: scale(1.1);
          }
        }
        img {
            width: 200px;
        }
    }

}

</style>