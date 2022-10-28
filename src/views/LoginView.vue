<template>
    <div class="login-page center">
      <div class="gradient-border center">
        <form @submit.prevent="handleLogin">
          <h2>Login</h2>
          <label class="fa-solid fa-envelope"></label>
          <br>
          <input
              name="email"
              type="Email"
              placeholder="Email"
              v-model="user.username">
          <br>
          <br>
          <label class="fa-solid fa-lock"></label>
          <br>
          <input name="password"
                 type="password"
                 placeholder="Password"
                 v-model="user.password">
          <br>
          <br>
          <p>Forgot your passowrd?</p>
          <span><a href="/resetPassowrd">Click here!</a></span>
          <br>
          <br>
          <button>Login</button>
          <p v-if="error">{{error}}</p>
          <br><br>
          <p>Don't have an acccount?</p>
          <span>
          <a href="/register">Sing up and get started!</a>
        </span>
        </form>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'LoginView',
      data(){
        return{
          user:{
            username:'',
            password:''
          },
        }
      },
      computed: {
        isLogged() {
         return this.$store.state.auth.isLogged;
        },
        error() {
          return this.$store.state.auth.errors;
        },
      },
      methods: {
        handleLogin() {
          this.$store.dispatch('login', this.user)
          this.$store.dispatch('getList')
        },
      }
    }
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@import "src/styles/vars.scss";
@media only screen and (min-width: 0px) {
.login-page {
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url("../assets/background.png");
    color: #243f56;
    .gradient-border {
      display: inline-block;
      margin: auto;
      padding: 10px;
      background: linear-gradient(to top, $light-blue, $medium-blue);
      animation: color-rotate 2s  infinite;
    }
    form {
      margin: auto;
      background: white;
      width: 350px;
      text-align: center;
      padding-bottom: 10px;
      box-shadow: -1px -1px 5px $light-blue, 1px 1px 5px $dark-blue;
      .light-circle {
        position: absolute;
        top: -3px;
        right: 399px;
        width: 30px;
        height: 5px;
        background-color: white;
        border-radius: 50px;
      }
      h2 {
        padding: 15px 0;
      }
      input {
        padding: 10px 0;
        border: none;
        border-bottom: 1px solid $light-grey;
        border-radius: 10px;
        text-align: center;
        &:focus {
          border: 1px solid $light-blue;
          box-shadow: 0 0 3px lightblue;
          outline-offset: 0px;
          outline: none;
        } 
      }
      button {
        padding: 10px 30px;
        border: none;
        background-color: $light-blue;
        border-radius: 10px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: $light-blue;
        cursor: pointer;
        font-size: 12px;
      }
      .fa-solid, .fa-envelope, 
      .fa-solid, .fa-lock {
        margin-right: 210px;
        margin-bottom: -30px;
      }
      p {
        font-size: 12px;
      }
    }
    }
  }
@media only screen and (min-width: 768px) {
  .login-page {
    form {
      width: 400px;
      h2 {
        font-size: 34px;
      }
      input {
        padding: 10px 20px;
      }
      button {
        padding: 15px 40px;
        font-size: 16px;
        transition: transform 0.2s;
        &:hover {
          transform: scale(1.1);
        }
      }
      p {
        font-size: 16px;
      }
      .fa-solid, .fa-envelope, 
      .fa-solid, .fa-lock {
        margin-right: 240px;
        margin-bottom: -33px;
      }
      a{
        font-size: 14px;
      }
    }
  }
}

@keyframes color-rotate {
  12.5% {  background: linear-gradient( to top right, $light-blue, $medium-blue);}
  25% {  background: linear-gradient( to right, $light-blue, $medium-blue);}
  37.5% {  background: linear-gradient( to right bottom, $light-blue, $medium-blue);}
  50% {  background: linear-gradient( to bottom, $light-blue, $medium-blue);}
  62.5% {  background: linear-gradient( to bottom left, $light-blue, $medium-blue);}
  75% {  background: linear-gradient( to left, $light-blue, $medium-blue);}
  97.5% {  background: linear-gradient( to left top, $light-blue, $medium-blue);}
  100% {  background: linear-gradient( to top, $light-blue, $medium-blue);}

}

</style>