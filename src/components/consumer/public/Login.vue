<template lang="html">
  <div class="">
    <img src="@/image/logo.png" class="logo">
    <el-row>
      <el-col :span="10" :offset="7">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户登录" name="first">
            <el-col >
              <el-form :model="dynamicValidateForm" label-width="100px" ref="dynamicValidateForm">
                    <el-form-item
                      prop="email"
                      label="邮箱"
                      :rules="rules.email"
                    >
                    <el-input v-model="dynamicValidateForm.email"></el-input>
                    </el-form-item>
                    <el-form-item
                    prop="password"
                    label="密码"
                    :rules = "rules.password"
                    >
                      <el-input type="password" v-model="dynamicValidateForm.password"></el-input>
                    </el-form-item>
                    <el-button type="primary" @click="submitForm('dynamicValidateForm')">登录</el-button>
                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="用户注册" name="second">
            <Register></Register>
          </el-tab-pane>
      </el-tabs>
    </el-col>
    </el-row>
  </div>
</template>

<script>
import Register from './Register.vue'
import * as types from '@/store/types'
import api from '@/axios'


export default {
    name: 'login',
    data() {
        return {
            dynamicValidateForm: {
                email: 'fhb@qq.com',
                password: '123'
            },
            activeName: this.$store.state.activeName,
           
            rules: {
                email: [{
                        required: true,
                        message: '请输入邮箱地址',
                        trigger: 'blur'
                    },
                    // 输入校验
                    
                    {
                        type: 'email',
                        message: '请输入正确的邮箱地址',
                        trigger: 'blur'
                    }
                ],
                password: {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur'
                }
            }
        }
    },
    components: {
        Register
    },
    methods: {
        handleClick(tab, event) {},
        // 重置
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        // 登录
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    let user = this.dynamicValidateForm;
                    
                    api.UserLogin(user).then((response) => {

                        if (response.data.message == "unknow account") {
                            this.$message({
                                type: 'warning',
                                message: '账号不存在'
                            })
                        }
                        if (response.data.message == "success") {
                            this.$message({
                                type: 'success',
                                message: '登录成功'
                            })
                            
                            console.log(response.data)
                            this.$store.dispatch('UserLogin', response.data.token)
                            this.$store.dispatch('UserId', response.data.id)
                            this.$store.dispatch('UserName', response.data.username)
                            this.$store.dispatch('UserPortrait', response.data.headPortrait);
                            let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                            
                            

                            this.$router.push({
                                path: redirect
                            })
                        } 
                        if (response.data.message == "fail") {
                           this.$message.error('密码错误');
                        }
                    }).catch((response) => {
                        
                    })

                } else {
                    console.log('Error Submit!!');
                    return false;
                }
            });
        }
    }
}
</script>

<style lang="scss">
.logo {
    position: relative;
    width: 30%;
    margin-bottom: 40px;
}
</style>
