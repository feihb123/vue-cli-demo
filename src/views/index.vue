<!-- 主页 -->
<template>
  <div>
      <Navigation></Navigation>
      <CarType></CarType>
      <Search></Search>
      <Middle></Middle>
      <br>
      <hot></hot>
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
import Hot from '../components/consumer/index/HotCommodity.vue'
import CarType from '../components/consumer/index/CarType.vue'

/* import Bus from '../eventBus' */

export default {
  name:'index',
  data () {
    return {
     
    };  
  },

  components: {
      Navigation,Search,Middle,Shop,Footer,Hot,CarType
  },

  mounted () {
        },

  methods: {
   


  }
}

</script>

<style lang='scss' scoped>

</style>