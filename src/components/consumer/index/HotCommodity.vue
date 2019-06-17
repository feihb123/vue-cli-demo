<!-- 热门推荐模块 -->
<template>
  <div>
    
      <el-form :inline="true" class="demo-form-inline line" >
        <el-form-item label=""> <img src="@/image/hot/hot-green.png"></el-form-item>
        <el-form-item label=""> <span class="hot">热门配件</span></el-form-item>
      </el-form>


    <el-card class="card" >

      <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
         <img src="@/image/hot/brakeblock.png" class="img">
         <br>
         <span>刹车片</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/brakedisc.png" class="img">
         <br>
         <span>刹车盘</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/catalyze.png" class="img">
         <br>
         <span>三元催化</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/dynamo.png" class="img">
         <br>
         <span>发电机</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/wiper.png" class="img">
         <br>
         <span>雨刷器</span>
        </div></el-col>
      </el-row>

    </el-card>

          <el-form :inline="true" class="demo-form-inline line" >
        <el-form-item label=""> <img src="@/image/hot/hot-red.png"></el-form-item>
        <el-form-item label=""> <span class="hot">热门服务</span></el-form-item>
      </el-form>

    <el-card class="card" >
      <el-row :gutter="20">
      <el-col :span="6"><div class="grid-content bg-purple">
         <img src="@/image/hot/upkeep.png" class="img">
         <br>
         <span>保养套餐</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/tiemo.png" class="img">
         <br>
         <span>车身贴膜</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/change-brake.png" class="img">
         <br>
         <span>换刹车片</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/sound.png" class="img">
         <br>
         <span>音响改装</span>
        </div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple">
        <img src="@/image/hot/recorder.png" class="img">
         <br>
         <span>行车记录仪</span>
        </div></el-col>
      </el-row>
    </el-card>

    <el-form :inline="true" class="demo-form-inline line" >
      <el-form-item label=""> <img src="@/image/hot/fire.png"></el-form-item>
      <el-form-item label=""> <span class="hot">热门品牌</span></el-form-item>
    </el-form>

    <el-card class="card" >
      <el-row :gutter="20">
          <el-col :span="6"><div class="grid-content bg-purple">
                <el-image class="img"
                style="width: 105px; height: 120px"
                :src="prefix+'img/mazda.jpg'"
                @click="page(prefix+'/img/mazda.jpg')"
                >
                </el-image>  
                
                </div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">
                <el-image  class="img"
                style="width: 120px; height: 120px"
                :src="prefix+'img/das.jpg'"
                @click="page(prefix+'/img/mazda.jpg')"
                >
                </el-image> 
                
                 </div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">
                <el-image  class="img2"
                style="width: 140px; height: 100px"
                 :src="prefix+'img/mustang.jpg'"
                @click="page(prefix+'/img/mazda.jpg')"
                >                
                </el-image>
              
                </div></el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">
              <el-image  class="img2"
                style="width: 140px; height: 100px"
                 :src="prefix+'img/ford.jpg'"
                @click="page(prefix+'/img/mazda.jpg')"
                >
                </el-image>
              
            </div>
          </el-col>
          <el-col :span="6">
            <div class="grid-content bg-purple">

                <el-image  class="img"
                style="width: 120px; height: 120px"
                 :src="prefix+'img/byd.jpg'"
                @click="page(prefix+'/img/mazda.jpg')"
                >
                </el-image> 
                
            </div>
          </el-col>
        </el-row>
    </el-card>



    <el-form :inline="true" class="demo-form-inline line" >
        <el-form-item label=""> <img src="@/image/hot/recommend.png"></el-form-item>
        <el-form-item label=""> <span class="hot">推荐店铺</span></el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name:'HotCommodity',
  data () {
    return {
      prefix:"/api",
    };
  },

  mounted(){
   
  },

  components: {},
  
  methods: {
    page(url){
      window.open(url);
    }
  }
}

</script>

<style lang='scss' scoped>
  .card{
    width: 72%;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .line{
    margin-left: -900px;
  }
  .hot{
    font-size: 25px;
    
  }

 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col{
    background-color: #ededed;
    height: 160px;
    width: 160px;
    margin-left: 45px;
  }
 
  .img{
    margin-top: 25px;
    width: 100px;
    height: 100px;
  }
  .img:hover{
    cursor: pointer;
  }
  .img2{
    margin-top: 35px;
    
  }
 .img2:hover{
    cursor: pointer;
  }
 
</style>