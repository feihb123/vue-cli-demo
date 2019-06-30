import * as types from './types'

export default {
	UserLogin({ commit }, data) {
		commit(types.LOGIN, data)
	},

	UserLogout({ commit }) {
		commit(types.LOGOUT)
	},

	UserName({ commit }, data) {
		commit(types.USERNAME, data)
	},
	UserPortrait({ commit }, data){
		commit(types.USERPORTRAIT, data)
	}
}
