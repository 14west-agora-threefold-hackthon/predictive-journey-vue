<template> 
    <div class="columns signup-container">
        <div class="column">
            <img src="@/assets/Book.png" alt="" class="signup-img">
        </div>
        <div class="column">
            <div class="signup-box">
                <h3>The new radical investors book 💰💰💰</h3>
                <p>180 pages of <strong>advice, ideas</strong> and <strong>practical tips</strong> to become an investing powerhouse so that you can <strong>make more money!</strong></p>
                <div class="action-section">
                    <button v-on:click="updateUser" class="order-high">
                        <span class="offer">For your copy of the new radical investor book</span>
                        <span class="call-to-action">Signup now</span>
                    </button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignupForm',
    data () {
        return {
            endpoint: 'http://predictive-journey-journey-men.apps.threefold.x1l7.p1.openshiftapps.com/customer/update', 
            result: '',
            payload: {
                "emailAddress" : this.$route.query.email,
                "mwSubsCount" : "2",
                "mwListsCount" : "5"
            }
        }
    },
    methods: {
        updateUser: function (event){
            event.preventDefault()
            axios
            .post(this.endpoint, this.payload)
            .then( result => {
                this.result = result
                window.location = '/signup';
            })

        }
    }
}
</script>

<style lang="scss" scoped>
h3{
    font-size: 2em;
    font-weight: bold;
    line-height: 1em;
    margin-bottom:1em;
}
.signup-container{
        height: 100vh;
    margin: 0 10em;
}
.column{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.signup-box{
    background-color: #FFFFFF;
    border-radius: 6px;
    padding: 2em;
}
.signup-img{
    width: 250px;
}
.action-section{
    margin: 2.2em 0;
    .order-high{
        background-color: #373737;
        border-radius: 4px;
        width: 170px;
        height: 110px;
        color: white;
  .offer{
      display:block;
  }
  .call-to-action{
      display:block;
      font-size: 2em;
      font-weight: bold;
      margin-top: 10px;
  }
}
.order-low{
    background-color: #fff;
    border-radius: 4px;
    width: 170px;
    height: 110px;
    color: black;
    float: right;
    border: 0;
  .call-to-action{
        font-weight: bold;
        font-size:2em;
  }
}
}
.link-bottom{
    clear: both;
    display: block;
    text-align: left;
    padding: 2.2em 0;
}
</style>