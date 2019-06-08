<!-- 导航栏 -->
<template>
  <div>
    <el-container style="margin:0 auto;width:94%">
      <el-header style="height:80px">
        <el-row :gutter="20">
          <el-col :span="6" > 
            <div class="grid-content bg-purple">
              <img src="../../image/logo.png">
            </div>
          </el-col>
          
          <el-col :span="11" :offset="7">
            <div class="grid-content bg-purple">
              <el-menu :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect"
                background-color="#fff"
                text-color="#5D5DE6"
                active-text-color="#0000EE"
              >      
                <el-menu-item index="1">主页</el-menu-item>
                <el-submenu index="2">
                  <template slot="title" id="order">我的订单</template>
                  <el-menu-item index="2-1">全部订单</el-menu-item>
                  <el-menu-item index="2-2">待付款</el-menu-item>
                  <el-menu-item index="2-3">代发货</el-menu-item>
                  <el-menu-item index="2-4">待收货</el-menu-item>
                  <el-menu-item index="2-5">待评价</el-menu-item>
                  <!-- 二级菜单
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                  -->
                </el-submenu>
                <el-menu-item index="3">购物车</el-menu-item>
                <el-menu-item index="4">预约</el-menu-item>
                <el-menu-item index="5">我的信息</el-menu-item>
                <el-menu-item index="6">个性定制</el-menu-item>
                <el-menu-item index="7">退出</el-menu-item>
          
              </el-menu>
             </div>
            </el-col>
        </el-row>
      </el-header>
    
    </el-container>
  </div>
</template>

<script>
export default {
  name:'Navigation',
  data() {
      return {
        activeIndex: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}

</script>

<style lang='scss' scoped>
.el-main{
 text-align: center;
}
img{
  height: 80px;
}
.el-menu-item, #order{
    font-size: 15px;
    
}

</style>