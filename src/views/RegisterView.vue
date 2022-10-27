<template>
    <div class="register-page">
      <div v-if="$store.state.auth.msg === 'account created'">
        <p>
          Account created!
        </p>
        <router-link to="/login">Go to Login</router-link>
      </div>
        <form  v-else @submit.prevent="handleRegister">
            <h2>Register</h2>
            <i class="fa-solid fa-user"></i>
            <br>
            <input type="text"
                   v-model="account.firstName"
                   placeholder="First Name">
            <br>
            <br>
            <i class="fa-solid fa-user"></i>
            <br>
            <input type="text"
                   v-model="account.lastName"
                   placeholder="Second Name">
            <br>
          <br>
          <i class="fa-solid fa-globe"></i>
          <br>
          <input type="text"
                 v-model="account.country"
                 placeholder="County">
          <br>
            <br>
            <i class="fa-solid fa-envelope"></i>
            <br>
            <input type="email"
                   v-model="account.email"
                   placeholder="Email">
            <br>
            <br>
            <i class="fa-solid fa-lock"></i>
            <br>
            <input type="password"
                   key="password"
                   v-model="account.password"
                   placeholder="Password">
            <br>
            <br>
            <button @submit.prevent="handleRegister">Register</button>
        </form>


    </div>
</template>

<script>
    export default {
        name: 'RegisterView',
        data() {
          return{
            account: {
              email: '',
              password: '',
              firstName: '',
              lastName: '',
              country: ''
            },
            created: false
          }
        },

      methods: {
        handleRegister() {
          console.log(this.account)
          this.$store.dispatch('register', {account: this.account})
        }
      }
    }
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@import "src/styles/vars.scss";
@media only screen and (min-width: 0px) {
    .register-page {
        font-family: Helvetica, sans-serif;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-image: url("../assets/home-background.jpg");
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        color: #243f56;
        form {
            position: relative;
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
                    border: 1px solid $light-blue;
                    box-shadow: 0 0 3px lightblue;
                    outline-offset: 0px;
                    outline: none;
                }
            }
            button {
                padding: 10px 20px;
                border: none;
                background-color: $light-blue;
                border-radius: 10px;
                font-weight: bold;
                color: white;
                cursor: pointer;
            }
            a {
                text-decoration: none;
                color: rgb(27, 214, 255);
                cursor: pointer;
            }
            .fa-solid, .fa-user, .fa-solid, 
            .fa-envelope, .fa-solid, .fa-globe,
            .fa-solid, .fa-lock  {
                margin-right: 210px;
                margin-bottom: -30px;               
            }
        }
    }
}
@media only screen and (min-width: 768px) {
    .register-page{
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
            .fa-solid, .fa-user, .fa-solid, 
            .fa-envelope, .fa-solid, .fa-globe,
            .fa-solid, .fa-lock  {
                margin-right: 240px;
                margin-bottom: -33px;               
            }
        }
    }
}
</style>