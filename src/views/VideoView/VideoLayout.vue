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
            videoUrl: '/videos/video/video16d9.mp4',
            coinCount: 63,
            collectionCount: 98,
            shareCount: 36,
            introduction: [
                '- 测试标题未经作者授权，禁止转载非常抱歉，本视频可能由于以下原因导致无法正常播放，视频内容不和谐，测试标题测试测试；测试标题未经作者授权，禁止转载非常抱歉，本视频可能由于以下原因导致无法正常播放，视频内容不和谐，测试标题测试测试',
                '- 测试标题未经作者授权，禁止转载非常抱歉，本视频可能由于以下原因导致无法正常播放，视频内容不和谐，测试标题测试测试',
                '- 这是第三行',
                '- 这是第四行',
                '- 这是第五行',
                '- 这是第六行',
                '- 这是第七行',
                '- 这是第八行',
                '- 这是第九行',
                '- 这是第十行',
                '- 这是第十一行',
                '- 这是第十二行'
            ],
            tags: [
                '测试标签1',
                '测试标签2',
                '测试标签3',
                '测试标签4',
                '测试标签5',
                '测试标签6',
                '测试标签7',
                '测试标签8',
                '测试标签9',
                '测试标签10',
                '测试标签11',
                '测试标签12'
            ],
            isCoinClicked: false,
            isCollectionClicked: false
        }"
    />
    <Bottom />
</template>

<style scoped></style>
