import Vue from 'vue';
import App from './App.vue';
import { Button,Header,Container,Main,Aside,Menu,MenuItem,MenuItemGroup,Submenu,Dropdown,DropdownMenu,DropdownItem,Row,Card,Col,Table,TableColumn,Breadcrumb,BreadcrumbItem,Tag,Form,FormItem,Input,Select,Switch,DatePicker,Dialog} from 'element-ui';
// import './assets/less/index.less'
import VueRouter from 'vue-router';
import router from './router';
import store from './store';
import "./assets/less/index.less";
import http from 'axios';
import '../api/mock.js'

// 应用插件


Vue.use(VueRouter)
Vue.use(Header)
Vue.use(Container)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Select)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Card)
Vue.use(Col)
Vue.component(Button.name, Button);


Vue.prototype.$http = http
Vue.config.productionTip = false

// 导航走位监听路由

router.beforeEach((to,from,next) =>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({ name:'login'})
  } else {
    next()
  }
} )
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
