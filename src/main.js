import Vue from 'vue'
import App from './App.vue'

// vue-router import
import router from './router'

// 3rd party library imports
import axios from 'axios'
import VueAxios from 'vue-axios'

// Init usage of libraries
Vue.use(VueAxios, axios)

export const bus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  created () {
      if (sessionStorage.redirect) {
          const redirect = sessionStorage.redirect
          delete sessionStorage.redirect
          this.$router.push(redirect)
      }
  }
})
