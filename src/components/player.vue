<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl"  @timeupdate='pts' @canplay='apts' controls  loop autoplay></audio>
   <!--<p>={{sliderValue}}%{{sValue}}</p>-->
   <p><i class="material-icons"@click='yl'>{{volValue}}</i>{{audio.currentLength | time}}<slider v-model="sliderValue" @changeEvent='currentChange'></slider>{{apt | time}}</p> 
    <i class="material-icons">skip_previous</i>
    <i class="material-icons" @click="togglePanel">{{playValue}}</i>
    <i class="material-icons">skip_next</i>
    <div class="audioPlay">
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
      'audio'
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
      // this.$refs.player.muted = !this.$refs.player.muted
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
  },
  watch: {
    volFlag (val) {
      this.$refs.player.muted = !val
    }
  }
}
</script>
<style scoped>
audio{
  display: none;
}
#player{
position: relative;
}
.audioPlay{
  position: absolute;
  top: -3em;;
  left: 0;
  height: 3em;
  width: 100%;
  padding: 0.5em 2em;
  text-align: left;
  background-color: #4a4a4a;
  background-color:rgba(74,74,74,0.9);
}
</style>
