<template>
  <div id="app">
     <!--<p>{{$store.getters.bb}}</p>
     <p>{{aa}}</p>  -->
     <header>
     <img :src="audio.imgUrl" alt="" class="a-img">
     </header>
      <player></player>
      <nav>
     <router-link to='/search'>search</router-link>
     <router-link to='/hot'>hot</router-link> 
     <router-link to='/history'>history</router-link>    
     <router-link to='/list'>list</router-link> 
      </nav>
      <div class="a-view">
<keep-alive >
        <transition><router-view ></router-view></transition>
        </keep-alive> 
      </div>
       
    <input type="text" v-model="audio.keyWord">
    <Buttons></Buttons>
  </div>
</template>
<script>
import Player from './components/player.vue'
import Buttons from './components/button.vue'
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
  name: 'app',
  components: {
    Player,
    Buttons
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
}

*, *:before, *:after {
  box-sizing: inherit;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
  height: 100vh;
  overflow: hidden; 
}

header {
  height: 40%;
  background:
          linear-gradient(limegreen, transparent), linear-gradient(90deg, skyblue, transparent), linear-gradient(-90deg, coral, transparent);
          background-blend-mode: screen;
  overflow: hidden;
}
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
}
</style>
