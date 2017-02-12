<template>
  <div id="app">
     <!--<p>{{$store.getters.bb}}</p>
     <p>{{aa}}</p>  -->
     <router-link to='/search'>search</router-link>
     <router-link to='/hot'>hot</router-link> 
     <router-link to='/history'>history</router-link>    
     <router-link to='/list'>list</router-link>  

      <keep-alive>
        <transition><router-view></router-view></transition>
        </keep-alive>

      <player></player>
    <input type="text" v-model="audio.keyWord">
    <p>{{songUrl}}</p>
    <button @click='ajax'>搜索</button>
    <ul>
      <li v-for="(i,n) in cc">
        <p @click="ccs(n)">{{ i }}</p>
      </li>
    </ul>
    <BButton></BButton>
  </div>
</template>
<script>
import $ from 'jquery'
import Player from './components/player.vue'
import BButton from './components/button.vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    Player,
    BButton
  },
  data () {
    return {
      cc: [],
      img: '',
      imgW: []
    }
  },
  computed: {
    ...mapGetters([
      // ...
    ]),
    ...mapState([
      'audio'
    ])
  },
  methods: {
    ...mapMutations([
      'test' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ajax () {
      this.test()
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
    ccs (f, w = 300) {
      this.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${this.cc[f].id}.m4a?fromtag=46`
      this.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_${w}/${this.cc[f].pic % 100}/${w}_albumpic_${this.cc[f].pic}_0.jpg`
      // this.$nextTick(function () {
      //   this.$refs.player.play()
      // })
    }
  }
  // created () {
  //   this.$router.go('')
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
