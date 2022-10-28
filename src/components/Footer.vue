<template>
    <div class="footer">
        <section>
            <div class="section">
                <div class="email-sender">
                    <h2>Start using Our Tools for free</h2>
                    <p>Access all Ideali features, then decide
                        which plan best suits your business.</p>
                        <div class="input-btn">
                            <input type="Email" placeholder="Enter a valid email Adress">
                            <button class="submit-email">Submit</button>
                        </div>
                </div>
                <div class="footer-list">
                    <ul>
                        <li class="fa-solid fa-check"></li>
                        <li class="fa-solid fa-check"></li>
                        <li class="fa-solid fa-check"></li>
                    </ul>
                    <ul>
                        <li>Safe and secure</li>
                        <li>Cancel any time</li>
                        <li>24/7 online Support</li>
                    </ul>
                </div>
            </div>
        </section>
        <span>
            <p>All rights reserved by <router-link to="/">IDEALI TEAM</router-link></p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss">
  @import "src/styles/base-classes.scss";
  @import "src/styles/base.scss";
  @import "src/styles/vars.scss";

  @media only screen and (min-width: 0px) {
      .footer {
          background-color: $light-blue;
          margin: 60px 0;
          .section{
              max-width: 100%;
              padding: 20px 35px;
              .email-sender{
                  position: relative;
                  padding-top: 25px;
                  animation: left 2s;
                  h2 {
                      font-size: 30px;
                      color: white;
                  }
                  p {
                      padding-top: 15px;
                      font-size: 14px;
                      color: white;
                  }
                  .input-btn {
                      display: flex;
                      flex-direction: column;
                      input {
                          align-self: center;
                          width: 220px;
                          height: 40px;
                          margin-top: 20px;
                          border: none;
                          border-radius: 50px;
                        &::placeholder {
                              text-align: center;
                          }
                      }
                      .submit-email {
                          height: 30px;
                          border: none;
                          align-self: center;
                          background-color: $dark-blue;
                          font-size: 12px;
                          font-weight: bold;
                          color: white;
                          margin: 10px 0 0;
                          padding: 8px 12px;
                          border-radius: 0px;
                          width: 90px;

                      }
                  }
              }
          }
          .footer-list {
              display: flex;
              align-items: center;
              padding-top: 20px;
              animation: left 2s;
              .fa-solid, .fa-check {
                  display: flex;
                  padding-top: 17px;
                  margin-right: 10px;
                  color: white;
                  font-size: 14px;
              }
              li {
              font-size: 14px;
              color: white;
              list-style-type: none;
              padding-top: 15px;
          }
      }
      span {
              p {
                  background-color: #333333;
                  padding: 20px;
                  color: white;
                  text-align: center;
                  font-size: 14px;
                  a {
                      color: white;
                      text-decoration: wavy;
                  }
              }
      }
  }
  }
  @media only screen and (min-width: 768px) {
      .footer {
          .section {
              padding-left: 100px;
              display: flex;
              .email-sender {
                  h2 {
                      font-size: 22px;
                  }
                  p {
                      font-size: 14px;
                  }
                  width: 70%;
                  .input-btn {
                      display: flex;
                      flex-direction: row;
                      .submit-email {
                        margin-left: 10px;
                      }
                      input {
                          max-width: 450px;
                          margin-bottom: 10px;
                      }
                  }
              }
              .footer-list {
                  width: 30%;
              }
          }
      }

  }

@keyframes left {
    0% {margin-left: -1000px;}
    100%{margin-left: 0px;}
}
</style>