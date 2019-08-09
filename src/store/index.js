import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
	token: null,
	activeName: 'first',
	id:'',
	username: '',
	portrait:'',
	car:'选择您的车型信息',
	carIndex:"{}",
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})
