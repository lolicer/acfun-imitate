<script lang="ts" setup>
import { ElCarousel, ElCarouselItem } from 'element-plus'

import { CarouselTopData, VideoItemData, LiveItemData } from '@/data/Home'
import { SectionItemData } from '@/data/HomeSection'

import LiveItem from '@/components/public/LiveItem.vue'
import VideoItem from '@/components/public/VideoItem.vue'
import SectionItem from '@/components/Home/SectionItem/SectionItem.vue'
import BangumiProgress from '@/components/Bangumi/BangumiProgress/BangumiProgress.vue'
import BangumiSchedule from '@/components/Bangumi/BangumiSchedule/BangumiSchedule.vue'

const rightImg = '/images/home/pagelet-live-right.png'
</script>

<template>
    <div class="content">
        <div id="pagelet-top">
            <div id="pagelet-top-carousel-area">
                <div>
                    <ElCarousel class="pagelet-top-carousel" height="auto">
                        <ElCarouselItem
                            v-for="item in CarouselTopData"
                            :key="item.to"
                            class="pagelet-top-carousel-item"
                        >
                            <img
                                class="pagelet-top-carousel-item-img"
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

        <BangumiProgress />
        
        <BangumiSchedule />

        <SectionItem
            v-for="(item, index) in SectionItemData"
            :data="item.data"
            :title-icon-url="item.titleIconUrl"
            :section="item.title"
            :key="index"
        />
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
}
.pagelet-top-carousel-item {
    height: auto;
}
.pagelet-top-carousel-item-img {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    overflow: hidden;

    cursor: pointer;
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

/* noinspection CssUnusedSymbol */
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
.live-item {
    aspect-ratio: 20 / 17;
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
</style>
