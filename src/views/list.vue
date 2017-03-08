<template>
  <div class="a-view">
    <ul class="view-ul">
      <li v-for="(i,n) in list" class="view-li">
        <p @click="fill({list,n})" class="view-p"><span class="view-p-title">{{ i.title }}</span><span class="view-p-singer">{{i.singer}}</span></p>
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
        url: "http://music.qq.com/musicbox/shop/v3/data/hit/hit_newsong.js",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "JsonCallback",
        scriptCharset: 'GBK', // 设置编码，否则会乱码
        success: function (data) {
          // self.list = data.songlist
          data.songlist.forEach(
            e => {
              self.list.push({songId: e.id, title: e.songName, singer: e.singerName, imgId: e.albumId})
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
      ...mapMutations([
        'fill'
      ])
    }
  }
</script>
