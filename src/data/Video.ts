import { DanmakuItem } from '@/types/Video.js'

const baseSendTime = Date.now()

const generateDanmaku = (count: number): DanmakuItem[] =>
    Array.from({ length: count }, (_, index) => ({
        sendTime: baseSendTime - index * 1000,
        content: `第八秒弹幕第 ${index + 1} 条`,
        color: 'white',
        position: 'normal'
    }))

export const DanmakuData: Record<number, DanmakuItem[]> = {
    3: [
        {
            sendTime: baseSendTime - 5 * 60 * 1000,
            content: '前排打卡~',
            color: 'white',
            position: 'normal'
        }
    ],
    8: generateDanmaku(500),
    15: [
        {
            sendTime: baseSendTime - 3 * 60 * 1000,
            content: '哈哈哈笑死我了',
            color: 'white',
            position: 'normal'
        }
    ],
    25: [
        {
            sendTime: baseSendTime - 2 * 60 * 1000,
            content: '有同款回忆的吗？',
            color: 'white',
            position: 'normal'
        }
    ],
    40: [
        {
            sendTime: baseSendTime - 1 * 60 * 1000,
            content: 'BGM 好听！',
            color: 'white',
            position: 'normal'
        }
    ]
}
