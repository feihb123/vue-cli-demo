<!-- 待收货订单 -->
<template>
  <div  v-loading="loading" :element-loading-text="loadingText">
      <list :shops="shops"></list>
  </div>
</template>

<script>
import List from '../../components/consumer/order/orderList';
export default {

  name:'',
  data () {
    return {
        shops:[
          {
            photo:"",
            shopname:"",
            goods:[],
            total:0,
          }
        ],
        loading:true,
        loadingText:"拼命加载中",        
    };
  },
  mounted(){
    this.$axios.get("/api/order/waitConfirm").then((response) => {
      this.shops = response.data;
      this.loading = false;
      }
    ).catch((response) => {
      this.loadingText = "服务器好像遇到了问题:"+response;
    });


  },
  
  components: {
      List,
  },

  methods: {}
}

</script>

<style lang='scss' scoped>

</style>