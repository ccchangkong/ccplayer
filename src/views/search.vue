<template>
  <div>
    <SearchBtn v-model="list"></SearchBtn>
    <ul>
      <li v-for="(i,n) in list">
        <p @click="fill(i)"><span>{{ i.title }}</span><span>{{i.singer}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import SearchBtn from '../components/searchBtn.vue'
  import { mapGetters, mapState, mapMutations } from 'vuex'
  export default {
    components: {
      SearchBtn
    },
    data () {
      return {
        list: []
      }
    },
    created () {
    },
    computed: {
      ...mapGetters([
        // ...
      ]),
      ...mapState([
        'audio'
      ])
    },
    methods: {
      ...mapMutations([
        'fill' // 映射 this.increment() 为 this.$store.commit('increment')
      ])
    }
  }
</script>
<style scoped>
ul{
  padding: 1em 0;
}
li{
  line-height: 2em;
  height: 2em;
  padding: 0 1em;
}
p{
  display: flex; 
  justify-content: space-between;
  text-overflow:ellipsis;
   white-space:nowrap;
  overflow: hidden;
  text-align: center;
}
p span{
  flex: 0 1 10em;
}
p span:first{
  text-align: right;
}
/*p span:last-child{
  text-align: right;
}*/
</style>
