<!-- 店铺详情 -->
<template>
  <div v-loading="loading">
    <el-row class = "row">
      <el-col :span="2"><img :src="'/api'+content.photo" class="portrait"></el-col>
      <el-col :span="4" style="text-align:left;margin-left:5px">
        <font size="5" color="#808080"> {{content.shopname}} </font>
        <img src="@/image/crown.png">
        <br>
        <br>
        <i class="el-icon-location-outline" style="zoom:150%"></i>
        <font size="3" color="#808080"> {{content.location}} </font>
      </el-col>
      <el-col :span="17"><img :src="'/api'+content.welcome" class="welcome"></el-col>
    </el-row>
    <br>
    <div class="shop">
      
      <el-row>
        <el-col :span="4" v-for="(good, index) in content.goods" :key="good.productId" :offset="index %5 ==0 ? 4 : 0">
            
            <div v-if="index > 4">
            
            <el-divider></el-divider>
            
            </div>
            <el-card :body-style="{ padding: '10px' }"  shadow="hover"> 
            <img :src="prefix+good.photo" class="image">
            <div style="padding: 14px;">
                <div style="text-align:center">{{cutString(good.productName,18)}}</div>
                <br>
            <el-row  style="text-align:left">
              <el-col :span="12" >
                <font size = "4" color="#FF7256">￥{{good.price}}</font>
                <br>
              </el-col>

              
              <el-col :span="12">
                <font size = "3" color="#808080">库存:{{good.amount}}</font>
                <br>
                </el-col>
               
            </el-row>

            <el-row  style="text-align:left">
                 
                 <font size = "3" style="padding-left:10px">加入购物车</font>
                 
                 <i class="el-icon-shopping-cart-2 cart" @click="addCart(good.productId)"></i>
                
            </el-row>
            
            </div>
            </el-card>
        </el-col>
      </el-row>
    </div>


  </div>
</template>

<script>
import api from "@/axios"

export default {
  name:'',
  data () {
    return {
      salerId:"",
      content:'',
      prefix:"/api",
      loading:true,
    };
  },
  mounted(){
    this.salerId = location.href.split("/")[6];
    api.ShopContent(this.salerId).then((response)=>{
        this.content = response.data;
        this.loading = false;
    }).catch((response)=>{
      this.$message.error('服务器错误:'+response.data);
    });
  },
  components: {},

  methods: {
    addCart(productId){
      
      let param = {salerId:this.salerId,productId:productId}
      api.addCart(param).then((response)=>{
        if(response.data){
          
          this.$message.success('成功加入购物车');
        }else{
          this.$message.error('加购失败，请检查网络设置');
        }
        
      })
    },
    //名字过长截取 加上...
    cutString(str, len) {
    //length属性读出来的汉字长度为1
    if(str.length*2 <= len) {
        return str;
    }
    var strlen = 0;
    var s = "";
    for(var i = 0;i < str.length; i++) {
        s = s + str.charAt(i);
        if (str.charCodeAt(i) > 128) {
            strlen = strlen + 2;
            if(strlen >= len){
                return s.substring(0,s.length-1) + "...";
            }
        } else {
            strlen = strlen + 1;
            if(strlen >= len){
                return s.substring(0,s.length-2) + "...";
            }
        }
    }
    return s;
}
  }
}

</script>

<style lang='scss' scoped>
  .row{
    width: 75%;
    margin: 0 auto;
  }
  .portrait{
    width: 90px;
    height: 90px;
  }
  .welcome{
    height: 90px;
    width: 90%;
  }
  .image{
    cursor:pointer
  }
  .image:hover{
    opacity: 0.6;
  }
  .shop{
    width: 86%;
  }
  .el-col{
    margin-bottom: 15px;
  }
  .el-card{
    width: 200px;
    height: 320px;
  }
  .time {
      font-size: 13px;
      color: #999;
    }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 98%;
    height: 180px;
    margin:  auto;
    display: block;

  }
  .cart{
    color: #FF7256;
    zoom:190%;
    margin-left: 10%;
  }
  .cart:hover{
    cursor: pointer;
  }
</style>