<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import { RecommendBangumiData } from '@/data/Bangumi'
import { RecommendBangumi } from '@/types/BangumiRecommend'
import { computed, onMounted, onUnmounted, ref } from 'vue'

const contentRef = ref<HTMLElement | null>(null)
const contentWidth = ref<number>(0)
let observer: ResizeObserver | null = null
const itemsCountPerRow = computed<number>(() => {
    const count = Math.floor((contentWidth.value + 20) / 220)
    return count === 0 ? 1 : count
})
const RecommendBangumiRowData = computed(() => {
    const res: RecommendBangumi[][] = []
    for (
        let i = 0;
        i < RecommendBangumiData.length;
        i += itemsCountPerRow.value
    ) {
        res.push(RecommendBangumiData.slice(i, i + itemsCountPerRow.value))
    }
    return res
})

let enterTimer: ReturnType<typeof setTimeout> | null = null
let leaveTimer: {
    timer: ReturnType<typeof setTimeout>
    rowIndex: number
    index: number
} | null = null

// 存储展开的item的index
const ExpandedIndice = ref<{ rowIndex: number; index: number } | null>(null)
// 判断某个item是否应该展开
function shouldExpand(rowIndex: number, index: number): boolean {
    return ExpandedIndice.value
        ? ExpandedIndice.value.rowIndex === rowIndex &&
              ExpandedIndice.value.index === index
        : false
}

const itemContainerRef = ref<HTMLDivElement | null>(null)
const initialWidth = computed(() => {
    return (contentWidth.value + 20) / itemsCountPerRow.value - 20
})
const itemHeight = computed(() => {
    const res = initialWidth.value / (9 / 17)
    console.log('height', res)
    return res
})
function handleContentItemMouseEnter(rowIndex: number, index: number) {
    // 鼠标进入时，清除自身的leaveTimer
    if (
        leaveTimer &&
        leaveTimer.rowIndex === rowIndex &&
        leaveTimer.index === index
    ) {
        clearTimeout(leaveTimer.timer)
        leaveTimer = null
    }

    if (!itemContainerRef.value) return

    // 动画开始到触发handleContentItemTransitionStart函数有一瞬间的时间，可能导致视频显示
    // 在动画开始前就将值设为true可解决此问题
    // 如果进入的item不是已展开的item，就预先将其动画状态设为true
    if (ExpandedIndice.value) {
        if (
            !(
                ExpandedIndice.value.rowIndex === rowIndex &&
                ExpandedIndice.value.index === index
            )
        ) {
            TransitingStausOfContentItems.value[
                rowIndex * itemsCountPerRow.value + index
            ] = true
        }
    }

    // if (!enterTimer) {
    enterTimer = setTimeout(() => {
        ExpandedIndice.value = { rowIndex: rowIndex, index: index }

        // 获取 rowIndex 行的所有 item 元素
        const items: NodeListOf<HTMLDivElement> =
            itemContainerRef.value[rowIndex].querySelectorAll('.content-item')
        const len = items.length

        // index位于行首
        if (index === 0) {
            for (let i = 1; i <= len; i++) {
                items[i].style.transform = `translateX(calc(100% + 20px))`
            }
        }
        // index位于行末
        else if (index === len - 1) {
            for (let i = 0; i <= len - 1; i++) {
                items[i].style.transform =
                    `translateX(calc(-${initialWidth.value}px - 20px))`
            }
        } else {
            for (let i = 0; i < index; i++) {
                items[i].style.transform =
                    `translateX(calc(-${initialWidth.value / 2}px - 10px))`
            }
            items[index].style.transform =
                `translateX(calc(-${initialWidth.value / 2}px - 10px))`
            for (let i = index + 1; i < len; i++) {
                items[i].style.transform =
                    `translateX(calc(${initialWidth.value / 2}px + 10px))`
            }
        }
    }, 700)
    // }
}
function handleContentItemMouseLeave(rowIndex: number, index: number) {
    if (enterTimer) {
        clearTimeout(enterTimer)
        enterTimer = null
    }

    leaveTimer = {
        timer: setTimeout(() => {
            ExpandedIndice.value = null

            const items: NodeListOf<HTMLDivElement> =
                itemContainerRef.value[rowIndex].querySelectorAll(
                    '.content-item'
                )
            const len = items.length
            for (let i = 0; i < len; i++) {
                items[i].style.transform = ''
            }
        }, 700),
        rowIndex: rowIndex,
        index: index
    }
}

// 存储每个item的动画状态
const TransitingStausOfContentItems = ref<boolean[]>(
    Array.from({ length: RecommendBangumiData.length }, () => false)
)
// 已在handleContentItemMouseEnter中实现
// function handleContentItemTransitionStart(
//     e: TransitionEvent,
//     rowIndex: number,
//     index: number
// ) {
//     if (e.propertyName === 'width') {
//         TransitingStausOfContentItems.value[
//             rowIndex * itemsCountPerRow.value + index
//         ] = true
//     }
// }
function handleContentItemTransitionEnd(
    e: TransitionEvent,
    rowIndex: number,
    index: number
) {
    if (e.propertyName === 'width') {
        TransitingStausOfContentItems.value[
            rowIndex * itemsCountPerRow.value + index
        ] = false
    }
}
function handleContentItemTransitionCancel(
    e: TransitionEvent,
    rowIndex: number,
    index: number
) {
    if (e.propertyName === 'width') {
        TransitingStausOfContentItems.value[
            rowIndex * itemsCountPerRow.value + index
        ] = false
    }
}

