<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl"  @timeupdate='pts' @canplay='apts' controls autoplay loop></audio>
    <button @click='yl'>音量</button>
    <button @click="togglePanel">播放暂停</button>
    <p>{{pt | time}}/{{apt | time}}={{this.bfb}}%</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
      pt: 0,
      apt: 0,
      flag: false
    }
  },
  computed: {
    bfb () {
      let a = this.apt === 0 ? 0 : Math.round((this.pt / this.apt) * 100)
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
          document.title = '='
        } else {
          audio.play()
          document.title = '▶'
        }
      }
    },
    pts () {
      if (this.flag) {
        this.pt = this.$refs.player.currentTime
      }
    },
    apts () {
      if (this.flag) {
        this.apt = this.$refs.player.duration
      }
      document.title = '▶'
    },
    yl () {
      this.$refs.player.muted = !this.$refs.player.muted
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
  /*display: none;*/
}
</style>
