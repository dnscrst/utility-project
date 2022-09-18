<template>
    <div class="login-page">
      <form @submit.prevent="handleLogin">
        <label>Email:</label> <br>
        <input
            type="email"
            placeholder="email"
            v-model="user.username">
        <br>
        <label>Password:</label><br>
        <input type="password"
               placeholder="password"
               v-model="user.password">
        <br>
        <button>Login</button>
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
          }
        }
      },
      methods: {
        handleLogin() {
          this.$store.dispatch('login', this.user)
        }
      }
    }
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
.login-page{
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    background: white;
    display: inline-block;
    padding: 46px 32px;
    margin-bottom: 60px;
    justify-content: center;
    width: 300px;
    margin-top: 10%;
  }
}

</style>