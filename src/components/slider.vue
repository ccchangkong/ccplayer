<template>
  <div class="test">爱情<span id="title" ref="title">0</span>
      <div class="scale_panel">
        <span class="r">100</span>0
        <div class="scale" id="bar" ref="bar">
          <div ref="step"></div>
          <span id="btn" ref="btn" @mousedown='btndown'>    
             <!--@touchstart="handleTouchStart" @touchend="handleTouchEnd" @touchcancel="handleTouchEnd"       -->
          </span>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      x: '',
      l: '',
      max: ''
    }
  },
  computed: {
  },
  methods: {
    btndown (e) {
      this.x = (e || window.event).clientX
      this.l = this.$refs.btn.offsetLeft
      this.max = this.$refs.bar.offsetWidth - this.$refs.btn.offsetWidth
      document.addEventListener('mousemove', this.btnmove)
      document.addEventListener('mouseup', this.btnup)
    },
    btnmove (e) {
      // window.alert(1)
      let m = Math
      let thisX = (e || window.event).clientX
      let to = m.min(this.max, m.max(-2, this.l + (thisX - this.x)))
      this.$refs.btn.style.left = to + 'px'
      this.ondrag(m.round(m.max(0, to / this.max) * 100), to)
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    btnup () {
      // window.alert(2)
      document.removeEventListener('mousemove', this.btnmove)
      document.removeEventListener('mouseup', this.btnup)
    },
    ondrag (pos, x) {
      this.$refs.step.style.width = Math.max(0, x) + 'px'
      this.$refs.title.innerHTML = pos + '%'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .scale_panel {
    font-size: 12px;
    color: #999;
    width: 200px;
    position: absolute;
    line-height: 18px;
    left: 60px;
    top: -0px;
  }

  .scale_panel .r {
    float: right;
  }

  .scale span {
    background-color: black;
    width: 8px;
    height: 16px;
    position: absolute;
    left: -2px;
    top: -1px;
    cursor: pointer;
  }

  .scale {
    background: red;
    border-left: 1px #83BBD9 solid;
    border-right: 1px red solid;
    width: 200px;
    height: 5px;
    position: relative;
    font-size: 0px;
  }

  .scale div {
    background-color: blue;
    width: 0px;
    position: absolute;
    width: 0;
    left: 0;
    height: 5px;
    bottom: 0;
  }

  .test {
    font-size: 12px;
    line-height: 50px;
    position: relative;
    height: 50px;
    list-style: none;
  }

</style>
