import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import patient from './modules/patient'
import staff from './modules/staff'
import region from './modules/region'
import district from './modules/district'
import disease from "./modules/disease"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,patient,staff,region,district,disease
  }
})
