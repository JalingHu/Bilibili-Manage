
import Vue from "vue"
import VueRouter from "vue-router"
// import Home from '../components/Home'
Vue.use(VueRouter)
const routes = [
    {
        path:'/',
        name:'Main',
        component:() => import('../views/Main'),
        children:[
           {
            path:'/home',
            name:'home',
            component:() => import('../views/home')
           },
           {
            path:'/user',
            name:'user',
            component:() => import('../views/User')
             },
            {
            path:'/mall',
            name:'mall',
            component:() => import('../views/mall')
                },
            {
                path:'/page1',
                name:'page1',
                component:() => import('../views/other/pageOne.vue')
                },
            {
                path:'/page2',
                name:'page2',
                component:() => import('../views/other/pageTwo.vue')
                }
        ]
    },
    {
        path:'/login',
        name:'login',
        component:() => import('../views/Login/Login.vue')
    }
]
export default new VueRouter({
    mode:'history',
    routes
})
        
