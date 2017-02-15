<template>
  <div class="hello">
    <button @click='ajax'>搜索</button>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'buttons',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
    ajax () {
      // console.log(this.audioList.length)
      this.audioList.length = 0
      // this.audioList = []
      this.$nextTick(function () {
        let self = this
        let num = 2
        let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
        $.get(urlString, function (data) {
          // this.audioList = []
          data = JSON.parse(data)
          data['data']['song']['list'].forEach(
            e => {
              let es = e['f'].split('|')
              // console.log(es)
              self.audioList.push({id: es[0], pic: es[4]})
              // 尺寸只有300,500
            }
          )
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello button{
  font-size: 1rem;
}

</style>
