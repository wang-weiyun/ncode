import Vue from 'vue'
import VueRouter from 'vue-router'
// 在 vue-cli 创建的项目内 @表示的就是 src 就是路径别名

Vue.use(VueRouter)
// 1. 注册了两个全局组件  router-link  router-view
// 2. 创建路由数组

const routes = [

  
 
]

// 初始化路由对象
const router = new VueRouter({
  // router: routes
  routes,
  // 设置路由模式  地址栏的展示方式
  // 1. hash  默认的   锚点的展示方式
  // 2. history   浏览器历史记录的展示方法
  mode: 'history'
  // 当地址栏根地址后面没有 # 的时候，你的项目部署到服务器(不是本地)上的时候    /    /pins  就会认为存在两个页面，需要配置服务器向所有非 /地址找页面的方式 都指向 /index.html

})






// 在 main.js 内  new Vue 的时候将 router  加载进去
export default router


