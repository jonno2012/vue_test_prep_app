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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('../views/CalendarView.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/vueuse',
      name: 'vueuse',
      component: () => import('../views/VueUse.vue')
    },
    {
      path: '/transitions',
      name: 'transitions',
      component: () => import('../views/TransitionView.vue')
    },
    {
      path: '/model-value',
      name: 'model-value',
      component: () => import('../views/ModelValueView.vue')
    },
    {
      path: '/lifecycles',
      name: 'lifecycles',
      component: () => import('../views/LifeCycleHooksView.vue')
    }
  ]
})

export default router
