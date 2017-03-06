<template>
  <div class="bottomBtn":class='{Act:view.openFlag}'>
    <i class="material-icons" @click='changeOpen'v-show='!view.openFlag'>list</i>
    <i class="material-icons" style="color: #9a9a9a;font-size: 2rem;"v-show='view.openFlag' @click='changeOpen'>arrow_drop_down</i>
    <i class="material-icons" @click='changeAbout' v-show='!view.openFlag'>more_horiz</i>
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
    },
    changeAbout () {
      this.view.aboutFlag = !this.view.aboutFlag
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bottomBtn{
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  height: 100%;
  padding: 0 3rem;
  
}
.bottomBtn.Act{
  justify-content: space-around;
}
i{
  font-size: 2rem;
  line-height: 3rem;
}
</style>
