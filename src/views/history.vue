<template>
  <div class="a-view">
    <ul class="view-ul">
      <li v-for="(i,n) in list" class="view-li">
        <p @click="fillSong({list,n})" class="view-p"><span class="view-p-title">{{ i.title }}</span><span class="view-p-singer">{{i.singer}}</span></p>
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
      list () {
        return this.historyList
      },
      ...mapState([
        'historyList'
      ])
    },
    created () {
    },
    methods: {
      ...mapMutations([
        'fillSong'
      ])
    }
  }
</script>
