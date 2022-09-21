<template>
    <div class="login-page">
      <form @submit.prevent="handleLogin">
        <h2>Login</h2>
        <label class="fa-solid fa-envelope"></label>
        <br>
        <input
            type="email"
            placeholder="Email"
            v-model="user.username">
        <br>
        <br>
        <label class="fa-solid fa-lock"></label>
        <br>
        <input type="password"
               placeholder="Password"
               v-model="user.password">
        <br>
        <br>
        <p>Forgot your passowrd?</p>
        <span><a href="/resetPassowrd">Click here!</a></span>
        <br>
        <br>
        <button :username="user.username">Login</button>
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
          login: false
        }
      },
      methods: {
        handleLogin() {
          this.$store.dispatch('login', this.user)
          this.login = true
          console.log(this.login)
        }
      }
    }
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@import "src/styles/vars.scss";
@media only screen and (min-width: 0px) {
  .login-page {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    form{
      background: white;
      width: 250px;
      border-radius: 12px;
      text-align: center;
      padding-bottom: 10px;
      box-shadow: 0 0 10px lightblue;
      h2{
        padding: 15px 0;
      }
      input{
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
      button{
        padding: 10px 20px;
        border: none;
        background-color: rgb(27, 214, 255);
        border-radius: 10px;
        font-weight: bold;
        color: white;
        cursor: pointer;
      }
      a{
        text-decoration: none;
        color: rgb(27, 214, 255);
        cursor: pointer;
      }
      .fa-solid, .fa-envelope, 
      .fa-solid, .fa-lock {
        margin-right: 210px;
        margin-bottom: -30px;
      }
    }

    }
  }
@media only screen and (min-width: 768px) {
  .login-page {
    form{
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
        font-size: 18px;
      }
      .fa-solid, .fa-envelope, 
      .fa-solid, .fa-lock {
        margin-right: 240px;
        margin-bottom: -33px;
      }
    }
  }
}
  

</style>