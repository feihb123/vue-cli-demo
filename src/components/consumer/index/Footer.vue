<!-- 底边 -->
<template>
  <div class="content">
    
      <el-row>
        <el-col :span="24" class="footer">
          <div class="row">
          <img src="@/image/pig.jpg" class="about">
          2019 @ Herb Fei 费浩彬
          </div>
          <div class="row">
            <el-col :span="4" :offset="2">
              <div>
                 SpringBoot-Vue-Cli
                 <br><br>
                 <a href="https://github.com/feihb123/vue-cli-demo">Github</a>

                 <a href="mailto:datacharm@qq.com" class="email">Email</a>
              </div>
            </el-col>
            <el-col :span="6" :offset="3">
            <el-tooltip class="item" effect="dark" content="我的公众号" placement="right">
              <img src="@/image/account.jpg" class="account">
            </el-tooltip>
            </el-col>
            <el-col :span="3" :offset="2" >
              <br><br>
              Design by Herb
            </el-col>
            <el-col :span="2" >
              <img src="@/image/dinosaur.gif" class="dinosaur">
            </el-col>
          </div>
        </el-col>
      </el-row>
      
  </div>
</template>

<script>
export default {
  name:'Footer',
  data () {
    return {
    };
  },

  components: {},

  methods: {}
}

</script>

<style lang='scss' scoped>
 .content{
   width: 80%;
   margin: auto;
 }
 .footer {
    height: 140px;
    background-color: rgba(212, 211, 211, 0.219);
    color: #747880;
    width: 100%;    
    line-height: 1;
    font-size: 18px;
    margin-top:20px ;
    }
  .about{
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .account{
    width: 80px;
    height: 80px;
  }
  .email{
    margin-left: 20px; 
  }
  .row{
    margin-top:10px; 
  }
  .dinosaur{
    width: 95px;
    height: 80px;
  }

</style>