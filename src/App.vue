<template>
  <div id="app" :class='{Act:view.openFlag}' @click='test'>
     <!--<Lianyi></Lianyi>-->
     <header>
     <img :src="audio.imgUrl" alt="" class="a-img">
     </header>
     <main>
      <player></player>
      <section class="a-view">
      <nav>
          <router-link to='/search'>搜索</router-link>
          <router-link to='/hot'>热榜</router-link> 
          <router-link to='/list'>新歌</router-link> 
          <router-link to='/history'>历史</router-link>    
      </nav>
      <keep-alive >
          <router-view ></router-view>
        </keep-alive> 
      </section>
     </main>
      <footer>
        <Buttons></Buttons>
      </footer>  
  </div>
</template>
<script>
import Player from './components/player.vue'
import Buttons from './components/button.vue'
import Lianyi from './components/lianyi.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Player,
    Buttons,
    Lianyi
  },
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
      'view'
    ])
  },
  methods: {
    test () {
    }
  }
}
</script>
<style>
html {
  box-sizing: border-box;
  font-size: 16px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
ul,
p{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
  a{
    color:#222;
    text-decoration:none;
    outline:none;
    cursor:pointer;
    }
a:link,
a:visited,
a:hover,
a:focus{
  text-decoration:none;
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100vh;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
}
header {
  flex: 0 0 50%;
  background: linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
  overflow: hidden;
  transition: .5s;
}
/*header:hover {
  height: 50%;
  max-height: 100vw;
}*/
.a-img {
  /*height: 100%;*/
  width: 100%;
}
main {
  flex: auto;
  /*overflow-y: scroll;*/
  display: flex;
  flex-direction: column;
  background-color: #4a4a4a;
  color: #f5f5f5;
}
main li{
  border-bottom: 2px solid #f0f0f0; 
}
footer {
  flex: 0 0 2em;
  background-color: #4a4a4a;
  color:#f5f5f5;
  
}
nav {
  flex: 0 0 1.5em;
  display: flex;
  padding: 0 5em;
}
nav a{
  flex: auto;
}
#app #player {
  height: 100%;
  transition: .5s height;
}
#app.Act #player {
  flex: 0 0 3em;
}
section {
  flex:0 0 0;
  overflow: hidden;
  background-color: #f6f6f6;
  color: #9a9a9a;
  transition: .5s;
}
#app.Act section {
  flex: auto;
  overflow: scroll; 
  
}
@media screen and (min-width: 375px) {
    html {
        /* iPhone6的375px尺寸作为16px基准，414px正好18px大小, 600 20px */
        font-size: calc(100% + 2 * (100vw - 375px) / 39);
        font-size: calc(16px + 2 * (100vw - 375px) / 39);
    }
}
@media screen and (min-width: 414px) {
    html {
        /* 414px-1000px每100像素宽字体增加1px(18px-22px) */
        font-size: calc(112.5% + 4 * (100vw - 414px) / 586);
        font-size: calc(18px + 4 * (100vw - 414px) / 586);
    }
}
@media screen and (min-width: 600px) {
    html {
        /* 600px-1000px每100像素宽字体增加1px(20px-24px) */
        font-size: calc(125% + 4 * (100vw - 600px) / 400);
        font-size: calc(20px + 4 * (100vw - 600px) / 400);
    }
}
@media screen and (min-width: 1000px) {
    html {
        /* 1000px往后是每100像素0.5px增加 */
        font-size: calc(137.5% + 6 * (100vw - 1000px) / 1000);
        font-size: calc(22px + 6 * (100vw - 1000px) / 1000);
    }
}


</style>
