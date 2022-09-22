<template>
    <div class="register-page">
        <form @submit.prevent="handleRegister">
            <h2>Register</h2>
            <i class="fa-solid fa-user"></i>
            <br>
            <input type="text"
                   placeholder="First Name">
            <br>
            <br>
            <i class="fa-solid fa-user"></i>
            <br>
            <input type="text"
                   placeholder="Second Name">
            <br>
            <br>
            <i class="fa-solid fa-envelope"></i>
            <br>
            <input type="email"
                   placeholder="Email">
            <br>
            <br>
            <i class="fa-solid fa-globe"></i>
            <br>
            <input type="text"
                   placeholder="County">
            <br>
            <br>
            <i class="fa-solid fa-lock"></i>
            <br>
            <input type="password"
                   placeholder="Password">
            <br>
            <br>
            <i class="fa-solid fa-lock"></i>
            <br>
            <input type="passsword"
                   placeholder="Confirm Password">
            <br>
            <br>
            <button>Register</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'RegisterView',
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
                    border: 1px solid rgb(27, 214, 255);
                    box-shadow: 0 0 3px lightblue;
                    outline-offset: 0px;
                    outline: none;
                }
            }
            button {
                padding: 10px 20px;
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