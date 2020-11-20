import Vue from 'vue'
import VueRouter from 'vue-router'

vue.config.productionTip = false
// 1、安装插件
Vue.use(VueRouter)
//2、创建router 
const routes = [
// 配置对应关系
]
const router = new Vue.VueRouter({
    routes,
    mode:'history'
})


export default router