import { LiveHeader, RecommendSectionItem } from '@/types/Live.js'

const LiveHeaderData: LiveHeader[] = [
    {
        tag: '虚拟Singer',
        title: '咦！是长颈鹿！',
        coverUrl: '/images/live/header/cover_0.jpg',
        videoUrl: '/videos/live/header/video_0.mp4'
    },
    {
        tag: '虚拟声优',
        title: '救下被混混骚扰的姐姐的回报是...... ',
        coverUrl: '/images/live/header/cover_1.jpg',
        videoUrl: '/videos/live/header/video_1.mp4'
    },
    {
        tag: '原神',
        title: '「原神入坑」厨神香菱；托马来了 2-1',
        coverUrl: '/images/live/header/cover_2.jpg',
        videoUrl: '/videos/live/header/video_2.mp4'
    },
    {
        tag: '虚拟日常',
        title: '【路伊丝】看AI创作大赛作品',
        coverUrl: '/images/live/header/cover_3.jpg',
        videoUrl: '/videos/live/header/video_3.mp4'
    },
    {
        tag: '虚拟日常',
        title: '吃一碗栗子~',
        coverUrl: '/images/live/header/cover_4.jpg',
        videoUrl: '/videos/live/header/video_4.mp4'
    }
]

const RecommendSectionItemData: RecommendSectionItem[] = [
    {
        tag: 'PC游戏',
        imgUrl: '/icons/live/recommendSection/游戏_PC游戏.png'
    },
    {
        tag: '手游',
        imgUrl: '/icons/live/recommendSection/游戏_手机游戏.png'
    },
    {
        tag: '主机游戏',
        imgUrl: '/icons/live/recommendSection/游戏_主机游戏.png'
    },
    {
        tag: '娱乐',
        imgUrl: '/icons/live/recommendSection/娱乐.png',
        dropdownMenu: [
            {
                tag: '萌宅领域',
                imgUrl: '/icons/live/recommendSection/娱乐_萌宅领域.png'
            },
            {
                tag: '颜值',
                imgUrl: '/icons/live/recommendSection/娱乐_颜值.png'
            },
            {
                tag: '舞见',
                imgUrl: '/icons/live/recommendSection/娱乐_舞见.png'
            },
            {
                tag: '视频唱见',
                imgUrl: '/icons/live/recommendSection/娱乐_视频唱见.png'
            },
            {
                tag: '团播',
                imgUrl: '/icons/live/recommendSection/娱乐_团播.png'
            }
        ]
    },
    {
        tag: '虚拟主播',
        imgUrl: '/icons/live/recommendSection/虚拟主播.png',
        dropdownMenu: [
            {
                tag: '虚拟Singer',
                imgUrl: '/icons/live/recommendSection/虚拟主播_虚拟Singer.png'
            },
            {
                tag: '虚拟Gamer',
                imgUrl: '/icons/live/recommendSection/虚拟主播_虚拟Gamer.png'
            },
            {
                tag: '虚拟声优',
                imgUrl: '/icons/live/recommendSection/虚拟主播_虚拟声优.png'
            },
            {
                tag: '虚拟日常',
                imgUrl: '/icons/live/recommendSection/虚拟主播_虚拟日常.png'
            }
        ]
    },
    {
        tag: '电台',
        imgUrl: '/icons/live/recommendSection/电台.png',
        dropdownMenu: [
            {
                tag: '唱见电台',
                imgUrl: '/icons/live/recommendSection/电台_唱见电台.png'
            },
            {
                tag: '聊天电台',
                imgUrl: '/icons/live/recommendSection/电台_聊天电台.png'
            }
        ]
    },
    {
        tag: '更多 >',
        imgUrl: '/icons/live/recommendSection/更多.png'
    }
]

export { LiveHeaderData, RecommendSectionItemData }
