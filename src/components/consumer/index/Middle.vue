<!-- 中间部分 -->
<template>
  <div>
    <el-container class="outer" >

        <el-main>
   
          <template >
          <el-carousel :interval="3000" type="card" height="280px" >
              <el-carousel-item v-for="item in photos" :key="item.url">
              
              <el-image 
                style="height: 250px"
                :src="item.photo"
                @click="page(item.url)"
                 >
                </el-image> 
              </el-carousel-item>
          </el-carousel>
          </template>
      </el-main>
    
      
    </el-container>
    
    
  </div>
</template>

<script>
export default {
  name:'Middle',
  data () {
    return {
      prefix:"/api",
      url:"/api/carousel",
      photos:[],
    };
  },
  mounted(){
    this.getCustomers();
  },

  components: {},
  
  methods: {
    getCustomers() {
      this.$axios.get(this.url, {
          params: {
              
          }
      }).then((response) => {
          this.photos = response.data;
          console.log(response.data)
      }).catch(function (response) {
          console.log(response)
      });
    },
    page(url){
      window.open(url);
    }
  }
}

</script>

<style lang='scss' scoped>
    .outer {
        width:80%;
        margin: 0 auto;
    }
    .outer2 {
        width:70%;
        height: 145px;
        margin: 0 auto;
    }
    .image {
      cursor:pointer
    }
    .image:hover{
      opacity:0.7;
    }
    .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  //背景色
  /* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */
  //footer布局
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
/*   .bg-purple {
    background: #d3dce6;
  } */
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>