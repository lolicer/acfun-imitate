<script lang="ts" setup>
import HeartCheck from '@/assets/icons/concise/HeartCheck.vue'
import RightArrow from '@/assets/icons/concise/RightArrow.vue'

import { ElButton, ElCarousel, ElCarouselItem } from 'element-plus'

import { CarouselTopData, VideoItemData, LiveItemData } from '@/data/Home'
import { FollowingBangumiData, SeasonalBangumiData } from '@/data/Bangumi'
import { FollowingBangumi } from '@/types/BangumiProgressItem'
import { SectionItemData } from '@/data/HomeSection'

import { computed } from 'vue'

import LiveItem from '@/components/public/LiveItem.vue'
import VideoItem from '@/components/public/VideoItem.vue'
import BangumiItem from '@/components/Home/BangumiItem.vue'
import BangumiProgressItem from '@/components/Home/BangumiProgressItem.vue'
import SectionItem from '@/components/Home/SectionItem/SectionItem.vue'

const rightImg = '/images/home/pagelet-live-right.png'

const CarouselBangumiData = computed(() => {
    const res: FollowingBangumi[][] = []
    for (let i = 0; i < FollowingBangumiData.length; i += 6) {
        res.push(FollowingBangumiData.slice(i, i + 6))
    }

    return res
})
</script>

<template>
    <div class="content">
        <div id="pagelet-top">
            <div id="pagelet-top-carousel-area">
                <div>
                    <ElCarousel class="pagelet-top-carousel">
                        <ElCarouselItem
                            v-for="item in CarouselTopData"
                            :key="item.to"
                        >
                            <img
                                class="pagelet-top-carousel-img"
                                :src="item.imgUrl"
                                alt=""
                            />
                            <div class="pagelet-top-carousel-item-title">
                                {{ item.title }}
                            </div>
                        </ElCarouselItem>
                    </ElCarousel>
                </div>
            </div>
            <div id="pagelet-top-right-featured">
                <VideoItem
                    class="featured-video-item"
                    v-for="item in VideoItemData"
                    :data="item"
                />
            </div>
        </div>

        <div id="pagelet-live">
            <!-- 直播pagelet，展示一些推荐的直播 -->
            <LiveItem
                class="live-item"
                v-for="item in LiveItemData"
                :data="item"
            />

            <div id="content-right-img">
                <img :src="rightImg" alt="" />
            </div>
        </div>

        <div id="pagelet-bangumi-progress">
            <!-- 番剧进度pagelet，展示用户正在追的番剧。 -->
            <div id="pagelet-bangumi-progress-titlebar">
                <div id="pagelet-bangumi-progress-titlebar-title">
                    <div id="pagelet-bangumi-progress-titlebar-title-icon">
                        <img src="/src/assets/icons/BangumiLike.png" alt="" />
                    </div>
                    <span id="pagelet-bangumi-progress-titlebar-title-text">
                        正在追
                    </span>
                </div>
                <ElButton
                    id="pagelet-bangumi-progress-titlebar-btn"
                    color="var(--color-acfun)"
                >
                    <HeartCheck />
                    <span id="pagelet-bangumi-progress-titlebar-btn-text">
                        追番列表
                    </span>
                </ElButton>
            </div>
            <div id="pagelet-bangumi-progress-content">
                <ElCarousel
                    id="pagelet-bangumi-progress-content-carousel"
                    indicator-position="none"
                    arrow="always"
                    :autoplay="false"
                >
                    <ElCarouselItem
                        class="pagelet-bangumi-progress-content-carousel-item"
                        v-for="(group, index) in CarouselBangumiData"
                        :key="index"
                    >
                        <BangumiProgressItem
                            v-for="(item, idx) in group"
                            :data="item"
                            :key="idx"
                        />
                    </ElCarouselItem>
                </ElCarousel>
            </div>
        </div>

        <div id="pagelet-bangumi">
            <!-- 新番时间表 -->
            <div id="pagelet-bangumi-titlebar">
                <div id="pagelet-bangumi-titlebar-title">
                    <div id="pagelet-bangumi-titlebar-title-icon">
                        <img
                            src="/src/assets/icons/BangumiSchedule.png"
                            alt=""
                        />
                    </div>
                    <span id="pagelet-bangumi-titlebar-title-text">
                        新番时间表
                    </span>
                </div>
                <ElButton
                    id="pagelet-bangumi-titlebar-btn"
                    color="var(--color-acfun)"
                >
                    <span id="pagelet-bangumi-titlebar-btn-text">查看全部</span>
                    <RightArrow />
                </ElButton>
            </div>
            <div id="pagelet-bangumi-content">
                <BangumiItem v-for="item in SeasonalBangumiData" :data="item" />
            </div>
        </div>

        <SectionItem
            v-for="(item, index) in SectionItemData"
            :data="item.data"
            :title-icon-url="item.titleIconUrl"
            :section="item.title"
            :key="index"
        />

        <div id="pagelet-bottom">已经到底啦~</div>
    </div>
