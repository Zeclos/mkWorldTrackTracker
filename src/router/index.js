import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoungeView from '@/views/LoungeView.vue'
import PlayView from '@/views/PlayView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/lounge',
      name: 'lounge',
      component: LoungeView,
    },
    {
      path: '/lounge/play/:players/:format',
      name: 'lounge_play',
      component: PlayView,
    }
  ],
})

export default router
