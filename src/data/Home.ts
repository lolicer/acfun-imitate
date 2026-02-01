import LiveItem from '@/types/LiveItem.js'
import VideoItem from '@/types/VideoItem.js'

export const carouselTopData = [
    {
        title: '我的男朋友才不是这种没用的家伙！',
        imgUrl: '/images/home/carousel/top0.png',
        to: 'https://www.bilibili.com/video/BV1KT4uz9EkW'
    },
    {
        title: '和打游戏的男人结婚',
        imgUrl: '/images/home/carousel/top1.png',
        to: 'https://www.bilibili.com/video/BV1t8W5zaEwU'
    },
    {
        title: '💙超💙级💙萌💙萌💙泉💙',
        imgUrl: '/images/home/carousel/top2.png',
        to: 'https://www.bilibili.com/video/BV1bongz1EW5'
    },
    {
        title: '柚子社新作介绍MV',
        imgUrl: '/images/home/carousel/top3.png',
        to: 'https://www.bilibili.com/video/BV1aVTNzeEH2'
    },
    {
        title: '【战双帕弥什】角色故事前瞻 | 无休止的死斗',
        imgUrl: '/images/home/carousel/top4.png',
        to: 'https://www.bilibili.com/video/BV18sHezSERH'
    }
]

export const VideoItemData: VideoItem[] = [
    {
        coverUrl: '/images/home/videoItems/0.png',
        title: '以前在日企实习因为工作效率高每天被领导请吃饭？',
        to: 'https://www.bilibili.com/video/BV1h7xoztEw7',
        up: '_雾岛和声',
        releaseTime: Date.now() - 2 * 1000, // 2min前
        viewCount: 9999,
        bulletScreenCount: 233,
        duration: 441
    },
    {
        coverUrl: '/images/home/videoItems/1.png',
        title: '1400只猿神，依旧菜的没边。',
        to: 'https://www.bilibili.com/video/BV1Yo4JzFEgc',
        up: '菜鸟裔站',
        releaseTime: Date.now() - 14 * 60 * 1000, // 2min前
        viewCount: 12,
        bulletScreenCount: 233,
        duration: 441
    },
    {
        coverUrl: '/images/home/videoItems/2.png',
        title: '“我只是个路过的小萝莉”',
        to: 'https://www.bilibili.com/video/BV1rxpRzYE82',
        up: '月初雪の誓言',
        releaseTime: Date.now() - 10 * 60 * 60 * 1000, // 10h前
        viewCount: 2330000,
        bulletScreenCount: 233,
        duration: 441
    },
    {
        coverUrl: '/images/home/videoItems/3.png',
        title: '【WOTA艺/21オ】现実という名の怪物と戦う者たち',
        to: 'https://www.bilibili.com/video/BV1mu43zFEPQ',
        up: '巫妖王奥祖',
        releaseTime: Date.now() - 3 * 24 * 60 * 60 * 1000, // 3d前,
        viewCount: 23300000000,
        bulletScreenCount: 233,
        duration: 314
    },
    {
        coverUrl: '/images/home/videoItems/4.png',
        title: '月亮在你的眼睛 太阳在我心『写一首歌』【泽音Melody】',
        to: 'https://www.bilibili.com/video/BV1LtWazoEza',
        up: '泽音Melody',
        releaseTime: 1760500893000, // 2025-10-15 12:01:33,
        viewCount: 2330000,
        bulletScreenCount: 233,
        duration: 441
    },
    {
        coverUrl: '/images/home/videoItems/5.png',
        title: '朋友说再玩眠太刀就弄死我',
        to: 'https://www.bilibili.com/video/BV1JZ4zzcEv9',
        up: '勤奋的Tol',
        releaseTime: 1726754749000, // 2024-09-19 22:05:49,
        viewCount: 2330000,
        bulletScreenCount: 233,
        duration: 441
    }
]

export const LiveItemData: LiveItem[] = [
    {
        tag: '虚拟日常',
        coverUrl: '/images/home/liveItems/cover-0.png',
        avatarUrl: '/images/home/liveItems/avatar-0.png',
        title: '嘿~想我了吗！',
        to: 'https://live.bilibili.com/264788',
        up: '有棵里里',
        likeCount: 16000,
        audienceCount: 256
    },
    {
        tag: '虚拟Singer',
        coverUrl: '/images/home/liveItems/cover-1.png',
        avatarUrl: '/images/home/liveItems/avatar-1.png',
        title: '【歌】我很安静陪着你',
        to: 'https://live.bilibili.com/26832833',
        up: '绮葵kiko',
        likeCount: 589,
        audienceCount: 214
    },
    {
        tag: '虚拟Singer',
        coverUrl: '/images/home/liveItems/cover-2.png',
        avatarUrl: '/images/home/liveItems/avatar-2.png',
        title: '以歌为药 聊以为家',
        to: 'https://live.bilibili.com/1777487861',
        up: '漫漫tail',
        likeCount: 1122,
        audienceCount: 102
    },
    {
        tag: '单机游戏',
        coverUrl: '/images/home/liveItems/cover-3.png',
        avatarUrl: '/images/home/liveItems/avatar-3.png',
        title: '继续丝之歌！！！',
        to: 'https://live.bilibili.com/21852',
        up: '老番茄',
        likeCount: 998012,
        audienceCount: 2333
    },
    {
        tag: '虚拟日常',
        coverUrl: '/images/home/liveItems/cover-4.png',
        avatarUrl: '/images/home/liveItems/avatar-4.png',
        title: '汪汪队！当吸血鬼！给我吸吸',
        to: 'https://live.bilibili.com/21652717',
        up: '白神遥Haruka',
        likeCount: 8189,
        audienceCount: 321
    }
]
