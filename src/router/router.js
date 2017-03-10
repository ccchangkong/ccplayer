import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/search', component: require('../views/search.vue')
    },
    {
      path: '/history', component: require('../views/history.vue')
    },
    {
      path: '/list', component: require('../views/list.vue')
    },
    {
      path: '/hot', component: require('../views/hot.vue')
    }, {
      path: '*', redirect: '/search'
    }
  ]
})

export default router
