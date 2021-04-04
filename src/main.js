import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development' && !window.Cypress) {
  require('./miragejs/server').makeServer()
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
