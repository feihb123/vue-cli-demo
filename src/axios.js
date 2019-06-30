import axios from 'axios'



axios.default.timeout = 5000
axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
	if(localStorage.getItem('token')) {
		config.headers.Authorization = `token ${localStorage.getItem('token')}`
			.replace(/(^\")|(\"$)/g, '')
	}
	return config
}, err => {
	return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
	return response
}, err => {
	return Promise.reject(err)
})

export default {
	// 用户注册
	userRegister(data) {
		return instance.post('/api/register', data)
	},
	// 用户登录
	UserLogin(data) {
		return instance.post('/api/login', data)
	},
	// 获取用户
	getUser() {
		return instance.get('/api/user')
	},
	// 删除用户
	delUser(data) {
		return instance.post('/api/delUser', data)
	},
	//获取用户头像
	getUserPortrait(data) {
		return instance.get('/api/getUserPortrait', data)
	},

}