</template>

<style scoped>
.content {
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
    z-index: 800;
}
#pagelet-top {
    display: flex;
    flex-wrap: nowrap;
}

#pagelet-top-carousel-area {
    position: relative;
    flex: 4;
    min-width: 512px;
    aspect-ratio: 16/9;
    box-sizing: border-box;
    padding: 10px 20px;
}
#pagelet-top-carousel-area > div {
    border-radius: 6px;
    overflow: hidden;
}
.pagelet-top-carousel {
    width: 100%;
    aspect-ratio: 16/9;
}
.pagelet-top-carousel-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
.pagelet-top-carousel-img:hover {
    cursor: pointer;
}
:deep(.el-carousel__container) {
    width: 100%;
    height: 100%;
}
.pagelet-top-carousel-item-title {
    position: absolute;
    left: 26px; /* 距离左侧的距离 */
    bottom: 26px; /* 距离底部的距离 */
    color: white; /* 文字颜色 */
    text-shadow:
        1px 2px 3px rgba(0, 0, 0, 0.8),
        -1px 2px 3px rgba(0, 0, 0, 0.8);
    font-size: 19px;
}
.pagelet-top-carousel-item-title:hover {
    cursor: pointer;
}
:deep(.el-carousel__button) {
    box-shadow:
        1px 1px 2px rgba(0, 0, 0, 0.8),
        -1px 1px 2px rgba(0, 0, 0, 0.8);
}

#pagelet-top-right-featured {
    flex: 6;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 三列 */
    grid-template-rows: repeat(2, 1fr); /* 两行 */
    gap: 20px; /* 可选：添加间距 */
    padding: 10px;
    box-sizing: border-box;
}
.featured-video-item {
    width: 100%;
    height: 100%;
}

#pagelet-live {
    display: grid;
    grid-template-columns: repeat(5, 1fr) 1.8fr;
    gap: 8px;
    width: 100%;
}
#content-right-img {
    text-align: right;
}
#content-right-img > img {
    height: 100%;
    object-fit: cover;
    max-width: calc(100% - 25px);
    border-radius: 4px;
}

#pagelet-bangumi-progress {
    width: 100%;
    padding-top: 30px;
}
#pagelet-bangumi-progress-titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#pagelet-bangumi-progress-titlebar-title {
    display: flex;
    align-items: center;
}
#pagelet-bangumi-progress-titlebar-title-icon {
    display: inline-block;
    width: 38px;
    height: 38px;
}
#pagelet-bangumi-progress-titlebar-title-icon > img {
    width: 100%;
    height: 100%;
}
#pagelet-bangumi-progress-titlebar-title-text {
    padding-left: 4px;
    font-size: 24px;
    font-weight: 500;
}
#pagelet-bangumi-progress-titlebar-btn {
    color: white;
}
#pagelet-bangumi-progress-titlebar-btn-text {
    padding-left: 2px;
}
#pagelet-bangumi-progress-content-carousel {
    padding: 10px 0 10px 0;
    height: 180px;
}
.pagelet-bangumi-progress-content-carousel-item {
    display: flex;
}

#pagelet-bangumi {
    width: 100%;
    padding-top: 30px;
}
#pagelet-bangumi-titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
#pagelet-bangumi-titlebar-title {
    display: flex;
    align-items: center;
}
#pagelet-bangumi-titlebar-title-icon {
    display: inline-block;
    width: 38px;
    height: 38px;
}
#pagelet-bangumi-titlebar-title-icon > img {
    width: 100%;
    height: 100%;
}
#pagelet-bangumi-titlebar-title-text {
    padding-left: 4px;
    font-size: 24px;
    font-weight: 500;
}
#pagelet-bangumi-titlebar-btn {
    color: white;
    display: flex;
    align-items: center;
    padding-right: 10px;
}
#pagelet-bangumi-titlebar-btn-text {
    padding-right: 2px;
}

#pagelet-bangumi-content {
    width: 100%;
    display: flex;
    gap: 16px;
    padding: 10px 0 10px 0;
}

#pagelet-bottom {
    width: 100%;
    padding: 10px 0 10px 0;
    display: flex;
    justify-content: center;
}
</style>
