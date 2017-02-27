<template>
  <div id="container">
  <div class="paper" @mousedown='test' ref="paper">
    <p id="num">1</p>
    <div class="ripple" ref="ripple" :class='{Act:flag}'></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'test',
  props: {
  },
  data () {
    return {
      flag: false
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    test (e) {
      let ripple = this.$refs.ripple
      let paper = this.$refs.paper
      this.flag = false
      this.$nextTick(() => {
        let x = parseInt(e.pageX - paper.getBoundingClientRect().left) - (ripple.style.width / 2)
        let y = parseInt(e.pageY - paper.getBoundingClientRect().top) - (ripple.style.height / 2)
        console.log(x, y)
        ripple.style.top = y + 'px'
        ripple.style.left = x + 'px'
        this.flag = true
      })
    }
  },
  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /*#container {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-right: -50%;
      opacity: 0.9;
      transform: translate(-50%, -50%);
    }*/
    .paper {
      background-color: #fffeff;
      width: 500px;
      height: 100px;
      overflow: hidden;
      position: relative;
      margin-bottom: 16px;
      box-shadow: 0px 1px 2px 1px #d3d2d3;
      border-radius: 2px;
      transition: 0.1s ease-in;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    .paper:hover {
      cursor: pointer;
    }
    #num {
      font-family: 'Roboto', sans-serif;
      font-size: 28px;
      color: #999;
      text-align: center;
      margin-top: 32px;
    }
    .ripple {
      background-color: rgba(0, 0, 0, 0.45);
      border-radius: 100%;
      height: 100px;
      width: 100px;
      margin-top: -100px;
      position: relative;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    .Act {
      -webkit-animation: ripple 0.4s linear;
      animation: ripple 0.4s linear;
    }
    @-webkit-keyframes ripple {
      100% {
        -webkit-transform: scale(12);
        transform: scale(12);
        background-color: transparent;
      }
    }
    @keyframes ripple {
      100% {
        -webkit-transform: scale(12);
        transform: scale(12);
        background-color: transparent;
      }
    }
</style>
