import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../store/modules/auth'
import * as data from './modules/data'
import * as list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    data,
    list
  }
})
