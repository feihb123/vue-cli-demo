<!-- 无限滚动 -->
<template>
  <div>
   <ul class="infinite-list" v-infinite-scroll="load">
    <li v-for="i in count" class="infinite-list-item" :key="i">{{ i }}</li>
    </ul>
    <br>    
    <br>    
  </div>
</template>

<script>

export default {
  name:'',
  data () {
    return {
       count: 100
    }
  },

  components: {},

  methods: {
     load () {
        this.count += 2
      }

  }
}

</script>

<style lang='scss' scoped>

</style>