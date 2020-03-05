<template>
<footer class="footer">
  <div class="content has-text-centered">
      <img class="footer-logo" src="@/assets/LogoBottom.png" alt="">
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quibusdam autem</p>
      <ul>
          <li>Home</li>
          <li>Experts</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>About</li>
      </ul>
  </div>
</footer>
    
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer-logo{
    width: 7em;
}
.footer p {
    text-align: center !important; 
}
.footer ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none !important;
    justify-content: center!important;
}
 .footer ul li {
        padding: 1em;
    }
.footer .content  li + li{
    margin-top:0 !important;
}
</style>