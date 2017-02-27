<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl"  @timeupdate='pts' @canplay='apts' controls  loop>autoplay</audio>
   <!--<p>={{sliderValue}}%{{sValue}}</p>-->
   <p>{{audio.currentLength | time}}<slider v-model="sliderValue" @changeEvent='test'></slider>{{apt | time}}</p>
    <i class="material-icons"@click='yl'>volume_up</i>
    <i class="material-icons">volume_off</i>
    <i class="material-icons">skip_previous</i>
    <!--<i @click="togglePanel">▶〓</i>-->
    <i class="material-icons" @click="togglePanel">play_arrow</i>
    <i class="material-icons">pause</i>
    <i class="material-icons">skip_next</i>
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
      flag: false
    }
  },
  computed: {
    sliderValue () {
      let a = this.apt === 0 ? 0 : Math.round((this.audio.currentLength / this.apt) * 100)
      return a
    },
    ...mapState([
      'audio'
    ])
  },
  methods: {
    togglePanel () {
      let audio = this.$refs.player
      if (audio !== null) {
        if (!audio.paused) {
          audio.pause()
          document.title = '▣〓'
          this.flag = !this.flag
        } else {
          audio.play()
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
      this.$refs.player.muted = !this.$refs.player.muted
    },
    test (val) {
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
  // components: {
  //   Hello
  // }
}
</script>
<style scoped>
audio{
  display: none;
}
</style>
