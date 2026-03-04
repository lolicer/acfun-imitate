<script setup lang="ts">
import { type DanmakuItem } from '@/types/Video'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { shuffle } from '@/utils/math'

const props = defineProps<{
    danmakuData: Record<number, DanmakuItem[]>
    currentTime: number
    isPlaying: boolean
}>()
// 截断后的当前时间
const truncatedCurrentTime = computed(() => {
    return Math.trunc(props.currentTime)
})

const danmakuOverlayRef = ref<HTMLDivElement | null>(null)
let danmakuOverlayResizeObserver: ResizeObserver | null = null
// 用于 setTimeout 回调中判断组件是否已卸载，防止回调函数执行时组件已卸载
let isMounted = true
// 弹幕显示区域宽度
const danmakuOverlayWidth = ref<number>(0)
// 普通弹幕从开始到结束的偏移量
const normalTransformValue = computed(() => {
    return `translateX(calc(-${danmakuOverlayWidth.value}px - 100%))`
})
// 居中弹幕的偏移量
const centerTransformValue = computed(() => {
    return `translateX(calc(-${danmakuOverlayWidth.value / 2}px - 50%))`
})

const TRACK_COUNT: number = 16 // 轨道数量
const TRACK_CAPACITY: number = 11 // 轨道容量
// 初始填充的DanmakuItem
const initialDanmakuItem: DanmakuItem = {
    sendTime: 0,
    content: '',
    color: 'white',
    position: 'normal'
}

// 弹幕动画状态：finished=空闲可用，reserved=已预留待启动，running=滚动中
// 每条轨道有${TRACK_CAPACITY}个弹幕容器，最后一条留给顶部或底部弹幕
type AnimationStatus = 'running' | 'finished' | 'reserved'
// 记录每个普通弹幕容器的动画状态和数据
const NormalDanmakuStatus = ref<
    { animation: AnimationStatus; danmakuItem: DanmakuItem }[][]
>(
    Array.from({ length: TRACK_COUNT }, () =>
        Array.from({ length: TRACK_CAPACITY }, () => ({
            animation: 'finished',
            danmakuItem: initialDanmakuItem
        }))
    )
)

// 居中弹幕在对应行的占用状态：occupied=占用，free=空闲
type OccupancyStatus = 'occupied' | 'free'
// 记录每个居中弹幕（包括top和bottom）容器的动画状态和数据
const CenterDanmakuStatus = ref<
    {
        occupancy: OccupancyStatus
        danmakuItem: DanmakuItem
    }[]
>(
    Array.from({ length: TRACK_COUNT }, () => ({
        occupancy: 'free',
        danmakuItem: initialDanmakuItem
    }))
)

// 获取弹幕颜色
function getDanmakuColor(trackIdx: number, itemIdx: number): string {
    const color =
        itemIdx !== TRACK_CAPACITY - 1
            ? NormalDanmakuStatus.value[trackIdx][itemIdx].danmakuItem.color
            : CenterDanmakuStatus.value[trackIdx].danmakuItem.color
    return `var(--color-danmaku-${color})`
}

// 弹幕动画结束或取消
function handleItemAnimationEndOrCancel(trackIdx: number, itemIdx: number) {
    if (itemIdx !== TRACK_CAPACITY - 1) {
        // 普通弹幕
        NormalDanmakuStatus.value[trackIdx][itemIdx].animation = 'finished'
        NormalDanmakuStatus.value[trackIdx][itemIdx].danmakuItem =
            initialDanmakuItem
    } else {
        // 居中弹幕
        CenterDanmakuStatus.value[trackIdx] = {
            occupancy: 'free',
            danmakuItem: initialDanmakuItem
        }
    }
}

