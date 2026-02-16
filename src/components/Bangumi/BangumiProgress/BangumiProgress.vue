<!-- 番剧进度pagelet，展示用户正在追的番剧。 -->
<script setup lang="ts">
import BangumiProgressItem from '@/components/Bangumi/BangumiProgress/BangumiProgressItem.vue'

import { FollowingBangumiData } from '@/data/Bangumi'
import { FollowingBangumi } from '@/types/BangumiProgressItem'
import { computed } from 'vue'

const CarouselBangumiData = computed(() => {
    const res: FollowingBangumi[][] = []
    for (let i = 0; i < FollowingBangumiData.length; i += 6) {
        res.push(FollowingBangumiData.slice(i, i + 6))
    }

    return res
})
</script>

<template>
    <div class="bangumi-progress-content">
        <div class="titlebar">
            <div class="titlebar-title">
                <div class="titlebar-title-icon">
                    <img src="/icons/home/BangumiLike.png" alt="" />
                </div>
                <span class="titlebar-title-text"> 正在追 </span>
            </div>
            <ElButton class="titlebar-btn" color="var(--color-acfun)">
                <img src="/icons/home/HeartCheck.svg" alt="" />
                <span class="titlebar-btn-text"> 追番列表 </span>
            </ElButton>
        </div>
        <div class="content">
            <ElCarousel
                class="content-carousel"
                height="auto"
                indicator-position="none"
                arrow="always"
                :autoplay="false"
            >
                <ElCarouselItem
                    class="content-carousel-item"
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
</template>

<style scoped>
.bangumi-progress-content {
    width: 100%;
    padding-top: 30px;
}
.titlebar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.titlebar-title {
    display: flex;
    align-items: center;
}
.titlebar-title-icon {
    display: inline-block;
    width: 38px;
    height: 38px;
}
.titlebar-title-icon > img {
    width: 100%;
    height: 100%;
}
.titlebar-title-text {
    padding-left: 4px;
    font-size: 24px;
    font-weight: 500;
}
.titlebar-btn {
    color: white;
}
.titlebar-btn-text {
    padding-left: 2px;
}
.content-carousel {
    padding: 10px 0 10px 0;
}
.content-carousel-item {
    display: flex;
    height: auto;
}
</style>
