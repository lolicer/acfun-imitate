<script lang="ts" setup>
import { CarouselData, RecommendVideosData } from '@/data/CommonView.js'
import CommonView from '@/components/Home/CommonView/CommonView.vue'
</script>

<template>
    <CommonView
        :title-icon-url="'/icons/section/danceAndIdol.png'"
        :title-name="'舞蹈·偶像'"
        :carousel-data="CarouselData"
        :recommend-videos-data="RecommendVideosData"
    />
</template>

<style scoped></style>
