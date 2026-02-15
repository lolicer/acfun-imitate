<script setup lang="ts">
import TruncatedText from '@/components/public/TruncatedText.vue'
import { BannerData } from '@/data/Bangumi'
import { ElCarousel, ElCarouselItem } from 'element-plus'
import { ref } from 'vue'

const bannerCarouselRef = ref<InstanceType<typeof ElCarousel> | null>(null)
// Banner是否自动播放，设置的原因是似乎手动setBannerActiveItem会使Banner停止自动播放
const bannerCarouselAutoplay = ref<boolean>(true)
// Banner显示的Item的序号
const bannerActiveItem = ref<number>(0)

/** 手动切换Banner展示的Item
 * @param index 目标Item的序号
 */
function setBannerActiveItem(index: number) {
    bannerCarouselRef.value.setActiveItem(index)
}

/** Banner切换Item时 */
function handleBannerChange(current: number, prev: number) {
    bannerActiveItem.value = current
}

/** 鼠标进入Banner时 */
function handleBannerMouseEnter(index: number) {
    if (!bannerCarouselRef.value) return

    setBannerActiveItem(index)

    // 阻止自动播放
    bannerCarouselAutoplay.value = false
}
/** 鼠标离开Banner */
function handleBannerMouseLeave() {
    if (!bannerCarouselRef.value) return

    // 恢复自动播放
    bannerCarouselAutoplay.value = true
}
</script>

<template>
    <div class="bangumi-content">
        <div class="banner">
            <ElCarousel
                ref="bannerCarouselRef"
                class="banner-carousel"
                height="auto"
                :autoplay="bannerCarouselAutoplay"
                indicator-position="none"
                :motion-blur="true"
                :interval="4000"
                @change="handleBannerChange"
            >
                <ElCarouselItem
                    v-for="(item, index) in BannerData"
                    :key="index"
                    :name="item.title"
                    class="banner-carousel-item"
                >
                    <img :src="item.bannerUrl" :alt="item.title" style="" />
                </ElCarouselItem>
            </ElCarousel>
            <div class="banner-overlay"></div>
            <div class="banner-indicator">
                <div
                    class="banner-indicator-item"
                    v-for="(item, index) in BannerData"
                    :class="{ active: bannerActiveItem === index }"
                    :key="index"
                    @mouseenter="handleBannerMouseEnter(index)"
                    @mouseleave="handleBannerMouseLeave"
                >
                    <img :src="item.coverUrl" :alt="item.title" />
                    <div class="banner-indicator-item-overlay"></div>
                    <TruncatedText
                        class="banner-indicator-item-text"
                        :text="item.title"
                        :max-line="1"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bangumi-content {
    width: 100%;
    margin-top: -52px;
}

.banner {
    width: 100%;
    position: relative;
}
.banner-carousel-item {
    cursor: pointer;
    width: 100%;
    height: auto;
}
.banner-carousel-item > img {
    width: 100%;
    aspect-ratio: 3 / 1;
    object-fit: cover;
    overflow: hidden;
}

.banner-overlay {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30%;
    background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 10%,
        rgba(255, 255, 255, 0.6) 60%,
        transparent 100%
    );
}

.banner-indicator {
    position: absolute;
    bottom: 0px;

    display: flex;
    justify-content: center;
    gap: 10px;
}
.banner-indicator-item {
    cursor: pointer;
    width: 12%;
    aspect-ratio: 16 / 9;

    box-sizing: border-box;
    border: 4px solid white;
    border-radius: 8px;
    box-shadow: var(--shadow-1);
    overflow: hidden;

    transition: transform 0.3s ease;

    position: relative;
}
.banner-indicator-item.active {
    transform: scale(1.1);
}
.banner-indicator-item > img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 8px;
}
.banner-indicator-item-overlay {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 30%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        transparent 100%
    );
}
.banner-indicator-item-text {
    position: absolute;
    bottom: 2px;
    width: 100%;

    box-sizing: border-box;
    padding: 0 6%;

    color: white;
}
</style>
