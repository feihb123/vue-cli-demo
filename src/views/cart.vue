<!-- 购物车页面 -->
<template>
  <div>
    <goods></goods>
    <el-backtop></el-backtop>
  </div>
</template>

<script>
import Goods from '../components/consumer/shoppingcart/goods'

export default {
  name:'cart',
  data () {
    return {
    };
  },

  components: {
    Goods,
  },

  methods: {}
}

</script>

<style lang='scss' scoped>

</style>