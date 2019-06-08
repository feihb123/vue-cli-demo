<!-- 主页 -->
<template>
  <div>
      <Navigation></Navigation>
      <Search></Search>
      <Middle></Middle>
      <br>

      <el-table
        :data="tableData"
        style="width: 80%;margin:0 auto"

        :show-header="false"
        >
        <el-table-column
                    fixed
                    prop="photo"
                    label="头像"
                    width="180"
                    align="center">
        <!-- 表单中加载图片 -->
         <template slot-scope="scope">
              <img :src="api + scope.row.photo" alt="" style="width: 50px;height:50px">
         </template>

        </el-table-column>

        <el-table-column 
        prop="shopname"
        label="店铺"
        width="180"
        align="center">
        </el-table-column>

        <el-table-column
        prop="desc"
        label="desc"
        align="center">
        </el-table-column>
       
        
        <el-table-column
                    fixed="right"
                    label="Operation"
                    width="100">
                <template scope="scope">
                    <el-button @click="editItem(scope.$index, tableData)" type="text" size="large">Edit</el-button>
                </template>
         </el-table-column>
    </el-table>
    <br>
    <el-pagination background class="pagination" layout="prev, pager, next" :total="total" :page-size="pageSize"
                    v-on:current-change="changePage">
    </el-pagination>
    <DbModal :dialogFormVisible="dialogFormVisible" :form="form" v-on:canclemodal="dialogVisible"></DbModal>
  
  </div>
</template>

<script>
import Navigation from "../components/consumer/Navigation.vue"
import Search from "../components/consumer/Search.vue"
import DbModal from '../components/consumer/DbModal.vue'
import Middle from '../components/consumer/Middle.vue'
/* import Bus from '../eventBus' */

export default {
  name:'index',
  data () {
    return {
        tableData: [],
        api:'http://127.0.0.1:8008',
        apiUrl: 'http://127.0.0.1:8008/shop',
        total: 0,
        pageSize: 10,
        currentPage: 1,
        sex: '',
        email: '',
        dialogFormVisible: false,
        form: '',
    };  
  },

  components: {
      Navigation,DbModal,Search,Middle
  },

  mounted () {
            this.getCustomers();
           /*  Bus.$on('filterResultData', (data) => {
                this.tableData = data.results;
                this.total = data.total_pages;
                this.pageSize = data.count;
                this.email = data.email;
                this.sex = data.sex;

            }); */
        },

    methods: {

            dialogVisible: function () {
                this.dialogFormVisible = false;
            },

            getCustomers: function () {
                this.$axios.get(this.apiUrl, {
                    params: {
                        /* page: this.currentPage,
                        sex: this.sex,
                        email: this.email */
                    }
                }).then((response) => {
                     this.tableData = response.data
                     console.log(response.data)
                    /* this.tableData = response.data.data.results;
                    this.total = response.data.data.total;
                    this.pageSize = response.data.data.count;
                    console.log(response.data.data); */
                }).catch(function (response) {
                    console.log(response)
                });
            },
            changePage: function (currentPage) {
                this.currentPage = currentPage;
                this.getCustomers()
            },
            editItem: function (index, rows) {
                this.dialogFormVisible = true;
                const itemId = rows[index].id;
                const idurl = '/api/shop' + itemId;
                this.$axios.get(idurl).then((response) => {
                    this.form = response.data;
                }).catch(function (response) {
                    console.log(response)
                });
            },

            formatter(row, column) {
                let data = this.$moment(row.create_datetime, this.$moment.ISO_8601);
                return data.format('YYYY-MM-DD')
            },
     }
}

</script>

<style lang='scss' scoped>
    /* 50%图片设置成圆形 */
    img{
        border-radius:10% ;
    }
</style>