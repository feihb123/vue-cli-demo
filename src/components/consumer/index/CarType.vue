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
            <el-button type="info" icon="el-icon-delete" circle></el-button>
         </el-form-item>
    </el-form>
  </div>

  <TypeDialog :dialogVisible="dialogVisible"  @func="closeDialog"></TypeDialog>


  <br>
  </div>
  
</template>

<script>
import TypeDialog from './TypeDialog.vue'

export default {
  name:'',
  data () {
    return {
        dialogVisible: false,
        car:'选择您的车型信息',
    };
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
        width: 76%;
        border-radius: 10px
    }
</style>