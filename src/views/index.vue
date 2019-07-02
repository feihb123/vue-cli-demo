<!-- 主页 -->
<template>
  <div>
    <carType @complete="complete"></carType>
    <search :carType="index"></search>
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
import Search from "../components/consumer/index/search.vue"
import Middle from '../components/consumer/index/middle.vue'
import Shop from '../components/consumer/index/shop.vue'
import MyFooter from '../components/consumer/index/myFooter.vue'
import Hot from '../components/consumer/index/hotCommodity.vue'
import CarType from '../components/consumer/index/carType.vue'



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
   complete(index){
     this.index = index;
   }


  }
}

</script>

<style lang='scss' scoped>

</style>