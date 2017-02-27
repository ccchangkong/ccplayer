<template>
  <div>
      <input type="text" v-model="audio.keyWord">
    <i class="material-icons"@click='ajax'>search</i>
  </div>
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'SearchBtn',
  data () {
    return {
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
      this.audioList.length = 0
      this.$nextTick(() => {
        let self = this
        let num = 10
        let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
        $.get(urlString, (data) => {
          data = JSON.parse(data)
          data['data']['song']['list'].forEach(
            e => {
              let es = e['f'].split('|')
              // console.log(es)
              self.audioList.push({songId: es[0], title: es[1], singer: es[3], imgId: es[4]})
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

</style>
