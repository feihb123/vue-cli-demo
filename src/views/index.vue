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
    <my-footer></my-footer>     
   </div>
</template>

<script>
import Search from "../components/consumer/index/Search.vue"
import Middle from '../components/consumer/index/Middle.vue'
import Shop from '../components/consumer/index/Shop.vue'
import MyFooter from '../components/consumer/index/myFooter.vue'
import Hot from '../components/consumer/index/HotCommodity.vue'
import CarType from '../components/consumer/index/CarType.vue'



export default {
  name:'index',
  data () {
    return {
     index:{}
    };  
  },

  components: {
     Search,Middle,Shop,Hot,CarType,MyFooter,
  },
    
 
  methods: {
  }
}

</script>

<style lang='scss' scoped>

</style>