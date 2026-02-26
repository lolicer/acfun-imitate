<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import { HotBangumiData } from '@/data/Bangumi'
import { formatNumber } from '@/utils/time'
import { computed, ref } from 'vue'
import VideoPlayer from './VideoPlayer.vue'

const activeIndex = ref<number>(0)
// 代表六个item的位置,positions[2]=-1表示第三个item在activeItem的下面
const positions = computed(() => {
    const len = HotBangumiData.length // 假设是 6

    return HotBangumiData.map((_, i) => {
        // 计算相对位置：当前索引 - 激活索引
        let diff = i - activeIndex.value

        // 将 diff 映射到 [-1, 4] 这样的区间内实现循环
        // 如果 diff 是 -2，说明它在激活项左边很远，应该绕到最右边去
        if (diff < -1) diff += len
        if (diff >= 5) diff -= len // 防止越界

        return diff as -1 | 0 | 1 | 2 | 3 | 4
    })
})
// 根据位置确定偏移量
const Offsets: Record<number, string> = {
    [-1]: '-25%',
    0: '0%',
    1: '110%',
    2: 'calc(110% * 2)',
    3: 'calc(110% * 3)',
    4: 'calc(110% * 4)'
}
// 根据位置确定层级
const ZIndices: Record<number, string> = {
    [-1]: '100',
    0: '600',
    1: '500',
    2: '400',
    3: '300',
    4: '200'
}

// 更改activeIndex
function changeActiveIndex(index: number) {
    const len = HotBangumiData.length
    activeIndex.value = ((index % len) + len) % len
}
</script>

<template>
    <div class="bangumi-hot">
        <div class="hot-titlebar">
            <img src="/icons/bangumi/BangumiHot.png" />
            <span>热播推荐</span>
        </div>
        <div class="hot-content">
            <div class="hot-content-video">
                <VideoPlayer
                    :src="HotBangumiData[activeIndex].videoUrl"
                    :poster="HotBangumiData[activeIndex].coverUrl"
                    :autoplay="true"
                    @ended="changeActiveIndex(activeIndex + 1)"
                />
            </div>
            <div class="hot-content-info">
                <img
                    class="hot-content-info-background-image"
                    :src="HotBangumiData[activeIndex].coverUrl"
                />
                <div class="hot-content-info-content">
                    <div class="info-title">
                        <TruncatedText
                            :text="HotBangumiData[activeIndex].title"
                            :max-line="1"
                        />
                    </div>
                    <div class="info-statistics">
                        <span class="info-statistics-score">{{
                            HotBangumiData[activeIndex].score
                        }}</span>
                        <span class="info-statistics-viewcount">
                            {{
                                formatNumber(
                                    HotBangumiData[activeIndex].viewCount
                                )
                            }}人看过
                        </span>
                    </div>
                    <div class="info-introduction">
                        <TruncatedText
                            class="info-introduction-text"
                            :text="HotBangumiData[activeIndex].introduction"
                            :max-line="4"
                            :trim-start="false"
                        />
                    </div>
                    <div class="info-control">
                        <div class="info-control-btn info-control-play">
                            <img src="/icons/bangumi/Play.svg" />
                        </div>
                        <div class="info-control-btn info-control-follow">
                            <img
                                :src="`/icons/bangumi/${HotBangumiData[activeIndex].hasFollowed ? 'Followed' : 'Follow'}.svg`"
                            />
                        </div>
                    </div>
                    <div class="info-indicator">
                        <div class="info-indicator-placeholder"></div>
                        <div
                            class="info-indicator-item"
                            v-for="(item, index) in HotBangumiData"
                            :class="{
                                active: index === activeIndex,
                                covered: positions[index] === -1,
                                'to-right': positions[index] === 4
                            }"
                            :style="{
                                '--item-offset': Offsets[positions[index]],
                                '--item-z-index': ZIndices[positions[index]]
                            }"
                            :key="index"
                            @click="changeActiveIndex(index)"
                        >
                            <img :src="item.coverUrl" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bangumi-hot {
    padding-top: 30px;

    --z-index-video: 200;
    --z-index-info: 100;
}