// 监听时间变化，分配弹幕数据
watch(
    () => truncatedCurrentTime.value,
    (currentTime) => {
        // 获取当前秒的弹幕数据
        const danmakuSecondData = props.danmakuData[currentTime]
        // 当前秒没有弹幕数据，返回
        if (danmakuSecondData === undefined) return

        let shuffledDanmakuData: DanmakuItem[] = shuffle(danmakuSecondData)
        // 洗牌弹幕数据并截取前40条，留足空间给其他秒的弹幕
        shuffledDanmakuData.length = Math.min(40, shuffledDanmakuData.length)

        shuffledDanmakuData.forEach((danmakuItem) => {
            // 对于普通滚动弹幕，将轨道洗牌后遍历，保证插入的随机性
            if (danmakuItem.position === 'normal') {
                const accessSequence = shuffle(
                    Array.from({ length: TRACK_COUNT }, (_, i) => i)
                )
                for (const i of accessSequence) {
                    for (
                        let j = 0;
                        j < NormalDanmakuStatus.value[i].length;
                        j++
                    ) {
                        if (
                            NormalDanmakuStatus.value[i][j].animation ===
                            'finished'
                        ) {
                            // 立即预留槽位，防止 forEach 中后续弹幕覆盖同一位置
                            NormalDanmakuStatus.value[i][j].animation =
                                'reserved'
                            // 替换弹幕内容、颜色、位置
                            NormalDanmakuStatus.value[i][j].danmakuItem =
                                danmakuItem
                            // 随机 0~3 秒内启动动画
                            setTimeout(() => {
                                if (isMounted) {
                                    NormalDanmakuStatus.value[i][j].animation =
                                        'running'
                                }
                            }, Math.random() * 3000)
                            return
                        }
                    }
                }
            }
            // 对于居中弹幕（top或bottom），遍历每条轨道上是否还有可插入的位置
            // 如果可插入位置，则插入，通过动画结束回调取消该弹幕
            // 如果没有可插入位置，则跳过
            else {
                if (danmakuItem.position === 'top') {
                    // 从上到下遍历CenterDanmakuStatus，若为free，则表示当前轨道没有居中弹幕，插入
                    for (let i = 0; i < CenterDanmakuStatus.value.length; i++) {
                        if (CenterDanmakuStatus.value[i].occupancy === 'free') {
                            CenterDanmakuStatus.value[i] = {
                                occupancy: 'occupied',
                                danmakuItem
                            }
                            return
                        }
                    }
                } else if (danmakuItem.position === 'bottom') {
                    // 从下到上遍历CenterDanmakuStatus，若为free，则表示当前轨道没有居中弹幕,插入
                    for (
                        let i = CenterDanmakuStatus.value.length - 1;
                        i >= 0;
                        i--
                    ) {
                        if (CenterDanmakuStatus.value[i].occupancy === 'free') {
                            CenterDanmakuStatus.value[i] = {
                                occupancy: 'occupied',
                                danmakuItem
                            }
                            return
                        }
                    }
                }
            }
        })
    },
    {
        immediate: true
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
        <div
            class="overlay-track"
            v-for="(_, trackIdx) in TRACK_COUNT"
            :key="trackIdx"
        >
            <div
                v-for="(_, itemIdx) in TRACK_CAPACITY"
                class="danmaku-item"
                :style="{
                    color: getDanmakuColor(trackIdx, itemIdx)
                }"
                :class="{
                    // 普通弹幕容器
                    running:
                        itemIdx !== TRACK_CAPACITY - 1 &&
                        NormalDanmakuStatus[trackIdx][itemIdx].animation ===
                            'running',
                    // 最后一个，居中弹幕容器
                    centering:
                        itemIdx === TRACK_CAPACITY - 1 &&
                        CenterDanmakuStatus[trackIdx].occupancy === 'occupied',
                    paused: !isPlaying,
                    finished:
                        NormalDanmakuStatus[trackIdx][itemIdx].animation ===
                        'finished'
                }"
                :key="itemIdx"
                @animationend="
                    handleItemAnimationEndOrCancel(trackIdx, itemIdx)
                "
                @animationcancel="
                    handleItemAnimationEndOrCancel(trackIdx, itemIdx)
                "
            >
                {{
                    itemIdx !== TRACK_CAPACITY - 1
                        ? NormalDanmakuStatus[trackIdx][itemIdx].danmakuItem
                              .content
                        : CenterDanmakuStatus[trackIdx].danmakuItem.content
                }}
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
        transform: v-bind(normalTransformValue);
    }
}
@keyframes danmaku-center {
    from {
        transform: v-bind(centerTransformValue);
    }
    to {
        transform: v-bind(centerTransformValue);
    }
}
.video-danmaku-overlay {
    overflow: hidden;
}
.overlay-track {
    height: calc(100% / v-bind(TRACK_COUNT));
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
    text-shadow:
        2px 1px 4px rgba(0, 0, 0, 0.15),
        -2px 1px 4px rgba(0, 0, 0, 0.15),
        1px -1px 4px rgba(0, 0, 0, 0.15),
        -1px -1px 4px rgba(0, 0, 0, 0.15);
    z-index: 0;

    will-change: transform;
}
.danmaku-item.running {
    animation: danmaku-move 10s linear;
}
.danmaku-item.centering {
    animation: danmaku-center 10s linear;
}
.danmaku-item.paused {
    animation-play-state: paused;
}
.danmaku-item:hover {
    animation-play-state: paused;
    z-index: 100;
}
</style>
