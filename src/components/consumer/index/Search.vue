<!-- 搜索框 -->
<template>
  <div class="bg">
      <br><br>
      <el-form :inline="true"  class="demo-form-inline" style="height:100px">
        <div id="left">
            <el-form-item >
                <i class="el-icon-position" id="position" ></i>
            </el-form-item>

            <el-form-item style="width:100px">
                <el-select v-model="region" placeholder="地点">
                <el-option label="上海" value="shanghai"></el-option>
                <el-option label="北京" value="beijing"></el-option>
                </el-select>
            </el-form-item>
        </div>
        <el-form-item >
           
            <div  class="center1">
                <el-input placeholder="搜索汽配" v-model="input"  style="width:480px" class="input-with-select">
                    
                    <el-select v-model="selected" slot="prepend" placeholder="类型" 
                        style="width:80px" >

                        <el-option v-for="(item,i) in option" :key="i"
                        :label="item.name" :value="item.index">  
                        </el-option>
                    </el-select>
                    
                    <template slot="append">
                    <el-button   class="el-icon-search"  
                    @click="search"></el-button>
                     </template>
                </el-input>
            </div>
        


            <div class="center2">
            <a href="#">宝马 </a>
            <a href="#"> 五菱宏光 </a>
            <a href="#"> 一汽马自达 </a>
            <a href="#"> 奔驰汽油 </a>
            <a href="#"> 福特Mustang </a>
            </div>
        </el-form-item>

        <el-form-item id="right">
             <el-popover
                placement="top-start"
                title="公众号"
                width="200"
                trigger="hover"
                content="欢迎关注我的公众号">
                <!-- 需要加slot="reference"才生效 -->
                <div class="demo-image" slot="reference">
              
                <img
                style="width: 80px; height: 80px"
                src="@/image/account.jpg"
                />
                 

            </div>
            </el-popover>
        </el-form-item>
    </el-form>


  </div>
</template>

<script>
import api from "@/axios"

export default {
  name:'Search',
  data () {
    return {
        input:"",      
        region: '',
        fit:"cover",
        option:[{index:1,name:'店铺'},{index:2,name:'汽配'}],
        selected:"",
        
    };
  },
  computed:{
     carIndex(){
        return this.$store.state.carIndex;
    }
  },
  components: {},

  methods: {
      search(){
          if(this.selected != ""){
            
            let param = {
                selected:this.selected,
                input:this.input,
                carType:this.carIndex
            }

            api.searchContent(param).then((response)=>{
                console.log(response);
                let routeData = this.$router.push({
                    name:"searchResult",
                    params:response.data
                })
                /* window.open(routeData.href, '_blank'); */
              })
          }else{
              this.$message.error("请选择搜索类型")
          }
      }
  }
}

</script>

<style lang='scss' scoped>
    .demo-image{
        float: left;
        margin-left: 300%;
    }
    a{
        color: gray;
        text-decoration:none;
    }
    a:hover {
        text-decoration:none; 
        color:skyblue;
        }
    #left{
        float: left;
        margin-left: 15%;
    }
    .center1{
        margin: 0px 0px 0px 160px;
    }

    .center2{
        margin-left: 30%;
    }
    #right{
        float: right;
        margin-right: 16%;
    }
    #position{      
        zoom:180%;

    }
    .el-form {
        width: 85% ;
        
    }
   


</style>