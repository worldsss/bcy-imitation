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
    //把传递过来的user赋值给vuex中的
    addUserName(state,Newuser){
      state.user = Newuser
    },
    changeUser(state,userName,uid,userAvatar){
      state.user.uid = uid
      state.user.user_name = userName
      state.user.user_avatar = userAvatar
    },
    outUser(state,voiduser){
      state.user = voiduser
    }


  },
  actions: {
  },
  modules: {
  }
})
