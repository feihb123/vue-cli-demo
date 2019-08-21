<!-- 结算确认页 -->
<template>
  <div>
      <nav></nav>
      <el-card shadow="hover" class="address">
        <el-row v-if=" defaultAddress.address == '' || defaultAddress.tel =='' || defaultAddress.name == '' ">
            <i class="el-icon-location-information" style="zoom:150%">您还没有添加过地址，请点击按钮新建</i>
            <br>
            <br>
            <el-button type="primary" plain @click="dialogFormVisible = true">新建地址</el-button>
        </el-row>
        <el-row v-else>

            <font size = "6">{{defaultAddress.name+"  "}}</font> 
            <font size = "3" color = "#808080">{{defaultAddress.tel}}</font>
            <br>
            <br>
            <i class="el-icon-location-information" style="zoom:150%;">
                <font size = "3">{{defaultAddress.address}}</font> 
            </i>
            <br>
            <br>
            <el-button type="primary" plain @click="dialogFormVisible = true">新建地址</el-button>
            <el-button type="primary" plain @click="findAddress">选择其他地址</el-button>
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



    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" >
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="form">
        <el-form-item label="姓名">
          <el-input v-model="formLabelAlign.name" maxlength="10" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formLabelAlign.tel" maxlength="11" show-word-limit></el-input>
        </el-form-item>
        <el-form-item label="收货地址">
          <el-input v-model="formLabelAlign.address" clearable></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click = "dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click = "saveAddress" >确 定</el-button>
      </div>
    </el-dialog>


    <el-dialog title="其他地址" :visible.sync="dialogTableVisible" width="45%">

        <el-table
                :data="address"
                style="width: 100%">
            <el-table-column
                    label="姓名"
                    width="200">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <el-table-column
                    label="电话"
                    width="200">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.tel }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleDefault(scope.$index)">设为默认</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index,scope.row)">删除</el-button>
                    <el-button
                            size="mini"
                            type="primary"
                            @click="handleSelect(scope.$index,scope.row)">选择</el-button>
                </template>
            </el-table-column>
        </el-table>

      <div slot="footer" class="dialog-footer">
        <el-button @click = "dialogTableVisible = false">取 消</el-button>
        <el-button type="primary" @click = "changeAddress" >确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
import Nav from "../nav/navigation"
import api from "@/axios"
export default {
  name:'',
  data () {
    return {
        address:[],
        defaultAddress:{},
        shops:this.$route.params.shops,
        total:this.$route.params.total,
        dialogTableVisible: false,
        dialogFormVisible: false,
        labelPosition: 'right',
        formLabelAlign: {
          tel: '',
          name: '',
          address: ''
        }
        
        
    };
  },
 
  components: {
      Nav,
  },
  mounted(){
    api.findDefaultAddress().then((response=>{
      this.defaultAddress = response.data;
    }))
  },
  methods: {
    submit(){

      this.$axios.post("/api/prepay/",{
          shops:this.shops,
          address:this.formLabelAlign.address,
          addressee:this.formLabelAlign.name,
          tel:this.formLabelAlign.tel,
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
    findAddress(){
      this.dialogTableVisible = true
      api.findAddress().then((response)=>{
          this.address = response.data;
      })
    },
    saveAddress(){
      this.dialogFormVisible = false;
      if(this.formLabelAlign.tel.length != 11){
         this.$message.error('请输入11位手机号码');
      }else if(!(/1\d{10}/g).test(this.formLabelAlign.tel)){
        this.$message.error('请输入正确的手机号码');
      }else{
        //axios请求保存地址
        let addr = this.formLabelAlign;
        api.saveAddress(addr).then((response)=>{
          if(response.data === 1){
            this.$notify({
            title: '添加成功',
            message: '当前地址已切换为新添加地址',
            type: 'success'
           });
          }

        }).catch((response)=>{
            console.log(response.data)
        });
      }
    },
      handleDefault(index) {
        
          api.setDefaultAddress(this.address[index]).then((response) =>{
              if(response.data === true) {
                  this.$notify({
                      title: '设置成功',
                      message: '已将此地址设置为默认地址',
                      type: 'success'
                  });
              }else{
                this.$notify.error({
                  title: '设置失败',
                  message: '设置失败，请稍后再试'
                });
              }
          })
      },
      handleDelete(index,address){
      
        api.deleteAddress(address.aid).then(response=>{
            if(response.data === true) {
                  this.address.splice(index,1);
                  this.$notify({
                      title: '删除成功',
                      message: '已将此地址删除',
                      type: 'success'
                  });
              }else{
                this.$notify.error({
                  title: '删除失败',
                  message: '删除失败，请稍后再试'
                });
              }
        })
      },

      handleSelect(index,address){
        this.defaultAddress = address;
        this.dialogTableVisible = false;
      }

  }
}

</script>

<style lang='scss' scoped>
.form{
  width: 80%;
  margin: auto;
}

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