<template>
  <div class="test">爱情<span id="title" ref="title">0</span>
      <div class="scale_panel">
        <span class="r">100</span>0
        <div class="scale" id="bar" ref="bar">
          <div ref="step"></div>
          <span id="btn" ref="btn" @mousedown='btndown' :class='{Act:flag}'@touchstart="btnth">    
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
      flag: false
    }
  },
  computed: {
    max () {
      return this.$refs.bar.offsetWidth - this.$refs.btn.offsetWidth / 2
    }
  },
  methods: {
    tTo (m, x) {
      let to = m.min(this.max, m.max(-this.$refs.btn.offsetWidth / 2, this.l + (x - this.x)))
      this.ondrag(m.round(m.max(0, to / this.max) * 100), to)
    },
    btndown (e) {
      this.x = (e || window.event).clientX
      this.l = this.$refs.btn.offsetLeft
      this.flag = true
      document.addEventListener('mousemove', this.btnmove)
      document.addEventListener('mouseup', this.btnup)
    },
    btnmove (e) {
      // window.alert(1)
      let m = Math
      let thisX = (e || window.event).clientX
      this.tTo(m, thisX)
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    btnup () {
      // window.alert(2)
      this.flag = false
      document.removeEventListener('mousemove', this.btnmove)
      document.removeEventListener('mouseup', this.btnup)
    },
    ondrag (pos, x) {
      this.$refs.title.innerHTML = pos + '%'
      this.$refs.btn.style.left = x + 'px'
      this.$refs.step.style.width = Math.max(0, x) + 'px'
    },
    btnth (e) {
      this.x = (e || window.event).touches[0].clientX
      this.l = this.$refs.btn.offsetLeft
      this.flag = true
      document.addEventListener('touchmove', this.btnthmove)
      document.addEventListener('touchend', this.btnthup)
    },
    btnthmove (e) {
      // window.alert(1)
      let m = Math
      let thisX = (e || window.event).touches[0].clientX
      this.tTo(m, thisX)
      // window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    btnthup () {
      // window.alert(2)
      this.flag = false
      document.removeEventListener('touchmove', this.btnthmove)
      document.removeEventListener('touchend', this.btnthup)
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
    height: 8px;
    position: absolute;
    left: -4px;
    top: -1px;
    cursor: pointer;
        border-radius: 50%;
        transform: scale(2);
        transition: 0.5s box-shadow;

  }
.scale span.Act{
box-shadow: 0 0 5px #333;
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
    position: absolute;
    height: 5px;
    width: 0;
    left: 0;
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
