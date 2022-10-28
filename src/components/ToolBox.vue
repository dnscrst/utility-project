<template>
  <div class="home-tools center">
    <div v-scroll-animation class="dark-blue first">
      <figure>
        <img alt="tool-icon" src="../assets/BaseIcons/calculator.png">
      </figure>
      <h3>Calculator</h3>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <router-link to="/calculator">
        <img class="arrow"
             src="../assets/BaseIcons/dark-arrow.png"
             alt="calculator">
      </router-link>
    </div>
    <div v-scroll-animation class="light-blue second">
      <figure>
        <img alt="tool-icon"
             src="../assets/BaseIcons/checklist.png">
      </figure>
      <h3>To do list</h3>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <router-link to="/todolist">
        <img class="arrow"
             src="../assets/BaseIcons/light-arrow.png"
             alt="todolist">
      </router-link>
    </div>
    <div v-scroll-animation class="dark-blue third">
      <figure>
        <img alt="tool-icon" src="../assets/BaseIcons/answer.png">
      </figure>
      <h3>Math quiz</h3>
      <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
      <router-link to="/mathquiz">
        <img class="arrow"
             src="../assets/BaseIcons/dark-arrow.png"
             alt="quiz">

      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBox",
  props: {
    tools: Array
  }
}
</script>
