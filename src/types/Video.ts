/** 单个弹幕数据类型 */
interface DanmakuItem {
    /** 弹幕发送时间戳（毫秒） */
    sendTime: number
    /** 弹幕内容 */
    content: string
    /** 弹幕颜色 */
    color: 'white' | 'yellow' | 'blue' | 'red' | 'green' | 'purple' | 'orange' | 'pink' | 'brown' | 'gray' | 'black'
    /**弹幕位置 */
    position: 'top' | 'bottom' |'normal'
}

/**弹幕颜色对应的16进制颜色 */
const DanmakuColor: Record<DanmakuItem['color'], string> = {
    white: '#ffffff',
    yellow: '#ffff00',
    blue: '#0000ff',
    red: '#ff0000',
    green: '#00ff00',
    purple: '#800080',
    orange: '#ffa500',
    pink: '#ffc0cb',
    brown: '#a52a2a',
    gray: '#808080',
    black: '#000000',
}

export { type DanmakuItem, DanmakuColor }