<template>
  <div id="app">
    <router-view/>
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container{
  padding-bottom: 1em;
  margin: 0 13em !important;
}
h1{
  font-size: 4em !important;
  text-align: left;
}
h2{
  font-size: 3em !important;
  text-align: left;
}
p{
  text-align: left !important;
  font-weight: 500;
  font-size: 1.2em;
}
.custom-button{
    background-color: #373737 !important;
    border-radius: 4px !important;
    color: white !important;
    min-height: 3em !important;
    min-width: 8em !important;
    margin: 1em !important;
}
.is-primary{
  background-color: #F8C56D !important;
  color:black !important;
}
.is-warning{
  background-color: #417505 !important;
  color: white !important;
}
.is-info{
   background-color: #4A90E2 !important;
   color: white !important;
}
.is-danger{
  background-color: #50E3C2 !important;
  color: black !important;
}
.is-custom{
  background-color: #373737 !important;
  color: white !important;
}
</style>
