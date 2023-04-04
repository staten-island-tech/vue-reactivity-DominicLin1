import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../src/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'Shop',
      component: () => import('../src/views/Shop.vue')
    }
  ]
})

export default router
