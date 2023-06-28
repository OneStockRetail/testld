import { createRouter, createWebHistory } from 'vue-router'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SearchView
    },
    {
      path: '/my-list',
      name: 'list',
      component: () => import('@/views/ListView.vue')
    },
    {
      path: '/pick-show',
      name: 'pick_show',
      component: () => import('@/views/PickShowView.vue')
    }
  ]
})

export default router
