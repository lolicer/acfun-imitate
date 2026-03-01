<script setup lang="ts">
import { type DanmakuItem } from '@/types/Video'
import { computed, onMounted, onUnmounted, Ref, ref, watch } from 'vue'
import { shuffle } from '@/utils/math'

const props = defineProps<{
    danmakuData: Record<number, DanmakuItem[]>
    currentTime: number
    isPlaying: boolean
}>()
// 四舍五入后的当前时间
const roundedCurrentTime = computed(() => {
    return Math.round(props.currentTime)
})

const danmakuOverlayRef = ref<HTMLDivElement | null>(null)
let danmakuOverlayResizeObserver: ResizeObserver | null = null
// 用于 setTimeout 回调中判断组件是否已卸载，防止回调函数执行时组件已卸载
let isMounted = true
// 弹幕显示区域宽度
const danmakuOverlayWidth = ref<number>(0)
// 弹幕偏移量
const itemTransformValue = computed(() => {
    return `translateX(calc(-${danmakuOverlayWidth.value}px - 100%))`
})

// 弹幕动画状态：finished=空闲可用，reserved=已预留待启动，running=滚动中
type AnimationStatus = 'running' | 'finished' | 'reserved'
const DanmakuAnimationStatus: Ref<AnimationStatus[][]> = ref(
    Array.from({ length: 16 }, () =>
        Array<AnimationStatus>(10).fill('finished')
    )
)
// 弹幕内容
const DanmakuContent: string[][] = Array.from({ length: 16 }, () =>
    Array<string>(10).fill('')
)

// 弹幕动画结束或取消
function handleItemAnimationEndOrCancel(trackIdx: number, itemIdx: number) {
    DanmakuAnimationStatus.value[trackIdx][itemIdx] = 'finished'
    DanmakuContent[trackIdx][itemIdx] = ''
}

watch(
    () => roundedCurrentTime.value,
    (currentTime) => {
        // 获取当前秒的弹幕数据
        const danmakuSecondData = props.danmakuData[currentTime]
        // 当前秒没有弹幕数据，返回
        if (danmakuSecondData === undefined) return

        let shuffledDanmakuData: DanmakuItem[] = shuffle(danmakuSecondData)
        // 洗牌弹幕数据并截取前40条，留足空间给其他秒的弹幕
        shuffledDanmakuData.length = Math.min(40, shuffledDanmakuData.length)

        shuffledDanmakuData.forEach((danmakuItem) => {
            const accessSequence = shuffle([
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
            ])
            for (const i of accessSequence) {
                for (
                    let j = 0;
                    j < DanmakuAnimationStatus.value[i].length;
                    j++
                ) {
                    if (DanmakuAnimationStatus.value[i][j] === 'finished') {
                        // 立即预留槽位，防止 forEach 中后续弹幕覆盖同一位置
                        DanmakuAnimationStatus.value[i][j] = 'reserved'
                        // 替换弹幕内容
                        DanmakuContent[i][j] = danmakuItem.content
                        // 随机 0~3 秒内启动动画
                        setTimeout(() => {
                            if (isMounted) {
                                DanmakuAnimationStatus.value[i][j] = 'running'
                            }
                        }, Math.random() * 3000)
                        return
                    }
                }
            }
        })
    }
)

onMounted(() => {
    if (danmakuOverlayRef.value) {
        danmakuOverlayWidth.value = danmakuOverlayRef.value.clientWidth

        danmakuOverlayResizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0]
            danmakuOverlayWidth.value = entry.contentRect.width
        })
        danmakuOverlayResizeObserver.observe(danmakuOverlayRef.value)
    }
})

onUnmounted(() => {
    isMounted = false
    danmakuOverlayResizeObserver?.disconnect()
})
</script>

<template>
    <div ref="danmakuOverlayRef" class="video-danmaku-overlay">
        <div class="overlay-track" v-for="trackIdx in 16" :key="trackIdx - 1">
            <div
                v-for="itemIdx in 10"
                class="danmaku-item"
                :class="{
                    running:
                        DanmakuAnimationStatus[trackIdx - 1][itemIdx - 1] ===
                        'running',
                    paused: !isPlaying,
                    finished:
                        DanmakuAnimationStatus[trackIdx - 1][itemIdx - 1] ===
                        'finished'
                }"
                :key="itemIdx - 1"
                @animationend="
                    handleItemAnimationEndOrCancel(trackIdx - 1, itemIdx - 1)
                "
                @animationcancel="
                    handleItemAnimationEndOrCancel(trackIdx - 1, itemIdx - 1)
                "
            >
                {{ DanmakuContent[trackIdx - 1][itemIdx - 1] }}
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes danmaku-move {
    from {
        transform: translateX(0);
    }
    to {
        transform: v-bind(itemTransformValue);
    }
}
.overlay-track {
    /* box-sizing: border-box;
    border: 1px solid red; */
    height: calc(100% / 16);
    width: 100%;

    container-type: size;

    position: relative;
}
.danmaku-item {
    position: absolute;
    top: 0;
    left: 100%;

    height: 100%;
    width: max-content;
    line-height: 1;
    font-size: 80cqh;
    font-weight: 600;
    color: white;
    z-index: 0;

    will-change: transform;
}
.danmaku-item.running {
    animation: danmaku-move 10s linear;
}
.danmaku-item.paused {
    animation-play-state: paused;
}
.danmaku-item:hover {
    animation-play-state: paused;
    z-index: 100;
}
</style>
