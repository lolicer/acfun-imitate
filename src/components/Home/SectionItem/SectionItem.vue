<script setup lang="ts">
import { HomeSection } from '@/types/HomeSection'
import VideoItem from '@/components/public/VideoItem.vue'
import RankingItem from './RankingItem.vue'
const props = defineProps<{
    data: HomeSection
    titleIconUrl: string
    section: string
}>()
</script>

<template>
    <div class="section-content">
        <div class="section-titlebar">
            <div class="section-titlebar-main">
                <div class="section-titlebar-main-icon">
                    <img :src="props.titleIconUrl" alt="" />
                </div>
                <div class="section-titlebar-main-text">
                    {{ props.section }}
                </div>
            </div>

            <div class="section-titlebar-side">
                <div class="section-titlebar-side-text">排行榜</div>
            </div>
        </div>

        <div class="section-content-content">
            <div class="section-main">
                <div class="section-main-content">
                    <VideoItem v-for="item in props.data.main" :data="item" />
                </div>
            </div>
            <div class="section-side">
                <div class="section-side-content">
                    <RankingItem
                        v-for="item in props.data.ranking"
                        :data="item"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.section-content {
    width: 100%;
    padding-top: 30px;
}

.section-titlebar {
    display: flex;
    gap: 10px;
}
.section-titlebar-main {
    flex: 4;

    display: flex;
    align-items: center;
    padding-bottom: 10px;
}
.section-titlebar-main-icon {
    display: inline-block;
}
.section-titlebar-main-icon > img {
    width: 38px;
    height: 38px;
}
.section-titlebar-main-text {
    padding-left: 4px;

    line-height: 1;
    font-size: 24px;
    font-weight: 500;
}
.section-titlebar-side {
    flex: 1;

    display: flex;
    align-items: flex-end;
}
.section-titlebar-side-text {
    line-height: 1;
    font-size: 20px;
    font-weight: 450;

    padding: 0 0 10px 0;
}

.section-content-content {
    display: flex;
    gap: 10px;
}
.section-main {
    flex: 4;
}
.section-main-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4列，宽度相等 */
    grid-template-rows: repeat(2, 1fr); /* 2行，高度相等 */
    gap: 10px;
}

.section-side {
    flex: 1;
}
.section-side-content {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
