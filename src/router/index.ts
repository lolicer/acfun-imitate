import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/HomeView/HomeLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'home',
                    component: Home
                },
                {
                    path: 'donghua',
                    name: 'donghua',
                    component: () =>
                        import('@/views/HomeView/CommonView/Donghua.vue')
                },
                {
                    path: 'lifestyle',
                    name: 'lifestyle',
                    component: () =>
                        import('@/views/HomeView/CommonView/Lifestyle.vue')
                },
                {
                    path: 'music',
                    name: 'music',
                    component: () =>
                        import('@/views/HomeView/CommonView/Music.vue')
                },
                {
                    path: 'danceandidol',
                    name: 'danceandidol',
                    component: () =>
                        import('@/views/HomeView/CommonView/DanceAndIdol.vue')
                },
                {
                    path: 'gaming',
                    name: 'gaming',
                    component: () =>
                        import('@/views/HomeView/CommonView/Gaming.vue')
                },
                {
                    path: 'technology',
                    name: 'technology',
                    component: () =>
                        import('@/views/HomeView/CommonView/Technology.vue')
                },
                {
                    path: 'filmandtv',
                    name: 'filmandtv',
                    component: () =>
                        import('@/views/HomeView/CommonView/FilmAndTV.vue')
                },
                {
                    path: 'sports',
                    name: 'sports',
                    component: () =>
                        import('@/views/HomeView/CommonView/Sports.vue')
                },
                {
                    path: 'trending',
                    name: 'trending',
                    component: () =>
                        import('@/views/HomeView/CommonView/Trending.vue')
                },
                {
                    path: 'article',
                    name: 'article',
                    component: () => import('@/views/HomeView/Article.vue')
                }
            ]
        },
        {
            path: '/live',
            name: 'live',
            component: () => import('@/views/LiveView/LiveLayout.vue')
        },
        {
            path: '/bangumi',
            name: 'bangumi',
            component: () => import('@/views/BangumiView/BangumiLayout.vue')
        }
    ]
})

export default router
