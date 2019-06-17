<!-- 汽车类型对话框 -->
<template>
  <div>
    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
        :close-on-click-modal="false"
        >
        <span>这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="canclemodal">取 消</el-button>
            <el-button type="primary" @click="updateCar">确 定</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
      return {
        car:{
          brand:'',
          series:'',
          year:'',
          config:''
        },
      };
    },
    props: ['dialogVisible', 'form'],
    methods: {
     handleClose() {
        /* this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {}); */
          
          this.$emit('func');
          
      }, 
      updateCar: function () {
         this.car.brand = '宝马';
                
         location.reload();
      },
      canclemodal: function () {
                this.$emit('func');
            },
    }
  };
</script>

<style lang='scss' scoped>

</style>