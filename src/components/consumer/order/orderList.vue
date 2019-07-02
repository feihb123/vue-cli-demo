<!-- 订单列表 -->
<template>
  <div>
    <div v-for="(item) in shops" :key="item.id" class="shops">
    
      <div style="margin-left:13%"> 
        <el-row>    
        <el-col :span="6" >
          <img :src="'/api'+item.photo" class="shop-photo">
          店铺:{{item.shopname}}
          <i class="el-icon-chat-dot-round" style="zoom:150%"></i>  
        </el-col> 
        </el-row> 
        <br>        
      </div>
      
      <el-card shadow="always" class="card"  >
        <el-row v-for="(goods) in item.goods" :key="goods.sid" style="text-align:center" class="list-complete-item">
          <el-card shadow="hover" >
          
          <el-col :span="2"><img :src="'/api'+goods.photo" class="img"></el-col>
          <el-col :span="6" style="text-align:left">{{goods.productName}}</el-col>
          <el-col :span="4">
            <i class="el-icon-trophy" ></i>
            <font color="#CDC5BF">易配无忧 </font>
          </el-col>
          <el-col :span="4">￥{{goods.price}}</el-col>
          <el-col :span="4">x{{goods.amount}}</el-col>
          <el-col :span="4"><font color="#FF7256"> ￥{{goods.price*goods.amount}}</font></el-col>
        </el-card>
        </el-row>

        <el-row style="margin-top:5px;margin-left:2%">
          <el-col :span="6" style="text-align:left;"><font color="#808080">订单号:{{item.orderId}}</font></el-col>

          <el-col :span="4" :offset="14">合计：<font color="#FF7256">￥{{item.total}}</font></el-col>
        
        </el-row>   

        <div class="footer">
          <el-row>
            <el-col :span="2" ><el-button type="info" plain round style="margin-left:10%">取消订单</el-button></el-col>
            <el-col :span="2" :offset="16"><el-button type="primary" plain round  @click="detail" >订单详情</el-button></el-col>
            <el-col :span="1" ><el-button type="warning" plain round style="margin-left:80%" v-if="status == '0'">去支付</el-button></el-col>
            <el-col :span="1" ><el-button type="warning" plain round style="margin-left:80%" v-if="status == '1'">提醒发货</el-button></el-col>
            <el-col :span="1" ><el-button type="warning" plain round style="margin-left:80%" v-if="status == '2'">确认收货</el-button></el-col>
            <el-col :span="1" ><el-button type="warning" plain round style="margin-left:80%" v-if="status == '3'">评价商品</el-button></el-col>
            <el-col :span="1" ><el-button type="warning" plain round style="margin-left:80%" v-if="status == '9'">相关操作</el-button></el-col>
          </el-row>       
        </div>
      </el-card>

    </div>

  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
    };
  },
  props:['shops','status'],
  components: {},

  methods: {
    detail(){
      alert("详情页");
    }
  }
}

</script>

<style lang='scss' scoped>
.card{
  width: 75%;
  margin: 0 auto; 
}
.shops{
  margin-bottom: 20px;
  text-align: left; 
}
.img{
  width: 50px;
  height: 50px;
}
.el-icon-trophy{
  color: #FF7256;
}
.el-icon-chat-dot-round{
  color:skyblue;
}
.footer{
  margin: 0 auto;
  margin-top: 10px;
}
.shop-photo{
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

</style>