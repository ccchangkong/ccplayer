<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl"  @timeupdate='pts' @canplay='apts' controls  loop autoplay></audio>
   <!--<p>={{sliderValue}}%{{sValue}}</p>-->
   
   <!--<i class="material-icons"@click='yl'>{{volValue}}</i>-->
   <div class="a-slider">
    <p v-show='!view.openFlag' class="a-slider-p">{{audio.currentLength | time}}</p>
    <div class="a-slider-box"><slider v-model="sliderValue" @changeEvent='currentChange'></slider></div> 
     <p v-show='!view.openFlag' class="a-slider-p">{{apt | time}}</p>
   </div>
   <div class="a-btn">
    <i class="material-icons a-btn-i">skip_previous</i>
    <i class="material-icons a-btn-i" @click="togglePanel">{{playValue}}</i>
    <i class="material-icons a-btn-i">skip_next</i>
    </div>
    <div class="a-play" v-show='!view.openFlag'>
      <p>{{audio.title}}</p>
      <p>{{audio.singer}}</p>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Slider from './slider.vue'
export default {
  name: 'player',
  components: {
    Slider
  },
  data () {
    return {
      apt: 0,
      volFlag: true
    }
  },
  computed: {
    sliderValue () {
      let a = this.apt === 0 ? 0 : Math.round((this.audio.currentLength / this.apt) * 100)
      return a
    },
    volValue () {
      return this.volFlag ? 'volume_up' : 'volume_off'
    },
    playValue () {
      return this.audio.currentFlag ? 'pause' : 'play_arrow'
    },
    ...mapState([
      'audio',
      'view'
    ])
  },
  methods: {
    togglePanel () {
      let player = this.$refs.player
      if (player !== null) {
        this.audio.currentFlag = !this.audio.currentFlag
        if (!player.paused) {
          player.pause()
          document.title = '〓'
        } else {
          player.play()
          document.title = '▶'
        }
      }
    },
    pts () {
      this.audio.currentLength = this.$refs.player.currentTime
    },
    apts () {
      this.apt = this.$refs.player.duration
      document.title = '▶'
    },
    yl () {
      this.volFlag = !this.volFlag
      this.$refs.player.muted = !this.$refs.player.muted
    },
    currentChange (val) {
      // this.$refs.player.pause()
      this.$refs.player.currentTime = this.$refs.player.duration * val / 100
      // this.$nextTick(() => this.$refs.player.play())
    }
  },
  filters: {
    time (value) {
      var length = Math.floor(value)
      var minute = Math.floor(value / 60)
      if (minute < 10) {
        minute = '0' + minute
      }
      var second = length % 60
      if (second < 10) {
        second = '0' + second
      }
      return minute + ':' + second
    }
  }
  // watch: {
  //   volFlag (val) {
  //     this.$refs.player.muted = !val
  //   }
  // }
}
</script>
<style>
audio{
  display: none;
}
#player{
position: relative;
line-height: 3rem;
}
.a-play{
  position: absolute;
  top: -3rem;;
  left: 0;
  height: 3rem;
  line-height: 1.5rem;  
  width: 100%;
  padding: 0 1rem;
  font-size: 0.8rem;
  text-align: left;
  background-color: #4a4a4a;
  background-color:rgba(74,74,74,0.9);
}
.a-slider{
  display: flex;
  justify-content: space-around;
  flex: 1 0 70%;
}
.a-slider-box{
  width: 75%;
  padding: 0 1.5rem;
}
.a-slider-p{
 font-size: 1rem;
}
.a-btn{
 flex:auto;
  font-size: 0; 
}
.a-btn-i{
  line-height: 3rem;  
  font-size: 1.5rem;
}
</style>
