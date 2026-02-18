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
        sloganText: '所谓的魔法，就是想象的世界'
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-2.png',
        coverUrl: '/images/bangumi/banner/cover-2.png',
        title: '魔女之旅',
        sloganText: '身在旅途，编织着我和我们的故事'
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-3.png',
        coverUrl: '/images/bangumi/banner/cover-3.png',
        title: '因为太怕痛就全点防御力了',
        sloganText: '欢迎来到大枫树公会！'
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
        sloganText: '若即若离，触手可及'
    },
    {
        bannerUrl: '/images/bangumi/banner/banner-6.png',
        coverUrl: '/images/bangumi/banner/cover-6.png',
        title: '明日酱的水手服',
        sloganText: '挺起胸膛，面带笑容'
    }
]

const HotBangumiData: {
    title: string
    score: number
    viewCount: number
    introduction: string
    videoUrl: string
    coverUrl: string
    hasFollowed: boolean
    bgColor: string
}[] = [
    {
        title: '孤独摇滚！',
        score: 9.9,
        viewCount: 210000000,
        introduction: `绰号“小孤独”的后藤独，是一个喜爱吉他的孤独少女。经常在家里独自弹奏吉他，但因为一些事情，加入了伊地知虹夏领衔的“纽带乐队”。不敢在他人面前演奏的后藤，能否成为一个出色的乐队成员呢……`,
        videoUrl: '/videos/bangumi/hot/video-0.mp4',
        coverUrl: '/images/bangumi/hot/cover-0.png',
        hasFollowed: true,
        bgColor: 'rgb(255, 182, 193)'
    },
    {
        title: "BanG Dream！It's MyGO!!!!!",
        score: 9.7,
        viewCount: 91344000,
        introduction: `“你能，和我组一辈子乐队吗？”
高一的春末。羽丘女子学园的所有人都加入了乐队，晚入学的爱音为了尽快融入班级，急急忙忙地寻找着乐队成员。这时她得知，「羽丘的不可思议女孩」灯还没有加入乐队，于是爱音不由自主地向她打起了招呼，但是……。这是遍体鳞伤又狼狈不堪的，我们的＜ 音乐 呐喊 ＞。迷失方向也无所谓、在迷茫中前进吧！`,
        videoUrl: '/videos/bangumi/hot/video-1.mp4',
        coverUrl: '/images/bangumi/hot/cover-1.webp',
        hasFollowed: false,
        bgColor: 'rgb(37, 151, 196)'
    },
    {
        title: '天使降临到了我身边！',
        score: 9.8,
        viewCount: 99884000,
        introduction: `怕生的御宅族女大学生宫子，遇到了天使般的小学生！？
在看到妹妹带来的新朋友小花的瞬间，宫子就无法抑制住心跳！！
她为了和小花成为朋友而奋斗，但……。
“想要和超绝可爱的她做朋友”系小品喜剧，开幕♪`,
        videoUrl: '/videos/bangumi/hot/video-2.mp4',
        coverUrl: '/images/bangumi/hot/cover-2.webp',
        hasFollowed: true,
        bgColor: 'rgb(138, 214, 207)'
    },
    {
        title: '莉可丽丝',
        score: 9.2,
        viewCount: 83071000,
        introduction: `安宁的日常——背后却暗藏秘密将犯罪防患于未然的秘密组织——“DA（Direct Attack）”隶属于DA的少女特工——“莉可丽丝”理所当然的日常，都要归功于她们。咖啡厅“莉可莉可” 作为DA支部，员工有号称史上最强莉可丽丝的精英·锦木千束、优秀却暗藏隐情的莉可丽丝·井上泷奈。这里供应的不光是咖啡和甜品，还有照顾孩子、代为购物、教外国人日语等服务，全都不像是“莉可丽丝”会做的事。自由随性又乐天的和平主义者·千束和效率至上的泷奈，反差巨大的两人组成搭档，开始了忙忙碌碌的每一天。`,
        videoUrl: '/videos/bangumi/hot/video-3.mp4',
        coverUrl: '/images/bangumi/hot/cover-3.jpg',
        hasFollowed: true,
        bgColor: 'rgb(230, 200, 157)'
    },
    {
        title: 'One Room',
        score: 9.8,
        viewCount: 30085000,
        introduction: `《One Room》的舞台，发生在“主角（One）的居室（Room）”当中。以第一视角和性格各异的女孩子们相处的故事！`,
        videoUrl: '/videos/bangumi/hot/video-4.mp4',
        coverUrl: '/images/bangumi/hot/cover-4.jpg',
        hasFollowed: false,
        bgColor: 'rgb(141, 110, 99)'
    },
    {
        title: '摇曳露营Δ',
        score: 9.5,
        viewCount: 9890000,
        introduction: `于富士山湖畔，一个人露营的女孩·凛。
与独自骑着自行车来到富士山的女孩·抚子。
两人所见的景色是……。
抚子与凛，由两人的相遇而衍生的户外系girls story开始了。`,
        videoUrl: '/videos/bangumi/hot/video-5.mp4',
        coverUrl: '/images/bangumi/hot/cover-5.jpg',
        hasFollowed: false,
        bgColor: 'rgb(83, 151, 86)'
    }
]

export { FollowingBangumiData, SeasonalBangumiData, BannerData, HotBangumiData }
