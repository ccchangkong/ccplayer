<template>
  <div>
    <ul>
      <li v-for="(item,index) in list">
        <p @click="fill(item)">{{item.songId}}{{item.title}}{{item.imgId}}</p>
        </li>
    </ul>
    
  </div>
</template>

<script>
  import $ from 'jquery'
  import { mapMutations } from 'vuex'
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
        url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_all.js",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JsonCallback",
        scriptCharset: 'GBK', // 设置编码，否则会乱码
        success: function (data) {
          data.songlist.forEach(
            e => {
              self.list.push({songId: e.id, title: e.songName, singer: e.singerName, imgId: e.albumId})
            }
          )
        },
        error: function () {
          console.log('fail')
        }
      })
    },
    methods: {
      ...mapMutations([
        'fill'
      ])
    }
  }
</script>
