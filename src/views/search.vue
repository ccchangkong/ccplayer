<template>
  <div class="a-view">
    <SearchBtn v-model="list"></SearchBtn>
    <ul class="view-ul">
      <li v-for="(i,n) in list" class="view-li">
        <p @click="fill({list,n})" class="view-p"><span class="view-p-title">{{ i.title }}</span><span class="view-p-singer">{{i.singer}}</span></p>
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
<style>
/*p span:last-child{
  text-align: right;
}*/
</style>
