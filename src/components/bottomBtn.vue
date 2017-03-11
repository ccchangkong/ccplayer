<template>
  <div class="bottom-btn" :class='{Act:view.openFlag}'>
    <i class="material-icons b-btn-i" @click='changeOpen'v-show='!view.openFlag'>list</i>
    <i class="material-icons b-btn-i" v-show='view.openFlag' @click='changeOpen'>arrow_drop_down</i>
    <i class="material-icons b-btn-i" @click='changeAbout' v-show='!view.openFlag'>more_horiz</i>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'bottomBtn',
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
<style>
.bottom-btn {
  display: flex;
  justify-content: space-between;
  /*align-items: center;*/
  height: 100%;
  padding: 0 3rem;
  
}
.bottom-btn.Act {
  justify-content: space-around;
}
.b-btn-i{
  font-size: 2rem;
  line-height: 3rem;
}
.b-btn-i:nth-of-type(2){
  color: #9a9a9a;
  font-size: 3rem; 
  position: relative;
  animation: Bg 1.5s ease infinite alternate;
}
@keyframes Bg {
  0%{opacity: 0}
  100%{opacity: 1}
}
.b-btn-i:nth-of-type(2)::before{
  content: '';
  position: absolute;
  top: -1rem;
  left: -1rem;
  right: -1rem;
  bottom: -1rem;
}
</style>
