<!-- 汽车配置 -->
<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="8" v-for="(item,index) in list" :key="index" >
          <div>           
            <el-card >
              <router-link to="/" style="text-decoration:none;" >  
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
          <router-link to="/year" id="left">
            <el-button type="info" icon="el-icon-arrow-left" plain @click="prevStep">上 一 步</el-button>
          </router-link>
        </el-col>
        <el-col :span="8" >
          <div style="margin-top:8px">          
            <font>选择您的配置</font>          
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
        config:"",
        content:"宝马/3系(国产)/2018",
        list:[
          /* {id:1,name:"2018款 318i"},
          {id:2,name:"2018款 320i M运动套装"},
          {id:3,name:"2018款 318Li"},
          {id:5,name:"2018款 320Li xDrive 时尚型"},
          {id:6,name:"2018款 320Li M运动曜夜版"}, */
          ],
        url:"/api/car/config/"+this.prevId,
    };
  },
  props:["prevId","prevContent"],
  components: {},
  mounted(){
    this.getConfigs();
  },
  methods: {
       prevStep(){
        this.$emit('back',2);
      },
      next(){
        this.$emit('updateCar',0,this.index,this.config);
      },
      select(item){
        this.index = item.id;
        this.config = item.name;
        this.next();
        this.$emit('complete');
        this.$emit('close');
      },
      clear(){
        this.$emit('updateCar',0);
      },
      getConfigs() {
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