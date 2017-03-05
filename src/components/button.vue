<template>
  <div class="bottomBtn">
    <i class="material-icons" @click='changeOpen'v-show='!view.openFlag'>list</i>
    <i class="material-icons" style="color: #9a9a9a;font-size: 2rem;"v-show='view.openFlag' @click='changeOpen'>arrow_drop_down</i>
    <i class="material-icons" v-show='!view.openFlag'>more_horiz</i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'buttons',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'view'
    ])
  },
  methods: {
    changeOpen () {
      this.view.openFlag = !this.view.openFlag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomBtn{
  display: flex;
  justify-content: space-around;
  /*align-items: center;*/
  height: 100%;
}
i{
}
</style>
