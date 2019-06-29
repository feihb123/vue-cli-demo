<!-- v-loaing用法 -->
<template>
  <div style="width:75%;margin:auto">
    <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
        <el-table-column
        prop="date"
        label="日期"
        width="180">
        </el-table-column>
        <el-table-column
        prop="name"
        label="姓名"
        width="180">
        </el-table-column>
        <el-table-column
        prop="address"
        label="地址">
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
      return {
        loading:false,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        
      };
  },

  components: {},

  methods: {}
}

</script>

<style lang='scss' scoped>

</style>