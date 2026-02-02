<script lang="ts" setup>
import BulletScreenCount from '@/assets/icons/concise/BulletScreenCount.vue'
import Up from '@/assets/icons/concise/Up.vue'
import ViewCount from '@/assets/icons/concise/ViewCount.vue'
import VideoItem from '@/types/VideoItem'
import {
    formatTimestampToDate,
    formatSeconds,
    formatNumber
} from '@/utils/time'
import TruncatedText from './TruncatedText.vue'
const props = defineProps<{
    data: VideoItem
}>()
</script>

<template>
    <div class="video-item-content">
        <div class="cover">
            <img :src="props.data.coverUrl" alt="" />
            <div class="cover-overlay"></div>
            <div class="cover-info">
                <div class="info-viewcount">
                    <ViewCount />
                    <span>{{ formatNumber(props.data.viewCount) }}</span>
                </div>
                <div class="info-bullet-screen-count">
                    <BulletScreenCount />
                    <span>{{
                        formatNumber(props.data.bulletScreenCount)
                    }}</span>
                </div>
                <div class="info-duration">
                    <span>{{ formatSeconds(props.data.duration) }}</span>
                </div>
            </div>
        </div>
        <div class="info">
            <!-- <span class="title" ref="titleRef" :title="tooltip">{{
                props.data.title
            }}</span> -->
            <TruncatedText
                class="title"
                :text="props.data.title"
                :max-line="2"
            />
            <div class="info-line-2">
                <div class="up">
                    <Up class="up-icon" />
                    <span class="up-name">{{ props.data.up }}</span>
                </div>
                <span class="release-time"
                    >·{{ formatTimestampToDate(props.data.releaseTime) }}</span
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.video-item-content {
    display: inline-block;
    min-width: 256px;
    aspect-ratio: 20 / 17;
    box-sizing: border-box;
}
.cover {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
.cover:hover {
    cursor: pointer;
}
.cover-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        transparent 100%
    );
}
.cover > img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
.cover-info {
    position: absolute;
    bottom: 6px;
    display: flex;
    color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 8px;
}
.cover-info > div {
    display: flex;
    align-items: center;
    font-size: 15px;
}

.info {
    margin-top: 4px;
}
.info-viewcount {
    margin-right: 8px;
}
.info-viewcount > span {
    margin-left: 1px;
}
.info-bullet-screen-count > span {
    margin-left: 1px;
}
.cover-info > div > span {
    transform: translateY(-1px);
}
.info-duration {
    margin-left: auto;
}

.title {
    line-height: 20px;
    height: 40px;
    font-size: 15px;
}
.title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
.info-line-2 {
    display: flex;
    line-height: 16px;
}
.info-line-2:hover {
    cursor: pointer;
    * {
        color: var(--color-acfun);
    }
}
.up {
    display: flex;
    align-items: center;
}
.up-icon {
    color: var(--color-gray-1);
    transform: translateY(1px);
}
.up-name {
    font-size: 13px;
    padding-left: 4px;
    color: var(--color-gray-1);
}
.release-time {
    font-size: 13px;
    color: var(--color-gray-1);
}
</style>