onMounted(() => {
    // 监听.bangumi-recommend-content宽度
    if (contentRef.value) {
        observer = new ResizeObserver((entries) => {
            for (let entry of entries) {
                contentWidth.value = entry.contentRect.width
            }
        })
        observer.observe(contentRef.value)
    }
})

onUnmounted(() => {
    if (enterTimer) clearTimeout(enterTimer)
    if (leaveTimer) clearTimeout(leaveTimer.timer)
    if (observer) observer.disconnect()
})
</script>

<template>
    <div class="bangumi-recommend-content" ref="contentRef">
        <div class="recommend-title">猜你喜欢</div>
        <div
            class="content-item-container"
            ref="itemContainerRef"
            v-for="(rowData, rowIndex) in RecommendBangumiRowData"
            :key="rowIndex"
        >
            <div
                class="content-item"
                v-for="(item, index) in rowData"
                :class="{
                    expand: shouldExpand(rowIndex, index)
                }"
                :key="index"
                @mouseenter="handleContentItemMouseEnter(rowIndex, index)"
                @mouseleave="handleContentItemMouseLeave(rowIndex, index)"
                @transitionend.self="
                    handleContentItemTransitionEnd($event, rowIndex, index)
                "
                @transitioncancel.self="
                    handleContentItemTransitionCancel($event, rowIndex, index)
                "
            >
                <div class="item-cover">
                    <img
                        v-show="!shouldExpand(rowIndex, index)"
                        :src="item.coverUrl"
                        alt=""
                    />
                    <video
                        v-if="
                            shouldExpand(rowIndex, index) &&
                            !TransitingStausOfContentItems[
                                rowIndex * itemsCountPerRow + index
                            ]
                        "
                        :src="item.previewVideoUrl"
                        loop
                        muted
                        autoplay
                    ></video>
                    <div class="item-cover-overlay">
                        <span
                            class="item-cover-overlay-score"
                            v-show="!shouldExpand(rowIndex, index)"
                            >{{ item.score }}</span
                        >

                        <div
                            class="item-cover-overlay-tags"
                            v-if="
                                shouldExpand(rowIndex, index) &&
                                !TransitingStausOfContentItems[
                                    rowIndex * itemsCountPerRow + index
                                ]
                            "
                        >
                            <div class="item-cover-overlay-tag">
                                {{ item.tags[0] }}
                            </div>
                            <div class="item-cover-overlay-tag">
                                {{ item.tags[1] }}
                            </div>
                            <div class="item-cover-overlay-tag">
                                全{{ item.totalEpisodes }}话
                            </div>
                        </div>
                        <div
                            class="item-cover-overlay-btns"
                            v-if="
                                shouldExpand(rowIndex, index) &&
                                !TransitingStausOfContentItems[
                                    rowIndex * itemsCountPerRow + index
                                ]
                            "
                        >
                            <div
                                class="item-cover-overlay-btn item-cover-overlay-btn-follow"
                            >
                                <img
                                    :src="`/icons/bangumi/${item.hasFollowed ? 'Followed' : 'Follow'}.svg`"
                                />
                            </div>
                            <div
                                class="item-cover-overlay-btn item-cover-overlay-btn-play"
                            >
                                <img src="/icons/bangumi/Play.svg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-text">
                    <TruncatedText
                        class="content-text-title"
                        :text="item.title"
                        :max-line="1"
                    />
                    <TruncatedText
                        class="content-text-slogan"
                        :text="item.sloganText"
                        :max-line="1"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bangumi-recommend-content {
    width: 100%;
    padding-top: 30px;
}

.recommend-title {
    height: 38px;
    font-size: 24px;
    font-weight: 500;
}

.content-item-container {
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

    overflow: hidden;
}
.content-item {
    height: v-bind('`${itemHeight}px`');
    width: 100%;
    border-radius: 16px;

    z-index: 100;
    transition:
        transform 0.3s ease,
        width 0.3s ease;

    display: flex;
    flex-direction: column;
}
.content-item:hover {
    cursor: pointer;
}
.content-item.expand {
    z-index: 200;
    width: calc(200% + 20px);
}
.item-cover {
    width: 100%;
    flex: 14;

    border-radius: 16px;
    background-color: black;
    overflow: hidden;

    position: relative;
}
.item-cover > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item-cover > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-cover-overlay {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.3) 4%,
        transparent 16%
    );
}
.item-cover-overlay-score {
    position: absolute;
    bottom: 4px;
    right: 10px;

    color: white;
    font-size: 28px;
    font-weight: 500;
    font-style: italic;
}
.item-cover-overlay-tags {
    position: absolute;
    bottom: 12px;
    left: 16px;

    display: flex;
    gap: 12px;
}
.item-cover-overlay-tag {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 4px;

    color: white;
    font-size: 14px;
    padding: 1px 4px;
}
.item-cover-overlay-btns {
    position: absolute;
    bottom: 12px;
    right: 16px;

    display: flex;
    gap: 18px;
}
.item-cover-overlay-btn {
    height: 48px;
    aspect-ratio: 1 / 1;

    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
}
.item-cover-overlay-btn > img {
    height: 60%;
    width: 60%;
}
.item-cover-overlay-btn-follow {
    background-color: rgba(255, 255, 255, 0.3);
}

.item-cover-overlay-btn-play {
    background-color: var(--color-acfun);
}
.item-cover-overlay-btn-play > img {
    transform: translateX(6%); /* 维持视觉平衡 */
}

.content-text {
    width: 100%;
    flex: 3;

    box-sizing: border-box;
    padding-top: 10px;
}
.content-text-title {
    cursor: pointer;
}
.content-text-title:hover {
    color: var(--color-acfun);
}
.content-text-slogan {
    cursor: default;
    font-size: 14px;
    color: var(--color-gray-1);
}
</style>
