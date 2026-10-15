import { createRouter, createWebHashHistory } from 'vue-router'

import BenvenutoView from '../views/BenvenutoView.vue'
import ConfiguratoreView from '../views/ConfiguratoreView.vue'

import GrazieView from '../views/GrazieView.vue'

const routes = [
  {
    path: '/',
    component: BenvenutoView,
  },
  {
    path: '/configuratore',
    component: ConfiguratoreView,
  },
  {
  path: '/grazie',
  component: GrazieView,
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
})

export default router