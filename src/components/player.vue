<template>
  <div id="player">    
    <audio ref="player" :src="audio.songUrl" controls autoplay></audio>
    <button @click="togglePanel">播放暂停</button>
    <p>{{pt}}</p>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
      pt: ''
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
      this.pt = audio.currentTime
      if (audio !== null) {
        if (!audio.paused) {
          audio.pause()
        } else {
          audio.play()
        }
      }
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
