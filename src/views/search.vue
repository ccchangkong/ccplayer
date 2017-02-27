<template>
  <div>
    <SearchBtn></SearchBtn>
    <ul>
      <li v-for="(i,n) in audioList">
        <p @click="fill(n)">{{ i.title }}+{{i.singer}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import SearchBtn from '../components/searchBtn.vue'
  import { mapGetters, mapState } from 'vuex'
  export default {
    components: {
      SearchBtn
    },
    data () {
      return {
      }
    },
    created () {
    },
    computed: {
      ...mapGetters([
        // ...
      ]),
      ...mapState([
        'audio',
        'audioList'
      ])
    },
    methods: {
      fill (f, w = 500) {
        this.audio.songUrl = `http://ws.stream.qqmusic.qq.com/${this.audioList[f].songId}.m4a?fromtag=46`
        this.audio.imgUrl = `http://imgcache.qq.com/music/photo/album_${w}/${this.audioList[f].imgId % 100}/${w}_albumpic_${this.audioList[f].imgId}_0.jpg`
        this.audio.singer = this.audioList[f].singer
        // this.$nextTick(function () {
        //   this.$refs.player.play()
        // })
      }
      // getList(){
      //   Indicator.open({
      //     text: '加载中...',
      //     spinnerType: 'fading-circle'
      //   });
      //   this.$http.get('http://cs003.m2828.com/demo/searchIT/proxy.php?val=&url1=http://mobilecdn.kugou.com/api/v3/search/hot?plat=0&count=30&url2=').then((res)=>{
      //     var list=JSON.parse(res.data).data.info;
      //     this.hotList= [...list.map(({keyword})=>keyword)];
      //     Indicator.close();
      //   })
      // },
      // replaceInput(index){
      //   this.keyword=this.hotList[index];
      //   this.search()
      // },
      // search(){
      //   this.togglePanel=false;
      //   Indicator.open({
      //     text: '加载中...',
      //     spinnerType: 'snake'
      //   });
      //   this.$http.get('http://cs003.m2828.com/demo/searchIT/proxy.php?val=&url1=http://mobilecdn.kugou.com/api/v3/search/song?keyword='+this.keyword+'&page=1&pagesize=30&url2=').then((res)=>{
      //     var list=JSON.parse(res.data).data.info;
      //     this.total=JSON.parse(res.data).data.total
      //     this.songList= [...list.map(
      //       ({filename,hash})=>({filename,hash})
      //     )];
      //     Indicator.close();
      //   })
      // },
      // playAudio(index){
      //   this.$store.commit("toggleAudioLoadding");
      //   this.$http.get('http://cs003.m2828.com/phps/getKugouSong.php?hash='+this.songList[index].hash).then((res)=>{
      //     var songUrl=JSON.parse(res.data).url;
      //     var imgUrl=JSON.parse(res.data).imgUrl.split('{size}').join('100');
      //     var title=JSON.parse(res.data).songName;
      //     var singer=JSON.parse(res.data).choricSinger;
      //     var audio={songUrl,imgUrl,title,singer}
      //     this.$store.commit("toggleAudioLoadding");
      //     this.$store.commit('setAudio',audio);
      //   })
      // }
    }
  }
</script>
<style>

</style>
