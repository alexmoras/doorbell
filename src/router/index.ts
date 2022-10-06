import { processExpression } from '@vue/compiler-core'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: import.meta.env.VITE_SECRET_PATH,
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
