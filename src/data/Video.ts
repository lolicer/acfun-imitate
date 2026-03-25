import { RootComment, DanmakuItem } from '@/types/Video.js'
import { SideVideoItem } from '@/types/HomeSection.js'

const baseSendTime = Date.now()

/** 弹幕数据 */
export const DanmakuData: Record<number, DanmakuItem[]> = {
    0: [
        {
            sendTime: baseSendTime - 300000,
            content: '爆裂吧，现实！',
            color: 'purple',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 180000,
            content: '放逐这个世界！',
            color: 'blue',
            position: 'top'
        }
    ],
    1: [
        {
            sendTime: baseSendTime - 240000,
            content: '粉碎吧，精神！',
            color: 'red',
            position: 'normal'
        }
    ],
    5: [
        {
            sendTime: baseSendTime - 150000,
            content: '邪王真眼是最强的！',
            color: 'purple',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 140000,
            content: '漆黑烈焰使快出来接驾',
            color: 'black',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 130000,
            content: '呜哇！痛痛痛！(被敲头)',
            color: 'white',
            position: 'bottom'
        }
    ],
    10: [
        {
            sendTime: baseSendTime - 120000,
            content: '这段特效我给满分',
            color: 'red',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 60000,
            content: '魔法魔王少女七宫登场！',
            color: 'pink',
            position: 'bottom'
        },
        {
            sendTime: baseSendTime,
            content: '这就是不可视境界线吗？',
            color: 'purple',
            position: 'top'
        }
    ],
    15: [
        {
            sendTime: baseSendTime - 5000,
            content: '索非亚琳·SP·萨图恩七世！',
            color: 'pink',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 8000,
            content: '暗物质防御盾展开！',
            color: 'gray',
            position: 'top'
        }
    ],
    20: [
        {
            sendTime: baseSendTime - 10000,
            content: '六花酱的眼罩要封印不住了',
            color: 'white',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 20000,
            content: '七宫真的太虐了呜呜呜',
            color: 'orange',
            position: 'bottom'
        },
        {
            sendTime: baseSendTime - 30000,
            content: '前方高能：圣调理人出没',
            color: 'gray',
            position: 'normal'
        }
    ],
    25: [
        {
            sendTime: baseSendTime - 32000,
            content: '永恒之枪 Gungnir！',
            color: 'yellow',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 35000,
            content: '那是...汤勺？',
            color: 'white',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 38000,
            content: '居然能跟邪王真眼不相上下',
            color: 'blue',
            position: 'bottom'
        }
    ],
    30: [
        {
            sendTime: baseSendTime - 40000,
            content: '谁有六花同款眼罩链接？',
            color: 'brown',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 50000,
            content: '这打斗经费在燃烧啊！',
            color: 'yellow',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 60000,
            content: '小鸟游：不要盯着我看，会中咒语的',
            color: 'blue',
            position: 'bottom'
        }
    ],
    35: [
        {
            sendTime: baseSendTime - 65000,
            content: '这个战斗音效绝了',
            color: 'green',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 68000,
            content: '勇太：你们冷静一点！',
            color: 'white',
            position: 'top'
        }
    ],
    40: [
        {
            sendTime: baseSendTime - 70000,
            content: '能不能快点变身',
            color: 'red',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 80000,
            content: '其实这全是幻想出来的吧（滑稽）',
            color: 'green',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 90000,
            content: '感谢京阿尼，画质吹爆',
            color: 'purple',
            position: 'normal'
        }
    ],
    45: [
        {
            sendTime: baseSendTime - 95000,
            content: '邪王真眼 vs 魔法魔王少女',
            color: 'yellow',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 98000,
            content: '我的中二魂也燃起来了',
            color: 'red',
            position: 'normal'
        }
    ],
    50: [
        {
            sendTime: baseSendTime - 100000,
            content: '六花：消失吧，这无聊的日常！',
            color: 'pink',
            position: 'bottom'
        },
        {
            sendTime: baseSendTime - 110000,
            content: '这就是恋爱中的少女的战斗吗？',
            color: 'brown',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 120000,
            content: '七宫：哈哈哈哈，这就是宿命啊',
            color: 'yellow',
            position: 'top'
        }
    ],
    55: [
        {
            sendTime: baseSendTime - 125000,
            content: '那个攻击太帅了',
            color: 'yellow',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 128000,
            content: '中二病也是要谈恋爱的！',
            color: 'pink',
            position: 'bottom'
        }
    ],
    60: [
        {
            sendTime: baseSendTime - 130000,
            content: '这种脑内剧场真的百看不厌',
            color: 'blue',
            position: 'bottom'
        },
        {
            sendTime: baseSendTime - 140000,
            content: '七宫的笑容由我来守护',
            color: 'red',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 150000,
            content: '刚才那是德里莫盛夏（凸守）吗？',
            color: 'green',
            position: 'top'
        }
    ],
    65: [
        {
            sendTime: baseSendTime - 155000,
            content: 'Death！Death！Death！',
            color: 'white',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 158000,
            content: '全员中二，只有勇太在尴尬',
            color: 'gray',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 160000,
            content: '雷神战锤使乱入成功！',
            color: 'yellow',
            position: 'normal'
        }
    ],
    70: [
        {
            sendTime: baseSendTime - 170000,
            content: '索非亚琳，这就是最后的挣扎吗！',
            color: 'pink',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 175000,
            content: '此即为：永恒之圣枪！',
            color: 'orange',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 180000,
            content: '经费在燃烧，京阿尼赛高！',
            color: 'red',
            position: 'bottom'
        }
    ],
    75: [
        {
            sendTime: baseSendTime - 185000,
            content: '这就是...魔王少女的觉悟',
            color: 'pink',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 190000,
            content: '居然能接下邪王真眼的奥义',
            color: 'purple',
            position: 'top'
        }
    ],
    80: [
        {
            sendTime: baseSendTime - 195000,
            content: '这场面真是震撼',
            color: 'yellow',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 200000,
            content: '勇太：快住手啊，这里是学校顶楼！',
            color: 'white',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 210000,
            content: '名为“现实”的敌人太强大了',
            color: 'red',
            position: 'bottom'
        }
    ],
    85: [
        {
            sendTime: baseSendTime - 215000,
            content: '即使是中二病，也想要谈恋爱！',
            color: 'pink',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 220000,
            content: '漆黑烈焰使：我会负责到底的',
            color: 'black',
            position: 'bottom'
        }
    ],
    90: [
        {
            sendTime: baseSendTime - 225000,
            content: '我也是第一次看到这种名场面',
            color: 'green',
            position: 'normal'
        },
        {
            sendTime: baseSendTime - 230000,
            content: '越来越感动了，七宫不哭',
            color: 'purple',
            position: 'top'
        },
        {
            sendTime: baseSendTime - 240000,
            content: '结局竟然是这样！泪目',
            color: 'pink',
            position: 'bottom'
        }
    ]
}

