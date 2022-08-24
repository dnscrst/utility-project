<template>
  <div class="burger-menu">
    <Slide right :closeOnNavigation="true" width="200">
        <router-link to="/calculator" >Calculator</router-link>
        <router-link to="/todolist">To Do List</router-link>
        <router-link to="/mathquiz">Math Quiz</router-link>
        <router-link to="/login">Login</router-link>
    </Slide>
  </div>   
</template>

<script>
import { Slide } from 'vue-burger-menu'
    export default {
        name: 'BurgerMenu',
        components: {
            Slide
        }

    }
</script>

<style lang="scss">
@media only screen and (min-width: 0px) {

 .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: black
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
      display: none;
    }
    .bm-menu {
      height: 30%; /* 100% Full-height */
      width: 200; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: #D9D9D9; /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 15px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: white
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 30%;
      font-size: 16px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
      color: black
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white
    }
}  

</style>