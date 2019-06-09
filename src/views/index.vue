<!-- 主页 -->
<template>
  <div>
      <Navigation></Navigation>
      <Search></Search>
      <Middle></Middle>
      <br>
      <Shop></Shop>
      <Shop></Shop>
      <!-- 回到顶部 -->
      <el-backtop></el-backtop>
      <Footer></Footer>     
   </div>
</template>

<script>
import Navigation from "../components/consumer/index/Navigation.vue"
import Search from "../components/consumer/index/Search.vue"
import Middle from '../components/consumer/index/Middle.vue'
import Shop from '../components/consumer/index/Shop.vue'
import Footer from '../components/consumer/index/Footer.vue'
/* import Bus from '../eventBus' */

export default {
  name:'index',
  data () {
    return {
    };  
  },

  components: {
      Navigation,Search,Middle,Shop,Footer
  },

  mounted () {
        },

    methods: {

     }
}

</script>

<style lang='scss' scoped>

</style>