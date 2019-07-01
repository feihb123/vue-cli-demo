import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './plugins/element.js'
import './assets/element-variables.scss'
import infiniteScroll from 'vue-infinite-scroll'
import store from "./store"
import api from "./axios"

Vue.use(infiniteScroll)
Vue.config.productionTip = false
// this.$axios.get(url,{}).then((response) => {})
Object.defineProperty(Vue.prototype, '$axios', { value: axios });


new Vue({
  router,
  store,
  axios,
  created(){
    if(localStorage.getItem("token") != (null || "")){
      this.$store.dispatch('UserLogin', localStorage.getItem("token"));
    }
    if(localStorage.getItem("username") != (null || "")){
      this.$store.dispatch('UserName', localStorage.getItem("username"));
    }
    if(localStorage.getItem("portrait") != (null || "")){
      this.$store.dispatch('UserPortrait', localStorage.getItem("portrait"));
    }
    if(localStorage.getItem("id") != (null || "")){
      this.$store.dispatch('UserId', localStorage.getItem("id"));
    }
    
  },
  render: h => h(App)
}).$mount('#app')
