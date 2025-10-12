import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/aHome.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/live',
      name: 'live',
      component: () => import('@/views/home/bLive.vue'),
    },
    {
      path: '/anime',
      name: 'anime',
      component: () => import('@/views/home/cAnime.vue'),
    },
    {
      path: '/donghua',
      name: 'donghua',
      component: () => import('@/views/home/dDonghua.vue'),
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      component: () => import('@/views/home/eEntertainment.vue'),
    },
    {
      path: '/lifestyle',
      name: 'lifestyle',
      component: () => import('@/views/home/fLifestyle.vue'),
    },
    {
      path: '/music',
      name: 'music',
      component: () => import('@/views/home/gMusic.vue'),
    },
    {
      path: '/danceandidol',
      name: 'danceandidol',
      component: () => import('@/views/home/hDanceAndIdol.vue'),
    },
    {
      path: '/gaming',
      name: 'gaming',
      component: () => import('@/views/home/iGaming.vue'),
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('@/views/home/jTechnology.vue'),
    },
    {
      path: '/filmandtv',
      name: 'filmandtv',
      component: () => import('@/views/home/kFilmAndTV.vue'),
    },
    {
      path: '/sports',
      name: 'sports',
      component: () => import('@/views/home/lSports.vue'),
    },
    {
      path: '/trending',
      name: 'trending',
      component: () => import('@/views/home/mTrending.vue'),
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/home/nArticle.vue'),
    },
  ],
})

export default router
