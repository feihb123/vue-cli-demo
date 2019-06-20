<!-- 汽车品牌 -->
<template>
  <div>
      <br>
      <el-row :gutter="20">
        <el-col :span="6" v-for="(item,index) in list" :key="index">
          <div>
            <router-link to="/series" style="text-decoration:none;">
            <el-card  >           
            <el-image
            style="width: 120px; height: 60px"
            lazy
            :src="item.url"
            fit="cover"
            @click="select(item)"
            >
            <!-- 未加载完成占位符 -->
            <!-- <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div> -->
            </el-image>
            <br>
            <font>{{item.name}}</font>   
            </el-card>
            </router-link>
          </div>        
      </el-col>

      </el-row>

     <!--  <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Material Design 的input</span>
          </div> -->
          <div style="height:100px;">

            <el-form :model="demo" :rules="demoRules"  > 
              <el-row>
                <el-col :span="12">
                  <el-form-item prop="title">
                   <md-input v-model="demo.title" icon="search" 
                   name="title" placeholder="请输入拼音首字母"
                   @input="input"
                   >
                  搜索品牌
                  </md-input>
              </el-form-item>
              
              </el-col>
                <el-col :span="12">
                  <el-form-item prop="title">
                  <div class="component-item">
                    <mallki class-name="mallki-text" text="易配汽配供应链" />
                  </div>
                  </el-form-item>
                  </el-col>
              </el-row>
             </el-form>
           
      
          </div>
       <!--  </el-card> -->

      <!-- <el-button type="primary" @click="next" >下 一 步</el-button> -->

      
 
      
  </div>
</template>

<script>
import MdInput from '@/components/MDinput'
import Mallki from '@/components/TextHoverEffect/Mallki.vue'


export default {
  name:'brand',
  data () {
    const validate = (rule, value, callback) => {
      if (value.length !== 0) {
        callback(/* new Error('请输入拼音首字母') */)
      } else {
        callback()
      }
    }
    return {
        demo: {
          title: ''
        },
        demoRules: {
        title: [{ required: true, trigger: 'change', validator: validate }],
         },
        list:[
          /* {id:1,url:"/api/upload/brand/benchi.png",name:"奔驰"},
          {id:2,url:"/api/upload/brand/bmw.png",name:"宝马"},
          {id:3,url:"/api/upload/brand/aodi.png",name:"奥迪"},
          {id:4,url:"/api/upload/brand/dazhong.png",name:"大众"},
          {id:5,url:"/api/upload/brand/haval.png",name:"哈弗"},
          {id:6,url:"/api/upload/brand/bentian.png",name:"本田"},
          {id:7,url:"/api/upload/brand/maz.png",name:"马自达"},
          {id:8,url:"/api/upload/brand/ford.png",name:"福特"}, */
          ],
        index:'',
        brand:'',
        url:'/api/car/brand',
        loading:true,
    };
  },
  mounted(){
    this.getBrands();   
  },
/*   updated(){
    this.loading = false;
  }, */
  components: {
    MdInput,Mallki
  },

  methods: {
      next(){       
        this.$emit('updateCar',1,this.index,this.brand);
      },
      select(item){
        this.index = item.id;
        this.brand = item.name;
        this.next();
      },
      input(value){
        
        this.$axios.get("/api/car/spell", {
            params: {
                value:value,
            }
        }).then((response) => {
            this.list = response.data;          
        }).catch(function (response) {
            console.log(response)
        });

      },
      
      getBrands() {
      this.$axios.get(this.url, {
          params: {
              
          }
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
    margin-right: 0%;
}
.el-row{
  margin-bottom: 0px;
}
.el-card{
  margin-top: 10px;
  
}
.el-card:hover{
  cursor: pointer;
}
font{
  font-size: 16px;
  font-weight: bold;
  color:gray;
  
}
.component-item{
  width: 150px;
  float: right;
  margin-right: 2%;
  min-height: 100px;
  font-size: 20px;
  margin-top: 40px;
}

</style>