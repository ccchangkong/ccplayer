<template>
  <div>
     <ul>
      <li v-for="(item,index) in historyList">
        <p @click="fill(item)">{{item.songId}}{{item.title}}{{item.imgId}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
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
    }
  }
</script>
