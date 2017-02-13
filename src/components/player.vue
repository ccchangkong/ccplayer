<template>
  <div id="player">
    
    <audio ref="player" :src="audio.songUrl" controls></audio>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'player',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'audio'
    ])
  },
  methods: {
  }
  // components: {
  //   Hello
  // }
}
</script>
<style>

</style>
