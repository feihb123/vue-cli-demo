<!-- 显示店铺 -->
<template>
  <div class="shop">
    <el-row>
    <el-col :span="4" v-for="(shop, index) in shops" :key="shop.shopname" :offset="index %5 ==0 ? 4 : 0">
        <el-card :body-style="{ padding: '10px' }"  shadow="hover"> 
        <img :src="prefix+shop.photo" class="image">
        <div style="padding: 14px;">
            <span>{{shop.shopname}}</span>
            <div class="bottom clearfix">
            <time class="time">{{ shop.desc }}</time>
            </div>
            <br>
            <el-button  round>进入店铺</el-button>
        </div>
        </el-card>
    </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
      currentDate: new Date(),
      shops:[],
      prefix:"/api",
      url:"/api/shop",
    };
  },
  mounted(){
    this.getShops();
  },

  components: {},

  methods: {
    getShops(){
      this.$axios.get(this.url,{
        param:{

        }
      }).then((response) => {
          this.shops = response.data
          console.log(response.data)  

      }).catch(function (response) {
          console.log(response)
      });
    }
  }
}

</script>

<style lang='scss' scoped>
.image{
  cursor:pointer
}
.image:hover{
  opacity: 0.6;
}
.shop{
  width: 86%;
}
.el-col{
  margin-bottom: 15px;
}
.el-card{
  width: 200px;
  height: 320px;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }


  .image {
    width: 98%;
    margin:  auto;
    display: block;

  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>