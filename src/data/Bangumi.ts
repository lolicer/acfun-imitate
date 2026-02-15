import { SeasonalBangumi } from '@/types/BangumiItem.js'
import { FollowingBangumi } from '@/types/BangumiProgressItem.js'

const FollowingBangumiData: FollowingBangumi[] = [
    {
        title: '雏子的笔记',
        imgUrl: '/images/home/bangumi/bangumi0.png',
        to: 'https://www.bilibili.com/bangumi/play/ss5993',
        totalEpisodes: 12,
        progress: {
            currentEpisode: '第4话',
            currentEpisodeProgress: 0.01
        }
    },
    {
        title: '少女编号',
        imgUrl: '/images/home/bangumi/bangumi1.jpg',
        to: 'https://www.bilibili.com/bangumi/play/ss5532',
        totalEpisodes: 12,
        progress: {
            currentEpisode: '第1话',
            currentEpisodeProgress: 0.36
        }
    },
    {
        title: '琉璃的宝石',
        imgUrl: '/images/home/bangumi/bangumi2.jpg',
        to: 'https://www.bilibili.com/bangumi/play/ss102014',
        totalEpisodes: 13,
        progress: {
            currentEpisode: '第1话',
            currentEpisodeProgress: 0.03
        }
    },
    {
        title: '地缚少年花子君 第二季',
        imgUrl: '/images/home/bangumi/bangumi3.png',
        to: 'https://www.bilibili.com/bangumi/play/ss76110',
        totalEpisodes: 24,
        progress: {
            currentEpisode: '第7话',
            currentEpisodeProgress: 0.01
        }
    },
    {
        title: '间谍过家家 第二季',
        imgUrl: '/images/home/bangumi/bangumi4.png',
        to: 'https://www.bilibili.com/bangumi/play/ss112827',
        totalEpisodes: 37,
        progress: {
            currentEpisode: null,
            currentEpisodeProgress: 0
        }
    },
    {
        title: '浦和小调',
        imgUrl: '/images/home/bangumi/bangumi5.jpg',
        to: 'https://www.bilibili.com/bangumi/play/ss1597',
        totalEpisodes: 12,
        progress: {
            currentEpisode: '第1话',
            currentEpisodeProgress: 0.09
        }
    },
    {
        title: '式守同学不止可爱而已',
        imgUrl: '/images/home/bangumi/bangumi6.jpg',
        to: 'https://www.bilibili.com/bangumi/play/ss41416',
        totalEpisodes: 12,
        progress: {
            currentEpisode: '第1话',
            currentEpisodeProgress: 0.01
        }
    },
    {
        title: '关于我转生成为史莱姆这档事 第三季',
        imgUrl: '/images/home/bangumi/bangumi7.jpg',
        to: 'https://www.bilibili.com/bangumi/play/ss48852',
        totalEpisodes: 24,
        progress: {
            currentEpisode: null,
            currentEpisodeProgress: 0
        }
    }
]

const SeasonalBangumiData: SeasonalBangumi[] = [
    {
        title: '漆黑的子弹 第二季',
        rank: 1,
        imgUrl: '/images/home/bangumi/new_bangumi0.jpg',
        to: '',
        latestEpisode: 2,
        airSchedule: {
            airWeekday: '一',
            airTime: '21:00'
        },
        tags: ['科幻', '战斗']
    },
    {
        title: 'NO GAME NO LIFE 游戏人生 第二季',
        rank: 2,
        imgUrl: '/images/home/bangumi/new_bangumi1.jpg',
        to: '',
        latestEpisode: 4,
        airSchedule: {
            airWeekday: '一',
            airTime: '20:30'
        },
        tags: ['奇幻', '智斗', '架空', '穿越']
    },
    {
        title: '幸运星 第二季',
        rank: 3,
        imgUrl: '/images/home/bangumi/new_bangumi2.jpg',
        to: '',
        latestEpisode: 15,
        airSchedule: {
            airWeekday: '六',
            airTime: '21:00'
        },
        tags: ['日常', '治愈', '搞笑', '萌系']
    },
    {
        title: 'URARA迷路贴 第二季',
        rank: 4,
        imgUrl: '/images/home/bangumi/new_bangumi3.jpg',
        to: '',
        latestEpisode: 4,
        airSchedule: {
            airWeekday: '日',
            airTime: '21:00'
        },
        tags: ['漫画改', '日常', '架空']
    },
    {
        title: 'Comic Girls 第二季',
        rank: 5,
        imgUrl: '/images/home/bangumi/new_bangumi4.jpg',
        to: '',
        latestEpisode: 2,
        airSchedule: {
            airWeekday: '日',
            airTime: '23:30'
        },
        tags: ['搞笑', '日常', '漫画改']
    },
    {
        title: '战双帕尼尼 第二季',
        rank: 6,
        imgUrl: '/images/home/bangumi/new_bangumi5.jpg',
        to: '',
        latestEpisode: 2,
        airSchedule: {
            airWeekday: '日',
            airTime: '21:00'
        },
        tags: ['日常', '游戏改']
    }
]

const BannerData: {
    bannerUrl: string
    coverUrl: string
    title: string
    sloganText: string
}[] = [
    {
        bannerUrl: '/images/bangumi/banner/banner-0.png',
        coverUrl: '/images/bangumi/banner/cover-0.png',
        title: '我的青春恋爱物语果然有问题。完',
        sloganText: '原来你是我最想留住的幸运'
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-1.png',
        coverUrl: '/images/bangumi/banner/cover-1.png',
        title: '葬送的芙莉莲',
        sloganText: ''
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-2.png',
        coverUrl: '/images/bangumi/banner/cover-2.png',
        title: '魔女之旅',
        sloganText: ''
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-3.png',
        coverUrl: '/images/bangumi/banner/cover-3.png',
        title: '因为太怕痛就全点防御力了',
        sloganText: ''
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-4.png',
        coverUrl: '/images/bangumi/banner/cover-4.png',
        title: '中二病也要谈恋爱！恋',
        sloganText: '爆炸吧现实，粉碎吧精神——'
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-5.png',
        coverUrl: '/images/bangumi/banner/cover-5.png',
        title: '堀与宫村',
        sloganText: ''
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-6.png',
        coverUrl: '/images/bangumi/banner/cover-6.png',
        title: '明日酱的水手服',
        sloganText: '凭实力政府全校的极致优雅'
    }
]

export { FollowingBangumiData, SeasonalBangumiData, BannerData }
