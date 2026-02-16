<script setup lang="ts">
import Bottom from '@/components/public/Bottom.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import BangumiContent from './BangumiContent/BangumiContent.vue'
import { ref } from 'vue'

const isBannerVisible = ref<boolean>(true)
</script>

<template>
    <TitleBar
        class="bangumi-titlebar"
        :class="{ transparent: isBannerVisible }"
    />
    <BangumiContent
        @banner-visible="isBannerVisible = true"
        @banner-invisible="isBannerVisible = false"
    />
    <Bottom />
</template>

<style scoped>
.bangumi-titlebar {
    transition: background-color 0.3s ease;
}
.bangumi-titlebar.transparent {
    background-color: transparent;
}
</style>
