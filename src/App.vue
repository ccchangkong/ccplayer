<template>
  <div id="app">
     <!--<p>{{$store.getters.bb}}</p>
     <p>{{aa}}</p>  -->
     <header>
     <img :src="audio.imgUrl" alt="" class="a-img">
     </header>
     <slider></slider>
     <slider></slider>
      <player></player>
      <nav>
     <router-link to='/search'>search</router-link>
     <router-link to='/hot'>hot</router-link> 
     <router-link to='/history'>history</router-link>    
     <router-link to='/list'>list</router-link> 
      </nav>
      <div class="a-view">
      <keep-alive >
        <!--<transition>-->
          <router-view ></router-view>
          <!--</transition>-->
        </keep-alive> 
      </div>
       
    <input type="text" v-model="audio.keyWord">
    <Buttons></Buttons>
  </div>
</template>
<script>
import Player from './components/player.vue'
import Buttons from './components/button.vue'
import Slider from './components/slider.vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    Player,
    Buttons,
    Slider
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
      'audio'
    ])
  },
  methods: {
    ...mapMutations([
      'test' // 映射 this.increment() 为 this.$store.commit('increment')
    ])
  }
  // created () {
  //   this.$router.go('')
  // }
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
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100vh;
  overflow: hidden; 
}

header {
  height: 30%;
  background:
          linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent);
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
nav {
  height: 5%;
}
#player {
  height: 10%;
}
.a-view {
  height: 20%;
  overflow: hidden;
  overflow-y: scroll;
}
</style>
