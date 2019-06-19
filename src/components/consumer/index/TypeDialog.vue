<!-- 汽车类型对话框 -->
<template>
  <div >
    <el-dialog style="height:800px"
        title="选择车型信息"
        :visible.sync="dialogVisible"
        width="60%"
        :before-close="handleClose"
        :close-on-click-modal="false"
        >
        <el-steps :active="step" finish-status="success" simple style="margin-top: 0px" >
          <el-step title="车型" icon="el-icon-finished"></el-step>
          <el-step title="车系" icon="el-icon-loading"></el-step>
          <el-step title="年款" icon="el-icon-loading"></el-step>
          <el-step title="配置" icon="el-icon-loading"></el-step>
        </el-steps>

        <transition mode="out-in">
            <router-view @updateCar="updateCar" @close="canclemodal"></router-view>
        </transition>

        <!-- <span slot="footer" class="dialog-footer">
            <el-button @click="canclemodal" style="margin-right:20px">取 消</el-button>
            <router-link to="/series" >
            <el-button type="primary" @click="updateCar" >下 一 步</el-button>
            </router-link>
        </span> -->
    </el-dialog>


  </div>
  
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import Brand from "../dialog/brand.vue"
import Series from "../dialog/series.vue"
import Year from "../dialog/year.vue"
import Config from "../dialog/config.vue"

Vue.use(Router)
const router = new Router({
  routes:[
    { path: '/', component: Brand },
    { path: '/series', component: Series },
    { path: '/year', component: Year },
    { path: '/config', component: Config },
  ],
})
export default {
    data() {
      return {
        step:0,
        car:{
          brand:'',
          series:'',
          year:'',
          config:''
        },
      };
    },
    props: ['dialogVisible', 'form'],
    components:{
       
    },
    router,
    methods: {
     handleClose() {
        /* this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {}); */
          
          //func() -> 设置对话框不可见
          this.$emit('func');
          
      }, 
      updateCar: function (step,value) {
         this.step = step;

         switch(step){
            case 1: {
              this.index.brand = index;
              this.car.brand = value;
              break;

              }
            case 2: {
              this.index.brand = index;
              this.car.series = value;
              break;
              }
            case 3: {
              this.index.brand = index;
              this.car.year = value;

              break;
              }
            case 0: {
              
              this.car.config = value;
              
              break;
              }
         }
         
      },
      canclemodal: function () {
                this.$emit('func');
            },
    }
  };
   
</script>

<style lang='scss' scoped>

</style>