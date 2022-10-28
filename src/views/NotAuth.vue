<template>
  <div class="not-auth-page center">
    <section>
      <h3>You can not access this tool without authentication.
        Please go to LOGIN section.</h3>
      <button
          class="base-button">
        <router-link to="/login">Go to LOGIN</router-link>
      </button>
    </section>
  </div>
</template>

<script>
  export default {
    name: "NotAuth"
  }
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";

  @media only screen and (min-width: 0) {
    .not-auth-page {
      flex-direction: column;
      height: 100%;
      background-image: url("../assets/background.png");
      section {
        background-color: $dark-blue;
        color: white;
        padding: 50px 40px;
        margin: 20px 0;
        button {
          background-color: $light-blue;
          a {
            text-decoration: none;
            color: white;
          }
        }
        h3 {
          margin: 10px auto 30px;
        }
      }
    }
  }
</style>