<!-- 导航栏 -->
<template>
  <div>
    <el-container style="margin:0 auto;width:94%">
      <el-header style="height:80px">
        <el-row :gutter="20">
          <el-col :span="6" > 
            <div class="grid-content bg-purple">
              <img src="@/image/logo.png" class="account">
            </div>
          </el-col>
          
          <el-col :span="11.1" :offset="6">
            <div class="grid-content bg-purple">
              <el-menu 
                :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal" 
                @select="handleSelect"
                background-color="#ffffff"
                text-color="#808080"
                active-text-color="#0000EE"
                menu-trigger="click"
              >      
                <el-menu-item index="1" @click="skip('/index')">主页</el-menu-item>
                <el-submenu index="2">
                  <template slot="title" id="order">我的订单</template>
                  <el-menu-item index="2-1"  @click="skip('/orders')">全部订单</el-menu-item>
                  <el-menu-item index="2-2"  @click="skip('/waitPay')">待付款</el-menu-item>
                  <el-menu-item index="2-3"  @click="skip('/waitDeliver')">待发货</el-menu-item>
                  <el-menu-item index="2-4"  @click="skip('/waitConfirm')">待收货</el-menu-item>
                  <el-menu-item index="2-5"  @click="skip('/waitEvaluate')">待评价</el-menu-item>
                  <!-- 二级菜单
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项1</el-menu-item>
                    <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item>
                  </el-submenu>
                  -->
                </el-submenu>
                <el-menu-item index="3"  @click="skip('/cart')">购物车</el-menu-item>
                <el-menu-item index="4" @click="skip('/appointment')">预约</el-menu-item>
                <el-menu-item index="5" @click="skip('/diy')">个性定制</el-menu-item>
                <el-menu-item index="6"  style="width:80px;color:#0000EE"
                 v-if="this.$store.state.username == 'null' || this.$store.state.username == '' || this.$store.state.username == null"   @click="skip('/login')">登录</el-menu-item>
                <el-menu-item index="6"  style="width:80px;color:#0000EE;" 
                 v-else  @click="logOut">注销</el-menu-item>
                <el-submenu index="7"   >
                  <template slot="title" id="photo">
                    <img v-if="this.$store.state.username == 'null' || this.$store.state.username == '' || this.$store.state.username == null" src="/api/img/default.jpg" class="photo">
                    <img v-else :src="photo" class="photo">
                  </template>
                  <el-menu-item index="7-1" >{{username}}</el-menu-item>
                  <el-menu-item index="7-2"  @click="skip('/personal')">个人信息</el-menu-item>
                </el-submenu>
                
              </el-menu>
             </div>
            </el-col>
        </el-row>
      </el-header>
    
    </el-container>
  </div>
</template>

<script>
import api from "@/axios"

export default {
    name:'Navigation',
    data() {
      return {
        activeIndex: '1',
      };
    },
    
    computed:{
      username(){
        return this.$store.state.username;
      },
      photo(){
        return this.$store.state.portrait;
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.activeIndex = key;
        /* console.log(key, keyPath); */
      },
      skip(url){
        this.$router.push(url);
      },
      logOut(){
        api.UserLogOut();
        this.$store.dispatch('UserLogin',"");
        this.$store.dispatch('UserName', "");
        this.$store.dispatch('UserPortrait', "");
        this.$store.dispatch('UserId', "");

        this.$router.push("login");
      }
    }
}

</script>

<style lang='scss' scoped>
.el-main{
 text-align: center;
}
.account{
  height: 80px;
}
.el-menu-item, #order{
    font-size: 15px;
    
}
.photo{
  width: 36px;
  height: 36px;
  border-radius:50% ;
}
</style>