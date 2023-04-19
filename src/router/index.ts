import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreditsView from '../views/CreditsView.vue'
import AboutView from '../views/AboutView.vue'

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
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'about'
      },
      component: AboutView
    }
  ]
})

export default router
