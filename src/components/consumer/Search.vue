<!-- 搜索框 -->
<template>
  <div>
      <br>
      <el-form :inline="true"  class="demo-form-inline">
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
        <el-form-item>
           
            <div>
                <el-input placeholder="搜索汽配" v-model="input"  style="width:400px">
                    <el-button   slot="append" class="el-icon-search" 
                    @click="filter"></el-button>
                </el-input>
            </div>
            <a href="#">宝马 </a>
            <a href="#"> 五菱宏光 </a>
            <a href="#"> 一汽马自达 </a>
            <a href="#"> 奔驰汽油 </a>
            <a href="#"> 福特Mustang </a>
            
        </el-form-item>

        <el-form-item >
             <el-popover
                placement="top-start"
                title="公众号"
                width="200"
                trigger="hover"
                content="欢迎关注我的公众号">
                <!-- 需要加slot="reference"才生效 -->
                <div class="demo-image" slot="reference">
              
                <el-image 
                style="width: 80px; height: 80px"
                src="http://localhost:8008/img/account.jpg"
                :fit="fit">
                </el-image>  

            </div>
            </el-popover>
        </el-form-item>
    </el-form>


    
  </div>
</template>

<script>
export default {
  name:'Search',
  data () {
    return {
        input:"",      
        region: '',
        fit:"cover",
        
    };
  },

  components: {},

  methods: {
      filter(){
          alert(this.input)
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
    #position{      
        zoom:180%;

    }
    .el-form {
        width: 85% ;
        
    }
    .el-input {
        width: 20%;
        
    }


</style>