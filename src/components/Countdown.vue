<template> 
    <div class="time-box">
        <p>{{days}}<span>days</span></p>
        <span class="points">:</span>
        <p>{{hours}}<span>hours</span></p>
        <span class="points">:</span>
        <p>{{minutes}}<span>min</span></p>
        <span class="points">:</span>
        <p>{{seconds}}<span>sec</span></p>
    </div>
</template>

<script>
    export default {
        name: 'Countdown',
        props:{
            date:{
                type: String
            }
        },
        data() {
            return{
                now: 0,
                count: 0,
            }
        },
        methods: {
            Timerloop() {
                this.count++
                this.now = Math.trunc(new Date().getTime() / 1000)
                this.count < 200 && setTimeout(this.Timerloop, 1000)
            }
        },
        mounted() {
            this.Timerloop()
        },
        computed: {
            seconds() {
                return(this.modifiedDate - this.now) % 60
            },
            minutes() {
                 return Math.trunc((this.modifiedDate - this.now) /60 ) %60
            },
            hours() {
                return Math.trunc((this.modifiedDate - this.now) / 60 / 60) %24
            },
            days() {
                return Math.trunc((this.modifiedDate - this.now) /60 /60 / 24)
            },
            modifiedDate() {
                return Math.trunc(Date.parse(this.date)/ 1000)
            }
        }
    }
</script>

<style lang="scss">
  @import '../styles/vars.scss';
  @media only screen and (min-width: 0){
    .time-box {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        transform: translateY(50px);
        max-width: 430px;
        min-width: 350px;
    }
    .time-box p {
        width: 70px;
        height: 70px;
        line-height: 65px;
        border-radius: 10px;
        background-color: $light-grey;
        padding-left: 24px;
        padding-top: -10px;
        box-shadow: 0 0 5px;
        font-weight: bold;
        font-size: 20px;
        position: relative;
    }
    p span {
        position: absolute;
        display: flex;
        top: 22px;
        font-size: 12px;
    }
    .points {
     zoom: 3;
     margin: -10px;
     margin-bottom: -7px;
    }
}
@media only screen and (min-width:430px){}
</style>