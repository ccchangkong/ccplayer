import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    aa: '222',
    bb: '333',
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
    }
  },
  getters: {
    bb: state => state.bb
  }
  // mutations:{
  //   setAudio(state,audio){
  //     state.audio=audio;
  //   },
  //   showHead(state,title){
  //     state.head.toggle=true;
  //   },
  //   setHeadTitle(state,title){
  //     state.head.title=title;
  //   },
  //   hideHead(state){
  //     state.head.toggle=false;
  //   },
  //   setHeadStyle(state,style){
  //     state.head.style=style;
  //   },
  //   resetHeadStyle:state=>{
  //     state.head.style={'background':'rgba(43,162,251,0)'};
  //   },
  //   toggleAudioLoadding:state=>{
  //     state.audioLoadding=!state.audioLoadding;
  //   },
  //   setHeadNav:(state,index)=>{
  //     state.headNav='head-nav'+index;
  //   }
  // }
})

export default store
