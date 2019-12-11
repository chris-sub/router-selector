<template>
  <div id="app">
    <navbar></navbar>
    <router-list></router-list>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import RouterList from './components/RouterList.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    RouterList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
