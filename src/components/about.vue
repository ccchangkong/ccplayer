<template>
  <div class="about"  v-show='view.aboutFlag' @click='changeAbout'>
    <div class="about-header"></div>
    <div class="about-main">
      <p>cc长空制作&J.Su设计</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'about',
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
    changeAbout () {
      this.view.aboutFlag = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.about{
  height: 100%;
  width: 100%;
  padding: 6rem 3rem 10rem;
  /*margin: auto;*/
  position: absolute;
  background-color: transparent;
  box-shadow: 0 0 15px #e5e5e5;
  transition: 0.5s;
  z-index: 0;
  overflow: hidden;
}
.about::before{
  content: '';
  position: absolute;
  width: 200vw;
  height: 200vh;
  top: -50%;
  left:-50%;
  background-color: rgba(74,74,74,0.8);
  z-index: -1;
}
.about-header{
  background-image:linear-gradient(limegreen, transparent), linear-gradient(45deg, skyblue, transparent), linear-gradient(-135deg, coral, transparent);
  background-blend-mode: screen;
  background-size: 100% 200%;
  background-position-y: 0;
  box-shadow: 0 0 10px #e5e5e5 inset;
  height: 30%;
  transition: 0.5s;  
}
.about-header:hover{
  background-position-y: 50%;
}
.about-main{
  background-color: #fff;
  height: 70%;
}
</style>
