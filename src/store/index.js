import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'
// 进行全局注入
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        tab,
        user
    }
})