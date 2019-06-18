<!-- 汽车配置 -->
<template>
  <div>
      config!
      <div class="next">
      <router-link to="/" >
      <el-button type="primary" @click="next" >下 一 步</el-button>
      </router-link>
      </div>
      <br>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
        config:"",
    };
  },

  components: {},

  methods: {
      next(){
        this.$emit('close');
        this.$emit('updateCar',0);
      },
  }
}

</script>

<style lang='scss' scoped>
.next{
    float: right;
 
}
</style>