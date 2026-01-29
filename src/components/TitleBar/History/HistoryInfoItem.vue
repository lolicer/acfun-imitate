<script lang="ts" setup>
import type {
    HistoryInfo,
    VideoHistoryInfo,
    LiveHistoryInfo,
    ArticleHistoryInfo
} from '@/types/HistoryInfo'
import {
    isVideoHistoryInfo,
    isLiveHistoryInfo,
    isArticleHistoryInfo
} from '@/types/HistoryInfo'
import VideoItem from './VideoHistoryItem.vue'
import LiveItem from './LiveHistoryItem.vue'
import ArticleItem from './ArticleHistoryItem.vue'

const props = defineProps<{
    data: HistoryInfo
}>()
</script>

<template>
    <div>
        <VideoItem v-if="isVideoHistoryInfo(props.data)" :data="props.data" />
        <LiveItem v-if="isLiveHistoryInfo(props.data)" :data="props.data" />
        <ArticleItem
            v-if="isArticleHistoryInfo(props.data)"
            :data="props.data"
        />
    </div>
</template>

<style scoped></style>
