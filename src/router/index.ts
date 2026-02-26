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
                    component: Home,
                    meta: {
                        title: 'AcFun | 首页'
                    }
                },
                {
                    path: 'donghua',
                    name: 'donghua',
                    component: () =>
                        import('@/views/HomeView/CommonView/Donghua.vue'),
                    meta: {
                        title: 'AcFun | 首页-动画'
                    }
                },
                {
                    path: 'lifestyle',
                    name: 'lifestyle',
                    component: () =>
                        import('@/views/HomeView/CommonView/Lifestyle.vue'),
                    meta: {
                        title: 'AcFun | 首页-生活'
                    }
                },
                {
                    path: 'music',
                    name: 'music',
                    component: () =>
                        import('@/views/HomeView/CommonView/Music.vue'),
                    meta: {
                        title: 'AcFun | 首页-音乐'
                    }
                },
                {
                    path: 'danceandidol',
                    name: 'danceandidol',
                    component: () =>
                        import('@/views/HomeView/CommonView/DanceAndIdol.vue'),
                    meta: {
                        title: 'AcFun | 首页-舞蹈·偶像'
                    }
                },
                {
                    path: 'gaming',
                    name: 'gaming',
                    component: () =>
                        import('@/views/HomeView/CommonView/Gaming.vue'),
                    meta: {
                        title: 'AcFun | 首页-游戏'
                    }
                },
                {
                    path: 'technology',
                    name: 'technology',
                    component: () =>
                        import('@/views/HomeView/CommonView/Technology.vue'),
                    meta: {
                        title: 'AcFun | 首页-科技'
                    }
                },
                {
                    path: 'filmandtv',
                    name: 'filmandtv',
                    component: () =>
                        import('@/views/HomeView/CommonView/FilmAndTV.vue'),
                    meta: {
                        title: 'AcFun | 首页-影视'
                    }
                },
                {
                    path: 'sports',
                    name: 'sports',
                    component: () =>
                        import('@/views/HomeView/CommonView/Sports.vue'),
                    meta: {
                        title: 'AcFun | 首页-体育'
                    }
                },
                {
                    path: 'trending',
                    name: 'trending',
                    component: () =>
                        import('@/views/HomeView/CommonView/Trending.vue'),
                    meta: {
                        title: 'AcFun | 首页-鱼塘'
                    }
                }
            ]
        },
        {
            path: '/live',
            name: 'live',
            component: () => import('@/views/LiveView/LiveLayout.vue'),
            meta: {
                title: 'AcFun | 直播'
            }
        },
        {
            path: '/bangumi',
            name: 'bangumi',
            component: () => import('@/views/BangumiView/BangumiLayout.vue'),
            meta: {
                title: 'AcFun | 番剧'
            }
        },
        {
            path: '/video_test',
            component: () => import('@/views/VideoView/VideoLayout.vue'),
            meta: {
                title: '视频页面测试'
            }
        }
    ]
})

router.afterEach((to) => {
    document.title = (to.meta.title as string) || 'AcFun'
})

export default router
