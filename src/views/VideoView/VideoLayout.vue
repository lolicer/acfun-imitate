<script setup lang="ts">
import TitleBar from '@/components/TitleBar/TitleBar.vue'
import VideoContent from './VideoContent.vue'
import Bottom from '@/components/public/Bottom.vue'
</script>

<template>
    <TitleBar />
    <VideoContent
        :video-data="{
            title: '测试标题未经作者授权，禁止转载非常抱歉，本视频可能由于以下原因导致无法正常播放，视频内容不和谐，测试标题测试测试',
            viewCount: 171223,
            danmakuCount: 324,
            releaseTime: Date.now(),
            videoUrl: '/videos/video/video16d9.mp4'
        }"
    />
    <Bottom />
</template>

<style scoped></style>
