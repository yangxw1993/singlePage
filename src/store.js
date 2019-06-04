import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  LOADING: false
};
const  mutations = {
  showLoading(state) {
    state.LOADING = true
  },
  hideLoading(state) {
    state.LOADING = false
  }
}
export default new Vuex.Store({
  state,
  mutations
})

