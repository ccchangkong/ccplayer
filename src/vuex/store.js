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
      keyWord: '小小冒险者'
    },
    audioList: [],
    historyList: []
  },
  getters: {
  },
  mutations: {
    fill (state, f, w = 500) {
      state.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${f.songId}.m4a?fromtag=46`
      state.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_${w}/${f.imgId % 100}/${w}_albumpic_${f.imgId}_0.jpg`
      state.audio.title = f.title
      state.audio.singer = f.singer
      state.audio.currentFlag = true
      state.historyList.push(f)
      state.view.openFlag = false
    }
  }
})

export default store
