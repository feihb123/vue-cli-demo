<!-- 待发货订单 -->
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
            photo:"img/das.jpg",
            shopname:"一汽大众",
            goods:[
            /* {id:"1",photo:"img/light.jpg",productName:"大灯",price:"11",amount:"1",type:"默认",shopname:"一汽大众",check_one:true,},
            {id:"2",photo:"img/light.jpg",productName:"大灯",price:"12",amount:"2",type:"默认",shopname:"一汽大众",check_one:true,},
            {id:"3",photo:"img/light.jpg",productName:"大灯",price:"13",amount:"3",type:"默认",shopname:"一汽大众",check_one:true,},
            {id:"4",photo:"img/light.jpg",productName:"大灯",price:"13",amount:"3",type:"默认",shopname:"一汽大众"}, */
            ],
            total:0,
          }
        ],
        loading:true,
        loadingText:"拼命加载中",   
    };
  },
  mounted(){
    this.$axios.get("/api/order/waitDeliver",{
      prarm:{}
    }).then((response) => {
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