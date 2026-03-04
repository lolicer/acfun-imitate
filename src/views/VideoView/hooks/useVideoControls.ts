import { onMounted, onUnmounted, ref, Ref } from 'vue'
import { DanmakuColor, DanmakuItem, DanmakuPosition } from '@/types/Video.js'
import { DanmakuData } from '@/data/Video.js'

export function useVideoControls(
    controlsRef: Ref<HTMLElement | null>,
    currentTime: Ref<number>,
    duration: Ref<number>
) {
    // 弹幕数据
    const danmakuData = ref<Record<number, DanmakuItem[]>>(DanmakuData)
    // 弹幕输入框前缀图标大小
    const prefixSize = ref<string>('24px')

    let controlsObserver: ResizeObserver | null = null

    // 待发送的弹幕的字符、位置和颜色
    const pendingDanmaku: Ref<{
        text: string
        position: DanmakuPosition
        color: DanmakuColor
    }> = ref({
        text: '',
        position: 'normal',
        color: 'white'
    })

    function handleDanmakuInputKeyDownEnter(evt?: Event | KeyboardEvent) {
        console.log(pendingDanmaku.value.text)
        if (evt instanceof KeyboardEvent && pendingDanmaku.value.text !== '') {
            const ceiledCurrentTime = Math.floor(
                Math.min(Math.ceil(currentTime.value), duration.value)
            )
            // 如果该秒没有弹幕，先添加一个空数组
            if (!danmakuData.value[ceiledCurrentTime]) {
                danmakuData.value[ceiledCurrentTime] = []
            }
            danmakuData.value[ceiledCurrentTime].push({
                sendTime: ceiledCurrentTime,
                content: pendingDanmaku.value.text,
                color: pendingDanmaku.value.color,
                position: pendingDanmaku.value.position
            })

            pendingDanmaku.value.text = ''
        }
    }

    onMounted(() => {
        if (controlsRef.value) {
            controlsObserver = new ResizeObserver(() => {
                const inputHeight =
                    controlsRef.value!.getBoundingClientRect().height *
                    (80 / 100)
                prefixSize.value = Math.round(inputHeight * (70 / 100)) + 'px'
            })
            controlsObserver.observe(controlsRef.value)
        }
    })
    onUnmounted(() => {
        if (controlsObserver) {
            controlsObserver.disconnect()
            controlsObserver = null
        }
    })

    return {
        danmakuData,
        pendingDanmaku,
        prefixSize,
        handleDanmakuInputKeyDownEnter
    }
}
