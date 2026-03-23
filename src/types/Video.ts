const DANMAKU_COLORS = [
    'white',
    'yellow',
    'blue',
    'red',
    'green',
    'purple',
    'orange',
    'pink',
    'brown',
    'gray',
    'black'
] as const
// 弹幕颜色类型
type DanmakuColor = (typeof DANMAKU_COLORS)[number]
// 将数组导出供外部使用
const DanmakuColors: DanmakuColor[] = [...DANMAKU_COLORS]

const DANMAKU_POSITIONS = ['top', 'bottom', 'normal'] as const
// 弹幕位置类型
type DanmakuPosition = (typeof DANMAKU_POSITIONS)[number]
// 将数组导出供外部使用
const DanmakuPositions: DanmakuPosition[] = [...DANMAKU_POSITIONS]

/** 单个弹幕数据类型 */
interface DanmakuItem {
    /** 弹幕发送时间戳（毫秒） */
    sendTime: number
    /** 弹幕内容 */
    content: string
    /** 弹幕颜色 */
    color: DanmakuColor
    /**弹幕位置 */
    position: DanmakuPosition
}

export type { DanmakuColor, DanmakuPosition, DanmakuItem }
export { DanmakuColors, DanmakuPositions }

interface CommentBase {
    /** 发送时间戳（毫秒） */
    time: number
    /** 发送者 */
    userName: string
    /** 评论内容 */
    text: string[]
    /** 点赞数 */
    likeCount: number
}
interface ChildComment extends CommentBase {}
interface RootComment extends CommentBase {
    /** 是否置顶 */
    topped: boolean
    children: ChildComment[] | null
}

export type { CommentBase, ChildComment, RootComment }
