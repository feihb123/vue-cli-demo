<!-- 具体商品部分 -->
<template>
  <div v-loading="loading" 
  :element-loading-text="loadingText" 
  v-infinite-scroll="load" 
  >
    <el-row style="margin-bottom:5px">
      <el-col :span="8">
        <img src="@/image/sale.png" style="height:40px;margin-left:50px">
        <font size="4">购物车</font>
      </el-col>
      <el-col :span="4" :offset="7" >
        <font size="6" ></font>
        <font size="3" >已选商品 </font>
        <font size="4" color="#FF7256">￥{{total}}</font>
      </el-col>
      <el-col :span="1" >
        <el-button type="danger" @click="btn">结算商品</el-button>
      </el-col>
    </el-row>

    <hr style="width:75%;">
    <el-row style="margin-left:11.3% ">
        <el-col :span="2" >
          <el-checkbox lebel="" name="type" style="zoom:120%"
           v-model="checkall"
           @change="check_all()"
           >全选</el-checkbox>
          
        </el-col>
        <el-col :span="3" :offset="1">商品信息</el-col>  
        <el-col :span="2" :offset="3">单价</el-col>
        <el-col :span="3" >数量</el-col>
        <el-col :span="2" >价格</el-col>
        <el-col :span="4" >操作</el-col>
    </el-row>
    <br>


    <div v-for="(item,index) in shops" :key="item.id" class="shops" >
      <div style="margin-left:13%"> 
        <el-row>    
        <el-col :span="6" >
          <el-checkbox lebel="" name="type" style="zoom:120%" 
           v-model="item.this_all" 
           @change="check_list(index)"
          ></el-checkbox>
          店铺:{{item.shopname}}
          <i class="el-icon-chat-dot-round" style="zoom:150%"></i>  
        </el-col> 
        </el-row> 
        <br>        
      </div>
      
      <el-card shadow="always" class="card">
        <transition-group name="list-complete" tag="p">
        <el-row v-for="(goods,nindex) in item.goods" :key="goods.sid" style="text-align:center" class="list-complete-item">
          <el-card shadow="hover" class="animated fadeInUp ">
          <el-col :span="1"><el-checkbox lebel="" name="type" style="zoom:120%" 
          v-model="goods.check_one" 
          @change="click_input(index,nindex)"
          ></el-checkbox></el-col>
          <el-col :span="2"><img :src="'/api'+goods.photo" class="img"></el-col>
          <el-col :span="4"><br>{{goods.productName}}</el-col>
          <el-col :span="3">
            <br>
            <i class="el-icon-trophy" ></i>
            <font color="#CDC5BF">易配无忧</font>
          </el-col>
          <el-col :span="3"><br>￥{{goods.price}}</el-col>
          <el-col :span="3">
            <br><el-input-number v-model="goods.amount" @change="handleChange(goods.sid,goods.amount)" :min="1" :max="99" label="数量" style="zoom:80%"></el-input-number>
          </el-col>
          <el-col :span="4"><br><font color="#FF7256"> ￥{{goods.price*goods.amount}}</font></el-col>
          <el-col :span="3"> 
            <el-button type="default" icon="el-icon-delete" circle style="margin-top:12px" @click="remove(index,nindex,goods.sid)" ></el-button>
          </el-col>
        </el-card>
        <br>
        </el-row>
        </transition-group>
      </el-card>  
   </div>

  <p v-if="loading">加载中...</p>
  <p v-if="noMore">没有更多了</p>

  </div>
</template>

<script>
import api from "@/axios"

