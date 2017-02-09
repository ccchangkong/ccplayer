import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const route = new VueRouter({
  routes: [
    {
      path: '/test', component: require('../components/hello.vue')
    },
    {
      path: '/test2', component: require('../components/hell.vue')
    }
  //   {
  //   path: '/index', component: require('../views/index')
  // }, {
  //   path: '/singer/info/:id', component: require('../views/singer_info')
  // }, {
  //   path: '*', redirect: '/index'
  // }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})

export default route
