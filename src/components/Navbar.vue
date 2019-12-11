<template>
<div class="navbar-fixed">
  <nav role="navigation">
    <div class="nav-wrapper container">
      <a id="logo-container" href="#" class="brand-logo"><img src="img/logo.png" alt="Judiciary Routers Logo" /></a>
      <transition name="fade">
        <ul class="right" v-if="scrollY>15">
          <li class="hide-on-med-and-down"><span class="scroll-top" @click="scrollToTop">SCROLL TO TOP</span></li>
          <li class="hide-on-med-and-up"><span class="scroll-top" @click="scrollToTop">TOP</span></li>
        </ul>
      </transition>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  data() {
    return {
      scrollY:0
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods:{
    scrollToTop:function() {
      window.scrollTo(0,0);
    },
    handleScroll:function() {
      this.scrollY=window.scrollY;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {background:#bf311a}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.brand-logo img {
  position: relative;
  top: 8px;
  width: 150px;
}
.scroll-top {color:#fff6f6; transition:5s; letter-spacing: 3px; font-weight:bold; cursor:pointer}
.scroll-top:hover {color:#FFF;}
@media only screen and (max-width: 600px)  {
}
</style>
