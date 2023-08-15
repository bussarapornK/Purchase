import { createWebHistory, createRouter } from 'vue-router'
import Shop from '@/pages/shop.vue'
import Cart from '@/pages/cart.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: Shop,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router