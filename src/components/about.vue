<template>
  <div class="about"  :class='{Act:view.aboutFlag}' @click.self='changeAbout'>
    <div class="about-box">
      <div class="about-header">Cc.Player</div>
      <div class="about-main">
        <p class="about-main-title">cc长空制作</br>J.Su设计</p>
        <img src="../pic/ac.png" alt="" class="about-main-pic">
        <div class="about-main-icons">
          <a href="http://weibo.com/u/1820064530" target="_blank"><span class="about-main-icon">微博</span></a>
          <a href="http://www.vastskycc.com/"target="_blank"><span class="about-main-icon">博客</span></a>
          <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=agkCBgVaBSobG0QJBQc"target="_blank"><span class="about-main-icon">邮箱</span></a>
        </div>
        <p class="about-main-ver">Ver 1.0.1</p>
        <i class="material-icons close-btn"@click.self='changeAbout'>clear</i>
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
  transition: 0.5s;
  overflow: hidden;
  display: none;
}
.about-box{
  height: 30rem;
  width: 40rem;
  max-width: 80%;
  max-height: 80%;
  box-shadow: 0 0 3rem #aaa;
  overflow: hidden;
}

.about-header{
  background-image:linear-gradient(#bf4c4c, transparent), linear-gradient(45deg, #007eb1, transparent), linear-gradient(-135deg, #1f1f1f, transparent), linear-gradient(-240deg, #671c00, #d2a2a6);
  background-blend-mode: screen;
  background-size: 100% 200%;
  background-position-y: 0;
  box-shadow: 0 0 5px #e5e5e5 inset;
  height: 30%;
  max-height: 10rem;
  transition: 0.5s;
  border-radius: .2rem / .2rem .2rem 0 0;
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 1rem 1rem 0;
  /*-webkit-text-fill-color: transparent;
  -webkit-background-clip: text;  */
}
.about-header:hover{
  background-position-y: 50%;
}
.about-main{
  background-color: #fff;
  background-image: linear-gradient(135deg,#d8d8d8, #fff);
  height: 70%;
  border-radius: .3rem / 0 0 .3rem .3rem;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.about-main-pic{
  width: 110px;
  height: 95px;
  margin-bottom: 2rem;
  border-radius: 15%/0 0 25% 0;
  /*border-radius: 10%;
  box-shadow: 0 0 0.5rem #aaa;*/
}
.about-main-title{
  font-size: 1.2rem;
  line-height: 2;
  padding-bottom: 1.2rem;
}
.about-main-icon{
  font-size: 0.8rem;
  /*line-height: 2;*/
  margin: 0 1em;
  padding:0.2rem 0.5rem;
  border: 0.1rem solid #4a4a4a;
  border-radius: 15%/0 0 25% 0;
  transition: 0.3s;
  background-color: #4a4a4a;
  color: #fff;
}
.about-main-icon:hover{
  background-color: inherit;
  color: rgb(34,34,34);
}
.about-main-ver{
  flex: auto;
  align-items: flex-end;
  display: flex;
  align-self: center;
  font-size: 0.8rem;
  line-height: 1;
  color: #9a9a9a;
}
.close-btn{
  position: absolute;
  font-size: 1.5rem;
  line-height: 2rem;
  color: #aaa;
  text-align: right;
  padding-top: .2rem;
  width: 2rem;
  height: 2rem;
  right: 0;
  bottom: 0;
  background-color: #5a5a5a;
  border-radius: 100% 0 0 0;
  transition: .5s;
  box-shadow:  0 0 1rem #aaa;
}
.close-btn:hover{
  color: #5a5a5a;
  background-color: #aaa;
}
</style>
