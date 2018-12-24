import Vue from 'vue'
import Router from 'vue-router'
import Goods from './pages/goods/Goods' //商品


Vue.use(Router)

export default new Router({
  routes: [
    {
      // 商品
      path: '/',
      name: 'goods',
      component: Goods
    },
    {
      // 评价（懒加载）
      path: '/eval',
      name: 'eval',
      component: () => import('./pages/eval/Eval')
    },
    {
      // 商家 (懒加载)
      path: '/merchant',
      name: 'merchant',
      component: () => import('./pages/merchant/Merchant')
    }
  ]
})
