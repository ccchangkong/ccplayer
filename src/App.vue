<template>
  <div id="app" :class='{Act:view.openFlag}'>
     <!--<Lianyi></Lianyi>-->
     <header>
     <img :src="audio.imgUrl" alt="" class="a-img">
     </header>
     <main  @touchstart="appTh">
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
      <About></About>
  </div>
</template>
<script>
import Player from './components/player.vue'
import Buttons from './components/button.vue'
import About from './components/about.vue'
import Lianyi from './components/lianyi.vue'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Player,
    Buttons,
    About,
    Lianyi
  },
  data () {
    return {
      y: 0
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
    appTh (e) {
      this.y = (e || window.event).touches[0].clientY
      document.addEventListener('touchmove', this.appThmove)
      document.addEventListener('touchend', this.appThup)
    },
    appThmove (e) {
      let Y = (e || window.event).touches[0].clientY
      if ((this.y - Y) > 50) {
      }
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    appThup (e) {
      document.removeEventListener('touchmove', this.appThmove)
      document.removeEventListener('touchend', this.appThup)
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
  width: 100vw;
  overflow: hidden; 
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header {
  flex: 0 0 55%;
  background: linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
  overflow: hidden;
  transition: .5s;
}
#app.Act header {
  flex: 0 0 40%;
  filter: blur(2px);
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
section {
  flex:0 0 0;
  display: flex;
  flex-direction: column;
  background-color: inherit;
  color: #9a9a9a;
  opacity: 0;
  transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
  transform: translate3d(0, 0, 0);
  overflow: hidden;
  /*will-change: opacity,background-color;*/
  /*filter: blur(0.2rem);  */
}
#app.Act section {
  opacity: 1;
  background-color: #f6f6f6;
  /*filter: blur(0);*/
  flex: auto; 
}
nav {
  flex: 0 0 2rem;
  display: flex;
  line-height: 2rem;
  padding: 0 10%;
}
nav a{
  flex: auto;
  text-shadow: 3px 3px 10px rgba(174, 174, 174, 0.8);
}
nav a:nth-of-type(2){
  text-shadow:3px 3px 10px rgba(187, 97, 155, 0.8);
}
section .a-view{
  overflow-y: scroll;
}
.view-ul{
 
}
.view-li{
  line-height: 2rem;
  height: 2rem;
  padding: 0 1rem;
   border-bottom: 2px solid #f0f0f0; 
}
.view-p{
  display: flex; 
  justify-content: space-between;
  text-overflow:ellipsis;
   white-space:nowrap;
  overflow: hidden;
  text-align: left;
}
.view-p-title,
.view-p-singer{
  flex: 0 1 10rem;
}
.view-p-title{
  text-align: left;
}
footer {
  flex: 0 0 3rem;
  background-color: #4a4a4a;
  color:#f5f5f5;
  
}

#app #player {
  flex: auto;
  transition: 1s height;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
#app.Act #player {
  flex: 0 0 3rem;
  flex-direction: row;
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
