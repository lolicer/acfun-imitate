<script lang="ts" setup>
import { CarouselData, RecommendVideosData } from '@/data/CommonView.js'
import CommonView from '@/components/Home/CommonView/CommonView.vue'
</script>

<template>
    <CommonView
        :title-icon-url="'/icons/section/lifestyle.png'"
        :title-name="'生活'"
        :carousel-data="CarouselData"
        :recommend-videos-data="RecommendVideosData"
    />
</template>

<style scoped></style>
