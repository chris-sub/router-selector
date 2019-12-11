import Vue from 'vue'
import App from './App.vue'
require('materialize-css/dist/css/materialize.min.css')
require('materialize-css/dist/js/materialize.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
