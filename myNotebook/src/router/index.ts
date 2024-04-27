//通过vue-router插件实现模板路由配置
import { createRouter, createWebHashHistory, } from 'vue-router'
import { constantRoute } from './routes'
//创建路由器
let router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoute,
    
})
export default router
