/** 单个弹幕数据类型 */
interface DanmakuItem {
    /** 弹幕发送时间戳（毫秒） */
    sendTime: number
    /** 弹幕内容 */
    content: string
    /** 弹幕颜色 */
    color:
        | 'white'
        | 'yellow'
        | 'blue'
        | 'red'
        | 'green'
        | 'purple'
        | 'orange'
        | 'pink'
        | 'brown'
        | 'gray'
        | 'black'
    /**弹幕位置 */
    position: 'top' | 'bottom' | 'normal'
}

export { type DanmakuItem }
