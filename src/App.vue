<template>
  <div id="app">
     <p>{{$store.getters.bb}}</p>
     <p>{{aa}}</p>
    
     <router-link to='/test'>test</router-link>
     <router-link to='/test2'>test</router-link>
     
      <keep-alive><router-view></router-view></keep-alive>
        <img :src="audio.imgUrl" alt="">
    <audio ref="player" :src="audio.songUrl" controls></audio>
    <input type="text" v-model="audio.keyWord">
    <p>{{songUrl}}</p>
    <button @click='ajax'>搜索</button>
    <ul>
      <li v-for="(i,n) in cc">
        <p @click="ccs(n)">{{ i }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
// import {aa} from './vuex/store.js'
import $ from 'jquery'
// import { mapState } from 'vuex'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      // audio: {
      //   songUrl: '',
      //   songId: '105552428',
      //   imgUrl: '',
      //   title: '',
      //   singer: '',
      //   currentLength: 0,
      //   songLength: 0,
      //   currentFlag: false,
      //   keyWord: '小小冒险者'
      // },
      cc: [],
      img: '',
      imgW: []
    }
  },
  computed: {
    ...mapGetters([
      'bb'
      // ...
    ]),
    ...mapState([
      'aa',
      'audio'
    ])
  },
  // vuex: {
  //   getters: {
  //     // bb: state => state.bb,
  //     aa: state => state.aa
  //   }
  // },
  // beforeMount () {
  //   for (let i = 0; i < 100; i++) {
  //     this.imgW[i] = `http://imgcache.qq.com/music/photo/album_${i * 10}/97/${i * 10}_albumpic_1279297_0.jpg`
  //   }
  // },
  // computed: {
  //   es () { return `http://imgcache.qq.com/music/photo/album_${this.img}/97/${this.img}_albumpic_1279297_0.jpg` }
  // },
  methods: {
    ajax () {
      let self = this
      let num = 2
      // let name = '小小冒险者'
      // let name = this.audio.keyWord
      let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
      $.get(urlString, function (data) {
        data = JSON.parse(data)
        // self.cc = data['data']['song']['list']
        // let es = data['data']['song']['list'][0]['f'].split('|')
        // self.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${es[0]}.m4a?fromtag=46`
        data['data']['song']['list'].forEach(
          e => {
            let es = e['f'].split('|')
            console.log(es)
            self.cc.push({id: es[0], pic: es[4]})
            // 尺寸只有300,500
          }
        )
      })
    },
    ccs (f) {
      this.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${this.cc[f].id}.m4a?fromtag=46`
      let width = 300
      this.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_${width}/${this.cc[f].pic % 100}/${width}_albumpic_${this.cc[f].pic}_0.jpg`
      this.$nextTick(function () {
        // window.alert(this.$refs.player.src)
        this.$refs.player.play()
      })
    }
  }
  // components: {
  //   Hello
  // }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
