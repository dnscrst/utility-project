<template>
  <div class="home-page">
    <main class="center">
      <h1>
        Happiness & Mindfulness Tools
      </h1>
      <p>Welcome to your free
        powerful tools for daily usage.
        Sample text. Click to select the text box.
        Click again or double click to start editing the text.
      </p>
      <button>
        LEARN MORE
      </button>
<!--      <Countdown date="13 January, 2023" />-->
<!--      <BasicHomeComp />-->
    </main>
    <ToolBox/>
    <div class="welcome-message center">
      <h3>{{ welcome.title }}</h3>
      <p>{{welcome.body}}</p>
      <button>LEARN MORE</button>
    </div>
    <div class="team-presentation center">
      <h3>Meet The Team</h3>
      <h3>Our Professionals</h3>
      <TeamPresentation :presentation='presentation'/>
    </div>
    <footer>
    </footer>
  </div>
</template>

<script>
  import Countdown from '@/components/Countdown.vue';
  import ToolBox from "@/components/ToolBox";
  import TeamPresentation from "@/components/TeamPresentation";
    export default {
      name: "HomeView",
      components: {TeamPresentation, ToolBox, Countdown },
      computed: {
        welcome() {
          return this.$store.state.welcome
        },
        presentation() {
          return this.$store.state.presentation
        }
      }
  }
</script>

<style lang="scss">
@import "src/styles/base-classes.scss";
@import "src/styles/base.scss";
@import "src/styles/vars.scss";
  @media only screen and (min-width: 0){
    .home-page{
      main, .home-tools, .light-blue , .dark-blue, .welcome-message, .team-presentation, .person-card {
        flex-direction: column;
      }
      button {
        border: solid 4px $light-blue;
        border-radius: 50px;
        width: 218px;
        height: 64px;
        padding: 15px 40px;
        margin: 34px auto;
        letter-spacing: 1.5px;
        font-size: 14px;
      }
      h3 {
        font-size: 28px;
      }
      main {
        background-image: url("../assets/home-background.jpg");
        background-position: 50% 50%;
        background-size: cover;
        padding: 6% 12%;
        color: #243f56;
        h1 {
          font-size: 36px;
          margin: 54px auto 40px;
          letter-spacing: 1.5px;
          max-width: 434px;
        }
        p {
          line-height: 1.8;
          font-size: 18px;
          font-style: italic;
          max-width: 434px;
          margin: 12px auto;
        }
        button {
          background-color: white;
          color: $light-blue;
          margin-bottom: 40px;
        }
      }
      .home-tools {
        justify-content: space-between;
        figure {
          background-color: white;
          border-radius: 20px;
          width: 87px;
          height: 87px;
          margin: 0 auto;
          img {
            width: 47px;
            margin-top: 20px;
          }
        }
        .arrow {
          width: 38px;
        }
        p {
          width: 260px;
          font-size: 14px;
          padding: 0 5px;
          margin: 0 auto;
        }
        .light-blue , .dark-blue {
          width: 300px;
          height: 360px;
          display: flex;
          justify-content: space-between;
          text-align: center;
          padding: 33px 10px;
          margin: 20px auto;
          border-radius: 20px;
          color: white;
        }
        .light-blue {
          background-color: $light-blue;
        }
        .dark-blue {
          background-color: $dark-blue;
        }
      }
      .welcome-message {
        background-color: $dark-blue;
        color: white;
        padding: 50px 40px;
        margin: 20px 0;
        button {
          background-color: $light-blue;
          color: white;
          margin-bottom: 0;
        }
        h3 {
          margin: 10px auto 30px;
        }
        p {
          line-height: 1.8;
          font-size: 17px;
          margin: 0 auto;
        }
      }
      .team-presentation {
        padding: 30px 40px;
        h3:nth-child(2), h5, a {
          color: $light-blue
        }
        h3 {
          margin: 5px auto 0;
        }
        h4 {
          font-size: 21px;
        }
        h5 {
          font-size: 18px;
          margin: 10px auto 15px;
        }
        p {
          font-size: 14px;
          width: 300px;
          margin: 0 auto 15px;
          letter-spacing: 1.4px;
          line-height: 160%;
          color: grey;
        }
        figure {
          img {
            width: 240px;
            border-radius: 20px;
            margin: 50px auto 30px;
          }
        }
        a {
          img {
            width: 25px;
          }
        }
      }
      footer {
        background-color: #333333;
        height: 200px;
        width: 100%;
      }
    }
  }
@media only screen and (min-width: 768px) {
  .home-page {
    .home-tools, .person-card {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .home-tools {
      max-width: 1070px;
      margin: 100px auto;
    }
    .welcome-message {
      padding: 110px 40px;
      p {
        max-width: 1200px;
      }
    }
    .team-presentation {
      padding: 60px 0;
    }
    .person-card {
      margin-top: 20px;
      div {
        margin: 0 50px;
      }
    }
  }
}
@media only screen and (min-width: 1140px) {
  .home-page {
    main {
      padding: 9% 12%;
      h1 {
        font-size: 46px;
        letter-spacing: 1.8px;
      }
    }
  }
}
</style>