<!-- 主页 -->
<template>
  <div>
      <carType></carType>
      <search></search>
      <middle></middle>
      <br>
      <hot></hot>
      <shop></shop>
      <!-- 回到顶部 -->
      <el-backtop></el-backtop>
      <footer></footer>     
   </div>
</template>

<script>
import Search from "../components/consumer/index/search.vue"
import Middle from '../components/consumer/index/middle.vue'
import Shop from '../components/consumer/index/shop.vue'
import Footer from '../components/consumer/index/footer.vue'
import Hot from '../components/consumer/index/hotCommodity.vue'
import CarType from '../components/consumer/index/carType.vue'

/* import Bus from '../eventBus' */

export default {
  name:'index',
  data () {
    return {
     
    };  
  },

  components: {
     Search,Middle,Shop,Footer,Hot,CarType
  },

  mounted () {
        },

  methods: {
   


  }
}

</script>

<style lang='scss' scoped>

</style>