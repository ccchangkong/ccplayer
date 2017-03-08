import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    view: {
      openFlag: true,
      aboutFlag: false
    },
    audio: {
      songUrl: '',
      songId: '105552428',
      imgUrl: '',
      title: '你好呀',
      singer: '请搜索歌曲',
      currentLength: 0,
      songLength: 0,
      currentFlag: true,
      keyWord: '小小冒险者',
      songIndex: 0
    },
    audioList: [],
    historyList: []
  },
  getters: {
  },
  mutations: {
    setAudio () {
    },
    fill (state, f, w = 500) {
      let i = f.list[f.n]
      state.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${i.songId}.m4a?fromtag=46`
      state.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_${w}/${i.imgId % 100}/${w}_albumpic_${i.imgId}_0.jpg`
      state.audio.title = i.title
      state.audio.singer = i.singer
      state.audio.currentFlag = true
      state.audio.currentFlag = true
      state.historyList.push(i)
      state.audioList = []
      state.audioList = f.list
      state.view.openFlag = false
    },
    prev (state) {
      var list = state.audioList
      if (state.audio.songIndex === 0) {
        state.audio.songIndex = list.length
      } else {
        state.audio.songIndex--
      }
      store.commit('fill', {list: list, n: state.audio.songIndex})
    },
    next (state) {
      var list = state.audioList
      if (state.audio.songIndex === list.length - 1) {
        state.audio.songIndex = 0
      } else {
        ++state.audio.songIndex
      }

      store.commit('fill', {list: list, n: state.audio.songIndex})
    }
  }
})

export default store
