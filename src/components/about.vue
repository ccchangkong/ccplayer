<template>
  <div class="about"  :class='{Act:view.aboutFlag}' @click='changeAbout'>
    <div class="about-box">
      <div class="about-header">ccplayer</div>
      <div class="about-main">
        <p>cc长空制作&J.Su设计</p>
        <a href="http://weibo.com/u/1820064530" target="_blank"><span class="about-main-icon">微博</span></a>
        <a href="http://www.vastskycc.com/"target="_blank"><span class="about-main-icon">博客</span></a>
        <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=agkCBgVaBSobG0QJBQc"target="_blank"><span class="about-main-icon">邮箱</span></a>
        <p>V 1.0.0</p>
      </div>
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
.about.Act{
  background-color: rgba(74,74,74,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: Opa .5s;
}
@keyframes Opa {
  from{opacity: 0}
  to{opacity: 1}
}
.about{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: transparent;
  transition: 0.5s;
  z-index: 0;
  overflow: hidden;
  display: none;
}
.about-box{
  height: 30rem;
  width: 40rem;
  max-width: 80%;
  max-height: 80%;
}

.about-header{
  background-image:linear-gradient(limegreen, transparent), linear-gradient(45deg, skyblue, transparent), linear-gradient(-135deg, coral, transparent);
  background-blend-mode: screen;
  background-size: 100% 200%;
  background-position-y: 0;
  box-shadow: 0 0 10px #e5e5e5 inset;
  height: 30%;
  max-height: 10rem;
  transition: 0.5s;
  border-radius: .2rem / .2rem .2rem 0 0;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem 1rem 0
}
.about-header:hover{
  background-position-y: 50%;
}
.about-main{
  background-color: #fff;
  height: 70%;
  border-radius: .2rem / 0 0 .2rem .2rem;
}
.about-main-icon{
  font-size: 0.8rem;
  line-height: 2;
  margin: 0 1em;
  padding:0.1rem 0.5rem;
  border: 0.1rem solid #4a4a4a;
  border-radius: 10%;
  transition: 0.3s;
}
.about-main-icon:hover{
  background-color: #4a4a4a;
  color: #fff;
}
</style>
