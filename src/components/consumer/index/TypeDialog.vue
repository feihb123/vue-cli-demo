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
        <el-steps :active="current" finish-status="success" simple style="margin-top: 0px" >
          <el-step title="车型" icon="el-icon-finished"></el-step>
          <el-step title="车系" icon="el-icon-loading"></el-step>
          <el-step title="年款" icon="el-icon-loading"></el-step>
          <el-step title="配置" icon="el-icon-loading"></el-step>
        </el-steps>

        <div>
            <router-view class="animated fadeIn" 
            :prevId = "prevId"
            :prevContent = "temp"
            @updateCar="updateCar" 
            @back="back" 
            @close="canclemodal"
            @complete="complete"           
            ></router-view>
        </div>

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
    { path: '/index', redirect:"/" },
    { path: '/series', component: Series },
    { path: '/year', component: Year },
    { path: '/config', component: Config },
  ],
})
export default {
    name:'typeDialog',
    data() {
      return {
        /* step:0, */
        current:this.step,
        prevId:"",
        temp:"",
        car:{
          brand:'',
          series:'',
          year:'',
          config:''
        },
        index:{
          brand:'',
          series:'',
          year:'',
          config:''
        },
        
      };
    },
    props: ['dialogVisible', 'step'],
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
      updateCar: function (step,index,value) {
         this.current = step;

         switch(step){
            case 1: {
              this.index.brand = index;
              this.prevId = index;
              this.car.brand = value;
              this.temp = value;
              break;
              }
            case 2: {
              this.index.series = index;
              this.prevId = index;
              this.car.series = value;
              this.temp = this.temp + "/" +value;
              break;
              }
            case 3: {
              this.index.year = index;
              this.prevId = index;
              this.car.year = value;
              this.temp = this.temp + "/" +value;
              break;
              }
            case 0: {
              this.index.config = index;
              this.prevId = index;             
              this.car.config = value;
              this.temp = "";            
              break;
              }
         }
      },
      back: function (step) { 
            this.current = step;
            switch(step){
              case 0:{
                this.temp = "";
                break;
              }
              case 1:{
                var temp = this.temp.split("/")[0];
                this.temp = temp;
                this.prevId = this.index.brand;
                break;
              }
              case 2:{
                var temp = this.temp.split("/")[0]+"/"+this.temp.split("/")[1];
                this.temp = temp;
                this.prevId = this.index.series;
                break;
              }
            }
         
      },
      canclemodal: function () {
         this.$emit('func');
      },
      complete(){
          var car = "当前车型:"+this.car.brand+" "+this.car.series+" "+this.car.year+" "+this.car.config;
          this.$store.dispatch('CarIndex',this.index);
          this.$store.dispatch('Car',car);
          
          /* this.$emit('complete',car,this.index); */
      },
      empty(){
        router.push("/");
        location.reload();
      }
    }
  };
   
</script>

<style lang='scss' scoped>
@import "node_modules/animate.css/animate"

</style>