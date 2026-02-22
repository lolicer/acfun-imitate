<script setup lang="ts">
import Bottom from '@/components/public/Bottom.vue'
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import LiveContent from './LiveContent.vue'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
    document.title = 'AcFun | 直播'
})
</script>

<template>
    <TitleBar />
    <LiveContent />
    <Bottom />
</template>

<style scoped></style>