/** 评论数据 */
export const CommentData: {
    videoId: string
    comments: RootComment[]
} = {
    videoId: '123456',
    comments: [
        {
            topped: true,
            time: baseSendTime - 86400000,
            userName: '站务小助手',
            text: ['友善讨论，理性发言，祝大家看得开心。'],
            likeCount: 128,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 85200000,
            userName: '中二病晚期',
            text: ['这集打戏看得我鸡皮疙瘩都起来了。'],
            likeCount: 76,
            children: [
                {
                    time: baseSendTime - 85100000,
                    userName: '邪王真眼认证',
                    text: ['同感，分镜和配乐配合太好了。'],
                    likeCount: 22
                },
                {
                    time: baseSendTime - 85060000,
                    userName: '后排举手',
                    text: ['尤其是那段转场，丝滑到离谱。'],
                    likeCount: 12
                },
                {
                    time: baseSendTime - 85020000,
                    userName: '看番不快进',
                    text: ['这一段我回放了三次。'],
                    likeCount: 9
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 84000000,
            userName: '七宫后援会',
            text: ['七宫笑着说话那段我直接破防。'],
            likeCount: 94,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 82800000,
            userName: '勇太今天不社死',
            text: ['全员中二，只有勇太在忙着收场。'],
            likeCount: 63,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 81600000,
            userName: '六花的小眼罩',
            text: ['邪王真眼启动那一刻，宿命感拉满。'],
            likeCount: 88,
            children: [
                {
                    time: baseSendTime - 81550000,
                    userName: '弹幕指挥官',
                    text: ['那个特写镜头真的神。'],
                    likeCount: 19
                },
                {
                    time: baseSendTime - 81520000,
                    userName: '镜头语言课代表',
                    text: ['明暗对比处理得太有感觉了。'],
                    likeCount: 15
                },
                {
                    time: baseSendTime - 81490000,
                    userName: '全糖去冰',
                    text: ['六花那一眼我直接心动。'],
                    likeCount: 13
                },
                {
                    time: baseSendTime - 81460000,
                    userName: '弹幕狙击手',
                    text: ['这一段我回放了五次。'],
                    likeCount: 11
                },
                {
                    time: baseSendTime - 81430000,
                    userName: '恋爱喜剧补完计划',
                    text: ['这段配乐一响起来，氛围感直接封神。'],
                    likeCount: 9
                },
                {
                    time: baseSendTime - 81400000,
                    userName: '逐帧考古人',
                    text: ['细节塞得很满，暂停看还能发现新东西。'],
                    likeCount: 7
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 80400000,
            userName: '泡面番不够看',
            text: ['二刷发现好多细节伏笔，越看越有味道。'],
            likeCount: 57,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 79200000,
            userName: '小鸟游守护者',
            text: ['“消失吧现实”这句台词永远经典。'],
            likeCount: 71,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 78000000,
            userName: '雷神战锤使',
            text: ['凸守这集戏份不多但每次出场都好笑。'],
            likeCount: 44,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 76800000,
            userName: '经费观察员',
            text: ['这段作画放在现在看也完全不过时。'],
            likeCount: 85,
            children: [
                {
                    time: baseSendTime - 76700000,
                    userName: '帧数收集家',
                    text: ['追逐镜头流畅得离谱。'],
                    likeCount: 16
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 75600000,
            userName: '白米饭要加蛋',
            text: ['我喜欢这种把幻想拍得很真实的感觉。'],
            likeCount: 39,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 74400000,
            userName: '夜色里的猫',
            text: ['看到后半段鼻子有点酸，青春真好。'],
            likeCount: 52,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 73200000,
            userName: '重度恋爱脑',
            text: ['勇太和六花这对我能嗑一辈子。'],
            likeCount: 66,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 72000000,
            userName: '不想上班想补番',
            text: ['下班回家看这个，疲惫都没了。'],
            likeCount: 33,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 70800000,
            userName: '旧番考古队',
            text: ['老番的节奏感和台词真是有魅力。'],
            likeCount: 48,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 69600000,
            userName: '可乐要加冰',
            text: ['听到BGM一出来我就知道名场面到了。'],
            likeCount: 61,
            children: [
                {
                    time: baseSendTime - 69500000,
                    userName: '耳机党',
                    text: ['建议戴耳机，层次感非常棒。'],
                    likeCount: 14
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 68400000,
            userName: 'A站十年老粉',
            text: ['这种作品就是要配弹幕一起看才有灵魂。'],
            likeCount: 54,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 67200000,
            userName: '想吃章鱼烧',
            text: ['七宫其实很温柔，只是把情绪藏起来了。'],
            likeCount: 73,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 66000000,
            userName: '斜刘海骑士',
            text: ['我宣布这段战斗可以进年度名场面。'],
            likeCount: 41,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 64800000,
            userName: '社恐观察日记',
            text: ['勇太的尴尬值每秒都在飙升。'],
            likeCount: 36,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 63600000,
            userName: '魔法少女退休版',
            text: ['小时候以为是搞笑番，长大看全是共鸣。'],
            likeCount: 82,
            children: [
                {
                    time: baseSendTime - 63550000,
                    userName: '晚睡冠军',
                    text: ['是的，越长大越懂这份幼稚的珍贵。'],
                    likeCount: 27
                },
                {
                    time: baseSendTime - 63510000,
                    userName: '温柔收纳箱',
                    text: ['小时候觉得尴尬，现在觉得勇敢。'],
                    likeCount: 21
                },
                {
                    time: baseSendTime - 63470000,
                    userName: '雨天有伞',
                    text: ['这句话把我看沉默了。'],
                    likeCount: 10
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 62400000,
            userName: '番剧清单爆炸',
            text: ['第三遍了，还是会在同一个地方笑出声。'],
            likeCount: 28,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 61200000,
            userName: '面包边不吃',
            text: ['六花跑起来那个动作设计特别可爱。'],
            likeCount: 47,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 60000000,
            userName: '海盐味汽水',
            text: ['谁懂，台词中二但情绪全是真的。'],
            likeCount: 69,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 58800000,
            userName: '不吃香菜',
            text: ['作画、配乐、情绪推进，三连击。'],
            likeCount: 50,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 57600000,
            userName: '京都动画路人',
            text: ['京阿尼的角色表情管理一直很强。'],
            likeCount: 64,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 56400000,
            userName: '米饭配榨菜',
            text: ['我愿称这集为“中二美学巅峰”。'],
            likeCount: 58,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 55200000,
            userName: '周末补番计划',
            text: ['顶楼那段风声和镜头切换好绝。'],
            likeCount: 45,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 54000000,
            userName: '仓鼠囤粮中',
            text: ['每次看到七宫都想说一句“辛苦了”。'],
            likeCount: 72,
            children: [
                {
                    time: baseSendTime - 53960000,
                    userName: '纸巾批发商',
                    text: ['她真的把情绪演得很克制。'],
                    likeCount: 18
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 52800000,
            userName: '晚风与猫',
            text: ['名场面前摇一出，我就知道弹幕要爆。'],
            likeCount: 30,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 51600000,
            userName: '请给我续作',
            text: ['如果有重制版我一定第一时间追。'],
            likeCount: 43,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 50400000,
            userName: '猫耳收集者',
            text: ['真的好喜欢这种半现实半幻想的表达。'],
            likeCount: 55,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 49200000,
            userName: '不加糖拿铁',
            text: ['笑点密集，泪点也来得猝不及防。'],
            likeCount: 62,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 48000000,
            userName: '学业压力怪',
            text: ['考试周就靠这部续命了。'],
            likeCount: 26,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 46800000,
            userName: '弹幕礼仪大师',
            text: ['建议新观众先关弹幕看一遍再开弹幕二刷。'],
            likeCount: 34,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 45600000,
            userName: '雪夜烤红薯',
            text: ['这段台词写得太有青春期那味了。'],
            likeCount: 46,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 44400000,
            userName: '零食不离手',
            text: ['勇太真的，嘴上吐槽身体却很诚实。'],
            likeCount: 37,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 43200000,
            userName: '中午吃面',
            text: ['画面色调切得好自然，情绪一下就带进去了。'],
            likeCount: 51,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 42000000,
            userName: '二次元搬砖人',
            text: ['看完又想去把第一季重温一遍。'],
            likeCount: 40,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 40800000,
            userName: '青柠薄荷糖',
            text: ['那句“宿命”喊出来时太燃了。'],
            likeCount: 59,
            children: [
                {
                    time: baseSendTime - 40760000,
                    userName: '嗓子已哑',
                    text: ['我也跟着念了一遍。'],
                    likeCount: 11
                },
                {
                    time: baseSendTime - 40730000,
                    userName: '热血开关',
                    text: ['我当场起立，鸡皮疙瘩全开。'],
                    likeCount: 17
                },
                {
                    time: baseSendTime - 40700000,
                    userName: '音量拉满',
                    text: ['这一句配BGM真的封神。'],
                    likeCount: 14
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 39600000,
            userName: '拒绝熬夜失败',
            text: ['本来只想看十分钟，结果直接看到天亮。'],
            likeCount: 65,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 38400000,
            userName: '一口一个团子',
            text: ['七宫和六花的对手戏张力好强。'],
            likeCount: 67,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 37200000,
            userName: '图书馆常驻',
            text: ['这番告诉我：幼稚有时也是一种勇气。'],
            likeCount: 74,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 36000000,
            userName: '不懂就问君',
            text: ['请问这段在原作小说是第几卷？'],
            likeCount: 23,
            children: [
                {
                    time: baseSendTime - 35950000,
                    userName: '设定补完计划',
                    text: ['改编比较多，建议从头看会更连贯。'],
                    likeCount: 13
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 34800000,
            userName: '手办柜满了',
            text: ['角色小动作很多，演出真的细。'],
            likeCount: 49,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 33600000,
            userName: '今天也要加油',
            text: ['“中二病也要谈恋爱”这句永不过时。'],
            likeCount: 56,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 32400000,
            userName: '半糖乌龙茶',
            text: ['建议配合剧场版一起看，体验更完整。'],
            likeCount: 31,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 31200000,
            userName: '晴天有风',
            text: ['被逗笑的下一秒又想哭，这种反差太绝。'],
            likeCount: 68,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 30000000,
            userName: '鸽子咕咕',
            text: ['我愿称之为青春期情绪可视化教程。'],
            likeCount: 53,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 28800000,
            userName: '夜跑爱好者',
            text: ['看完立刻去跑步，BGM在脑子里循环。'],
            likeCount: 29,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 27600000,
            userName: '猫咪踩键盘',
            text: ['台词虽然夸张，但情感表达一点不假。'],
            likeCount: 60,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 26400000,
            userName: '云端追番党',
            text: ['这条评论区好温柔，和番很配。'],
            likeCount: 38,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 25200000,
            userName: '凉白开',
            text: ['顶楼告白氛围感直接拉满。'],
            likeCount: 77,
            children: [
                {
                    time: baseSendTime - 25160000,
                    userName: '路过的摄影师',
                    text: ['风、光、镜头都在服务情绪。'],
                    likeCount: 20
                },
                {
                    time: baseSendTime - 25130000,
                    userName: '心动预警',
                    text: ['那一瞬间真的像时间静止了。'],
                    likeCount: 16
                },
                {
                    time: baseSendTime - 25100000,
                    userName: '老番保温杯',
                    text: ['顶楼场景永远是恋爱番王炸。'],
                    likeCount: 12
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 24000000,
            userName: '咸鱼翻身失败',
            text: ['看完突然很想给老同学发个消息。'],
            likeCount: 35,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 22800000,
            userName: '晴空便利店',
            text: ['六花那种倔强又脆弱的感觉演得太好了。'],
            likeCount: 70,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 21600000,
            userName: '进度条猎人',
            text: ['每到关键台词我都会暂停回味一下。'],
            likeCount: 24,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 20400000,
            userName: '薄荷味牙膏',
            text: ['这部是我安利给朋友成功率最高的一部。'],
            likeCount: 42,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 19200000,
            userName: '迟到专业户',
            text: ['看似离谱，实则每个人都能代入一点。'],
            likeCount: 58,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 18000000,
            userName: '回忆修补匠',
            text: ['感谢这部番让我想起以前的自己。'],
            likeCount: 83,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 16800000,
            userName: '石榴汽水',
            text: ['战斗是中二外壳，内核其实是告别和成长。'],
            likeCount: 79,
            children: [
                {
                    time: baseSendTime - 16750000,
                    userName: '观后感写手',
                    text: ['这句总结太到位了。'],
                    likeCount: 25
                }
            ]
        },
        {
            topped: false,
            time: baseSendTime - 15600000,
            userName: '周一综合征',
            text: ['每次心情低落都会回来看这一集。'],
            likeCount: 46,
            children: null
        },
        {
            topped: false,
            time: baseSendTime - 14400000,
            userName: '想要请假',
            text: ['谁说中二不能浪漫，这不就是吗。'],
            likeCount: 52,
            children: null
        }
    ]
}

/** 推荐视频数据 */
export const RecommendedVideoData: SideVideoItem[] = [
    {
        imgUrl: '/images/video/recommend/cover-0.webp',
        title: '【中字】这段分镜太神了！十分钟看懂名场面设计',
        to: '/video/10001',
        up: '动画补完计划',
        duration: 625
    },
    {
        imgUrl: '/images/video/recommend/cover-1.webp',
        title: '六花高能片段合集：邪王真眼启动瞬间',
        to: '/video/10002',
        up: '中二研究所',
        duration: 812
    },
    {
        imgUrl: '/images/video/recommend/cover-2.webp',
        title: '七宫人物向混剪：笑着说再见的那一刻',
        to: '/video/10003',
        up: '回忆放映室',
        duration: 418
    },
    {
        imgUrl: '/images/video/recommend/cover-3.webp',
        title: '从作画到配乐，这集为什么能封神？',
        to: '/video/10004',
        up: '番剧拆解员',
        duration: 703
    },
    {
        imgUrl: '/images/video/recommend/cover-4.webp',
        title: '勇太视角解读：中二外壳下的真实成长',
        to: '/video/10005',
        up: '剧情观测站',
        duration: 556
    },
    {
        imgUrl: '/images/video/recommend/cover-5.webp',
        title: '名场面补帧对比：老番也能这么丝滑',
        to: '/video/10006',
        up: '作画观察员',
        duration: 489
    },
    {
        imgUrl: '/images/video/recommend/cover-6.webp',
        title: '中二台词朗读会：谁是最强咏唱王',
        to: '/video/10007',
        up: '弹幕合唱团',
        duration: 732
    },
    {
        imgUrl: '/images/video/recommend/cover-7.webp',
        title: '三分钟看懂勇太与六花关系线',
        to: '/video/10008',
        up: '关系图鉴',
        duration: 214
    },
    {
        imgUrl: '/images/video/recommend/cover-8.webp',
        title: '七宫篇泪点混剪：笑着说喜欢你',
        to: '/video/10009',
        up: '青春放映厅',
        duration: 544
    },
    {
        imgUrl: '/images/video/recommend/cover-9.webp',
        title: '京阿尼镜头语言解析：风与光的叙事',
        to: '/video/10010',
        up: '镜头课代表',
        duration: 556
    }
]
