import Vue from 'vue'
import Router from 'vue-router'
// 引入其他的组件
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

// 调用路由
Vue.use(Router)

export default new Router({
  routes: [
    {
    // 浏览器网路走通之后默认就会找域名下的根目录
      path: '/',
    // 把goods作为默认首页
      name: 'goods',
      component: goods
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
  // 测试
})
