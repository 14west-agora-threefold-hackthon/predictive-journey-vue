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
                    <button class="order-high">
                        <span class="offer">E-book & Hardcopy</span>
                        <span class="call-to-action">Order Now</span>
                    </button>
                    <button class="order-low">
                        <span class="call-to-action">I Only Want The Book</span>
                    </button>
                    <a class="link-bottom" href="#">Get your free chapter today.</a>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignupForm'
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
    margin: 0.5em 0;
    .order-high{
        background-color: #373737;
        border-radius: 4px;
        width: 170px;
        height: 110px;
        color: white;
        float:left;
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
    padding: 1em 0;
}
</style>