<!-- 汽车系列 -->
<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in list" :key="index" >
          <div>
            
            <el-card >
              <router-link to="/year" style="text-decoration:none;" >
                <div @click="select(item)" style="width:100%,height:100%" class="choose">                    
                    <font >
                      {{item.name}}
                    </font>                   
                </div>
               </router-link> 
            </el-card>
            
          </div>        
      </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="8" >
          <router-link to="/" id="left">
           <el-button type="info" icon="el-icon-arrow-left" plain @click="prevStep">上 一 步</el-button>
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
              <i class="el-icon-finished" style="zoom:140%"></i> {{prevContent}}
            </font>
            <router-link to="/" id="right">
              <el-tooltip content="Top center" placement="清空选择">
                <el-button type="default" icon="el-icon-close" circle style="zoom:75%"
                @click="clear"
                ></el-button>
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
  name:'Series',
  data () {
    return {
         list:[
          /* {id:1,name:"1系(国产)"},
          {id:2,name:"2系(国产)"},
          {id:3,name:"3系(国产)"},
          {id:5,name:"5系(国产)"},
          {id:6,name:"1系(进口)"},
          {id:7,name:"2系(进口)"},
          {id:8,name:"3系(进口)"},
          {id:8,name:"3系(进口)"},
          {id:8,name:"3系(进口)"}, */

          ],
        index:"",
        series:"",
        url:"/api/car/series/"+this.prevId,
        loading:true,
    };
    
  },
  props:["prevId","prevContent"],
  components: {},

  mounted(){
    this.getSeries();
    this.loading = false;
  },

  methods: {
      prevStep(){
        this.$emit('updateCar',0);
      },
      next(){
        this.$emit('updateCar',2,this.index,this.series);
      },
      select(item){
        this.index = item.id;
        this.series = item.name;
        this.next();
      },
      clear(){
        this.$emit('updateCar',0);
       
      },
      getSeries() {
      this.$axios.get(this.url, {
          params: {}
        }).then((response) => {
            this.list = response.data;          
        }).catch(function (response) {
            console.log(response)
        });
      },
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