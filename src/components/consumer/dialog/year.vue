<!-- 汽车年款 -->
<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in list" :key="index" >
          <div>
           
            <el-card >
              <router-link to="/config" style="text-decoration:none;" >  
                <div @click="select(item)" style="width:100%,height:100%" class="choose">                  
                  <font >{{item.name}}</font>               
                </div>
              </router-link> 
            </el-card>
            
          </div>        
         </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" >
          <router-link to="/series" id="left">
            <el-button type="info" icon="el-icon-arrow-left" plain @click="prevStep">上 一 步</el-button>
          </router-link>
        </el-col>
        <el-col :span="8" >
          <div style="margin-top:8px">          
            <font>选择您的年款</font>          
          </div>
        </el-col>
        <el-col :span="8" >
          <div style="margin-top:8px">
            <font> 
              <i class="el-icon-finished" style="zoom:140%"></i> {{prevContent}}
            </font>
            <router-link to="/" id="right">
              <el-tooltip content="Top center" placement="清空选择">
                <el-button type="default" icon="el-icon-close" circle style="zoom:75%"
                @click="clear"></el-button>
              </el-tooltip>
            </router-link>
          </div>

        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
        index:"",
        year:"",
        content:"宝马/3系(国产)",
        list:"",
        url:"/api/car/year/"+this.prevId,
    };
  },
  props:["prevId","prevContent"],
  components: {},
  mounted(){
    this.getYears();
  },
  methods: {
      prevStep(){

        this.$emit('updateCar',1);
      },
      next(){
        this.$emit('updateCar',3,this.index,this.year);
      },
      select(item){
        this.index = item.id;
        this.year = item.name;
        this.next();
      },
      clear(){
        this.$emit('updateCar',0);
      },
      getYears() {
      this.$axios.get(this.url, {
          params: {}
        }).then((response) => {
            this.list = response.data;          
        }).catch(function (response) {
            console.log(response)
        });
      }
    }
  
}

</script>

<style lang='scss' scoped>
.next{
    float: right;

}
.choose:hover{
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