export default {
  name:'Goods',
  data () {
    return {
        // 用于保存被选中的数据
        checkedList: [],
        // 正在进行中的数据是否被选中
        checkall: false,
        total:0.00,
        shops:[
          /* {shopname:"一汽大众",
          goods:[
          {id:"1",photo:"/api/img/light.jpg",productName:"大灯",price:"11",amount:"1",type:"默认",shopname:"一汽大众",check_one:true,},
          {id:"2",photo:"/api/img/light.jpg",productName:"大灯",price:"12",amount:"2",type:"默认",shopname:"一汽大众",check_one:true,},
          {id:"3",photo:"/api/img/light.jpg",productName:"大灯",price:"13",amount:"3",type:"默认",shopname:"一汽大众",check_one:true,},
          {id:"4",photo:"/api/img/light.jpg",productName:"大灯",price:"13",amount:"3",type:"默认",shopname:"一汽大众"},
          ],
          this_all:true,
        },
          {shopname:"一汽小众众众",id:"2",this_all:true,}, */
          
        ],
        selectedShop:[],
        url:"/api/cart",
        loading:true,
        loadingText:"拼命加载中",
        start:0,
        pageSize:4,
        noMore:false,  
    };
  },
  computed:{
     

  },
  components: {},

  mounted:function(){

      /* this.$axios.get(this.url+"/"+this.start+"/"+this.pageSize,{
        param:{
          
        }
      }).then((response) => {
          this.shops = response.data
          this.loading = false;
      }).catch((response) => {
          this.loadingText = "服务器好像遇到了问题:"+response;
      }); */

  },

  methods: {
    load () {
      //无限滚动触发
      
      if(!this.noMore){
        
        console.log("请求"+this.start+"--"+this.pageSize)
        this.$axios.get(this.url+"/"+this.start+"/"+this.pageSize,{
          }).then((response) => {
              // x.push(...xxx)  在x数组后添加另一个数组xxx
              if(response.data.length != 0 ){
                this.shops.push(...response.data);
                this.loading = false;               
              }else{
                this.noMore = true;
              }
                          
          }).catch((response) => {
              this.loadingText = "服务器好像遇到了问题:"+response;
          });
       this.start += 4;
      }
      
    },
    money:function(){
      var that = this;
      that.total= 0;
      that.shops.forEach(item1 =>{      
        (item1.goods || []).forEach(item2 =>{
          if(item2.check_one == true){
            that.total+=item2.price*item2.amount;
            //防止浮点数运算出现多位小数 
            that.total = parseFloat(that.total.toFixed(2));
          }
        })
      }) 
         
    },
     check_all:function(){
      var that = this;
      that.shops.forEach(item1 => {
        item1.this_all=that.checkall;
        (item1.goods || []).forEach(item2 => {
          item2.check_one=that.checkall
        })
      });
      that.money();
    },
 
    abc:function(){
      var that = this;
        var aaa = that.shops.filter(item2 =>{
        return item2.this_all==true
      })
      aaa.length==that.shops.length ? that.checkall = true : that.checkall = false
      that.money();
    },
  
    check_list:function(i){
      var that = this;
      that.shops[i].goods.forEach(item1 =>{
        item1.check_one=that.shops[i].this_all
      })
      that.abc();
  
    },
  
    click_input:function(i,j){
      var that = this;
      var checklist = that.shops[i].goods.filter(item1 =>{
        return item1.check_one==true
      })
      
      checklist.length==that.shops[i].goods.length ? that.shops[i].this_all = true : that.shops[i].this_all = false
      that.abc();
    
    },
    handleChange(sid,amount){
      this.money();
      //后台处理
      var param = {sid:sid,amount:amount}
      api.updateCart(param).then((response)=>{
        if(response.data){
          //增加成功
        }else{
          this.$message.error('出了点小问题...');
        }
      })

    },
    remove(index,nindex,sid){
      this.shops[index].goods.splice(nindex,1);
      var checklist = this.shops[index].goods;
      if(checklist.length == 0) {
        this.shops.splice(index,1);
      } 
      this.money();

      let param = {data:{sid:sid}}
      api.delCart(param).then((response)=>{
        if(response.data){
          //删除成功
        }else{
          this.$message.error('出了点小问题...');
        }
      })
    },
    btn:function(){
      var that = this; 
      that.checkedList=JSON.parse(JSON.stringify(that.shops));
      that.checkedList.filter(item1 =>{
          item1.goods = (item1.goods || []).filter(item2 =>{
          return item2.check_one==true
          })
      })
      that.checkedList=that.checkedList.filter(item3 =>{
        return item3.goods.length!=0
      })
      
      if(that.checkedList.length==0){
         
        this.$message({
          message: '您还没有选择商品',
          type: 'warning'
        });
      
      }else{
  
        /* console.log("★★★您购买的商品是：");
        that.checkedList.forEach(item4 =>{
          console.log("----------"+item4.shopname+"店铺----------");
          item4.goods.forEach(item5 =>{
              console.log("——>："+item5.id);
          })
        }) */

        //取出选择的商店
        that.checkedList.forEach(item4 =>{
            this.selectedShop.push(item4);
        })

        this.$router.push(
            {name:"confirm",
            params:{shops:this.selectedShop,total:this.total}
            }
          )
      }
      
  }

  }
}

</script>

<style lang='scss' scoped>
@import "node_modules/animate.css/animate";

.card{
  width: 75%;
  margin: 0 auto;
  
}
.shops{
  margin-bottom: 20px;
  text-align: left;

  
}
.img{
  width: 80px;
  height: 80px;
}
.el-icon-trophy{
  color: #FF7256;
}
.el-icon-chat-dot-round{
  color:skyblue;
}

//列表增删动画
.list-complete-item {
  transition: all 2s;
}
.list-complete-enter, .list-complete-leave-to
{
  opacity: 0;
  transform: translateX(300px);
}
.list-complete-leave-active {
  position: absolute;
}

</style>