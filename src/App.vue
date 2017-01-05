<template>
  <div id="app">
    <img src="./assets/logo.png">
    <audio :src="songUrl" controls></audio>
    <input type="text">
    <p>{{songUrl}}</p>
    <button @click='ajax'>搜索</button>
    <p>{{cc}}</p>
  </div>
</template>
<script>
// import Hello from './components/Hello'
import $ from 'jquery'
export default {
  name: 'app',
  data () {
    return {
      audio: {
        songUrl: '',
        songId: '105552428',
        imgUrl: '',
        title: '',
        singer: '',
        currentLength: 0,
        songLength: 0,
        currentFlag: false
      },
      searchList: {
        "code": 0,
        "data": {
          "keyword": "",
          "priority": 0,
          "qc": [],
          "semantic": {
            "curnum": 0,
            "curpage": 1,
            "list": [],
            "totalnum": 0
          },
          "song": {
            "curnum": 4,
            "curpage": 1,
            "list": [{
              "albumName_hilight": "TVアニメ『この素晴らしい世界に祝福を! 』エンディング&#12539;テーマ「ちいさな冒険者」",
              "chinesesinger": 0,
              "docid": "12880189318695568719",
              "f": "105552428|ちいさな冒険者|165909|雨宮天;高橋李依;茅野愛衣|1279297|TVアニメ『この素晴らしい世界に祝福を! 』エンディング&amp;#12539;テーマ「ちいさな冒険者」|1715890|199|7|1|1|7958257|3183491|320000|0|0|0|4134031|4553627|0|000xQKCb2bnAxr|004gbK7Y0nL8I8|003TtLh82YGCgK|0|8013"
            }, {
              "albumName_hilight": "TVアニメ『この素晴らしい世界に祝福を！』オリジナル&#12539;サウンドトラック",
              "chinesesinger": 0,
              "docid": "2481106511047243558",
              "f": "105759298|ちいさな冒険者|165909|雨宮天;高橋李依;茅野愛衣|1307127|TVアニメ『この素晴らしい世界に祝福を！』オリジナル&amp;#12539;サウンドトラック|807102|93|7|1|1|3743150|1497455|750000|0|9092189|9163229|1965567|2084523|0|001IOPqp362aS1|004gbK7Y0nL8I8|000P4VxA1eEOmi|0|8013"
            }],
            "totalnum": 8
          },
          "totaltime": 2.000000000000000e-05,
          "zhida": {
            "chinesesinger": 0,
            "type": 0
          }
        },
        "message": "",
        "notice": "",
        "subcode": 0,
        "time": 1482224695,
        "tips": ""
      },
      cc: ''
    }
  },
  computed: {
    songUrl () { return `http://ws.stream.qqmusic.qq.com/${this.audio.songId}.m4a?fromtag=46` }
  },
  methods: {
    ajax () {
      let self = this
      let num = 2
      let name = '王菲'
      let urlString = `/fcgi-bin/music_search_new_platform?t=0&n=${num}&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w=${name}`
      $.get(urlString, function (data) {
        // console.log(JSON.parse(data))
        data = JSON.parse(data)
        self.cc = data
        data['data']['song']['list'].forEach(
          e => {
            let es = e['f'].split('|')
            console.log(es[0] + es[1])
          }
        )
      })
//       $.get(urlString)
//       .then(function (data) {
//         // Object.prototype.toString.call(data)
//         // data = JSON.parse(data)
//         // data['data']['song']['list'].forEach(
//         //   e => console.log(e['f'])
//         // )
//         self.cc = data
//         console.log(data.data.priority)
// //      console.log(Object.prototype.toString.call())
//       })
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
