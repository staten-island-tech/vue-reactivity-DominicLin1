import { createRouter, createWebHistory } from 'vue-router'
import data from '../src/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LeagueTemplate
    },
    {
      path: '/about',
      name: 'Shop',
      
      component: () => import('../src/views/Shop.vue')
    }
  ]
})

export default router
