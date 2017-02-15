import Vue from 'vue'
import App from './App'
import router from './router/router.js'
import store from './vuex/store.js'
// import Axios from 'axios'
// import MuseUI from 'muse-ui'
// import 'muse-ui/dist/muse-ui.css'
// Vue.use(MuseUI)
// Vue.prototype.$http = Axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  store,
  router,
  components: { App }
}).$mount('#app')
