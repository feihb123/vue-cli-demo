<!--  -->
<template>
  <div>
  <div class="bg">
    <el-form :inline="true"  class="demo-form-inline" style="padding-top:5px">
         <el-form-item >
            <img src="@/image/car.png">
         </el-form-item>
         <el-form-item >
            <el-button   round  @click="openDialog"
             style="width:450px" class="typeSelect" >
             {{car}}
            </el-button>             
         </el-form-item>

         <el-form-item >
           <el-tooltip class="item" effect="dark" content="清空当前选择" placement="right">
            <el-button type="info" icon="el-icon-delete" circle 
            style="opacity:0.8" @click="confirm"></el-button>
           </el-tooltip>
         </el-form-item>
    </el-form>
  </div>

  <TypeDialog 
  :dialogVisible= "dialogVisible" 
  v-model = "step" 
  @func = "closeDialog"
  ref="dialog"
  ></TypeDialog>


  <br>
  </div>
  
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import TypeDialog from './typeDialog.vue'



export default {
  name:'carType',
  data () {
    return {
        step:0,
        dialogVisible: false,
      
    };
  },
  computed:{
    car(){
      return this.$store.state.car;
    }
  },
  components: {
      TypeDialog
      },

  methods: {
    openDialog(){
        this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    
    confirm(){
      this.$confirm('确认清空吗?','清空当前选择', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.step = 0;
          this.$refs.dialog.empty();
          this.$store.dispatch("Car","选择您的车型信息");
          this.$message({
            type: 'success',
            message: '清空成功!'
          });
        })
          .catch(_ => {

          });
    }
    
  }
}

</script>

<style lang='scss' scoped>
    .typeSelect{
        background-color: #E3E3E3;
        border-color: darkgray;
        opacity: 0.9;
    }
    
    .bg{ 
        background-color: #f4f5f2;
        background-image:url(../../../image/hot/bg.png)  ;
        background-repeat: no-repeat;
        opacity: 0.9;
        margin: 0 auto;
        height: 50px;
        width: 1150px;
        border-radius: 10px
    }
</style>