import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const Profile = () => import ('../views/profile/Profile.vue')
const Cart = () => import ('../views/cart/Cart.vue')

// vue.config.productionTip = false
// 1、安装插件
Vue.use(VueRouter)
//2、创建router 
const routes = [
// 配置映射关系
    {
        path:'',
        redirect:'/home'
    },  
    {
        path:'/home',
        commponents:Home
    },
    {
        path:'/category',
        commponents:Category
    },
    {
        path:'/profile',
        commponents:Profile
    },
    {
        path:'/cart',
        commponents:Cart
    }
]
const router = new vue.VueRouter({
    routes,
    // mode:'history'
})


export default router