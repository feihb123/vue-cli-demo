<!-- 个人信息 -->
<template>
  <div>

    <div>
      <img :src="portraitUrl" class="portrait"/>
    </div>
    <el-upload
    class="upload-demo"
    action="/api/upload"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
  
    :on-exceed="handleExceed"
    :show-file-list="false"
    :on-success="uploadSuccess"
    >
        <el-button size="small" type="primary" >上传头像</el-button>
        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
    </el-upload>

    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="昵称">
            <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="手机">
            <el-input v-model="formLabelAlign.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="formLabelAlign.email"></el-input>
        </el-form-item>
    </el-form>

    <el-button type="primary" plain>提交更改</el-button>
  </div>
</template>

<script>
export default {
  name:'',
  data () {
    return {
        labelPosition: 'left',
        formLabelAlign: {
        name: '',
        tel: '',
        email: ''
        },
        portraitUrl:this.$store.state.portrait,
        fileList: []

    };
  },

  components: {},

  methods: {
      handleRemove(file, fileList) {  
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      uploadSuccess(response, file, fileList){
        console.log(response)
        this.portraitUrl = response;
        //更新头像state
        this.$store.dispatch('UserPortrait', response);
      }

  }
}

</script>

<style lang='scss' scoped>
.portrait{
    margin-top: 30px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
}
.el-form-item{
    margin: 0 auto;
    margin-bottom: 30px;
    margin-top: 30px;
    margin-left: 30%;
    width: 35%;
}
</style>