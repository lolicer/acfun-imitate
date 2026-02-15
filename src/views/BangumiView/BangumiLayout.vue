<script setup lang="ts">
import Bottom from '@/components/public/Bottom.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import BangumiContent from './BangumiContent/BangumiContent.vue'
</script>

<template>
    <TitleBar class="bangumi-titlebar"/>
    <BangumiContent/>
    <Bottom />
</template>

<style scoped>
.bangumi-titlebar {
    background-color: transparent;
}
</style>
