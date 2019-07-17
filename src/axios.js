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
		return instance.post('/api/public/register', data)
	},
	// 用户登录
	UserLogin(data) {
		return instance.post('/api/public/login', data)
	},
	// 获取用户
	getUser() {
		return instance.get('/api/user')
	},
	// 删除用户
	delUser(data) {
		return instance.post('/api/delUser', data)
	},
	
	// 用户注销登录
	UserLogOut(data) {
		return instance.post('/api/public/logOut', data)
	},
	// 访问店铺主页
	ShopContent(id,data) {
		return instance.get('/api/shop/content/'+id, data)
	},
	// 加购
	addCart(data) {
		return instance.post('/api/addCart/', data)
	},
	// 更新购物车数量
	updateCart(data) {
		return instance.put('/api/cart/', data)
	},
	// 删除购物车某项
	delCart(data) {
		return instance.delete('/api/cart/', data)
	},
	// 主页搜索
	searchContent(data) {
		return instance.post('/api/search', data)
	},
	// 查找个人信息
	findPersonalInfo(data) {
		return instance.post('/api/public/personalInfo', data)
	},
	// 修改个人信息
	updatePersonalInfo(data) {
		return instance.post('/api/public/updatePersonalInfo', data)
	},

}
