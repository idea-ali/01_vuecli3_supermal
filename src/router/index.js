import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 1.安装插件
Vue.use(Router)

// 2.创建 并导出
export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/profile',
      component: Profile
    }
  ],
  // 把 # 去掉了，变成HTML5的history模式了
  mode: 'history',
})

/*
  以下为，在网上找的代码，
  为解决Uncaught (in promise) TypeError: Cannot read property '_normalized' of of undefined报错
  虽然报错了，但路由跳转是成功的…很奇怪
  解决方法：
  在配置路由的js文件重写push方法
*/
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}