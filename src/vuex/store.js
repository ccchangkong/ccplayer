import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    audio: {
      songUrl: '',
      songId: '105552428',
      imgUrl: '',
      title: '',
      singer: '',
      currentLength: 0,
      songLength: 0,
      currentFlag: false,
      keyWord: '小小冒险者'
    },
    audioList: []
  },
  getters: {
    bb: state => state.bb
  },
  mutations: {
    test (state) {
      // window.alert(state.aa)
    }
  }
})

export default store
