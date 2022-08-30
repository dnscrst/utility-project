<template>
  <header>
    <nav class="nav-bar">
      <div>
        <img src="@/assets/logo.png" alt="">
      </div>
      <ul class="nav-menu">
        <li class="nav-item" v-for="item in links">
          <router-link class="nav-link" :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
      <div @click="toggleActive" class="hamburger-menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
    export default {
    name: "NavBar",

  data() {
    return{ 
      links: [
        {
          path: '/calculator',
          name: 'Calculator'
        },
        {
          path: '/mathquiz',
          name: 'Math quiz'
        },
        {
          path: '/todolist',
          name: 'ToDo List'
        },
        {
          path: '/login',
          name: 'Login'
        }
      ],
      isOpen: true
    };
  },
  methods: {
    toggleActive() {
      this.isOpen = !this.isOpen
      this.$emit
    }
  }
}
</script>

<style lang="scss">
 @import '../styles/vars.scss';
 @media only screen and (min-width: 0){
  header{
    background-color: $light-grey;
    .nav-bar{
      min-height: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
    }
    .nav-menu{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 35px;
      li {
        list-style: none;
        a{
          text-decoration: none;
          color: black;
        }
      }
    }
    .hamburger-menu{
      display: block;
      cursor: pointer;
    }
    .bar{
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      background-color: black;
    }
    
  }

 }

</style>
