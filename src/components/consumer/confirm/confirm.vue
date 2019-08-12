<!-- 结算确认页 -->
<template>
  <div>
      <nav></nav>
      <el-card shadow="hover" class="address">
        <el-row v-if=" address == '' || addressee =='' || tel == '' ">
            <i class="el-icon-location-information" style="zoom:150%">请选择地址</i>
            <br>
            <br>
            <el-button type="primary" plain>选择地址</el-button>
        </el-row>
        <el-row v-else>

            <font size = "6">{{addressee+"  "}}</font> 
            <font size = "3" color = "#808080">{{tel}}</font>
            <br>
            <br>
            <i class="el-icon-location-information" style="zoom:150%;">
                <font size = "3">{{address}}</font> 
            </i>
            <br>
            <br>
            <el-button type="primary" plain @click="dialogFormVisible = true">选择其他地址</el-button>
        </el-row>
      </el-card>
      <br>
      <el-card class="shop" v-for="(item,index) in shops" :key="index">
        <el-row>
          <el-col :span="6" style="text-align:left">
            <i class="el-icon-s-shop" style="zoom:150%"></i>{{item.shopname}}
          </el-col>
        </el-row>
       
          <el-row v-for="(goods,nindex) in item.goods" :key="nindex" style="text-align:center" >
            <el-card shadow="always" style="">
            <el-col :span="4"><img :src="'/api'+goods.photo" class="img"></el-col>
            <el-col :span="6" style="text-align:left">{{goods.productName}}</el-col>
            <el-col :span="4"><font color="#CDC5BF">{{goods.type}}</font></el-col>
            <el-col :span="4">￥{{goods.price}}</el-col>
            <el-col :span="4">
             x{{goods.amount}}
            </el-col>
            <el-col :span="6"><font color="#FF7256"> ￥{{goods.price*goods.amount}}</font></el-col>
            
            <el-col :span="3">
              <br>
              <i class="el-icon-star-off"></i>
              <font color="#FF7256" class="bg">七天无理由退换 </font>
            </el-col>
            </el-card>
          </el-row>
        
      </el-card>
      <br>
      <br>
      <el-card class="footer">
        <font size="4">合计:</font>
        <font size="5" color="#FF7256">{{'￥'+total}}</font>
        <el-button type="danger" round plain class="btn"
        @click = "submit">提交订单</el-button>
      </el-card>
      <el-backtop></el-backtop>



    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <div v-if="address">

      </div>
      

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Nav from "../nav/navigation"
export default {
  name:'',
  data () {
    return {
        address:"徐州工程学院",
        addressee:"Herb",
        tel:"1881234567",
        shops:this.$route.params.shops,
        total:this.$route.params.total,
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        address:""
        
    };
  },
 
  components: {
      Nav,
  },

  methods: {
    submit(){

      this.$axios.post("/api/prepay/",{
          shops:this.shops,
          address:this.address,
          addressee:this.addressee,
          tel:this.tel,
          total:this.total
      }).then((response) => {
         
         window.location.href="http://localhost:8008/pay/"+response.data.tradeNo;
      }).catch(function (response) {
          console.log(response)
      });
    },

  //表单提交数组比较困难
  /*submit2(){
      document.write("<form action='http://127.0.0.1:8008/pay' method=post name=form1 style='display:none'>");  
      document.write("<input type='hidden' name='shops' value='"+this.shops+"'/>");  
      document.write("<input type='hidden' name='address' value='"+this.address+"'/>");  
      document.write("<input type='hidden' name='addressee' value='"+this.addressee+"'/>");  
      document.write("<input type='hidden' name='tel' value='"+this.tel+"'/>");  
      document.write("<input type='hidden' name='total' value='"+this.total+"'/>");  
      document.write("</form>");  
      document.form1.submit();  
    } */
  }
}

</script>

<style lang='scss' scoped>


.address{
    width: 75%;
    margin: 0 auto;
}
.shop{
    width: 75%;
    margin: 0 auto;
}
.img{
  width: 80px;
  height: 80px;
}
.footer{
  width: 75%;
  margin: 0 auto;
  text-align: right;
}
.btn{
  margin-left: 30px;
}
.bg{
  background-color: rgb(241, 222, 215);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px; 
}
.el-icon-star-off{
  color: #FF7256;
}
.el-icon-s-shop{
  color:#FF7256;  
}
</style>