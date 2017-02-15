<template>
  <div>
    <p>{{list}}</p>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        list: ''
      }
    },
    created () {
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
          self.list = JSON.stringify(data)
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
