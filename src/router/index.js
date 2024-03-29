import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Second',
      name: 'Second',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Second.vue')
    },
    {
      path:'/cardTest',
      name:'cardTest',
      component :() => import('../views/cardTest.vue')
    },
    {
      path:'/NavieUI',
      name:'NavieUI',
      component :() => import('../views/NavieUI.vue')
    },
    {
      path:'/ChartsTest',
      name:'ChartsTest',
      component:() => import('../views/ChartsTest.vue')
    },
    {
      path:'/SetUp',
      name:'SetUp',
      component:() => import('../views/SetUp.vue')
    },
  ]
})

export default router
