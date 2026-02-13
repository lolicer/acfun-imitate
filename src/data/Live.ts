import { LiveTags } from '@/types/Live.js'
import LiveItem from '@/types/LiveItem.js'

const LiveHeaderData: {
    /** 直播分区 */
    tag: LiveTags
    /** 直播间标题 */
    title: string
    /** 封面地址 */
    coverUrl: string
    /** 测试视频地址 */
    videoUrl: string
}[] = [
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
        tag: '手机游戏',
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

const RecommendSectionItemData: {
    /** 分区名称 */
    tag: LiveTags | '更多 >'
    /** 分区图标地址 */
    imgUrl: string
    /** 下拉菜单 */
    dropdownMenu?: {
        /** 下拉菜单中的分区名称 */
        tag: string
        /** 下拉菜单中的分区图标地址 */
        imgUrl: string
    }[]
}[] = [
    {
        tag: 'PC游戏',
        imgUrl: '/icons/live/recommendSection/游戏_PC游戏.png'
    },
    {
        tag: '手机游戏',
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

const LiveSectionData: {
    /** 一级分区id */
    id: string
    /** 一级分区名称 */
    tag: LiveTags | '全部'
    /** 二级分区 */
    children: {
        /** 二级分区id */
        id: string
        /** 二级分区名称 */
        tag: LiveTags
    }[]
}[] = [
    {
        id: 'all-0',
        tag: '全部',
        children: []
    },
    {
        id: 'a-0',
        tag: '游戏',
        children: [
            {
                id: 'a-1',
                tag: '手机游戏'
            },
            {
                id: 'a-2',
                tag: 'PC游戏'
            },
            {
                id: 'a-3',
                tag: '主机游戏'
            }
        ]
    },
    {
        id: 'b-0',
        tag: '虚拟主播',
        children: [
            {
                id: 'b-1',
                tag: '虚拟Singer'
            },
            {
                id: 'b-2',
                tag: '虚拟Gamer'
            },
            {
                id: 'b-3',
                tag: '虚拟声优'
            },
            {
                id: 'b-4',
                tag: '虚拟日常'
            }
        ]
    },
    {
        id: 'c-0',
        tag: '娱乐',
        children: [
            {
                id: 'c-1',
                tag: '萌宅领域'
            },
            {
                id: 'c-2',
                tag: '视频唱见'
            },
            {
                id: 'c-3',
                tag: '颜值'
            },
            {
                id: 'c-4',
                tag: '舞见'
            },
            {
                id: 'c-5',
                tag: '团播'
            }
        ]
    },
    {
        id: 'd-0',
        tag: '电台',
        children: [
            {
                id: 'd-1',
                tag: '唱见电台'
            },
            {
                id: 'd-2',
                tag: '聊天电台'
            }
        ]
    },
    {
        id: 'e-0',
        tag: '聊天室',
        children: [
            {
                id: 'e-1',
                tag: '交友'
            },
            {
                id: 'e-2',
                tag: '点唱'
            },
            {
                id: 'e-3',
                tag: '兴趣'
            },
            {
                id: 'e-4',
                tag: '一起玩'
            }
        ]
    },
    {
        id: 'f-0',
        tag: '生活',
        children: [
            {
                id: 'f-1',
                tag: '生活杂谈'
            },
            {
                id: 'f-2',
                tag: '情感杂谈'
            },
            {
                id: 'f-3',
                tag: '户外'
            },
            {
                id: 'f-4',
                tag: '萌宠'
            },
            {
                id: 'f-5',
                tag: '美食'
            },
            {
                id: 'f-6',
                tag: '时尚'
            },
            {
                id: 'f-7',
                tag: '手工绘画'
            },
            {
                id: 'f-8',
                tag: '体育运动'
            }
        ]
    },
    {
        id: 'g-0',
        tag: '知识',
        children: [
            {
                id: 'g-1',
                tag: '社会·财经'
            },
            {
                id: 'g-2',
                tag: '教育·学习'
            },
            {
                id: 'g-3',
                tag: '法律·心理'
            },
            {
                id: 'g-4',
                tag: '历史·人文'
            },
            {
                id: 'g-5',
                tag: '科技·科学'
            },
            {
                id: 'g-6',
                tag: '自习室'
            },
            {
                id: 'g-7',
                tag: '时政'
            }
        ]
    }
]

const LiveListDataItem: LiveItem = {
    tag: '时政',
    coverUrl: '/images/live/main/no-cover.png',
    avatarUrl: '/images/live/main/no-avatar.png',
    title: '加入绝地潜兵！成为英雄，成为传奇！',
    to: 'nothing',
    up: '超级地球真理部',
    likeCount: 114514,
    audienceCount: 1024
}
const LiveListData: LiveItem[] = Array.from({ length: 50 }, () => {
    return Math.random() > 0.02
        ? LiveListDataItem
        : {
              ...LiveListDataItem,
              title: '不要相信超级地球！',
              coverUrl: '/images/live/main/no-cover-Cyberstan.png'
          }
})

export {
    LiveHeaderData,
    RecommendSectionItemData,
    LiveSectionData,
    LiveListData
}
