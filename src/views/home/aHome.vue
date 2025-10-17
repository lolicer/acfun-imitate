<script lang="ts" setup>
import LiveItem from '@/components/public/LiveItem.vue';
import VideoItem from '@/components/public/VideoItem.vue';
import { carouselData, VideoItemData, LiveItemData } from '@/data/Home';
import { ElCarousel, ElCarouselItem } from 'element-plus';
const carousel = carouselData
const videoItem = VideoItemData
const liveItem = LiveItemData
const rightImg = '/images/home/pagelet-live-right.png'
</script>

<template>
    <div class="content">
        <div id="pagelet-top">
            <div id="pagelet-top-carousel-area">
                <div>
                    <ElCarousel class="pagelet-top-carousel">
                        <ElCarouselItem v-for="item in carousel" :key="item.to">
                            <img class="pagelet-top-carousel-img" :src="item.imgUrl" alt="">
                            <div class="pagelet-top-carousel-item-title">
                                {{ item.title }}
                            </div>
                        </ElCarouselItem>
                    </ElCarousel>
                </div>
            </div>
            <div id="pagelet-top-right-featured">
                <VideoItem class="featured-video-item" v-for="item in videoItem" :data="item"/>
            </div>
        </div>
        <div id="pagelet-live">
            <LiveItem class="live-item" v-for="item in liveItem" :data="item"/>
            
            <div id="content-right-img">
                <img :src="rightImg" alt="">
            </div>
        </div>
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
    width:100%;
    height: 100%;
}
.pagelet-top-carousel-item-title {
    position: absolute;
    left: 26px;    /* 距离左侧的距离 */
    bottom: 26px;  /* 距离底部的距离 */
    color: white;  /* 文字颜色 */
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
    grid-template-rows: repeat(2, 1fr);    /* 两行 */
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
</style>