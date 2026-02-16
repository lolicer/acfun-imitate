<!-- 新番时间表 -->
<script setup lang="ts">
import { SeasonalBangumiData } from '@/data/Bangumi'
import BangumiScheduleItem from '@/components/Bangumi/BangumiSchedule/BangumiScheduleItem.vue'
</script>

<template>
    <div class="bangumi-schedule">
        <div class="titlebar">
            <div class="titlebar-title">
                <div class="titlebar-title-icon">
                    <img src="/icons/home/BangumiSchedule.png" alt="" />
                </div>
                <span class="titlebar-title-text">
                    新番时间表
                </span>
            </div>
            <ElButton
                class="titlebar-btn"
                color="var(--color-acfun)"
            >
                <span class="titlebar-btn-text">查看全部</span>
                <img src="/icons/home/RightArrow.svg" alt="" />
            </ElButton>
        </div>
        <div class="content">
            <BangumiScheduleItem v-for="item in SeasonalBangumiData" :data="item" />
        </div>
    </div>
</template>

<style scoped>
.bangumi-schedule {
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
    display: flex;
    align-items: center;
    padding-right: 10px;
}
.titlebar-btn-text {
    padding-right: 2px;
}

.content {
    width: 100%;
    display: flex;
    gap: 16px;
    padding: 10px 0 10px 0;
}
</style>
