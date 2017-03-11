<template>
  <div class="slider" style="display: inline-block">
    <!--{{inputValue}}-->
        <div class="slider-track"  ref="bar" @click='btnclick'>
          <div ref="step" class="slider-fill"></div>
          <span class="slider-thumb"  ref="btn" @mousedown='btndown' @touchstart.stop="btnth" :class='{Act:flag}'>    
          </span>
        </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      x: '',
      l: '',
      flag: false,
      inputValue: this.value
    }
  },
  computed: {
    width () {
      return this.inputValue * (this.$refs.bar.offsetWidth / this.max) - this.$refs.btn.offsetWidth / 2
    },
    stepWidth () {
      return Math.max(0, this.width)
    }
    // bfb () {
    //   return {
    //     backgroundImage: `linear-gradient(90deg, blue, blue ${this.stepWidth}px, red ${this.stepWidth}px)`
    //     // backgroundImage: `linear-gradient(90deg, blue, blue 50px, red 50px)`
    //   }
    // }
  },
  mounted () {
    this.$refs.btn.style.left = this.width + 'px'
    this.$refs.step.style.width = this.stepWidth + 'px'
  },
  methods: {
    btnclick (e) {
      // let x = Math.min(this.maxW(), e.clientX - this.$refs.bar.offsetLeft)
      // console.log(e.clientX, this.$refs.bar.offsetLeft)
      let x = e.clientX - this.$refs.bar.getBoundingClientRect().left
      this.inputValue = Math.round((x / this.$refs.bar.offsetWidth) * 100)
      // var y = e.clientY - this.$refs.bar.offsetTop
      this.changeEvent()
    },
    maxW () {
      return this.$refs.bar.offsetWidth - this.$refs.btn.offsetWidth / 2
    },
    btndown (e) {
      this.x = (e || window.event).clientX
      this.l = this.$refs.btn.offsetLeft
      this.flag = true
      document.addEventListener('mousemove', this.btnmove)
      document.addEventListener('mouseup', this.btnup)
    },
    btnmove (e) {
      let m = Math
      let thisX = (e || window.event).clientX
      this.tTo(m, thisX)
    },
    btnup () {
      this.flag = false
      document.removeEventListener('mousemove', this.btnmove)
      document.removeEventListener('mouseup', this.btnup)
      this.changeEvent()
    },
    tTo (m, x) {
      let w = m.min(this.maxW(), m.max(-this.$refs.btn.offsetWidth / 2, this.l + (x - this.x)))
      this.inputValue = m.round(m.max(0, w / this.maxW()) * 100)
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    changeEvent () {
      this.$emit('changeEvent', this.inputValue)
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
    },
    btnthup () {
      // window.alert(2)
      this.flag = false
      document.removeEventListener('touchmove', this.btnthmove)
      document.removeEventListener('touchend', this.btnthup)
      this.changeEvent()
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
      this.$refs.btn.style.left = this.width + 'px'
      this.$refs.step.style.width = this.stepWidth + 'px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slider {
    position: relative;
    height: 16px;
    /*width: 15rem;*/
    width: 100%;
    list-style: none;
    display: inline-block;
    vertical-align: middle;
    margin: 0.25rem 0 0;
    user-select: none;
  }
  .slider-thumb {
    background-color: #fdfdfd;
    width: 16px;
    height: 16px;
    position: absolute;
    left: -8px;
    top: -5px;
    cursor: pointer;
    border-radius: 50%;
    transition: 0.5s box-shadow;
  }
  .slider-thumb::before{
    content: '';
    position: absolute;
    top: -1rem;
    left: -1rem;
    right: -1rem;
    bottom: -1rem;
  }
  .slider-thumb:hover,
  .slider-thumb.Act {
     box-shadow: 0 0 5px #333;
  }
  .slider-track {
    background: #9d9d9d;
    height: 5px;
    position: relative;
    font-size: 0px;
    cursor: pointer;
    user-select: none;
  }

  .slider-fill {
    background-color: #fdfdfd;
    position: absolute;
    height: 5px;
    width: 0;
    left: 0;
    bottom: 0;
    user-select: none;
  }
</style>
