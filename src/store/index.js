import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import patient from './modules/patient'
import staff from './modules/staff'
import region from './modules/region'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,patient,staff,region
  }
})
