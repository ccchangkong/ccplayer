<template>
    <div class="search-field">
      <input type="text" class='s-input' v-model="audio.keyWord" @keyup.enter='ajax'>
      <i class="material-icons s-input-i" @click='ajax'>search</i>
    </div>      
</template>

<script>
import $ from 'jquery'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'SearchBtn',
  props: {
    value: {
      default: []
    }
  },
  data () {
    return {
      list: this.value
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
    ajax () {
      this.list.length = 0
      this.$nextTick(() => {
        let self = this
        let num = 10
        let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
        $.get(urlString, (data) => {
        // let urlString = `http://s.music.qq.com/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${this.audio.keyWord}`
        // $.post('/proxy/songListProxy.php', {urlString}, (data) => {
          data = JSON.parse(data)
          data['data']['song']['list'].forEach(
            e => {
              let es = e['f'].split('|')
              // console.log(es)
              self.list.push({songId: es[0], title: es[1], singer: es[3], imgId: es[4]})
              // 尺寸只有300,500
            }
          )
        })
      })
    }
  },
  watch: {
    value (val) {
      this.list = val
    },
    list (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.search-field{
position: relative;
}
.s-input{
  border: none;
  outline: none;
  background-color: inherit;
  text-align: center;
  line-height: 2rem;
  vertical-align: bottom;
}
.search-field::after{
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 2px;
  width: 0;
  transition: .5s  cubic-bezier(0.23, 1, 0.32, 1);
  transform: translateX(-50%);
}
.search-field:hover::after{
  width: 30rem;
  max-width: 100%;
  background-color: #333;
}
.s-input-i{
  line-height: 2rem;
  font-size: 1.5rem;
  vertical-align: middle;
}
</style>
