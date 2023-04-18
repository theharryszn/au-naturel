import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreditsView from '../views/CreditsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: 'Home'
      },
      component: IndexView
    },
    {
      path: '/credits',
      name: 'credits',
      meta: {
        title: 'Credits'
      },
      component: CreditsView
    }
  ]
})

export default router
