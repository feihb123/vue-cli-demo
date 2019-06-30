import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/element-variables.scss'
import infiniteScroll from 'vue-infinite-scroll'
import store from "./store"


Vue.config.productionTip = false
// this.$axios.get(url,{}).then((response) => {})
Object.defineProperty(Vue.prototype, '$axios', { value: axios });


new Vue({
  router,
  store,
  axios,
  infiniteScroll,
  render: h => h(App)
}).$mount('#app')
