<!-- 汽车年款 -->
<template>
  <div>
      year!
      <div class="next">
      <router-link to="/config" >
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
        year:"",
    };
  },

  components: {},

  methods: {
      next(){
        this.$emit('updateCar',3);
      },
  }
}

</script>

<style lang='scss' scoped>
.next{
    float: right;

}
</style>