.hot-titlebar {
    display: flex;
    align-items: center;
    height: 38px;
}
.hot-titlebar > img {
    height: 100%;
    aspect-ratio: 1 / 1;
}
.hot-titlebar > span {
    padding-left: 4px;
    font-size: 24px;
    font-weight: 500;
}

.hot-content {
    margin: 10px 0;
    width: 100%;
    aspect-ratio: 2.8 / 1;
    position: relative;
}

.hot-content-video {
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: var(--z-index-video);

    width: 60%;
    aspect-ratio: 16 / 9;
    border-radius: 26px;
    overflow: hidden;
}
.hot-content-video > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hot-content-info {
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: var(--z-index-info);

    width: 93%;
    height: 93%;
    border-radius: 26px;
    overflow: hidden;

    background-color: v-bind('HotBangumiData[activeIndex].bgColor');
    transition: background-color 0.4s;
}
.hot-content-info-background-image {
    position: absolute;
    opacity: 0.1;
    height: 100%;
    right: -10%;

    /* 设置遮罩 */
    --mask: radial-gradient(
        ellipse,
        rgba(0, 0, 0, 1) 50%,
        rgba(0, 0, 0, 0) 100%
    );
    -webkit-mask-image: var(--mask);
    mask-image: var(--mask);
    -webkit-mask-repeat: no-repeat; /* 防止遮罩平铺导致边缘出现断层 */
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;   /* 确保遮罩完全覆盖容器 */
    mask-size: 100% 100%;
}
.hot-content-info-content {
    position: absolute;
    right: 0px;
    bottom: 6%;

    width: calc(100% * 40 / 93);
    box-sizing: border-box;
    padding-left: 3%;
}
.info-title {
    font-size: 36px;
    font-weight: 600;
    color: white;
}
.info-statistics {
    color: white;
}
.info-statistics-score {
    display: inline-block;
    height: 40px;
    padding-right: 8px;

    font-size: 30px;
    font-style: italic;
    font-weight: 550;
    line-height: 40px;
}
.info-introduction {
    height: 100px;
}
.info-introduction-text {
    white-space: pre-wrap;
    color: white;
}
.info-control {
    display: flex;
    gap: 16px;
    height: 48px;
    padding: 4px 0px 8px;
}
.info-control-btn {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.6);
}
.info-control-btn > img {
    height: 56%;
}
.info-indicator {
    white-space: nowrap;
    position: relative;
}
.info-indicator-placeholder {
    width: 28%;
    aspect-ratio: 1.6 / 1;
    visibility: hidden;
}

.info-indicator-item {
    position: absolute;
    left: 0px;
    bottom: 0px;

    /*noinspection CssUnresolvedCustomProperty*/
    transform: translateX(var(--item-offset));
    transition:
        transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
        opacity 0.4s;

    cursor: pointer;
    display: inline-block;
    width: 28%;
    aspect-ratio: 2 / 1;
    /*noinspection CssUnresolvedCustomProperty*/
    z-index: var(--item-z-index);

    box-sizing: border-box;
    padding: 4px;
    background-color: var(--color-gray-4);
    border-radius: 8px;
    overflow: hidden;
}
.info-indicator-item.active {
    /*noinspection CssUnresolvedCustomProperty*/
    transform: translateX(var(--item-offset)) scale(1.1);
}
.info-indicator-item.covered {
    opacity: 0.6;
    /*noinspection CssUnresolvedCustomProperty*/
    transform: translateX(var(--item-offset)) scale(0.9);
}
.info-indicator-item.to-right {
    /* 确保item从-1向右移动到4的过程中没有动画 */
    transition: none;
}
.info-indicator-item > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}
</style>
