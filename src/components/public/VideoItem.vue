 <script lang="ts" setup>
import BulletScreenCount from '@/assets/icons/concise/BulletScreenCount.vue';
import Up from '@/assets/icons/concise/Up.vue';
import ViewCount from '@/assets/icons/concise/ViewCount.vue';
import VideoItem from '@/types/VideoItem';
import { formatTimestampToDate, formatSeconds, formatNumber } from '@/utils/time';
import { nextTick, onMounted, ref } from 'vue';
const props = defineProps<{
    data: VideoItem
}>()

const titleRef = ref<HTMLElement>(null)
const tooltip = ref('')
const checkOverflow = () => {
  if (titleRef.value) {
    // 判断文本是否溢出
    if(titleRef.value.scrollHeight > titleRef.value.clientHeight) {
        tooltip.value = props.data.title
    console.log(props.data.title, titleRef.value, titleRef.value.scrollHeight, titleRef.value.clientHeight)
    }
  }
}

onMounted(() => {
    nextTick(() => {
        checkOverflow()
    })
})
</script>

<template>
    <div id="video-item-content">
        <div id="cover">
            <img :src="props.data.coverUrl" alt="">
            <div id="cover-overlay"></div>
            <div id="cover-info">
                <div id="info-viewcount">
                    <ViewCount/>
                    <span>{{ formatNumber(props.data.viewCount) }}</span>
                </div>
                <div id="info-bullet-screen-count">
                    <BulletScreenCount/>
                    <span>{{ formatNumber(props.data.bulletScreenCount) }}</span>
                </div>
                <div id="info-duration">
                    <span>{{ formatSeconds(props.data.duration) }}</span>
                </div>
            </div>
        </div>
        <div id="info">
            <span id="title" ref="titleRef" :title="tooltip">{{ props.data.title }}</span>
            <div id="info-line-2">
                <div id="up">
                    <Up id="up-icon"/>
                    <span id="up-name">{{ props.data.up }}</span>
                </div>
                <span id="release-time">·{{ formatTimestampToDate(props.data.releaseTime) }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
#video-item-content {
    display: inline-block;
    min-width: 256px;
    aspect-ratio: 20 / 17;
    box-sizing: border-box;
}
#cover {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    overflow: hidden;
    border-radius: 4px;
}
#cover:hover {
    cursor: pointer;
}
#cover-overlay {
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
#cover > img {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
}
#cover-info {
    position: absolute;
    bottom: 6px;
    display: flex;
    color: white;
    width: 100%;
    box-sizing: border-box;
    padding: 0 8px;
}
#cover-info > div {
    display: flex;
    align-items: center;
    font-size: 15px;
}
#info-viewcount {
    margin-right: 8px;
}
#info-viewcount > span {
    margin-left: 1px;
}
#info-bullet-screen-count > span {
    margin-left: 1px;
}
#cover-info > div > span {
    transform: translateY(-1px);
}
#info-duration {
    margin-left: auto;
}

#title {
    /* 控制超出两行自动省略 */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    line-height: 20px;
    height: 40px;
    font-size: 15px;
}
#title:hover {
    cursor: pointer;
    color: var(--color-acfun);
}
#info-line-2 {
    display: flex;
    line-height: 16px;
}
#info-line-2:hover {
    cursor: pointer;
    * {
        color: var(--color-acfun);
    }
}
#up {
    display: flex;
    align-items: center;
}
#up-icon {
    color: var(--color-gray-1);
    transform: translateY(2px);
}
#up-name {
    font-size: 13px;
    padding-left: 4px;
    color: var(--color-gray-1);
}
#release-time {
    font-size: 13px;
    color: var(--color-gray-1);
}
</style>