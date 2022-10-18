<template>
    <div class="login-page">
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
    height: 80%;
    font-family: Helvetica, sans-serif;
    background-image: url("../assets/home-background.jpg");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: #243f56;
    form {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      width: 350px;
      border-radius: 12px;
      text-align: center;
      padding-bottom: 10px;
      box-shadow: 0 0 10px lightblue;
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
          border: 1px solid rgb(27, 214, 255);
          box-shadow: 0 0 3px lightblue;
          outline-offset: 0px;
          outline: none;
        } 
      }
      button {
        padding: 10px 30px;
        border: none;
        background-color: rgb(27, 214, 255);
        border-radius: 10px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }
      a {
        text-decoration: none;
        color: rgb(27, 214, 255);
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
  

</style>