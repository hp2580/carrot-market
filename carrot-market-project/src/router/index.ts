import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '@/views/TestView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue')
  // },
  {
    path: '/popup',
    component: TestView
  },
  {
    path: '/header',
    name: 'header',
    component: () => import('../components/Header.vue')
  },
  {
    path: '/bottom-nav',
    name: 'bottom-nav',
    component: () => import('../components/BottomNav.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
