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
</style>
