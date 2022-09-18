<template>
  <header class="nav-bar " ref="navBar">
    <div>
      <figure>
        <img
            @click="goToHome"
            src="../assets/BaseIcons/logo.png"
            alt="logo">
      </figure>
      <HamburgerMenu
          :isOpen="isOpen"
          @action="handleHambMenu"/>
    </div>
      <nav>
        <router-link v-for="item in links"
                     :key="item.id"
                     :to="item.path">
                      <span @click="HandleChangeRoute">{{item.name}}</span>
        </router-link>
      </nav>
  </header>
</template>

<script>
  import HamburgerMenu from "./HamburgerMenu.vue";
      export default {
        name: "NavBar",
        components: {HamburgerMenu},
      data(){
        return{
          links: [
            {
              path:'/calculator',
              name:'Calculator'
            },
            {
              path:'/mathquiz',
              name:'Math Quizz',
            },
            {
              path:'/todolist',
              name: 'ToDo List'
            },
            {
              path:'/login',
              name:'Log In'
            }
          ],
          isOpen: false
        }
      },
      methods: {
        handleHambMenu() {
          this.isOpen = !this.isOpen
        this.$refs.navBar.style.height = this.isOpen ? '100%' : '60px'
      },
        HandleChangeRoute() {
        this.isOpen = false
        this.$refs.navBar.style.height = '60px'
      },
        goToHome() {
          return this.$router.push('/')
        },
      }
    }

</script>

<style lang="scss">
 @import '../styles/vars.scss';
 @media only screen and (min-width: 0) {
    .nav-bar {
      height: 60px;
      top: 0;
      left: 0;
      overflow: hidden;
      transition: height 0.3s ease-in-out;
      align-items: center;
      z-index: 99;
      position: fixed;
      width: 100%;
      background-color: white;
      border-bottom: 2px solid gray;
      > div {
        padding: 0 16px 24px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav {
        margin-top: 120px;
        text-align: center;
      }
      a {
        margin: 30px 0;
        display: block;
        text-decoration: none;
        color: rgba($color: #000000, $alpha: 1.0);
        font-size: 18px;
      }
      img{
        cursor: pointer;
      }
    }


}
@media only screen and (min-width: 768px) {
  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      padding-top: 30px;
    }
    nav {
      margin: 0;

      margin-top: 0;
      margin-right: 30px;
      
      a {
        margin: 0 15px;
        display: inline-block;
        transition: transform .2s;
        &:hover{
          transform: scale(1.1);
          color: rgb(27, 214, 255);
        }
        &:nth-child(3) {
          margin-right: 50px;
        }
        &:last-child{
          color: white;
          background-color: rgb(27, 214, 255);
          padding: 5px 15px;
          border-radius: 33px;

        }
      }
    }
  }
}
</style>
