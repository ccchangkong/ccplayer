<template>
  <div class="a-view">
    <ul class="view-ul">
      <!--<li v-if="historyList.length = 0">没有记录哟~</li>-->
      <li v-for="(i,n) in historyList" class="view-li">
        <p @click="fill(i)" class="view-p"><span class="view-p-title">{{ i.title }}</span><span class="view-p-singer">{{i.singer}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
        'historyList'
      ])
    },
    created () {
    },
    methods: {
      ...mapMutations([
        'fill'
      ])
    }
  }
</script>
