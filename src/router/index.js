import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/LandingPage.vue'),
  },
  {
    path: '/privacy',
    redirect: '/privacy/en',
  },
  {
    path: '/privacy/:lang',
    name: 'privacy',
    component: () => import('../pages/PrivacyPage.vue'),
    beforeEnter: (to) => {
      const valid = ['en', 'tr', 'ru', 'zh']
      if (!valid.includes(to.params.lang)) {
        return { name: 'privacy', params: { lang: 'en' } }
      }
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
