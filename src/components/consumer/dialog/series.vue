<!-- 汽车系列 -->
<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in list" :key="index" >
          <div>
            <!-- <router-link to="/year" style="text-decoration:none;" > -->     
            <el-card >
            <div @click="select(item.id)" >
            <font >{{item.name}}</font>   
            </div>
            </el-card>
            <!-- </router-link> -->
          </div>        
      </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" >
          <router-link to="/" id="left">
          <el-button type="info" icon="el-icon-arrow-left" plain>上 一 步</el-button>
          </router-link>
        </el-col>
        <el-col :span="8" >
          <div style="margin-top:8px">          
          <font>选择您的车系</font>          
          </div>
        </el-col>
        <el-col :span="8" >
          <div style="margin-top:8px">
          <font> 
            <i class="el-icon-finished" style="zoom:140%"></i> {{prev}}
          </font>
          <router-link to="/" id="right">
            <el-tooltip content="Top center" placement="清空选择">
              <el-button type="default" icon="el-icon-close" circle style="zoom:75%"></el-button>
            </el-tooltip>
          </router-link>
          </div>

        </el-col>
      </el-row>

      <!-- <div class="next">
      <router-link to="/year" >
      <el-button type="primary" @click="next" >下 一 步</el-button>
      </router-link>
      </div>-->
  
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
         list:[
          {id:1,name:"1系(国产)"},
          {id:2,name:"2系(国产)"},
          {id:3,name:"3系(国产)"},
          {id:5,name:"5系(国产)"},
          {id:6,name:"1系(进口)"},
          {id:7,name:"2系(进口)"},
          {id:8,name:"3系(进口)"},
          {id:8,name:"3系(进口)"},
          {id:8,name:"3系(进口)"},

          ],
        series:"",
        prev:"宝马 ",
    };
  },

  components: {},

  methods: {
      next(){
        this.$emit('updateCar',2);
      },
      select(id){
        alert("id")
        this.series = id;
        this.next();
      }
    }
}

</script>

<style lang='scss' scoped>
.next{
    float: right;

}
.el-card:hover{
  cursor: pointer;
}
.el-col{
  margin-top: 20px;
  margin-bottom: 20px;
}

#left{
  
  float: left;
  margin-left: 50px;
  
  font-weight: bold;

}
#right{
  float: right;
  margin-right: 50px;
  opacity: 0.7;
  font-weight: bold;

}
font{
  color: darkgrey;
  font-size: 18px;
  font-weight: bold;
}

</style>