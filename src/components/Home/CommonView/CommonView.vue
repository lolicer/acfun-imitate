<script setup lang="ts">
import VideoItem from '@/types/VideoItem'
import VideoItemComponent from '@/components/public/VideoItem.vue'
import { Carousel } from '@/types/CommonView'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { ref } from 'vue'

const props = defineProps<{
    // 标题图标地址
    titleIconUrl: string
    // 标题名称
    titleName: string
    // 轮播图数据
    carouselData: Carousel[]
    // 视频数据VideoItem[]
    recommendVideosData: VideoItem[]
}>()

const activeCarouselIndex = ref<number>(0)
function updateActiveCarouselItem(current: number) {
    activeCarouselIndex.value = current
}
</script>

<template>
    <div class="common-view-content">
        <div class="common-view-titlebar">
            <img class="titlebar-icon" :src="props.titleIconUrl" />
            <span class="titlebar-text"> {{ props.titleName }} </span>
        </div>
        <div class="common-view-main">
            <div class="common-view-carousel-container">
                <ElCarousel
                    class="common-view-carousel"
                    arrow="always"
                    height="100%"
                    @change="
                        (current, prev) => updateActiveCarouselItem(current)
                    "
                >
                    <ElCarouselItem
                        class="common-view-carousel-item"
                        v-for="item in props.carouselData"
                    >
                        <img :src="item.coverUrl" alt="" />
                    </ElCarouselItem>
                    <div class="common-view-carousel-overlay">
                        <div class="carousel-overlay-text">
                            {{ props.carouselData[activeCarouselIndex].title }}
                        </div>
                    </div>
                </ElCarousel>
            </div>
            <VideoItemComponent
                v-for="item in props.recommendVideosData"
                ref="videoItemsRef"
                :data="item"
            />
        </div>
    </div>
</template>

<style scoped>
.common-view-content {
    padding: 30px 50px 0px;
}

.common-view-titlebar {
    display: flex;
    align-items: center;
}
.titlebar-icon {
    width: 48px;
    height: 48px;
    padding-right: 4px;
}
.titlebar-text {
    line-height: 1;
    font-size: 26px;
    font-weight: 500;
}

.common-view-main {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
}
.common-view-carousel-container {
    grid-column: span 2;
}
.common-view-carousel {
    height: 100%;

    position: relative;
}
.common-view-carousel-overlay {
    position: absolute;
    height: 100%;
    width: 100%;

    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.3) 15%,
        transparent 40%
    );
}
.carousel-overlay-text {
    position: absolute;
    bottom: 12%;
    left: 20px;

    color: white;
    font-size: 24px;
}
.common-view-carousel-item > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
</style>
