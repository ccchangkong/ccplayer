<template>
  <div>
    <div v-for="(item,index) in list">
<p>{{item.id}}{{item.sn}}{{item.ai}}</p>
    </div>
    
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        list: []
      }
    },
    mounted () {
      let self = this
      $.ajax({
        type: "get",
        async: false,
        url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JsonCallback",
        scriptCharset: 'GBK', // 设置编码，否则会乱码
        success: function (data) {
          // self.list = data.songlist
          data.songlist.forEach(
            e => {
              self.list.push({id: e.id, sn: e.songName, ai: e.albumId})
              // self.audioList.push({id: es[0], pic: es[4]})
            }
          )
          // console.log()
        },
        error: function () {
          console.log('fail')
        }
      })
    },
    methods: {
    }
  }
</script>
