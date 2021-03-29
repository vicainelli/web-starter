import Vue from 'vue'
import Vuex from 'vuex'
import users from './users.store'
import products from './products.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    products,
  },
})
