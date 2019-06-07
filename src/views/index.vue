<!-- 主页 -->
<template>
  <div>
      <Navigation></Navigation>
      <el-table
        :data="tableData"
        style="width: 80%;margin:0 auto"

        :show-header="false"
        >
        <el-table-column
                    fixed
                    prop="id"
                    label="item_id"
                    width="180"
                    align="center">
        </el-table-column>
        <el-table-column 
        prop="create_datetime"
        label="日期"
        width="180"
        align="center">
        </el-table-column>
        <el-table-column
        prop="username"
        label="姓名"
        width="180"
        align="center">
        </el-table-column>
        <el-table-column
        prop="zone"
        label="地址"
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
    <el-pagination background class="pagination" layout="prev, pager, next" :total="total" :page-size="pageSize"
                    v-on:current-change="changePage">
    </el-pagination>
    <DbModal :dialogFormVisible="dialogFormVisible" :form="form" v-on:canclemodal="dialogVisible"></DbModal>
  </div>
</template>

<script>
import Navigation from "../components/consumer/Navigation.vue"
import DbModal from '../components/consumer/DbModal.vue'
/* import Bus from '../eventBus' */

export default {
  name:'index',
  data () {
    return {
        tableData: [],
                apiUrl: 'http://127.0.0.1:8000/api/persons',
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
      Navigation,DbModal
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
                        page: this.currentPage,
                        sex: this.sex,
                        email: this.email
                    }
                }).then((response) => {
                    this.tableData = response.data.data.results;
                    this.total = response.data.data.total;
                    this.pageSize = response.data.data.count;
                    console.log(response.data.data);
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
                const idurl = 'http://127.0.0.1:8000/api/persons/detail/' + itemId;
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

</style>