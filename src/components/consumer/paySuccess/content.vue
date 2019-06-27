<!-- 付款成功回调页面主体 -->
<template>
  <div style="margin-top:6%">
      <i class="el-icon-circle-check" style="zoom:350%"></i>

      <font size="6" color="#00CC00"> 支付成功！</font>
      <br>
      <br>
      <el-button type="success"  round @click="detail">查看订单详情</el-button>
      <br> 
      <br> 
      <el-button type="warning"  round @click="index">返回主页</el-button>
      
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },

  components: {},

  methods: {
      detail(){
          this.$router.push("waitDeliver")
      },
      index(){
          this.$router.push("/")
      }
  }
}

</script>

<style lang='scss' scoped>
.el-icon-circle-check{
    color:#00CC00
}
</style>