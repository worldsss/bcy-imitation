import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:{
      uid:0,
      user_name:'',
      user_avatar:'',
    }
  },
  mutations: {
    addUserName(state,Newuser){
      state.user = Newuser
    }

  },
  actions: {
  },
  modules: {
  }
})
