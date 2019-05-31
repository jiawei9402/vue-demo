import Vue from 'vue'
import Router from 'vue-router'
import goods from '../components/goods/goods'
import ratings from '../components/ratings/ratings'
import seller from '../components/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {path: '/goods', component: goods, meta: {description: '商品', requireAuth: true}},
    {path: '/ratings', name: 'ratings', component: ratings, meta: {description: '评价', requireAuth: true}},
    {path: '/seller', name: 'seller', component: seller, meta: {description: '卖家', requireAuth: true}}
  ]
})
