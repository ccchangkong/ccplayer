<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl"  @timeupdate='pts' @canplay='apts' controls autoplay loop></audio>
    <button @click='yl'>音量</button>
    <button @click="togglePanel">播放暂停</button>
    <p>{{pt | time}}/{{apt | time}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
      pt: '',
      apt: ''
    }
  },
  computed: {
    // pt: () => {
    //   this.$refs.player.currentTime
    // },
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
      this.pt = this.$refs.player.currentTime
    },
    apts () {
      this.apt = this.$refs.player.duration
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
